import { describe, expect, it } from "vitest";
import { approvedEvents } from "./events-data";

const row = (status: string, title = "Meetup") => ({
  status,
  title,
  date: "2026-12-01",
  link: "https://x.y",
});

describe("event moderation", () => {
  it("shows only Approved rows", () => {
    expect(
      approvedEvents([
        row("Pending", "A"),
        row("Approved", "B"),
        row("", "C"),
        row("Rejected", "D"),
      ]).map((e) => e.title),
    ).toEqual(["B"]);
  });
  it("accepts Approved regardless of case", () => {
    expect(approvedEvents([row(" approved ")])).toHaveLength(1);
  });
});
