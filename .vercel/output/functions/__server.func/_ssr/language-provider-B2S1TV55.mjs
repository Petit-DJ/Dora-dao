import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/program-destinations-Cuo1A8PF.js
var programDestinations = [
	{
		name: "GirlsWhoYap Fellowship",
		label: "GWY Fellowship",
		to: "/programs/gwy-fellowship"
	},
	{
		name: "GirlsWhoYap Conference",
		label: "GWY Conference",
		to: "/programs/gwy-conference"
	},
	{
		name: "DoraHacks",
		label: "DoraHacks",
		to: "/programs/dorahacks"
	},
	{
		name: "Buildwithus",
		label: "Buildwithus",
		to: "/programs/buildwithus"
	},
	{
		name: "DoraWinterofCode ( DWoC )",
		label: "DoraWinterofCode ( DWoC )",
		to: "/programs/dwoc"
	},
	{
		name: "WORLD TOUR ft. Dora",
		label: "WORLD TOUR ft. Dora",
		to: "/programs/w3m"
	},
	{
		name: "AiFest",
		label: "AiFest",
		to: "/programs/aifest"
	},
	{
		name: "CommunityWeek",
		label: "CommunityWeek",
		to: "/programs/communityweek"
	},
	{
		name: "M2M Mentorship program",
		label: "M2M Mentorship program",
		to: "/programs/m2m-mentorship"
	},
	{
		name: "Hooman",
		label: "Hooman",
		to: "/programs/hooman"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/language-provider-B2S1TV55.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var languages = [
	{
		code: "en",
		label: "English",
		short: "En"
	},
	{
		code: "es",
		label: "Español",
		short: "Es"
	},
	{
		code: "fr",
		label: "Français",
		short: "Fr"
	},
	{
		code: "de",
		label: "Deutsch",
		short: "De"
	},
	{
		code: "hi",
		label: "हिन्दी",
		short: "हि"
	}
];
var normalizeText = (text) => text.replace(/\s+/g, " ").trim();
function isLanguage(value) {
	return languages.some((language) => language.code === value);
}
function translateText(text, dictionary) {
	const translation = dictionary[normalizeText(text)];
	if (!translation) return text;
	return `${text.match(/^\s*/)?.[0] ?? ""}${translation}${text.match(/\s*$/)?.[0] ?? ""}`;
}
function observeTranslations(dictionary) {
	const originals = /* @__PURE__ */ new Map();
	const attributes = /* @__PURE__ */ new Map();
	const excluded = "script,style,code,pre,textarea,[translate=no],[data-no-translate]";
	let queued = false;
	let stopped = false;
	const apply = () => {
		queued = false;
		if (stopped) return;
		const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
		while (walker.nextNode()) {
			const node = walker.currentNode;
			if (!node.parentElement || node.parentElement.closest(excluded)) continue;
			const previous = originals.get(node);
			if (previous && node.data === previous.translated) continue;
			const source = node.data;
			const translated = translateText(source, dictionary);
			if (source !== translated) {
				originals.set(node, {
					source,
					translated
				});
				node.data = translated;
			}
		}
		document.querySelectorAll("[aria-label],[placeholder],[alt],[title]").forEach((element) => {
			if (element.closest(excluded)) return;
			for (const name of [
				"aria-label",
				"placeholder",
				"alt",
				"title"
			]) {
				const source = element.getAttribute(name);
				if (!source) continue;
				if ((attributes.get(element)?.get(name))?.translated === source) continue;
				const translated = translateText(source, dictionary);
				if (source !== translated) {
					let entry = attributes.get(element);
					if (!entry) {
						entry = /* @__PURE__ */ new Map();
						attributes.set(element, entry);
					}
					entry.set(name, {
						source,
						translated
					});
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
		attributeFilter: [
			"aria-label",
			"placeholder",
			"alt",
			"title"
		]
	});
	apply();
	return () => {
		stopped = true;
		observer.disconnect();
		originals.forEach(({ source, translated }, node) => {
			if (node.data === translated) node.data = source;
		});
		attributes.forEach((entry, element) => entry.forEach(({ source, translated }, name) => {
			if (element.getAttribute(name) === translated) element.setAttribute(name, source);
		}));
	};
}
var loaders = /* #__PURE__ */ Object.assign({
	"../lib/translations/de.json": () => import("./de--LMkzvaL.mjs"),
	"../lib/translations/es.json": () => import("./es-DnQCYmpT.mjs"),
	"../lib/translations/fr.json": () => import("./fr-BhtZph6p.mjs"),
	"../lib/translations/hi.json": () => import("./hi-BSvyLAew.mjs")
});
var storyLoaders = /* #__PURE__ */ Object.assign({
	"../lib/translations/landing/de.json": () => import("./de-CsHpJmPr.mjs"),
	"../lib/translations/landing/es.json": () => import("./es-oueUrm3o.mjs"),
	"../lib/translations/landing/fr.json": () => import("./fr-BZmyXil-.mjs"),
	"../lib/translations/landing/hi.json": () => import("./hi-DPIYpgvI.mjs")
});
var LanguageContext = (0, import_react.createContext)({
	language: "en",
	loading: false,
	error: "",
	selectLanguage: (_language) => {}
});
var useLanguage = () => (0, import_react.useContext)(LanguageContext);
function LanguageProvider({ children }) {
	const [language, setLanguage] = (0, import_react.useState)("en");
	const [requested, setRequested] = (0, import_react.useState)("en");
	const [dictionary, setDictionary] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		try {
			const saved = localStorage.getItem("doradao-language");
			if (isLanguage(saved)) setRequested(saved);
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		let current = true;
		setError("");
		if (requested === "en") {
			setDictionary({});
			setLanguage("en");
			setLoading(false);
			return;
		}
		setLoading(true);
		const loader = loaders[`../lib/translations/${requested}.json`];
		if (!loader) {
			setError("This language could not be loaded. Please try again.");
			setLoading(false);
			return;
		}
		const storyLoader = storyLoaders[`../lib/translations/landing/${requested}.json`];
		Promise.all([loader(), storyLoader ? storyLoader() : Promise.resolve({ default: {} })]).then(([module, story]) => {
			if (current) {
				setDictionary({
					...module.default,
					...story.default
				});
				setLanguage(requested);
				setLoading(false);
			}
		}).catch(() => {
			if (current) {
				setError("This language could not be loaded. Please try again.");
				setLoading(false);
			}
		});
		return () => {
			current = false;
		};
	}, [requested]);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = language;
		try {
			localStorage.setItem("doradao-language", language);
		} catch {}
		return observeTranslations(dictionary);
	}, [dictionary, language]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value: {
			language,
			loading,
			error,
			selectLanguage: setRequested
		},
		children
	});
}
//#endregion
export { programDestinations as i, languages as n, useLanguage as r, LanguageProvider as t };
