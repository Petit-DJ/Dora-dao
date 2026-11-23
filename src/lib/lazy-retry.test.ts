import { describe, expect, it } from "vitest";
import { isStaleChunkError } from "./lazy-retry";

describe("isStaleChunkError", () => {
  it("recognises Safari and Chrome stale-file errors", () => {
    expect(isStaleChunkError(new TypeError("Importing a module script failed."))).toBe(true);
    expect(isStaleChunkError(new TypeError("Failed to fetch dynamically imported module: /assets/a.js"))).toBe(true);
  });
  it("ignores ordinary errors so real bugs still show", () => {
    expect(isStaleChunkError(new Error("Cannot read properties of undefined"))).toBe(false);
  });
});
