import { expect, test } from "vitest";
import { formatHighlightValue, programs } from "./programs-data";

test("the ecosystem contains exactly the ten supplied programs in order", () => {
  expect(programs.map((program) => program.name)).toEqual([
    "GirlsWhoYap Fellowship", "GirlsWhoYap Conference", "DoraHacks", "Buildwithus",
    "DoraWinterofCode ( DWoC )", "WORLD TOUR ft. Dora", "AiFest", "CommunityWeek",
    "M2M Mentorship program", "Hooman",
  ]);
});

test("the Fellowship keeps the supplied community-highlight counts", () => {
  const fellowship = programs[0];
  expect(Object.fromEntries(fellowship.highlights.map((h) => [h.icon, h.value]))).toMatchObject({
    people: 5000, reach: 600000, posts: 2000, globe: 11, heart: 50,
  });
});

test("every program carries its own highlights block so the panel changes with the selection", () => {
  expect(programs).toHaveLength(10);
  for (const program of programs) {
    expect(program.highlights).toHaveLength(5);
    for (const highlight of program.highlights) {
      expect(highlight.label.length).toBeGreaterThan(0);
      expect(highlight.value).toBeGreaterThan(0);
    }
  }
  expect(new Set(programs.map((program) => JSON.stringify(program.highlights))).size).toBe(10);
});

test("formatHighlightValue uses lakh notation for six-figure reach", () => {
  expect(formatHighlightValue(600000)).toBe("6 lakh+");
  expect(formatHighlightValue(50000)).toBe("50,000+");
});
