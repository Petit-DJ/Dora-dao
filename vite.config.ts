// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

function ssrLeafletStubPlugin(): Plugin {
  const virtualLeaflet = "\0virtual:ssr-leaflet";
  const virtualReactLeaflet = "\0virtual:ssr-react-leaflet";
  const virtualCss = "\0virtual:ssr-leaflet-css";

  return {
    name: "ssr-leaflet-stub",
    enforce: "pre",
    resolveId(id, _importer, options) {
      if (options?.ssr) {
        if (id === "leaflet") return virtualLeaflet;
        if (id === "react-leaflet") return virtualReactLeaflet;
        if (id.startsWith("leaflet/") || id.includes("leaflet.css")) return virtualCss;
      }
      return null;
    },
    load(id) {
      if (id === virtualLeaflet) {
        return `
          export const divIcon = () => ({});
          export const icon = () => ({});
          export default { divIcon, icon };
        `;
      }
      if (id === virtualReactLeaflet) {
        return `
          const noop = () => null;
          export const MapContainer = noop;
          export const TileLayer = noop;
          export const Marker = noop;
          export const Popup = noop;
          export const Tooltip = noop;
          export const useMap = () => ({ zoomIn: () => {}, zoomOut: () => {}, flyTo: () => {} });
          export const useMapEvents = () => null;
        `;
      }
      if (id === virtualCss) {
        return "";
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [ssrLeafletStubPlugin()],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    plugins: [],
  },
});
