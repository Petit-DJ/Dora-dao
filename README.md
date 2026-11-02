# Dora World Atlas

A community-led global atlas and ecosystem platform for **DoraDAO**, connecting builders, creators, and organizers worldwide.

---

## 🛠 Technology Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) with [TanStack Router](https://tanstack.com/router)
- **UI Library**: [React 19](https://react.dev)
- **State & Data**: [TanStack Query v5](https://tanstack.com/query)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with CSS Variables design tokens
- **Build & Server**: [Vite 8](https://vite.dev), [Nitro](https://nitro.unjs.io)
- **Mapping & Graphics**: [D3 Geo](https://d3js.org/d3-geo), [react-zoom-pan-pinch](https://github.com/BetterTyped/react-zoom-pan-pinch)
- **Components**: [Radix UI](https://www.radix-ui.com), [Lucide React](https://lucide.dev)
- **Testing**: [Vitest](https://vitest.dev), [Testing Library](https://testing-library.com)
- **Package Manager**: npm

---

## 🏗 Architecture Overview

```
├── public/
│   ├── media/          # Local static media (WebP images, SVG vectors, WebM videos)
│   ├── templates/      # Static document templates
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── assets/         # Typed asset pointer manifests (.asset.json) resolving to /media
│   ├── components/     # Reusable UI components, sections, and feature modules
│   │   ├── ui/         # Radix-based accessible UI primitives
│   │   ├── world-*     # Interactive world map, geography calculations, and city dossiers
│   │   └── ...
│   ├── hooks/          # Custom React hooks (e.g., use-mobile)
│   ├── lib/            # Utilities, translations, and SSR error handlers
│   ├── routes/         # File-based routing via TanStack Router
│   ├── routeTree.gen.ts # Auto-generated route tree
│   ├── router.tsx      # TanStack Router configuration
│   ├── server.ts       # SSR server entry and error normalization wrapper
│   ├── start.ts        # TanStack Start instance with CSRF protection and error middleware
│   └── styles.css      # Core styles, design tokens, and theme definitions
├── docs/               # Integration guides and Apps Script handlers
├── vercel.json         # Vercel deployment cache and routing config
└── vite.config.ts      # Standalone Vite, TanStack Start, and Nitro configuration
```

### Key Integrations
1. **Spreadsheet-Driven Map Data**: Directly queries public Google Sheets exports in the browser for `Locations` and `Hotspots` (defined in `src/components/world-sheet.ts`). Bundled geography acts as an offline fallback without requiring API keys or third-party databases.
2. **Event Submissions**: Direct submission to a configured Google Apps Script endpoint (`docs/events-apps-script.gs`), appending pending events with zero credential exposure.
3. **Local Self-Contained Media**: All image and video pointers resolve to local static files in `/media`, removing dependencies on external CDN infrastructure.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or newer

### Installation

Clone the repository and install dependencies using npm:

```bash
git clone <repository-url>
cd dora-world-atlas
npm install
```

---

## 💻 Local Development

Run the Vite development server:

```bash
npm run dev
```

The application will start at `http://localhost:8080`.

---

## 🧪 Testing and Quality Checks

Run test suites via Vitest:

```bash
npm run test
```

Watch mode for development:

```bash
npm run test:watch
```

Run ESLint for code analysis:

```bash
npm run lint
```

Format code with Prettier:

```bash
npm run format
```

---

## 📦 Production Build

To build the application for production deployment:

```bash
npm run build
```

This compiles:
- Client-side assets via Vite and Tailwind CSS.
- Server function bundle using Nitro with the configured Vercel preset (in `.vercel/output`).

### Previewing Production Build Locally

Preview the production server locally with Nitro:

```bash
npm run preview
```

---

## 🌐 Deployment

### Vercel Deployment

1. Connect this repository to your Vercel project.
2. Ensure framework preset is left to default / **Other**.
3. Build command: `npm run build`
4. Output directory: Leave override unset (Nitro automatically targets `.vercel/output`).
5. Root directory: `./`

### Other Platforms

Nitro supports multiple deployment presets (Cloudflare Pages, Netlify, Node server, etc.). To target a different platform, adjust the preset in `vite.config.ts`:

```ts
nitro({ preset: "node-server" }) // or cloudflare-pages, etc.
```

---

## ⚙️ Environment Variables

The core functionality (map data, events, media) requires no mandatory environment variables for basic operation. Optional variables include:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `VITE_SITE_URL` | Canonical origin URL for OpenGraph metadata and JSON-LD structured data | `https://doradao.lovable.app` |

Create a `.env` file in the root directory to define local overrides if needed.
