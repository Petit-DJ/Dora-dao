import { describe, it, expect } from "vitest";
import { approvedContributors } from "./about-faces-data";
describe("contributors sheet", () => {
  it("shows rows with blank or Approved status, hides others", () => {
    const out = approvedContributors([
      { name: "A", role: "Host", photo: "", linkedin: "linkedin.com/in/a", status: "" },
      { name: "B", role: "Host", photo: "", linkedin: "", status: "Approved" },
      { name: "C", role: "Host", photo: "", linkedin: "", status: "Pending" },
    ]);
    expect(out.map(f => f.name)).toEqual(["A", "B"]);
    expect(out[0]?.linkedin).toBe("https://linkedin.com/in/a");
  });
  it("ignores a tab without a Role column", () => {
    expect(approvedContributors([{ name: "X", status: "Approved" }])).toEqual([]);
  });
});
