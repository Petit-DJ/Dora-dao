import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { D as Mic, J as Heart, Q as GraduationCap, ct as Coffee, j as Megaphone, kt as ArrowRight, l as Sparkles, r as Users } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-footer-D8XPLK4z.mjs";
import { l as mentoring_girl_default, s as SiteNavbar } from "./site-navbar-DzTC3Ebp.mjs";
import { t as Reveal } from "./reveal-JZeUNUD2.mjs";
import { n as mentoring_circles_default, t as mentoring_books_default } from "./mentoring-books-DLNz2pgN.mjs";
import { n as mentoring_meetup_default, t as mentoring_laptop_default } from "./mentoring-laptop-C6ilSYDr.mjs";
import { t as PartnershipCards } from "./partnership-cards-Ci6J886r.mjs";
import { n as partnerPages, t as PARTNER_EMAIL } from "./partnership-data-4gEIbqRn.mjs";
import { n as speaking_laptop_default, r as speaking_microphone_default, t as mentoring_directory_default } from "./speaking-microphone-CAK0TzuA.mjs";
import { t as mentoring_coffee_default } from "./mentoring-coffee-B8OqJCS9.mjs";
import { t as speaking_speaker_default } from "./speaking-speaker-D8lNX6sx.mjs";
import { t as hero_scenery_default } from "./hero-scenery-Cn_cgsAr.mjs";
import { t as CsrImpactSection } from "./csr-impact-section-BM96SMrJ.mjs";
import { t as hero_characters_default } from "./hero-characters-DtZ3AUPt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partners.csr-C92xj36e.js
var import_jsx_runtime = require_jsx_runtime();
var speaking_books_default = "/assets/speaking-books-CaQdiWdX.png";
function getCsrData() {
	const page = partnerPages.find((p) => p.slug === "csr");
	if (!page) throw new Error("CSR partnership content is missing");
	return page;
}
var data = getCsrData();
var mail = (s) => `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent(`CSR Partnership: ${s}`)}`;
var speaking = [
	{
		icon: Heart,
		tint: "peach",
		art: speaking_books_default,
		title: "The Download Series",
		text: "Share career insights in monthly professional development talks for early-career women."
	},
	{
		icon: GraduationCap,
		tint: "sage",
		art: speaking_laptop_default,
		title: "Student Career Talks",
		text: "Help students navigate their path into tech, from career exploration to interview prep."
	},
	{
		icon: Mic,
		tint: "orange",
		art: speaking_microphone_default,
		title: "Fail Forward Series",
		text: "Quarterly C-suite storytelling about setbacks and lessons learned."
	},
	{
		icon: Megaphone,
		tint: "gold",
		art: speaking_speaker_default,
		title: "Custom Speaking Opportunities",
		text: "Solo sessions, panels, or Q&As on topics your experts choose."
	}
];
var mentoring = [
	{
		icon: Heart,
		tint: "peach",
		art: mentoring_circles_default,
		title: "DoraDAO Mentor Circles",
		text: "Join quarterly mentoring events with 1-6 mentors, fully managed by DoraDAO."
	},
	{
		icon: Megaphone,
		tint: "orange",
		art: mentoring_laptop_default,
		title: "Company-Sponsored Mentor Days",
		text: "A high-visibility, single-day mentoring experience that puts your team front and center."
	},
	{
		icon: Users,
		tint: "gold",
		art: mentoring_directory_default,
		title: "Mentoring Directory",
		text: "Flexible year-round mentoring on your employees' schedules."
	},
	{
		icon: Sparkles,
		tint: "sage",
		art: mentoring_meetup_default,
		title: "Local In-Person Mentor Events",
		text: "Host intimate mentoring meetups in your office or venue of choice."
	},
	{
		icon: Coffee,
		tint: "cream",
		art: mentoring_coffee_default,
		title: "Early Career Coffee Chats",
		text: "Casual monthly conversations connecting your team with early-career women in your city."
	},
	{
		icon: GraduationCap,
		tint: "seafoam",
		art: mentoring_books_default,
		title: "Student Career Talks",
		text: "Help students navigate their path into tech, from career exploration to interview prep."
	}
];
function CsrPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pr-page csr-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "csr-hero",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "csr-hero-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "csr-hero-scenery",
							src: hero_scenery_default,
							alt: "",
							"aria-hidden": "true",
							fetchPriority: "high"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "csr-hero-copy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "csr-kicker",
								children: data.kicker
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 90,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "More women leave tech than stay to lead. Your team can change that." })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 140,
							className: "csr-hero-art",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_characters_default,
								alt: "DoraDAO’s yellow-beret girl jumping with her purple friend",
								fetchPriority: "high"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 180,
							className: "csr-hero-description",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "csr-lead",
								children: data.lead
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "csr-sheet",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "csr-speaking",
						"aria-labelledby": "csr-speaking-title",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "csr-speaking-panel",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: 70,
								className: "csr-heading csr-speaking-heading",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "csr-heading-top",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "csr-heading-pill",
										children: "01 · Ways to partner"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "csr-heading-note",
										children: "Monthly talks, career sessions and C‑suite storytelling."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									id: "csr-speaking-title",
									className: "csr-heading-title",
									children: ["Share your team's expertise with the next generation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "of women in tech" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "csr-speaking-grid",
								children: speaking.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: i * 80,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "ghost",
										className: `csr-speaking-card speaking-${c.tint}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: mail(c.title),
											"aria-label": `Explore ${c.title}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "csr-speaking-icon",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
														size: 26,
														strokeWidth: 1.5
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: c.title }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.text }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "csr-speaking-arrow",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													className: "csr-speaking-art",
													src: c.art,
													alt: "",
													"aria-hidden": "true",
													loading: "lazy",
													width: 372,
													height: 416
												})
											]
										})
									})
								}, c.title))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "csr-speaking-feature",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "csr-speaking-feature-top",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Every program" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Registration, hosting and follow-up, fully handled." })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
								"From a one-hour coffee chat to a full mentor day, your people simply show up ready to engage while DoraDAO takes care of ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "everything behind the scenes" }),
								", planning, hosting and measuring the impact."
							] }) })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "csr-mentoring",
						"aria-labelledby": "csr-mentoring-title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "csr-mentor-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								className: "csr-mentor-lead-wrap",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									className: "csr-mentor-lead",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: mail("Mentoring Programs"),
										"aria-label": "Explore DoraDAO Mentoring Programs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "csr-mentor-brand",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 23 }), " DoraDAO"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
												id: "csr-mentoring-title",
												children: [
													"Mentoring",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Programs" })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "csr-mentor-stroke",
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: mentoring_girl_default,
												alt: "",
												"aria-hidden": "true",
												loading: "lazy",
												width: 640,
												height: 800
											})
										]
									})
								})
							}), mentoring.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 70,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									className: `csr-mentor-card mentor-${c.tint}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: mail(c.title),
										"aria-label": `Explore ${c.title}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "csr-mentor-icon",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
													size: 26,
													strokeWidth: 1.7
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: c.title }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.text }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "csr-mentor-arrow",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												className: "csr-mentor-art",
												src: c.art,
												alt: "",
												"aria-hidden": "true",
												loading: "lazy",
												width: 540,
												height: 540
											})
										]
									})
								})
							}, c.title))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CsrImpactSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "csr-invitation",
						"aria-labelledby": "csr-invitation-title",
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
											id: "csr-invitation-title",
											children: "Become a DoraDAO Partner"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your dedicated partnership manager will contact you within 2 business days." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											className: "csr-invitation-button",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: mail("Talk to us about partner opportunities"),
												children: ["Talk to us about partner opportunities ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
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
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
											className: "csr-invitation-heart",
											size: 30,
											strokeWidth: 2.4
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
											className: "csr-invitation-star",
											size: 36,
											strokeWidth: 1.8
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "csr-invitation-loop",
											viewBox: "0 0 100 65",
											fill: "none",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M5 20C25-10 58 13 43 43C28 69 16 40 44 25C63 14 84 19 94 34",
												stroke: "currentColor",
												strokeWidth: "4",
												strokeLinecap: "round"
											})
										})
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "csr-sec",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "csr-h2",
							children: ["Explore other ways to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", { children: "partner" })]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnershipCards, { exclude: "csr" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var SplitComponent = CsrPage;
//#endregion
export { SplitComponent as component };
