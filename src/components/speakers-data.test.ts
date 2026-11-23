import { describe, expect, it } from "vitest";
import { approvedSpeakers, photoFor, pickShowcase, twitterUrl } from "./speakers-data";
import { speakerPortraits } from "./speaker-portraits";

describe("speakers sheet", () => {
  it("shows only rows whose Status is Approved", () => {
    const list = approvedSpeakers([
      { name: "Jane Doe", status: "Approved" },
      { name: "John Roe", status: "Pending" },
      { name: "No Status" },
    ]);
    expect(list.map(s => s.name)).toEqual(["Jane Doe"]);
  });

  it("reads the name from the Speaker's full name column when Name is empty", () => {
    expect(approvedSpeakers([{ name: "", speakersfullname: "Shreya Mani", status: "approved" }])[0]?.name).toBe("Shreya Mani");
  });

  it("a Photo number picks that bundled portrait, a Drive link becomes a viewable image", () => {
    expect(photoFor("3")).toBe(speakerPortraits[2].image);
    expect(photoFor("999")).toBeUndefined();
    expect(photoFor("https://drive.google.com/file/d/1AbCdEfGhIjKlMn/view?usp=sharing")).toBe("https://drive.google.com/thumbnail?id=1AbCdEfGhIjKlMn&sz=w600");
  });

  it("accepts an X handle or a full link", () => {
    expect(twitterUrl("@connectdoradao")).toBe("https://x.com/connectdoradao");
    expect(twitterUrl("https://x.com/connectdoradao")).toBe("https://x.com/connectdoradao");
  });

  it("homepage shows Featured = Yes speakers first", () => {
    const list = approvedSpeakers([
      { name: "A", status: "Approved", featured: "No" },
      { name: "B", status: "Approved", featured: "Yes" },
    ]);
    expect(pickShowcase(list).map(s => s.name)).toEqual(["B", "A"]);
  });

  it("links a speaker to their recorded session by name", () => {
    expect(approvedSpeakers([{ name: "Shreya Mani", status: "Approved" }])[0]?.session).toBe("MYmZVVLLPJw");
  });
});
