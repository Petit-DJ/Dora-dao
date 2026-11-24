<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep hero scenery and transparent characters as separate image layers so the characters can bridge the scrolling sections independently of the headline.
- Use shared SiteNavbar and SiteFooter on all pages for consistent compact navigation; keep footer art separate from live links.
- Keep compact navigation in a single-column Radix menu with mutually exclusive expandable program and partnership groups so long destination lists do not overwhelm small screens.
- Separate community scenery and characters; crossfade hero characters as the panel enters to keep text clear.
- Keep the trusted-brands scenery separate from the logo rows; use duplicated, accessibility-hidden row copies for seamless continuous motion and a static scrollable row for reduced motion.
- Feather the community/brands join with unclipped characters; reserve clear space before logos.
- Keep the world section's character border, map art and controls separate, with react-zoom-pan-pinch for map navigation; feather the preceding brands scenery to avoid competing borders. Reference counts are preview-only until real community data is supplied.
- Keep city selection independent of panel visibility; use a persistent react-zoom-pan-pinch camera with resize-aware geographic framing, separate collision-aware screen-space pins and shared breadcrumb resets, and a Radix bottom Sheet on phones to preserve map context and accessible dismissal.
- Dynamically load city timezones locally from coordinates only while a city dossier is open; keep directory links distinct from confirmed partnerships so discovery needs no external requests or invented affiliations.
- Keep map-section program folders and their reference photo collections separate from map controls; use the shared Radix dialog for accessible galleries and identify samples until approved program photos are supplied.
- Keep program descriptions and community highlight values in the browser-safe programs data module, separate from scenery, shared gallery and selection controls; feather the scenery's top edge into the preceding section rather than adding a character border.
- Prebundle Radix dialog in Vite to prevent gallery-triggered rebuilds mixing React instances.
- Separate confession scenery, masonry wall and characters; feather into Programs. Keep editorial data browser-safe and open media in the shared Radix dialog with native video controls.
- Separate podcast scenery, artwork, invitations and carousels; feather both edges. Keep media data browser-safe and identify unavailable recordings/links rather than simulating them.
- Keep mosaic rows independent with hidden duplicates and alternating motion; load CDN speaker portraits from a separate module, preserving hover pause and reduced-motion rows.
- Keep the deferred homepage FAQ media-free; load FaqContent only on /faq to save bandwidth, with shared navigation and footer.
- GWY Island lives only on its Fellowship page under Programs, never on the landing page.

- Compress images, defer visited sections and disable speculative preloads; dismiss the logo curtain on hero readiness and load page-specific fonts only on their page to save bandwidth.
- Keep CSR hero text, transparent character art and text-free scenery in independent layers so the reference composition remains responsive and the following sheet can slide over the pinned scene.
- Keep CSR speaking-card artwork separate from live headings and mail links so the reference layout remains readable and interactive at every width.
- Keep CSR mentoring illustrations separate from live titles and mail links in an adaptive collage grid so every card remains readable and interactive.
- Keep CSR impact copy, transparent character art and scalloped scenery separate; drive the pinned card stack from scroll progress and use a static list for reduced motion so every statement remains readable.
- Keep the CSR partner invitation directly after impact cards with separate scalloped styling, existing Dora art and a shared Button email link so the banner stays lightweight and accessible.

- Render all program detail routes with the shared Fellowship layout and browser-safe program data; share the canonical destinations with both menus so design, proportions and links stay consistent. Preserve separate art, lazy photos and reduced-motion behavior.
- Separate Products opening scenery, headline, cards and illustrations; pin behind the rising sheet, stacking statically on narrow screens and for reduced motion to keep products readable.
- Keep the digital suite in an isolated selectable console; mount only the selected external app when visited, require interaction activation to prevent scroll capture, and use explicit loading on phones or data-saving connections.

- Reuse the CSR mentoring card anatomy and palette for Products community offerings, with scoped layout overrides and separate live copy and illustration layers, to keep the collage consistent without changing partnership layouts.
- Share ImpactCardStack across CSR and Products for consistent motion; scope Partnership surface tokens to `.csr-page` to avoid changing Products or footer themes.
- Isolate Sponsor offerings and format data before Next step; use CDN media and attributed static social posts to avoid third-party embed overhead.

- Lazily merge base and landing-story language dictionaries in the root provider; translate text nodes and accessible attributes without replacing React elements or sending visitor content externally.

- Share illustrated PartnershipCards between landing partner destinations and all Partnership cross-links; keep copy and lazy transparent artwork independent so the card pattern stays consistent.

- Fetch public Locations and Hotspots CSV exports directly in the browser and merge with bundled geography; this keeps map updates independent of hosting credentials and preserves the existing UI and offline fallback.
- Use Nitro's Netlify preset for external builds; managed builds retain their platform target so hosting changes need no sheet credentials.
- Image pointer files reference compressed WebP copies in public/media, so images ship with the build and work on any host (Vercel included) without Lovable CDN.
- Events read from the workbook's Events tab (public CSV); submissions go to a Google Apps Script web app (docs/events-apps-script.gs) that appends Status=Pending, keeping hosting credential-free.
- Gallery reads participant links live from its own public sheet (headerless, one row per submission) and enriches them from a bundled snapshot (src/components/gallery-previews.json + public/media/gallery), refreshed with scripts/gallery-snapshot.ts then scripts/gallery-images.py; browsers can't unfurl LinkedIn/X/Instagram, so new rows show as link cards until the next snapshot.
- Speakers read live from their own public sheet (Status = Approved, Featured = Yes for the homepage) and fall back to guests named in recording titles; the knowledge base lists channel recordings from browser-safe recordings-data.ts, so both need no hosting credentials.
- Load deferred homepage sections through lazyRetry and let the root error screen call reloadForStaleChunk, so tabs left open across a redeploy or preview restart reload once instead of going blank.
