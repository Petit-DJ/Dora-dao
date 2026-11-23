import { expect, test } from "vitest";
import { programDestinations, programPages } from "./program-pages-data";
import { programs } from "./programs-data";

test("all ten named programs have their own distinct page destination", () => {
  expect(programDestinations.map(program => program.name)).toEqual([
    "GirlsWhoYap Fellowship", "GirlsWhoYap Conference", "DoraHacks", "Buildwithus",
    "DoraWinterofCode ( DWoC )", "WORLD TOUR ft. Dora", "AiFest", "CommunityWeek",
    "M2M Mentorship program", "Hooman",
  ]);
  expect(new Set(programDestinations.map(program => program.to)).size).toBe(10);
});

test("World Tour preserves its existing public destination", () => {
  expect(programDestinations[5].to).toBe("/programs/w3m");
});

test("Build with Us retains the supplied six-week cohort structure", () => {
  expect(programPages[3]?.highlights.find(fact => fact.label === "Published cohort duration")?.value).toBe("6 weeks");
});

test("Build with Us retains eight weeks between cohort starts", () => {
  expect(programPages[3]?.highlights.find(fact => fact.label === "Between cohort starts")?.value).toBe("8 weeks");
});

test("Build with Us retains approximately five hours per week", () => {
  expect(programPages[3]?.highlights.find(fact => fact.label === "Weekly time commitment")?.value).toBe("~5 hours");
});

test("every program page retains its existing description and has six Fellowship-style tracks", () => {
  for (const [index, page] of programPages.entries()) {
    expect(page.description).toBe(programs[index]?.description);
    expect(page.tracks).toHaveLength(6);
    expect(page.pillars).toHaveLength(5);
  }
});