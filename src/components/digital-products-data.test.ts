import { describe, expect, it } from "vitest";
import { digitalProducts } from "./digital-products-data";

describe("DoraDAO digital suite", () => {
  it("links only the three supplied real products", () => {
    expect(digitalProducts.map((product) => product.url)).toEqual([
      "https://doracertifier.lovable.app",
      "https://doracomicbook.lovable.app",
      "https://dorahacks.lovable.app",
    ]);
  });
});
