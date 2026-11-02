import { describe, expect, it } from "vitest";
import { newsletterFormats } from "./sponsor-offerings-data";
describe("Newsletter format limits", () => {
  it("limits Shoutout to 15 words", () => expect(newsletterFormats[0].maxWords).toBe(15));
  it("limits Detailed to one image and 45 words", () => {
    expect(newsletterFormats[1].images).toBe(1);
    expect(newsletterFormats[1].maxWords).toBe(45);
  });
  it("sets Deep Dive to 500-700 words", () => {
    expect(newsletterFormats[2].minWords).toBe(500);
    expect(newsletterFormats[2].maxWords).toBe(700);
  });
});
