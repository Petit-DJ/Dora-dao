import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { $ as Globe, C as Palette, H as Leaf, J as Heart, U as Laptop, X as Handshake, c as Sprout, et as Gift, j as Megaphone, kt as ArrowRight, l as Sparkles, lt as Code, m as Search, r as Users, wt as Box, x as PenTool, xt as CalendarCheck } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-footer-D8XPLK4z.mjs";
import { s as SiteNavbar } from "./site-navbar-DzTC3Ebp.mjs";
import { a as portrait_6_default, i as portrait_5_default, n as portrait_2_default, r as portrait_4_default, t as portrait_1_default } from "./portrait-6-CzPu3iMF.mjs";
import { t as portrait_3_default } from "./portrait-3-r8IfpMP5.mjs";
import { t as Reveal } from "./reveal-JZeUNUD2.mjs";
import { t as dora_characters_default } from "./dora-characters-B2g2KVDU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hiring-zHqGuKrY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var characters_default = "/assets/characters-CsHPlniP.png";
var MAIL = "mailto:Connectdoradao@gmail.com?subject=";
var cats = [
	"All Roles",
	"Community",
	"Design",
	"Engineering",
	"Marketing",
	"Operations",
	"Content",
	"Other"
];
var roles = [
	{
		t: "Community Manager",
		c: "Community",
		type: "Full-time",
		d: "Build and grow vibrant communities around our programs and initiatives.",
		I: Users
	},
	{
		t: "Program Manager",
		c: "Operations",
		type: "Full-time",
		d: "Plan and execute fellowships, hackathons and community programs globally.",
		I: CalendarCheck
	},
	{
		t: "Content Creator",
		c: "Content",
		type: "Part-time",
		d: "Create engaging content across social media, blogs and newsletters.",
		I: PenTool
	},
	{
		t: "Design Lead",
		c: "Design",
		type: "Full-time",
		d: "Own the visual identity and design experiences across our products and programs.",
		I: Palette
	},
	{
		t: "Growth & Marketing",
		c: "Marketing",
		type: "Full-time",
		d: "Drive growth, partnerships and awareness for DoraDAO.",
		I: Megaphone
	},
	{
		t: "Frontend Developer",
		c: "Engineering",
		type: "Full-time",
		d: "Build and improve our products and digital tools for communities.",
		I: Code
	},
	{
		t: "Product Manager",
		c: "Other",
		type: "Full-time",
		d: "Define and ship products that empower creators and communities.",
		I: Box
	},
	{
		t: "Partnerships Lead",
		c: "Other",
		type: "Full-time",
		d: "Build strategic partnerships with communities, brands and organizations.",
		I: Handshake
	}
];
var perks = [
	[Globe, "Remote First"],
	[Users, "Global Team"],
	[Heart, "Meaningful Work"],
	[Sprout, "Learning & Growth"]
];
var why = [
	[
		Leaf,
		"Meaningful Impact",
		"Work on initiatives that create real opportunities and support communities globally."
	],
	[
		Users,
		"Global Community",
		"Be part of a diverse team of builders, creators and changemakers."
	],
	[
		Sprout,
		"Learning & Growth",
		"Access mentorship, resources and hands-on experience across Web3 and community building."
	],
	[
		Laptop,
		"Flexible Work",
		"Remote-first and flexible work environment that adapts to your life."
	],
	[
		Sparkles,
		"Ownership",
		"Take initiative, experiment and make a real difference in the work you do."
	],
	[
		Heart,
		"Collaborative Culture",
		"A kind, open and supportive team that values your ideas and individuality."
	],
	[
		Globe,
		"Global Exposure",
		"Work with partners, communities and creators across the world."
	],
	[
		Gift,
		"Perks & Benefits",
		"Access to events, swag and exclusive opportunities."
	]
];
function HiringPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All Roles");
	const list = (0, import_react.useMemo)(() => roles.filter((r) => (cat === "All Roles" || r.c === cat) && `${r.t} ${r.c} ${r.d}`.toLowerCase().includes(q.trim().toLowerCase())), [q, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pr-page pd-page hr-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hr-hero",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hr-hero-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pt-kicker",
								children: "We're hiring · Remote-first"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["Join our team to build a more open and ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "inclusive future." })] }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 100,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Be part of DoraDAO and help us create opportunities, communities, and tools that empower people everywhere." })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 150,
						className: "hr-hero-art",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: dora_characters_default,
							alt: "Girl in a yellow sprout beret pointing ahead with her friends",
							width: 676,
							height: 281
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pd-sign",
							children: [
								"Communities",
								"Opportunities",
								"Open Internet",
								"Real Impact"
							].map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w }, w))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 200,
						className: "hr-search-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "hr-search",
							onSubmit: (e) => {
								e.preventDefault();
								document.getElementById("roles")?.scrollIntoView({ behavior: "smooth" });
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									size: 18,
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "Search roles",
									value: q,
									onChange: (e) => setQ(e.target.value),
									placeholder: "Search roles (e.g. design, community, engineering...)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "pd-btn",
									children: ["Search ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hr-cats",
							children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: `pd-chip ${cat === c ? "is-on" : ""}`,
								"aria-pressed": cat === c,
								onClick: () => setCat(c),
								children: c
							}, c))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pd-sheet",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pd-sec hr-strip",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Join a global community of builders, creators and changemakers." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hr-avatars",
							children: [[
								portrait_1_default,
								portrait_2_default,
								portrait_3_default,
								portrait_4_default,
								portrait_5_default,
								portrait_6_default
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s,
								alt: "",
								loading: "lazy"
							}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+50" })]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hr-perks",
							children: perks.map(([I, l], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 70,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "pd-ic" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: l })] })
							}, l))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "roles",
						className: "pd-sec",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pd-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "pd-h2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "≈" }),
									" Open Roles ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "≈" })
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "pd-outline",
								onClick: () => {
									setCat("All Roles");
									setQ("");
								},
								children: ["View all roles ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
							})]
						}), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pd-sub",
							children: "No roles match your search yet, try another keyword or category."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hr-grid",
							children: list.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 60,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "pd-card hr-role",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.I, { className: "pd-ic hr-role-ic" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: r.t }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "hr-tags",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.c === "Other" ? r.t.includes("Product") ? "Product" : "Partnerships" : r.c }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.type })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: r.d }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											className: "hr-apply",
											href: `${MAIL}${encodeURIComponent(`Application: ${r.t}`)}`,
											children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
										})
									]
								})
							}, r.t))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pd-sec hr-purpose",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "hr-purpose-art",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: characters_default,
								alt: "DoraDAO friends working together",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 120,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "pd-h2",
								children: "More than a job. A bigger purpose."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pd-hand hr-purpose-text",
								children: "Work on real problems, learn from an incredible community, and create opportunities for people around the world."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pd-sec",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "pd-h2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "≈" }),
								" Why join DoraDAO? ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "≈" })
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hr-why",
							children: why.map(([I, t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 50,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pd-why-item hr-why-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "pd-ic" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: d })] })]
								})
							}, t))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "pd-sec hr-cta",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "pd-h2",
								children: "Find your place at DoraDAO."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ready to work on meaningful projects and be part of a global community? Explore open roles and apply today." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#roles",
								className: "pd-btn",
								children: ["View all open roles ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
							})
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { HiringPage as component };
