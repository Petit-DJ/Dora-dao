import { useEffect, useState, type ComponentType } from "react";

export function TourMapSection() {
  const [MapComponent, setMapComponent] = useState<ComponentType | null>(null);

  useEffect(() => {
    let active = true;
    import("./TourMapInner").then((mod) => {
      if (active) {
        setMapComponent(() => mod.default);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="map" className="where-dora-section scroll-mt-24" aria-labelledby="where-dora-title">
      <div className="home-shell">
        <div className="where-dora-heading">
          <div><h2 id="where-dora-title">Where Dora Is</h2></div>
          <p>Flags show planned countries by continent, planned states by country, then exact approved stops as you zoom.</p>
        </div>

        {MapComponent ? (
          <MapComponent />
        ) : (
          <div className="dora-map-shell">
            <div className="dora-leaflet-map" />
          </div>
        )}

        <p className="dora-map-note">Continent totals show planned countries. Country totals show confirmed states; unapproved state counts remain TBC.</p>
      </div>
    </section>
  );
}
