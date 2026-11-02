// Real program photos, grouped by program folder.
const files = import.meta.glob<{ url: string }>("@/assets/program-photos/*.asset.json", {
  eager: true,
  import: "default",
});

const order = (path: string) => Number(path.match(/-(\d+)\.jpg/)?.[1] ?? 0);
const photosFor = (key: string, label: string) =>
  Object.entries(files)
    .filter(([path]) => path.includes(`/${key}-`))
    .sort(([a], [b]) => order(a) - order(b))
    .map(([, asset], index) => ({ src: asset.url, alt: `${label} moment ${index + 1}` }));

export const programFolders = [
  { name: "GirlsWhoYap Fellowship", pictures: photosFor("fellowship", "GirlsWhoYap Fellowship") },
  { name: "GirlsWhoYap Conference", pictures: photosFor("conference", "GirlsWhoYap Conference") },
  { name: "DoraHacks", pictures: photosFor("dorahacks", "DoraHacks") },
  { name: "WORLD TOUR ft. Dora", pictures: photosFor("w3m", "WORLD TOUR ft. Dora") },
].filter((folder) => folder.pictures.length > 0);

/** A mix of photos across programs for the "Ways to participate" gallery. */
export const participatePhotos = [
  programFolders[0]?.pictures[2],
  programFolders[1]?.pictures[1],
  programFolders[2]?.pictures[0],
  programFolders[3]?.pictures[0],
].filter((p): p is { src: string; alt: string } => Boolean(p));
