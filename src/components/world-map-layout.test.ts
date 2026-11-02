import { describe, expect, it } from "vitest";
import { frameLocations, projectLocation, separatePins } from "./world-map-layout";

describe("map camera and collision geometry", () => {
  it("preserves world coordinates at both geographic extremes", () => {
    expect(projectLocation(-180, 85)).toEqual([0, 0]);
    expect(projectLocation(180, -80)).toEqual([1000, 460]);
  });
  it("separates overlapping cities by at least 48 screen pixels without changing their coordinates", () => {
    const points: [number, number][] = [
      [100, 100],
      [100, 100],
      [104, 102],
      [500, 300],
    ];
    const offsets = separatePins(points);
    const moved: [number, number][] = points.map((p, i) => [
      p[0] + (offsets[i]?.[0] ?? 0),
      p[1] + (offsets[i]?.[1] ?? 0),
    ]);
    for (let a = 0; a < moved.length; a++)
      for (let b = a + 1; b < moved.length; b++) {
        const one = moved[a],
          two = moved[b];
        if (one && two)
          expect(Math.hypot(one[0] - two[0], one[1] - two[1])).toBeGreaterThanOrEqual(47.9);
      }
    expect(points[0]).toEqual([100, 100]);
    expect(offsets[3]).toEqual([0, 0]);
  });
  it("returns a finite bounded camera for an empty region or a single city", () => {
    expect(frameLocations([], 320, 360, 0.32, 0, 100)).toEqual({ scale: 1, x: 0, y: 0 });
    const frame = frameLocations([projectLocation(72.8, 19)], 320, 360, 0.32, 0, 100);
    expect(frame.scale).toBeGreaterThan(1);
    expect(frame.scale).toBeLessThanOrEqual(10);
    expect(Number.isFinite(frame.x) && Number.isFinite(frame.y)).toBe(true);
  });
  it("keeps adjacent edge pins separated inside the usable map area", () => {
    const points: [number, number][] = [
      [0, 100],
      [2, 101],
      [5, 102],
      [320, 200],
      [319, 201],
    ];
    const offsets = separatePins(points, 50, { left: 25, right: 255, top: 75, bottom: 265 });
    const moved: [number, number][] = points.map((point, i) => [
      point[0] + (offsets[i]?.[0] ?? 0),
      point[1] + (offsets[i]?.[1] ?? 0),
    ]);
    for (const point of moved) {
      expect(point[0]).toBeGreaterThanOrEqual(25);
      expect(point[0]).toBeLessThanOrEqual(255);
      expect(point[1]).toBeGreaterThanOrEqual(75);
      expect(point[1]).toBeLessThanOrEqual(265);
    }
    for (let a = 0; a < moved.length; a++)
      for (let b = a + 1; b < moved.length; b++) {
        const one = moved[a],
          two = moved[b];
        if (one && two)
          expect(Math.hypot(one[0] - two[0], one[1] - two[1])).toBeGreaterThanOrEqual(49.9);
      }
  });
});
