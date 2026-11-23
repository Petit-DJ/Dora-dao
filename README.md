# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Live map spreadsheet

The map reads the public `Locations` and `Hotspots` tabs from the configured Google Sheet in `src/components/world-sheet.ts` directly in the visitor's browser. No Google API key, OAuth connection or Lovable Cloud is used. Keep the sheet shared as **Anyone with the link can view** and do not put private contact information in it.

- `Locations`: Continent, Country, CountryCode, State, City, Latitude, Longitude, ChapterName, ChapterStatus, ChapterLink.
- `Hotspots`: City, Country, Category, Name, Role, Link. Match City and Country to Locations; Category can be University, Corporate Partner or Leader.
- Use decimal coordinates and two-letter country codes. One location row per city; one hotspot row per university, company or leader.
- New locations are added to bundled geography; matching locations update their coordinates and chapter. Removing a row removes its sheet-only additions on the next reload, but does not remove a bundled city.
- Search includes chapter and hotspot names without changing the existing city panel. Their details are not displayed in that panel.
- Visitors reload to fetch edits; Google's cache may delay changes. If the sheet is unavailable, the map keeps its bundled geography. Both tabs currently contain only column headings.

## Community gallery spreadsheet

The gallery reads its links live from the participant sheet (one row per submission; a row can hold several links). New rows appear straight away; to add their pictures and captions, refresh the snapshot:

```bash
bun scripts/gallery-snapshot.ts && python3 scripts/gallery-images.py
```

## Deploy on Vercel

Import this repository into Vercel, choose **Other** if the framework is not detected, and use `npm run build` as the build command. The configured Nitro Vercel preset produces Vercel Build Output in `.vercel/output`; leave the output directory override unset. The Google Sheet integration needs no environment variables and works on either host.

Deployment to a real Vercel project has not been tested here. Existing image pointer files (`.asset.json`) still rely on Lovable asset hosting; this spreadsheet change does not make those images portable. Replace them with bundled image files before expecting a fully hosting-independent site.

## Speakers spreadsheet
Speakers come live from https://docs.google.com/spreadsheets/d/1-6u8NnQx-0R47QcuX3l8mqHo-ecKhGjeCMupksh8t5w (keep it "Anyone with the link can view").
Columns (row 1): Name, Designation, Company, Photo, LinkedIn, Twitter, Topic (optional), Featured, Status.
- Status must be `Approved` for a row to appear.
- Featured `Yes` puts the speaker on the homepage (up to 8, featured first).
- Photo: a number 1 to 18 picks a bundled portrait, or paste a Google Drive share link / any https image link.
- While no rows are approved, the site lists the mentors named in the YouTube recordings.

## Knowledge base
`/recordings` lists the DoraDAO YouTube channel recordings from `src/components/recordings-data.ts`. Add new videos there (id, title, seconds, views).
