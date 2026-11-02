export const languages = [
  { code: "en", label: "English", short: "En" },
  { code: "es", label: "Español", short: "Es" },
  { code: "fr", label: "Français", short: "Fr" },
  { code: "de", label: "Deutsch", short: "De" },
  { code: "hi", label: "हिन्दी", short: "हि" },
] as const;
export type Language = (typeof languages)[number]["code"];
export type Dictionary = Record<string, string>;
export const normalizeText = (text: string) => text.replace(/\s+/g, " ").trim();
export function isLanguage(value: unknown): value is Language {
  return languages.some((language) => language.code === value);
}
export function translateText(text: string, dictionary: Dictionary) {
  const translation = dictionary[normalizeText(text)];
  if (!translation) return text;
  return `${text.match(/^\s*/)?.[0] ?? ""}${translation}${text.match(/\s*$/)?.[0] ?? ""}`;
}
// Retain React-owned elements and user input; update only text and accessible attributes.
export function observeTranslations(dictionary: Dictionary) {
  const originals = new Map<Text, { source: string; translated: string }>();
  const attributes = new Map<Element, Map<string, { source: string; translated: string }>>();
  const excluded = "script,style,code,pre,textarea,[translate=no],[data-no-translate]";
  let queued = false;
  let stopped = false;
  const apply = () => {
    queued = false;
    if (stopped) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode as Text;
      if (!node.parentElement || node.parentElement.closest(excluded)) continue;
      const previous = originals.get(node);
      if (previous && node.data === previous.translated) continue;
      const source = node.data;
      const translated = translateText(source, dictionary);
      if (source !== translated) {
        originals.set(node, { source, translated });
        node.data = translated;
      }
    }
    document.querySelectorAll("[aria-label],[placeholder],[alt],[title]").forEach((element) => {
      if (element.closest(excluded)) return;
      for (const name of ["aria-label", "placeholder", "alt", "title"]) {
        const source = element.getAttribute(name);
        if (!source) continue;
        const previous = attributes.get(element)?.get(name);
        if (previous?.translated === source) continue;
        const translated = translateText(source, dictionary);
        if (source !== translated) {
          let entry = attributes.get(element);
          if (!entry) {
            entry = new Map();
            attributes.set(element, entry);
          }
          entry.set(name, { source, translated });
          element.setAttribute(name, translated);
        }
      }
    });
    for (const node of originals.keys()) if (!node.isConnected) originals.delete(node);
    for (const element of attributes.keys()) if (!element.isConnected) attributes.delete(element);
  };
  const observer = new MutationObserver(() => {
    if (!queued) {
      queued = true;
      queueMicrotask(apply);
    }
  });
  observer.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["aria-label", "placeholder", "alt", "title"],
  });
  apply();
  return () => {
    stopped = true;
    observer.disconnect();
    originals.forEach(({ source, translated }, node) => {
      if (node.data === translated) node.data = source;
    });
    attributes.forEach((entry, element) =>
      entry.forEach(({ source, translated }, name) => {
        if (element.getAttribute(name) === translated) element.setAttribute(name, source);
      }),
    );
  };
}
