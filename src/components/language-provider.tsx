import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { isLanguage, observeTranslations, type Dictionary, type Language } from "@/lib/translation";
const loaders = import.meta.glob<{ default: Dictionary }>("../lib/translations/*.json");
const storyLoaders = import.meta.glob<{ default: Dictionary }>("../lib/translations/landing/*.json");
const LanguageContext = createContext({ language: "en" as Language, loading: false, error: "", selectLanguage: (_language: Language) => {} });
export const useLanguage = () => useContext(LanguageContext);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [requested, setRequested] = useState<Language>("en");
  const [dictionary, setDictionary] = useState<Dictionary>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    try { const saved = localStorage.getItem("doradao-language"); if (isLanguage(saved)) setRequested(saved); } catch { /* Storage is optional. */ }
  }, []);
  useEffect(() => {
    let current = true;
    setError("");
    if (requested === "en") { setDictionary({}); setLanguage("en"); setLoading(false); return; }
    setLoading(true);
    const loader = loaders[`../lib/translations/${requested}.json`];
    if (!loader) { setError("This language could not be loaded. Please try again."); setLoading(false); return; }
    const storyLoader = storyLoaders[`../lib/translations/landing/${requested}.json`];
    Promise.all([loader(), storyLoader ? storyLoader() : Promise.resolve({ default: {} })]).then(([module, story]) => {
      if (current) { setDictionary({ ...module.default, ...story.default }); setLanguage(requested); setLoading(false); }
    }).catch(() => { if (current) { setError("This language could not be loaded. Please try again."); setLoading(false); } });
    return () => { current = false; };
  }, [requested]);
  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem("doradao-language", language); } catch { /* Storage is optional. */ }
    return observeTranslations(dictionary);
  }, [dictionary, language]);
  return <LanguageContext.Provider value={{ language, loading, error, selectLanguage: setRequested }}>{children}</LanguageContext.Provider>;
}
