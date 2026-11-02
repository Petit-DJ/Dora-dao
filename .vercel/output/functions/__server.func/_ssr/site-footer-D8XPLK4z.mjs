import { n as __exportAll$1 } from "../_runtime.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as Briefcase, F as Mail, J as Heart, Q as GraduationCap, W as Instagram, Y as HeartHandshake, bt as CalendarDays, c as Sprout, h as Rss, kt as ArrowRight, z as Linkedin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-footer-D8XPLK4z.js
var site_footer_D8XPLK4z_exports = /* @__PURE__ */ __exportAll$1({
	n: () => site_footer_exports,
	t: () => SiteFooter
});
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var footer_dora_default = "/assets/footer-dora-D0DywqRj.png";
var footer_botanical_default = "/assets/footer-botanical-C6-GkdZi.jpg";
var site_footer_exports = /* @__PURE__ */ __exportAll({ SiteFooter: () => SiteFooter });
var email = "Connectdoradao@gmail.com";
var socials = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/doradao/",
		Icon: Linkedin
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/connectdoradao/",
		Icon: Instagram
	},
	{
		label: "Twitter",
		href: "https://x.com/connectdoradao",
		mark: "𝕏"
	},
	{
		label: "Substack",
		href: "https://doradao.substack.com",
		Icon: Rss
	},
	{
		label: "Luma",
		href: "https://luma.com/connectdoradao",
		Icon: CalendarDays
	},
	{
		label: "Product Hunt",
		href: "https://www.producthunt.com/@dora_dao",
		mark: "P"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "df-footer",
		id: "footer",
		"aria-label": "DoraDAO footer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "df-crown",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "df-gold-loop" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "df-leaf df-leaf-one" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "df-leaf df-leaf-two" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "df-dora",
					src: footer_dora_default,
					alt: "",
					width: 700,
					height: 525,
					loading: "lazy",
					decoding: "async"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "df-heart",
					viewBox: "0 0 80 80",
					fill: "none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 66C22 48 9 31 17 20C25 10 37 22 40 30C46 11 60 8 66 19C75 35 54 55 40 66Z",
						stroke: "currentColor",
						strokeWidth: "5",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "df-panel",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "df-wave",
					viewBox: "0 0 1920 100",
					preserveAspectRatio: "none",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 100C30 12 142 30 280 38S560 1 720 30S940 32 1060 45S1220 78 1360 38S1600 4 1760 30S1890 42 1920 100V100H0Z" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "df-botanical",
					src: footer_botanical_default,
					alt: "",
					"aria-hidden": "true",
					width: 1920,
					height: 768,
					loading: "lazy",
					decoding: "async"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "df-inner",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "df-contact",
							"aria-labelledby": "df-contact-title",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									id: "df-contact-title",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "df-contact-grid",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "df-contact-copy",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											"A worldwide community.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"One friendly hello away."
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "df-email",
											href: `mailto:${email}`,
											children: email
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
										className: "df-connect",
										"aria-label": "Connect with DoraDAO",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `mailto:${email}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}),
													"Email us ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/programs/gwy-fellowship",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {}),
													"Fellowship ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/pricing",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, {}),
													"Sponsor ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/hiring",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {}),
													"Career ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "https://dorahood.vercel.app/",
												target: "_blank",
												rel: "noreferrer",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}),
													"DoraHood NGO ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
												]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									className: "df-socials",
									"aria-label": "DoraDAO social profiles",
									children: socials.map(({ label, href, Icon, mark }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href,
										target: "_blank",
										rel: "noreferrer",
										"aria-label": `DoraDAO on ${label}`,
										title: label,
										children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: mark
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
									}, label))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "df-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									className: "df-wordmark",
									"aria-label": "DoraDAO home",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { "aria-hidden": "true" }), "DoraDAO"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "df-tagline",
									children: "People. Programs. A more open internet."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "df-underline",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "df-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "df-join",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/",
											hash: "programs",
											children: ["Join DoraDAO ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										className: "df-partner",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `mailto:${email}?subject=Partner%20with%20DoraDAO`,
											children: ["Partner With Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
										})
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "df-links",
							"aria-label": "Footer quick links",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Quick Links" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "df-link-columns",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										children: "About"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										hash: "programs",
										children: "Programs"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										hash: "community-mosaic",
										children: "Community"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/products",
										children: "Products"
									}) })
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/programs/gwy-fellowship",
										children: "For Builders"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/partners/csr",
										children: "For Partners"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/pricing",
										children: "Sponsor"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${email}`,
										children: "Contact"
									}) })
								] })]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "df-bottom",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 DoraDAO. All rights reserved." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built with people, for people." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${email}?subject=DoraDAO%20privacy%20enquiry`,
							children: ["Privacy enquiries ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { site_footer_D8XPLK4z_exports as n, SiteFooter as t };
