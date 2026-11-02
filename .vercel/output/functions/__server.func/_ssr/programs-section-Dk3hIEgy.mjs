import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { At as ArrowLeft, D as Mic, J as Heart, Z as Hammer, c as Sprout, d as Smile, kt as ArrowRight, l as Sparkles, pt as CircleCheck, r as Users, rt as Earth, tt as FileText, u as Snowflake, ut as CodeXml, yt as ChartNoAxesCombined } from "../_libs/lucide-react.mjs";
import { i as programDestinations } from "./language-provider-B2S1TV55.mjs";
import { a as DialogTitle, n as DialogContent, t as Dialog } from "./site-navbar-DzTC3Ebp.mjs";
import { n as programs, t as formatHighlightValue } from "./programs-data-C5W6ilQ8.mjs";
import { t as participatePhotos } from "./program-folder-data-Cjs5gN7r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs-section-Dk3hIEgy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var dora_programs_scenery_default = "/assets/dora-programs-scenery-9_1mXVeZ.jpg";
var photos = participatePhotos;
var fellowship = photos[0];
var icons = {
	sprout: Sprout,
	mic: Mic,
	code: CodeXml,
	hammer: Hammer,
	snow: Snowflake,
	globe: Earth,
	sparkles: Sparkles,
	people: Users,
	heart: Heart,
	smile: Smile
};
var filters = [
	"All",
	"Learning",
	"Events",
	"Building",
	"More"
];
var highlightIcons = {
	people: Users,
	reach: ChartNoAxesCombined,
	posts: FileText,
	globe: Earth,
	heart: Heart
};
function ProgramsSection() {
	const [selected, setSelected] = (0, import_react.useState)(0);
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [photo, setPhoto] = (0, import_react.useState)(0);
	const [galleryOpen, setGalleryOpen] = (0, import_react.useState)(false);
	const program = programs[selected] ?? programs[0];
	const Icon = icons[program.icon];
	const movePhoto = (step) => setPhoto((current) => (current + step + photos.length) % photos.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "programs",
		"aria-labelledby": "programs-title",
		className: "programs-section text-community-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				loading: "lazy",
				decoding: "async",
				src: dora_programs_scenery_default,
				alt: "",
				className: "programs-scenery"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "programs-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "programs-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "programs-eyebrow",
							children: "Ways to participate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "programs-title",
							children: "Ten pathways to learn, build, and belong."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "programs-motto",
							children: "Whether it’s your first line of code or your tenth hackathon, there is a seat saved for you."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "programs-layout",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "programs-gallery",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									className: "programs-main-photo",
									"aria-label": "Open community photo gallery",
									onClick: () => setGalleryOpen(true),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										loading: "lazy",
										decoding: "async",
										src: (photos[photo] ?? fellowship)?.src,
										alt: photo === 0 ? "GirlsWhoYap Fellowship community gathering" : "DoraDAO community gathering"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "programs-photo-label",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 14 }), " Community moments"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "programs-thumbnails",
									children: [photos.slice(1).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										"aria-label": `Show community photo ${index + 2}`,
										"aria-pressed": photo === index + 1,
										onClick: () => setPhoto(index + 1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											loading: "lazy",
											decoding: "async",
											src: item.src,
											alt: `Community gathering ${index + 2}`
										})
									}, item.src)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										"aria-label": "Next community photo",
										onClick: () => movePhoto(1),
										className: "programs-next-photo",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "programs-detail",
								"aria-live": "polite",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "programs-category",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 14 }), " DoraDAO program"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: program.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "programs-description",
										children: program.description
									}),
									selected === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "programs-eligibility",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Who can apply?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: [
											"Students and early-career professionals",
											"Members of any Dora chapter",
											"Builders with an idea to share",
											"Anyone committed to the code of conduct"
										].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 16 }), item] }, item)) })]
									}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "programs-program-mark",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [String(selected + 1).padStart(2, "0"), " / 10"] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "programs-gallery-cta",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: (programDestinations[selected] ?? programDestinations[0]).to,
											children: ["Explore program ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "programs-directory",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "programs-filters",
										role: "group",
										"aria-label": "Filter programs",
										children: filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											"aria-pressed": filter === item,
											onClick: () => setFilter(item),
											children: item
										}, item))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "programs-list",
										role: "group",
										"aria-label": "DoraDAO programs",
										children: programs.map((item, index) => {
											if (filter !== "All" && filter !== item.category) return null;
											const ItemIcon = icons[item.icon];
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "ghost",
												className: "programs-list-item",
												"aria-pressed": selected === index,
												onClick: () => setSelected(index),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `programs-icon programs-icon-${index % 4}`,
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIcon, {})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })
												]
											}, item.name);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "programs-list-count",
										children: "10 programs · One DoraDAO"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "programs-highlights",
						"aria-labelledby": "programs-highlights-title",
						"aria-live": "polite",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							id: "programs-highlights-title",
							children: ["Community highlights · ", program.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "programs-highlights-grid",
							children: program.highlights.map((highlight, index) => {
								const HighlightIcon = highlightIcons[highlight.icon];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "programs-highlight",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `programs-highlight-icon programs-icon-${index % 4}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HighlightIcon, { "aria-hidden": "true" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: highlight.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: formatHighlightValue(highlight.value) })] })]
								}, highlight.label);
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: galleryOpen,
				onOpenChange: setGalleryOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "programs-dialog",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Community moments" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							loading: "lazy",
							decoding: "async",
							src: (photos[photo] ?? fellowship)?.src,
							alt: "DoraDAO community gathering"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": "Previous gallery photo",
								onClick: () => movePhoto(-1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								photo + 1,
								" / ",
								photos.length
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": "Next gallery photo",
								onClick: () => movePhoto(1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
							})
						] })
					]
				})
			})
		]
	});
}
//#endregion
export { ProgramsSection };
