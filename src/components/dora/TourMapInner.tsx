import { useMemo, useRef, useState } from "react";
import L, { type Map as LeafletMap } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, Tooltip, useMap, useMapEvents } from "react-leaflet";
import { CalendarDays, Clock3, Expand, MapPin, Minus, Plus, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { comingSoonCountries } from "@/data/coming-soon-countries";
import tourLogoUrl from "@/assets/world-tour-ft-dora-logo.svg?url";
import "leaflet/dist/leaflet.css";
import "@/styles/map.css";

type Category = "Gather" | "Grow" | "Give" | "Move" | "Make";
type TourEvent = {
  id: string;
  name: string;
  city: string;
  region: string;
  country: string;
  countryCode: string;
  coordinates: [number, number];
  category: Category;
  date: string;
  description: string;
};

type Continent = { name: string; coordinates: [number, number]; includes: (coordinates: [number, number]) => boolean };

const initialEvents: TourEvent[] = [
  { id: "lisbon-long-table", name: "Lisbon Long Table", city: "Lisbon", region: "Lisbon District", country: "Portugal", countryCode: "pt", coordinates: [38.7223, -9.1393], category: "Gather", date: "Oct 12, 2026", description: "A phones-away dinner for twelve strangers." },
  { id: "nairobi-adopt-a-patch", name: "Nairobi Adopt-a-Patch", city: "Nairobi", region: "Nairobi County", country: "Kenya", countryCode: "ke", coordinates: [-1.2921, 36.8219], category: "Give", date: "Nov 2026", description: "A local green space cared for together." },
  { id: "nyc-sunrise-mission", name: "NYC Sunrise Mission", city: "New York", region: "New York", country: "USA", countryCode: "us", coordinates: [40.7128, -74.006], category: "Move", date: "Sep 20, 2026", description: "Meet early and watch the city wake up." },
  { id: "london-idea-playground", name: "London Idea Playground", city: "London", region: "England", country: "UK", countryCode: "gb", coordinates: [51.5072, -0.1276], category: "Make", date: "Past event", description: "A room for strange ideas and fast prototypes." },
];

const continents: Continent[] = [
  { name: "North America", coordinates: [43, -102], includes: ([lat, lng]) => lng < -30 && lat >= 12 },
  { name: "South America", coordinates: [-17, -61], includes: ([lat, lng]) => lng < -30 && lat < 12 },
  { name: "Europe", coordinates: [53, 16], includes: ([lat, lng]) => lng >= -30 && lng < 45 && lat >= 35 },
  { name: "Africa", coordinates: [4, 20], includes: ([lat, lng]) => lng >= -30 && lng < 55 && lat < 35 && lat > -38 },
  { name: "Asia", coordinates: [34, 92], includes: ([lat, lng]) => lng >= 45 && lat > -12 },
  { name: "Oceania", coordinates: [-25, 138], includes: ([lat, lng]) => lng >= 55 && lat <= -12 },
];

function exactStopIcon(category: Category) {
  return L.divIcon({
    className: "dora-flag-icon",
    iconSize: [92, 70],
    iconAnchor: [8, 68],
    popupAnchor: [39, -61],
    html: `<div class="dora-flag category-${category.toLowerCase()}" aria-hidden="true"><span class="dora-flag-pole"></span><span class="dora-flag-cloth"><img src="${tourLogoUrl}" alt="" /></span><span class="dora-flag-status is-approved">APR</span><span class="dora-flag-shadow"></span></div>`,
  });
}

function summaryIcon(count?: number, compact = false, status: "approved" | "planned" | "summary" = "planned") {
  const hasCount = count !== undefined;
  const countText = hasCount ? String(count) : "TBC";
  const countLabel = hasCount ? String(count) : "Count to be confirmed";
  const statusText = status === "approved" ? '<span class="dora-summary-status is-approved">APR</span>' : "";
  return L.divIcon({
    className: "dora-summary-icon",
    iconSize: compact ? [56, 45] : [70, 56],
    iconAnchor: compact ? [5, 43] : [6, 54],
    popupAnchor: compact ? [24, -38] : [29, -48],
    html: `<div class="dora-summary-flag${compact ? " is-compact" : ""} status-${status}" aria-hidden="true"><span class="dora-summary-pole"></span><span class="dora-summary-cloth"><img src="${tourLogoUrl}" alt="" /></span>${statusText}<span class="dora-summary-count" title="${countLabel}">${countText}</span></div>`,
  });
}

function PlannedCountryPopup({ country }: { country: { name: string } }) {
  return <Popup maxWidth={310} minWidth={250} closeButton>
    <article className="dora-map-popup dora-soon-popup">
      <div className="dora-popup-topline"><span className="dora-soon-badge"><Clock3 aria-hidden="true" /> Coming soon</span><span>Details TBC</span></div>
      <strong>{country.name}</strong>
      <span className="dora-popup-description">A World Tour stop is planned for this country. Locations and event details will appear after host approval.</span>
      <div className="dora-planned-actions" aria-label={`Ways to join in ${country.name}`}>
        <Button size="sm" className="rounded-full" onClick={() => console.log("Host clicked")}>Host</Button>
        <Button size="sm" variant="outline" className="rounded-full" onClick={() => console.log("Attend clicked")}>Attend</Button>
        <Button size="sm" variant="outline" className="rounded-full" onClick={() => console.log("Sponsor clicked")}>Sponsor</Button>
      </div>
    </article>
  </Popup>;
}

function MapControls({ onFullscreen }: { onFullscreen: () => void }) {
  const map = useMap();
  return <div className="dora-map-controls" aria-label="Map controls">
    <Button type="button" variant="ghost" size="icon" onClick={() => map.zoomIn()} aria-label="Zoom in"><Plus /></Button>
    <Button type="button" variant="ghost" size="icon" onClick={() => map.zoomOut()} aria-label="Zoom out"><Minus /></Button>
    <Button type="button" variant="ghost" size="icon" onClick={onFullscreen} aria-label="Toggle fullscreen map"><Expand /></Button>
  </div>;
}

function ZoomLevel({ onChange }: { onChange: (zoom: number) => void }) {
  useMapEvents({ zoomend: (event) => onChange(event.target.getZoom()) });
  return null;
}

function MapLayers({ zoom }: { zoom: number }) {
  const map = useMap();
  const countryEvents = useMemo(() => {
    const grouped = new Map<string, TourEvent[]>();
    initialEvents.forEach((event) => grouped.set(event.countryCode, [...(grouped.get(event.countryCode) ?? []), event]));
    return grouped;
  }, []);
  const detailedCountryCodes = new Set(countryEvents.keys());

  if (zoom >= 9) {
    return <>
      {initialEvents.map((event) => <Marker key={event.id} position={event.coordinates} icon={exactStopIcon(event.category)}>
        <Tooltip direction="top" offset={[38, -58]}>{event.name}</Tooltip>
        <Popup maxWidth={286} minWidth={230} closeButton>
          <article className="dora-map-popup">
            <div className="dora-popup-topline"><span className={`event-category category-${event.category.toLowerCase()}`}>{event.category}</span><span>Approved stop</span></div>
            <strong>{event.name}</strong>
            <p><MapPin aria-hidden="true" /> {event.city}, {event.country}</p>
            <p><CalendarDays aria-hidden="true" /> {event.date}</p>
            <span className="dora-popup-description">{event.description}</span>
            <div className="dora-popup-actions">
              <span className="dora-ticket-status"><Ticket aria-hidden="true" /> Tickets TBC</span>
              <Button size="sm" className="rounded-full" onClick={() => console.log("Join event clicked")}>Join event</Button>
            </div>
          </article>
        </Popup>
      </Marker>)}
      {comingSoonCountries.filter((country) => !detailedCountryCodes.has(country.code)).map((country) => <Marker key={country.code} position={country.coordinates} icon={summaryIcon(undefined, true)}>
        <Tooltip direction="top" offset={[23, -38]}>{country.name} · planned states TBC</Tooltip>
        <PlannedCountryPopup country={country} />
      </Marker>)}
    </>;
  }

  if (zoom >= 7) {
    return <>
      {Array.from(countryEvents.values()).flatMap((events) => {
        const regions = new Map<string, TourEvent[]>();
        events.forEach((event) => regions.set(event.region, [...(regions.get(event.region) ?? []), event]));
        return Array.from(regions.entries()).map(([region, regionEvents]) => {
          const anchor = regionEvents[0];
          if (!anchor) return null;
          return <Marker key={`${anchor.countryCode}-${region}`} position={anchor.coordinates} icon={summaryIcon(regionEvents.length, false, "approved")} eventHandlers={{ click: () => map.flyTo(anchor.coordinates, 9) }}>
            <Tooltip direction="top" offset={[29, -48]}>{region} · {regionEvents.length} event{regionEvents.length === 1 ? "" : "s"}</Tooltip>
          </Marker>;
        });
      })}
      {comingSoonCountries.filter((country) => !detailedCountryCodes.has(country.code)).map((country) => <Marker key={country.code} position={country.coordinates} icon={summaryIcon(undefined, true)}>
        <Tooltip direction="top" offset={[23, -38]}>{country.name} · planned states TBC</Tooltip>
        <PlannedCountryPopup country={country} />
      </Marker>)}
    </>;
  }

  const plannedCountries = comingSoonCountries.filter((country) => !detailedCountryCodes.has(country.code));

  if (zoom < 4) {
    return <>
      {continents.map((continent) => {
        const targetCountryCodes = new Set([
          ...comingSoonCountries.filter((country) => continent.includes(country.coordinates)).map((country) => country.code),
          ...initialEvents.filter((event) => continent.includes(event.coordinates)).map((event) => event.countryCode),
        ]);
        const countryCount = targetCountryCodes.size;
        if (countryCount === 0) return null;
        return <Marker key={continent.name} position={continent.coordinates} icon={summaryIcon(countryCount, false, "summary")} eventHandlers={{ click: () => map.flyTo(continent.coordinates, 4) }}>
          <Tooltip direction="top" offset={[29, -48]}>{continent.name} · {countryCount} planned countr{countryCount === 1 ? "y" : "ies"}</Tooltip>
        </Marker>;
      })}
    </>;
  }

  return <>
    {plannedCountries.map((country) => <Marker key={country.code} position={country.coordinates} icon={summaryIcon(undefined, true)}>
      <Tooltip direction="top" offset={[23, -38]}>{country.name} · planned states TBC</Tooltip>
      <PlannedCountryPopup country={country} />
    </Marker>)}
    {Array.from(countryEvents.entries()).map(([code, events]) => {
      const anchor = events[0];
      if (!anchor) return null;
      const stateCount = new Set(events.map((event) => event.region)).size;
      return <Marker key={code} position={anchor.coordinates} icon={summaryIcon(stateCount, false, "approved")} eventHandlers={{ click: () => map.flyTo(anchor.coordinates, 7) }}>
        <Tooltip direction="top" offset={[29, -48]}>{anchor.country} · {stateCount} approved state{stateCount === 1 ? "" : "s"}</Tooltip>
      </Marker>;
    })}
  </>;
}

export default function TourMapInner() {
  const mapRef = useRef<LeafletMap | null>(null);
  const mapShellRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(2);

  async function toggleFullscreen() {
    const shell = mapShellRef.current;
    if (!shell) return;
    if (document.fullscreenElement) await document.exitFullscreen();
    else await shell.requestFullscreen();
    window.setTimeout(() => mapRef.current?.invalidateSize(), 120);
  }

  const levelLabel = zoom >= 9 ? "Exact stops" : zoom >= 7 ? "Regional view" : zoom >= 4 ? "Country view" : "Continent view";

  return (
    <div ref={mapShellRef} className="dora-map-shell">
      <MapContainer ref={mapRef} center={[20, 20]} zoom={2} minZoom={2} maxZoom={12} scrollWheelZoom zoomControl={false} worldCopyJump className="dora-leaflet-map">
        <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapControls onFullscreen={toggleFullscreen} />
        <ZoomLevel onChange={setZoom} />
        <MapLayers zoom={zoom} />
      </MapContainer>
      <div className="dora-map-level" aria-live="polite">{levelLabel}</div>
      <div className="dora-map-key" aria-label="Map key"><span><i className="key-approved">APR</i> Approved</span><span><i className="key-soon">TBC</i> Planned, count pending</span></div>
    </div>
  );
}
