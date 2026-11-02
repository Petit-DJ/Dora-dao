import { expect, test } from "vitest";
import { participatePhotos, programFolders } from "./program-folder-data";
import { programs } from "./programs-data";

test("photo folders are labelled with real program names", () => {
  const names = new Set<string>(programs.map((program) => program.name));
  expect(programFolders.length).toBeGreaterThan(0);
  for (const folder of programFolders) {
    expect(names.has(folder.name)).toBe(true);
  }
});

test("every folder opens distinct pictures and the participate gallery draws one per folder", () => {
  for (const folder of programFolders) {
    expect(folder.pictures.length).toBeGreaterThanOrEqual(1);
    expect(folder.pictures.length).toBeLessThanOrEqual(20);
    expect(new Set(folder.pictures.map((picture) => picture.src)).size).toBe(
      folder.pictures.length,
    );
  }
  expect(participatePhotos.length).toBe(programFolders.length);
  expect(new Set(participatePhotos.map((picture) => picture.src)).size).toBe(
    participatePhotos.length,
  );
});
