export const projectLocation = (lng: number, lat: number): [number, number] => [
  ((lng + 180) * 1000) / 360,
  ((85 - lat) * 460) / 165,
];

export function frameLocations(
  points: [number, number][],
  width: number,
  height: number,
  base: number,
  offsetX: number,
  offsetY: number,
) {
  if (!points.length) return { scale: 1, x: 0, y: 0 };
  const xs = points.map((p) => p[0] * base + offsetX);
  const ys = points.map((p) => p[1] * base + offsetY);
  const left = Math.min(...xs),
    right = Math.max(...xs),
    top = Math.min(...ys),
    bottom = Math.max(...ys);
  const scale = Math.max(
    1,
    Math.min(
      10,
      (width - 120) / Math.max(35, right - left),
      (height - 170) / Math.max(25, bottom - top),
    ),
  );
  return {
    scale,
    x: width / 2 - ((left + right) / 2) * scale,
    y: (height - 65) / 2 - ((top + bottom) / 2) * scale,
  };
}

// Keep the actual coordinates intact; offset only the screen-sized marker and draw a leader back to its anchor.
export function separatePins(
  points: [number, number][],
  minimumDistance = 48,
  bounds?: { left: number; right: number; top: number; bottom: number },
): [number, number][] {
  const constrain = (p: [number, number]) => {
    if (!bounds) return;
    p[0] = Math.max(bounds.left, Math.min(bounds.right, p[0]));
    p[1] = Math.max(bounds.top, Math.min(bounds.bottom, p[1]));
  };
  const moved = points.map((p) => {
    const point: [number, number] = [...p];
    constrain(point);
    return point;
  });
  for (let pass = 0; pass < 80; pass++) {
    let changed = false;
    for (let a = 0; a < moved.length; a++)
      for (let b = a + 1; b < moved.length; b++) {
        const first = moved[a],
          second = moved[b];
        if (!first || !second) continue;
        let dx = second[0] - first[0],
          dy = second[1] - first[1];
        let distance = Math.hypot(dx, dy);
        if (distance >= minimumDistance) continue;
        if (distance < 0.01) {
          dx = Math.cos(b * 2.4);
          dy = Math.sin(b * 2.4);
          distance = 1;
        }
        const push = (minimumDistance - distance + 0.1) / 2;
        first[0] -= (dx / distance) * push;
        first[1] -= (dy / distance) * push;
        second[0] += (dx / distance) * push;
        second[1] += (dy / distance) * push;
        constrain(first);
        constrain(second);
        changed = true;
      }
    if (!changed) break;
  }
  return moved.map((p, i) => [p[0] - (points[i]?.[0] ?? p[0]), p[1] - (points[i]?.[1] ?? p[1])]);
}

export const countryFlag = (code: string) =>
  /^[A-Z]{2}$/.test(code)
    ? String.fromCodePoint(...[...code].map((letter) => 127397 + letter.charCodeAt(0)))
    : "";
