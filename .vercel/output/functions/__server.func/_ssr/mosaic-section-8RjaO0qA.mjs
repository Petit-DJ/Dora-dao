import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { $ as Globe, V as Lightbulb, X as Handshake, b as Play, l as Sparkles, r as Users } from "../_libs/lucide-react.mjs";
import { t as speakerPortraits } from "./speaker-portraits-B49dDe8u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mosaic-section-8RjaO0qA.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	play: Play,
	globe: Globe,
	users: Users,
	lightbulb: Lightbulb,
	handshake: Handshake,
	sparkles: Sparkles
};
var rows = [
	{
		direction: "left",
		tiles: [
			{
				kind: "photo",
				...speakerPortraits[0]
			},
			{
				kind: "stat",
				icon: "play",
				value: "10L+",
				label: "views across platforms",
				tone: "green"
			},
			{
				kind: "photo",
				...speakerPortraits[1]
			},
			{
				kind: "quote",
				text: "Ideas grow here.",
				tone: "cream"
			},
			{
				kind: "photo",
				...speakerPortraits[2]
			},
			{
				kind: "stat",
				icon: "sparkles",
				value: "600+",
				label: "pieces of community-made content",
				tone: "peach"
			},
			{
				kind: "photo",
				...speakerPortraits[3]
			},
			{
				kind: "photo",
				...speakerPortraits[4]
			},
			{
				kind: "photo",
				...speakerPortraits[5]
			}
		]
	},
	{
		direction: "right",
		tiles: [
			{
				kind: "stat",
				icon: "globe",
				value: "35+",
				label: "countries represented",
				tone: "gold"
			},
			{
				kind: "photo",
				...speakerPortraits[6]
			},
			{
				kind: "stat",
				icon: "users",
				value: "1.5K+",
				label: "community members",
				tone: "lilac"
			},
			{
				kind: "photo",
				...speakerPortraits[7]
			},
			{
				kind: "stat",
				icon: "lightbulb",
				value: "30+",
				label: "sessions & workshops",
				tone: "cream"
			},
			{
				kind: "quote",
				text: "Bring your ideas to life.",
				tone: "green"
			},
			{
				kind: "photo",
				...speakerPortraits[8]
			},
			{
				kind: "photo",
				...speakerPortraits[9]
			},
			{
				kind: "photo",
				...speakerPortraits[10]
			},
			{
				kind: "photo",
				...speakerPortraits[11]
			}
		]
	},
	{
		direction: "left",
		tiles: [
			{
				kind: "photo",
				...speakerPortraits[12]
			},
			{
				kind: "stat",
				icon: "handshake",
				value: "80+",
				label: "ecosystem partners",
				tone: "cream"
			},
			{
				kind: "photo",
				...speakerPortraits[13]
			},
			{
				kind: "quote",
				text: "A kinder, more creative internet.",
				tone: "mint"
			},
			{
				kind: "photo",
				...speakerPortraits[14]
			},
			{
				kind: "quote",
				text: "All walks of life.",
				tone: "cream"
			},
			{
				kind: "photo",
				...speakerPortraits[15]
			},
			{
				kind: "photo",
				...speakerPortraits[16]
			},
			{
				kind: "photo",
				...speakerPortraits[17]
			}
		]
	}
];
function TileCard({ tile }) {
	if (tile.kind === "photo") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "mosaic-tile mosaic-photo",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: tile.image,
			alt: tile.alt,
			loading: "lazy",
			decoding: "async",
			width: 480,
			height: 480
		})
	});
	if (tile.kind === "stat") {
		const Icon = icons[tile.icon];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: `mosaic-tile mosaic-stat mosaic-tone-${tile.tone}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					"aria-hidden": "true",
					className: "mosaic-stat-icon"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: tile.value }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tile.label })
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: `mosaic-tile mosaic-quote mosaic-tone-${tile.tone}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
			"aria-hidden": "true",
			className: "mosaic-quote-spark"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: tile.text })]
	});
}
function MosaicSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "community-mosaic",
		"aria-labelledby": "mosaic-title",
		className: "mosaic-section relative z-10 text-community-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mosaic-heading",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mosaic-eyebrow",
					children: "· Our people ·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "mosaic-title",
					className: "mosaic-title",
					children: [
						"18 voices, 35+ nations, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-hero-orange",
							children: "one shared warmth"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "home-story-people-note",
					children: "High school students, university researchers, seasoned mentors, and creative minds."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mosaic-rows",
			children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mosaic-window",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `mosaic-track mosaic-track-${row.direction}`,
					children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mosaic-group",
						"aria-hidden": copy === 1 ? true : void 0,
						children: row.tiles.map((tile, tileIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileCard, { tile }, tileIndex))
					}, copy))
				})
			}, index))
		})]
	});
}
//#endregion
export { MosaicSection };
