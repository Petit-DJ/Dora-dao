import { afterEach, describe, expect, it } from "vitest";
import { isLanguage, languages, observeTranslations, translateText } from "./translation";
afterEach(() => { document.body.innerHTML = ""; });
describe("website language selection", () => {
  it("supports the five reference languages", () => { expect(languages.map(l => l.code)).toEqual(["en", "es", "fr", "de", "hi"]); expect(isLanguage("xx")).toBe(false); });
  it("translates text without changing whitespace or unknown brand names", () => { expect(translateText("  About \n", { About: "Acerca de" })).toBe("  Acerca de \n"); expect(translateText("DoraDAO", {})).toBe("DoraDAO"); });
  it("translates page text and accessible labels, but preserves links and user input", () => {
    document.body.innerHTML = '<a href="/products" aria-label="Products">Products</a><input value="Products" placeholder="Search"><textarea>Products</textarea><span translate="no">English</span>';
    const stop = observeTranslations({ Products: "Produkte", Search: "Suchen", English: "Englisch" });
    expect(document.querySelector("a")?.textContent).toBe("Produkte");
    expect(document.querySelector("a")?.getAttribute("aria-label")).toBe("Produkte");
    expect(document.querySelector("a")?.getAttribute("href")).toBe("/products");
    expect(document.querySelector("input")?.value).toBe("Products");
    expect(document.querySelector("input")?.placeholder).toBe("Suchen");
    expect(document.querySelector("textarea")?.textContent).toBe("Products");
    expect(document.querySelector("span")?.textContent).toBe("English");
    stop(); expect(document.querySelector("a")?.textContent).toBe("Products"); expect(document.querySelector("input")?.placeholder).toBe("Search");
  });
  it("translates content introduced after navigation or interaction", async () => {
    const stop = observeTranslations({ Donate: "Spenden" });
    const heading = document.createElement("h1"); heading.textContent = "Donate"; document.body.append(heading);
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(heading.textContent).toBe("Spenden");
    heading.firstChild?.replaceWith(document.createTextNode("Donate"));
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(heading.textContent).toBe("Spenden"); stop(); expect(heading.textContent).toBe("Donate");
  });
});
