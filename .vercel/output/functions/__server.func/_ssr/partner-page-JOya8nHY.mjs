import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { D as Mic, J as Heart, Q as GraduationCap, ct as Coffee, j as Megaphone, kt as ArrowRight, l as Sparkles, r as Users, v as Quote, vt as Check, y as Plus } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-footer-D8XPLK4z.mjs";
import { l as mentoring_girl_default, s as SiteNavbar } from "./site-navbar-DzTC3Ebp.mjs";
import { r as useInView, t as Reveal } from "./reveal-JZeUNUD2.mjs";
import { n as mentoring_circles_default, t as mentoring_books_default } from "./mentoring-books-DLNz2pgN.mjs";
import { n as mentoring_meetup_default } from "./mentoring-laptop-C6ilSYDr.mjs";
import { t as PartnershipCards } from "./partnership-cards-Ci6J886r.mjs";
import { t as PARTNER_EMAIL } from "./partnership-data-4gEIbqRn.mjs";
import { n as speaking_laptop_default, r as speaking_microphone_default, t as mentoring_directory_default } from "./speaking-microphone-CAK0TzuA.mjs";
import { t as mentoring_coffee_default } from "./mentoring-coffee-B8OqJCS9.mjs";
import { t as speaking_speaker_default } from "./speaking-speaker-D8lNX6sx.mjs";
import { t as hero_scenery_default } from "./hero-scenery-Cn_cgsAr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partner-page-JOya8nHY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var art = {
	csr: "/assets/csr-CZqwMLeM.png",
	corporate: "/assets/corporate-C2c5QsHI.png",
	philanthropic: "/assets/philanthropic-0FKLIKrM.png",
	donate: "/assets/donate-BFcDoIao.png"
};
var tints = [
	"peach",
	"sage",
	"gold",
	"seafoam",
	"cream",
	"orange"
];
var cardArt = [
	mentoring_circles_default,
	speaking_laptop_default,
	mentoring_directory_default,
	mentoring_meetup_default,
	mentoring_coffee_default,
	mentoring_books_default,
	speaking_microphone_default,
	speaking_speaker_default
];
var cardTints = [
	"peach",
	"orange",
	"gold",
	"sage",
	"cream",
	"seafoam",
	"gold",
	"peach"
];
var cardIcons = [
	Heart,
	Megaphone,
	Users,
	Sparkles,
	Coffee,
	GraduationCap,
	Mic,
	Megaphone
];
function Counter({ value, prefix = "", suffix }) {
	const [ref, seen] = useInView(.4);
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!seen) return;
		const t0 = performance.now();
		let raf = 0;
		const step = (t) => {
			const k = Math.min(1, (t - t0) / 1400);
			setN(Math.round(value * (1 - Math.pow(1 - k, 3))));
			if (k < 1) raf = requestAnimationFrame(step);
		};
		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [seen, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [
			prefix,
			n.toLocaleString("en-US"),
			suffix
		]
	});
}
/** Splits a heading so its final phrase gets the forest-green accent. */
function accent(title) {
	const words = title.split(" ");
	if (words.length < 4) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: title });
	const cut = words.length - 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		words.slice(0, cut).join(" "),
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: words.slice(cut).join(" ") })
	] });
}
function Heading({ n, pill, note, title, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "csr-heading ptx-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "csr-heading-top",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "csr-heading-pill",
				children: [
					String(n).padStart(2, "0"),
					" · ",
					pill
				]
			}), note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "csr-heading-note",
				children: note
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			id,
			className: "csr-heading-title",
			children: accent(title)
		})]
	});
}
function PartnerPage({ data }) {
	const mail = (s) => `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent(`${data.label}: ${s}`)}`;
	const [open, setOpen] = (0, import_react.useState)(0);
	const [qi, setQi] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (data.quotes.length < 2) return;
		const t = setInterval(() => setQi((i) => (i + 1) % data.quotes.length), 6e3);
		return () => clearInterval(t);
	}, [data.quotes.length]);
	const q = data.quotes[qi];
	let n = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pr-page csr-page ptx-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "csr-hero ptx-hero",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ptx-hero-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "ptx-hero-scenery",
							src: hero_scenery_default,
							alt: "",
							"aria-hidden": "true",
							fetchPriority: "high"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ptx-hero-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "csr-kicker",
									children: data.kicker
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 90,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
										data.title,
										" ",
										data.titleEm
									] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 160,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "csr-lead",
										children: data.lead
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 230,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "csr-invitation-button",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: mail(data.cta),
											children: [
												data.cta,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
											]
										})
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 140,
							className: "ptx-hero-art",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: art[data.slug],
								alt: "",
								fetchPriority: "high"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "csr-sheet ptx-sheet",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "ptx-sec",
						"aria-labelledby": "ptx-stats",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							n: ++n,
							pill: "Our impact",
							note: data.statsIntro,
							title: data.trust,
							id: "ptx-stats"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ptx-stat-grid",
							children: data.stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 90,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `ptx-card ptx-stat tint-${tints[i % tints.length]}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { ...s }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.label })]
								})
							}, s.label))
						})]
					}),
					data.blocks.map((b, bi) => {
						const id = `ptx-block-${bi}`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "ptx-sec",
							"aria-labelledby": id,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
								n: ++n,
								pill: b.kicker ? b.kicker.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()) : "Partnership",
								note: b.intro,
								title: b.title,
								id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `ptx-grid cols-${b.cols ?? 3}`,
								children: b.items.map((it, i) => {
									const k = (i + bi * 2) % cardArt.length;
									const Icon = cardIcons[k] ?? Heart;
									const artSrc = cardArt[k] ?? "/assets/mentoring-circles-fv5P9miW.png";
									const tint = cardTints[k] ?? "peach";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: i % 4 * 70,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: mail(it.title),
											className: `csr-mentor-card ptx-mcard mentor-${tint}`,
											"aria-label": `Ask about ${it.title}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "csr-mentor-icon",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
														size: 24,
														strokeWidth: 1.7
													})
												}),
												it.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "ptx-tag",
													children: it.tag
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: it.title }),
												it.text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: it.text }),
												it.points && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: it.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 13 }), p] }, p)) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "csr-mentor-arrow",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													className: "csr-mentor-art",
													src: artSrc,
													alt: "",
													"aria-hidden": "true",
													loading: "lazy",
													width: 540,
													height: 540
												})
											]
										})
									}, it.title);
								})
							})]
						}, b.title);
					}),
					q && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "ptx-sec",
						"aria-labelledby": "ptx-voices",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							n: ++n,
							pill: "In their words",
							title: "Voices from our partner community",
							id: "ptx-voices"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "ptx-card ptx-quote",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
									size: 30,
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: q.text }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [", ", q.who] }),
								data.quotes.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ptx-dots",
									children: data.quotes.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										"aria-label": `Show quote ${i + 1}`,
										className: i === qi ? "on" : "",
										onClick: () => setQi(i)
									}, i))
								})
							]
						}, qi) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "csr-invitation",
						"aria-labelledby": "ptx-closer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "csr-invitation-banner",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									className: "csr-invitation-dora",
									src: mentoring_girl_default,
									alt: "Dora smiling in her yellow sprout beret",
									loading: "lazy",
									width: 504,
									height: 640
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "csr-invitation-rays rays-left",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "csr-invitation-copy",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											id: "ptx-closer",
											children: data.closer.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: data.closer.text }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											className: "csr-invitation-button",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: mail(data.closer.cta),
												children: [
													data.closer.cta,
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
												]
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "csr-invitation-rays rays-right",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "csr-invitation-doodles",
									"aria-hidden": "true",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
										className: "csr-invitation-heart",
										size: 30,
										strokeWidth: 2.4
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
										className: "csr-invitation-star",
										size: 36,
										strokeWidth: 1.8
									})]
								})
							]
						})
					}),
					data.faq.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "ptx-sec",
						"aria-labelledby": "ptx-faq",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							n: ++n,
							pill: "FAQ",
							note: "Everything you need before reaching out.",
							title: "Questions partners often ask us",
							id: "ptx-faq"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ptx-faq",
							children: data.faq.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `ptx-card ptx-faq-item ${open === i ? "is-open" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									"aria-expanded": open === i,
									onClick: () => setOpen(open === i ? null : i),
									children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 18 })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ptx-faq-a",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: f.a })
								})]
							}, f.q))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "csr-sec",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "csr-h2",
							children: ["Explore other ways to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", { children: "partner" })]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnershipCards, { exclude: data.slug })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { PartnerPage as t };
