import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import {
  ChevronRight,
  Compass,
  Globe,
  List,
  Map as MapIcon,
  MapPin,
  Maximize,
  Minus,
  Plus,
  Search,
  X,
} from "lucide-react";
import { geoGraticule10, geoPath, geoTransform, type GeoPermissibleObjects } from "d3-geo";
import {
  TransformComponent,
  TransformWrapper,
  type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import characters from "@/assets/dora-world-characters.png";
import { ProgramFolders } from "./program-folders";
import geography from "./world-geography.json";
import { CityPartnerPanel } from "./city-partner-panel";
import { searchCities, useWorldData, type CityLocation } from "./world-partners-data";
import { countryFlag, frameLocations, projectLocation, separatePins } from "./world-map-layout";

const continentPoints: Record<string, [number, number]> = {
  "North America": [-100, 33],
  "South America": [-60, -18],
  Europe: [18, 52],
  Africa: [20, 3],
  Asia: [90, 32],
  Oceania: [145, -22],
};
const path = geoPath(
  geoTransform({
    point(lng, lat) {
      const [x, y] = projectLocation(lng, lat);
      this.stream.point(x, y);
    },
  }),
);
const land = path(geography as GeoPermissibleObjects);
const graticule = path(geoGraticule10());
const quickNames = ["Tokyo", "Mumbai", "Munich", "San Francisco", "Nakuru"];

export function WorldCommunity() {
  const { cities, continents, countries } = useWorldData();
  const quickCities = useMemo(
    () =>
      quickNames.flatMap((name) => {
        const city = cities.find((item) => item.name === name);
        return city ? [city] : [];
      }),
    [cities],
  );
  const [continent, setContinent] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [stateId, setStateId] = useState("");
  const [city, setCity] = useState<CityLocation | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityLocation | null>(null);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [listView, setListView] = useState(false);
  const [size, setSize] = useState({ width: 1000, height: 520 });
  const [camera, setCamera] = useState({ scale: 1, positionX: 0, positionY: 0 });
  const stage = useRef<HTMLDivElement>(null);
  const transform = useRef<ReactZoomPanPinchRef>(null);
  const search = useRef<HTMLInputElement>(null);
  const country = countries.find((item) => item.code === countryCode);
  const state = country?.states.find((item) => item.id === stateId);
  const results = useMemo(() => searchCities(query, cities), [query, cities]);
  const openCity = (item: CityLocation) => {
    setCity(item);
    setSelectedCity(item);
    setListView(false);
    setContinent(item.country.continent);
    setCountryCode(item.country.code);
    setStateId(item.state.id);
    setQuery("");
  };
  const navigateRegion = (nextContinent = "", nextCountry = "", nextState = "") => {
    setContinent(nextContinent);
    setCountryCode(nextCountry);
    setStateId(nextState);
    setSelectedCity(null);
    setQuery("");
  };
  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const observer = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (rect) setSize({ width: rect.width, height: rect.height });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [listView]);
  useEffect(() => {
    if (!expanded) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [expanded]);
  const scopedCities = useMemo(
    () =>
      cities.filter(
        (item) =>
          (!continent || item.country.continent === continent) &&
          (!countryCode || item.country.code === countryCode) &&
          (!stateId || item.state.id === stateId),
      ),
    [cities, continent, countryCode, stateId],
  );
  const markers = state
    ? scopedCities.map((item) => ({
        id: item.id,
        name: item.name,
        code: item.country.code,
        lng: item.lng,
        lat: item.lat,
        detail: "Community directories",
        action: () => openCity(item),
      }))
    : country
      ? country.states.map((item) => ({
          id: item.id,
          name: item.name,
          code: country.code,
          lng: item.cities.reduce((sum, c) => sum + c.lng, 0) / item.cities.length,
          lat: item.cities.reduce((sum, c) => sum + c.lat, 0) / item.cities.length,
          detail: `${item.cities.length} cities`,
          action: () => navigateRegion(continent, countryCode, item.id),
        }))
      : continent
        ? countries
            .filter((item) => item.continent === continent)
            .map((item) => ({
              id: item.code,
              name: item.name,
              code: item.code,
              lng:
                item.states.flatMap((s) => s.cities).reduce((sum, c) => sum + c.lng, 0) /
                item.states.flatMap((s) => s.cities).length,
              lat:
                item.states.flatMap((s) => s.cities).reduce((sum, c) => sum + c.lat, 0) /
                item.states.flatMap((s) => s.cities).length,
              detail: `${item.states.length} regions`,
              action: () => navigateRegion(continent, item.code),
            }))
        : continents.map((name) => ({
            id: name,
            name,
            code: "",
            lng: continentPoints[name]?.[0] ?? 0,
            lat: continentPoints[name]?.[1] ?? 0,
            detail: "7 countries",
            action: () => navigateRegion(name),
          }));
  const base = Math.min(size.width / 1000, (size.height - 110) / 460);
  const offsetX = (size.width - 1000 * base) / 2;
  const offsetY = (size.height - 460 * base) / 2 - 15;
  useEffect(() => {
    if (listView) return;
    const points = selectedCity
      ? [projectLocation(selectedCity.lng, selectedCity.lat)]
      : continent
        ? scopedCities.map((item) => projectLocation(item.lng, item.lat))
        : [];
    const frame = frameLocations(points, size.width, size.height, base, offsetX, offsetY);
    const timeout = window.setTimeout(
      () =>
        transform.current?.setTransform(
          frame.x,
          frame.y,
          frame.scale,
          window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 600,
          "easeInOutCubic",
        ),
      40,
    );
    return () => window.clearTimeout(timeout);
  }, [
    continent,
    countryCode,
    stateId,
    selectedCity,
    size.width,
    size.height,
    listView,
    base,
    offsetX,
    offsetY,
    scopedCities,
  ]);
  const positions: [number, number][] = markers.map((item) => {
    const [x, y] = projectLocation(item.lng, item.lat);
    return [
      (x * base + offsetX) * camera.scale + camera.positionX,
      (y * base + offsetY) * camera.scale + camera.positionY,
    ];
  });
  const offsets = separatePins(positions, continent ? 50 : 88, {
    left: continent ? 25 : 60,
    right: size.width - (continent ? 65 : 60),
    top: 75,
    bottom: size.height - 95,
  });
  const breadcrumbs = (
    <nav className="city-map-breadcrumbs" aria-label="Map location">
      <Button variant="ghost" aria-label="World map" onClick={() => navigateRegion()}>
        <Globe size={16} />
        <span>World</span>
      </Button>
      {continent && (
        <>
          <ChevronRight size={12} />
          <Button variant="ghost" onClick={() => navigateRegion(continent)}>
            {continent}
          </Button>
        </>
      )}
      {country && (
        <>
          <ChevronRight size={12} />
          <Button variant="ghost" onClick={() => navigateRegion(continent, country.code)}>
            {countryFlag(country.code)} {country.name}
          </Button>
        </>
      )}
      {state && (
        <>
          <ChevronRight size={12} />
          <Button
            variant="ghost"
            aria-current="location"
            onClick={() => navigateRegion(continent, countryCode, state.id)}
          >
            {state.name}
          </Button>
        </>
      )}
    </nav>
  );
  return (
    <section
      id="world-community"
      aria-labelledby="world-title"
      className="world-section relative z-10 text-community-ink"
    >
      <div className="world-inner">
        <img
          loading="lazy"
          decoding="async"
          src={characters}
          alt="DoraDAO friends and their dog exploring a map together"
          className="world-characters"
        />
        <div className={`world-atlas ${expanded ? "world-atlas-expanded" : ""}`}>
          <div className="world-heading">
            <p>Global footprint</p>
            <h2 id="world-title">
              A community that makes 35+ countries feel like one living room.
            </h2>
            <p className="home-story-world-note">
              From students at MIT to builders in Japan, China, the UK, Australia, Ukraine, and
              beyond, we prove that curiosity speaks every language.
            </p>
          </div>
          <div className="city-explorer-bar">
            <div className="city-map-search">
              <Search size={18} />
              <input
                ref={search}
                aria-label="Search cities, states or countries"
                aria-expanded={Boolean(query.trim())}
                aria-controls={query.trim() ? "city-search-results" : undefined}
                placeholder="Where’s your next connection?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setQuery("");
                  if (e.key === "Enter" && results[0]) {
                    e.preventDefault();
                    e.stopPropagation();
                    const match = results[0];
                    window.setTimeout(() => openCity(match), 0);
                  }
                }}
                autoComplete="off"
              />
              {query && (
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Clear search"
                  onClick={() => {
                    setQuery("");
                    search.current?.focus();
                  }}
                >
                  <X size={16} />
                </Button>
              )}
              <span className="sr-only" role="status">
                {query.trim() ? `${results.length} matching cities` : ""}
              </span>
              {query.trim() && (
                <div className="city-search-results" id="city-search-results">
                  {results.length ? (
                    results.map((item) => (
                      <Button variant="ghost" key={item.id} onClick={() => openCity(item)}>
                        <span className="city-search-flag">{countryFlag(item.country.code)}</span>
                        <span>
                          <strong>{item.name}</strong>
                          <small>
                            {item.state.name}, {item.country.name}
                          </small>
                        </span>
                        <ChevronRight size={14} />
                      </Button>
                    ))
                  ) : (
                    <p>No matching cities. Try another place.</p>
                  )}
                </div>
              )}
            </div>
            <div className="city-quick-jumps">
              <span>Take me to</span>
              {quickCities.map((item) => (
                <Button key={item.id} variant="ghost" onClick={() => openCity(item)}>
                  {countryFlag(item.country.code)} {item.name}
                  <ArrowTiny />
                </Button>
              ))}
            </div>
          </div>
          <div className="city-explorer-controls">
            <div className="city-region-pickers">
              <Select
                value={countryCode || "world"}
                onValueChange={(code) => {
                  const next = countries.find((item) => item.code === code);
                  navigateRegion(next?.continent ?? "", next?.code ?? "");
                }}
              >
                <SelectTrigger aria-label="Choose country">
                  <Globe size={15} />
                  <SelectValue placeholder="All countries" />
                </SelectTrigger>
                <SelectContent className="city-region-options">
                  <SelectItem value="world">All countries</SelectItem>
                  {countries.map((item) => (
                    <SelectItem key={item.code} value={item.code}>
                      {countryFlag(item.code)} {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={stateId || "all"}
                disabled={!country}
                onValueChange={(id) =>
                  navigateRegion(continent, countryCode, id === "all" ? "" : id)
                }
              >
                <SelectTrigger aria-label="Choose state or region">
                  <MapPin size={15} />
                  <SelectValue placeholder="All regions" />
                </SelectTrigger>
                <SelectContent className="city-region-options">
                  <SelectItem value="all">All regions</SelectItem>
                  {country?.states.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="city-view-switch">
              <Button
                variant="ghost"
                aria-label="Map"
                aria-pressed={!listView}
                onClick={() => setListView(false)}
              >
                <MapIcon size={15} />
                <span>Map</span>
              </Button>
              <Button
                variant="ghost"
                aria-label="List"
                aria-pressed={listView}
                onClick={() => setListView(true)}
              >
                <List size={15} />
                <span>List</span>
              </Button>
            </div>
          </div>
          {listView ? (
            <>
              <div className="city-list-breadcrumbs">{breadcrumbs}</div>
              <div className="city-map-list">
                {markers.map((item) => (
                  <Button key={item.id} variant="outline" onClick={item.action}>
                    <span>{item.code ? countryFlag(item.code) : <Globe size={20} />}</span>
                    <span>
                      <strong>{item.name}</strong>
                      <small>{item.detail}</small>
                    </span>
                    <ChevronRight size={16} />
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <div
              className="city-map-stage"
              ref={stage}
              style={{ "--atlas-scale": camera.scale } as CSSProperties}
            >
              <TransformWrapper
                ref={transform}
                minScale={1}
                maxScale={10}
                limitToBounds={false}
                wheel={{ disabled: true }}
                doubleClick={{ disabled: true }}
                panning={{ excluded: ["button"], allowLeftClickPan: true }}
                onTransform={(_, value) => setCamera(value)}
              >
                {({ zoomIn, zoomOut }) => (
                  <>
                    <div className="city-map-tools">
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Zoom in"
                        title="Zoom in"
                        onClick={() => zoomIn()}
                      >
                        <Plus size={18} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Zoom out"
                        title="Zoom out"
                        onClick={() => zoomOut()}
                      >
                        <Minus size={18} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={expanded ? "Close expanded map" : "Expand map"}
                        title={expanded ? "Close expanded map" : "Expand map"}
                        onClick={() => setExpanded(!expanded)}
                      >
                        {expanded ? <X size={17} /> : <Maximize size={17} />}
                      </Button>
                    </div>
                    <TransformComponent
                      wrapperClass="world-map-window"
                      contentClass="world-map-transform"
                    >
                      <svg
                        width={size.width}
                        height={size.height}
                        role="img"
                        aria-label="World map of potential event-host locations"
                      >
                        <defs>
                          <linearGradient id="atlas-land" x1="0" y1="0" x2="0.7" y2="1">
                            <stop offset="0%" className="city-land-light" />
                            <stop offset="100%" className="city-land-shade" />
                          </linearGradient>
                        </defs>
                        <g transform={`translate(${offsetX} ${offsetY}) scale(${base})`}>
                          <path
                            d={graticule ?? ""}
                            className="city-map-graticule"
                            vectorEffect="non-scaling-stroke"
                          />
                          <path
                            d={land ?? ""}
                            className="city-map-land"
                            vectorEffect="non-scaling-stroke"
                          />
                        </g>
                      </svg>
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
              <svg
                className="city-pin-leaders"
                aria-hidden="true"
                width={size.width}
                height={size.height}
              >
                {positions.map((point, i) => {
                  const offset = offsets[i];
                  return offset && Math.hypot(...offset) > 3 ? (
                    <line
                      key={markers[i]?.id}
                      x1={point[0]}
                      y1={point[1]}
                      x2={point[0] + offset[0]}
                      y2={point[1] + offset[1]}
                    />
                  ) : null;
                })}
              </svg>
              {markers.map((item, i) => {
                const point = positions[i],
                  offset = offsets[i];
                if (
                  !point ||
                  !offset ||
                  point[0] < -30 ||
                  point[0] > size.width + 30 ||
                  point[1] < -30 ||
                  point[1] > size.height + 30
                )
                  return null;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="city-map-marker"
                    data-selected={selectedCity?.id === item.id}
                    data-label-edge={
                      point[0] + offset[0] < 110
                        ? "left"
                        : point[0] + offset[0] > size.width - 110
                          ? "right"
                          : "center"
                    }
                    data-label-below={point[1] + offset[1] < 110}
                    data-level={state ? "city" : continent ? "region" : "continent"}
                    style={{
                      left: Math.max(25, Math.min(size.width - 25, point[0] + offset[0])),
                      top: Math.max(40, Math.min(size.height - 85, point[1] + offset[1])),
                    }}
                    aria-label={`${state ? "Open communities in" : "Explore"} ${item.name}`}
                    aria-pressed={selectedCity?.id === item.id}
                    onClick={item.action}
                  >
                    <span className="city-map-pin" />
                    <span className="city-map-label">
                      <strong>
                        {item.code && countryFlag(item.code)} {item.name}
                      </strong>
                      <small>{item.detail}</small>
                    </span>
                  </Button>
                );
              })}
              <div className="city-map-dock">{breadcrumbs}</div>
              <div className="city-map-compass" aria-hidden="true">
                <span>N</span>
                <Compass size={30} />
                <span>DoraDAO atlas</span>
              </div>
            </div>
          )}
          <div className="city-map-caption">
            <span>
              <i /> {countries.length} countries · {cities.length.toLocaleString("en-US")} places to
              connect
            </span>
            <a href="https://www.geonames.org/" target="_blank" rel="noopener noreferrer">
              Geography: GeoNames (CC BY 4.0)
            </a>
          </div>
        </div>
        <ProgramFolders />
      </div>
      <CityPartnerPanel city={city} onClose={() => setCity(null)} />
    </section>
  );
}
function ArrowTiny() {
  return <ChevronRight size={12} aria-hidden="true" />;
}
