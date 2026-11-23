import { describe, expect, it } from "vitest";
import { classify, filterRecordings, recordings, speakerFromTitle } from "./recordings-data";

describe("knowledge base recordings", () => {
  it("files mentor hangouts and hackathon broadcasts under live streams", () => {
    expect(classify("Hangout with Mentors #3 ft. Komal Ray")).toBe("live");
    expect(classify("Closing Ceremony")).toBe("live");
    expect(classify("Officially kicking off DoraHacks 2.0")).toBe("live");
  });

  it("files standalone talks under speaker sessions", () => {
    expect(classify("What It Takes to Bet on Yourself")).toBe("speaker");
    expect(classify("ProductHunt launch: 101")).toBe("speaker");
  });

  it("names the guest after ft. but never the host Dora", () => {
    expect(speakerFromTitle("Hangout with Mentors #2 ft. Anjana Menon")).toBe("Anjana Menon");
    expect(speakerFromTitle("Hangout with Mentors #5 ft. Dora")).toBeUndefined();
  });

  it("the live streams filter shows only live streams and search narrows by speaker", () => {
    const live = filterRecordings(recordings, "live");
    expect(live.length).toBeGreaterThan(0);
    expect(live.every(r => r.kind === "live")).toBe(true);
    expect(filterRecordings(recordings, "all", "shreya").map(r => r.id)).toEqual(["MYmZVVLLPJw"]);
    expect(filterRecordings(recordings, "speaker", "shreya")).toEqual([]);
  });
});
