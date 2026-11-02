import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { At as ArrowLeft, ht as ChevronRight, kt as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-footer-D8XPLK4z.mjs";
import { s as SiteNavbar } from "./site-navbar-DzTC3Ebp.mjs";
import { t as portrait_3_default } from "./portrait-3-r8IfpMP5.mjs";
import { r as useInView, t as Reveal } from "./reveal-JZeUNUD2.mjs";
import { t as hero_characters_default } from "./hero-characters-DtZ3AUPt.mjs";
import { n as getProgramPage, t as FELLOWSHIP_EMAIL } from "./program-pages-data-r1cidYKR.mjs";
import { t as dora_hero_background_default } from "./dora-hero-background-D2FeKvs1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fellowship-page-DsFt2eqo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var dora_world_map_default = "/assets/dora-world-map-DcoCBkLO.jpg";
/** Words fill from muted to ink as the paragraph scrolls through the viewport. */
function ScrollFillText({ text }) {
	const ref = (0, import_react.useRef)(null);
	const [p, setP] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setP(1);
			return;
		}
		let raf = 0;
		const update = () => {
			const r = el.getBoundingClientRect();
			const vh = window.innerHeight;
			setP(Math.min(1, Math.max(0, (vh * .85 - r.top) / (r.height + vh * .35))));
		};
		const onScroll = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			cancelAnimationFrame(raf);
		};
	}, []);
	const words = text.split(" ");
	const lit = Math.round(p * words.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		ref,
		className: "gf-fill",
		"aria-label": text,
		children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			"aria-hidden": "true",
			className: i < lit ? "on" : "",
			children: [w, " "]
		}, i))
	});
}
/** Photo that straightens from a tilt as it enters the viewport. */
function TiltPhoto({ src, alt, dir }) {
	const [ref, seen] = useInView(.25);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `gf-tilt ${seen ? "in" : ""}`,
		style: { ["--tilt"]: `${dir * 6}deg` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			loading: "lazy",
			decoding: "async"
		})
	});
}
var pins = [
	[22, 30],
	[17, 42],
	[15, 56],
	[31, 62],
	[27, 76],
	[47, 21],
	[52, 20],
	[55, 30],
	[62, 33],
	[67, 43],
	[56, 51],
	[64, 58],
	[61, 74],
	[79, 40]
];
function FellowshipPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgramPage, { program: getProgramPage(0) });
}
function ProgramPage({ program }) {
	const mail = (subject) => `mailto:${FELLOWSHIP_EMAIL}?subject=${encodeURIComponent(`${program.label}: ${subject}`)}`;
	const track = (0, import_react.useRef)(null);
	const slide = (d) => {
		const el = track.current;
		if (!el) return;
		const card = el.querySelector(".gf-pillar");
		el.scrollBy({
			left: d * ((card?.offsetWidth ?? 300) + 12),
			behavior: "smooth"
		});
	};
	const [mapRef, mapSeen] = useInView(.3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `gf-page${program.to === "/programs/gwy-fellowship" ? "" : " gf-program-page"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "gf-hero",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "gf-hero-scenery",
					src: dora_hero_background_default,
					alt: "",
					"aria-hidden": "true",
					fetchPriority: "high"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gf-hero-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "gf-hero-title",
							"aria-label": program.name,
							children: program.heroLines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `gf-line l${index + 1}${index > 1 ? " right" : ""}`,
								children: line
							}, index))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "gf-hero-lead",
							children: program.lead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "gf-hero-art",
							src: hero_characters_default,
							alt: "Dora and her purple friend leaping with joy",
							fetchPriority: "high"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "gf-intro",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollFillText, { text: program.intro }, program.to), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gf-intro-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "gf-intro-photo",
						src: portrait_3_default,
						alt: "A DoraDAO community member",
						loading: "lazy"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: program.introNote })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "gf-globe-wrap",
				"aria-label": `${program.name} community around the world`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: mapRef,
					className: `gf-globe ${mapSeen ? "in" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: dora_world_map_default,
						alt: "",
						"aria-hidden": "true",
						loading: "lazy"
					}), pins.map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gf-pin",
						style: {
							left: `${x}%`,
							top: `${y}%`,
							animationDelay: `${i * 70}ms`
						}
					}, i))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "gf-pillars",
				"aria-labelledby": "gf-pillars-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gf-pillars-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "gf-pillars-title",
						children: program.pillarsTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gf-arrows",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "gf-arrow",
							"aria-label": "Previous",
							onClick: () => slide(-1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "gf-arrow",
							"aria-label": "Next",
							onClick: () => slide(1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: track,
					className: "gf-pillar-track",
					children: program.pillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "gf-pillar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p.text })]
					}, p.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "gf-stats",
				"aria-label": `${program.name} highlights`,
				children: program.highlights.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gf-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: h.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.label })]
					})
				}, h.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "gf-tracks-intro",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Our Tracks" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: program.tracksIntro })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "gf-tracks",
				children: program.tracks.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "gf-track",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gf-track-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t.title }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.text })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "gf-story",
									href: mail(t.story),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t.story }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: ["Ask us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 12 })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: t.thumb,
										alt: "",
										loading: "lazy"
									})]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltPhoto, {
						src: t.photo,
						alt: t.alt,
						dir: i % 2 ? -1 : 1
					})]
				}, t.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "gf-cta",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"Ready to Join",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					program.ctaTitle
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "gf-cta-btn",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: mail(program.ctaLabel),
							children: [
								program.ctaLabel,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 14 }) })
							]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ProgramPage as n, FellowshipPage as t };
