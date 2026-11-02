import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as Heart, St as Building2, c as Sprout, kt as ArrowRight, r as Users } from "../_libs/lucide-react.mjs";
import { n as mentoring_circles_default, t as mentoring_books_default } from "./mentoring-books-DLNz2pgN.mjs";
import { n as mentoring_meetup_default, t as mentoring_laptop_default } from "./mentoring-laptop-C6ilSYDr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partnership-cards-Ci6J886r.js
var import_jsx_runtime = require_jsx_runtime();
var options = [
	{
		slug: "csr",
		title: "CSR Partners",
		to: "/partners/csr",
		tint: "peach",
		icon: Users,
		art: mentoring_circles_default,
		body: "Collaborate with DoraDAO to create meaningful, on-ground and digital programs that drive education, skills, and opportunities for communities.",
		cta: "Explore CSR partnerships"
	},
	{
		slug: "philanthropic",
		title: "Philanthropic Partners",
		to: "/partners/philanthropic",
		tint: "gold",
		icon: Heart,
		art: mentoring_meetup_default,
		body: "Support DoraDAO's mission to empower individuals and communities through education, mentorship, and access to opportunities.",
		cta: "Support our mission"
	},
	{
		slug: "corporate",
		title: "Corporate Partners",
		to: "/partners/corporate",
		tint: "orange",
		icon: Building2,
		art: mentoring_laptop_default,
		body: "Work with DoraDAO to co-create programs, events, and initiatives that build skills, open opportunities, and create long-term impact at scale.",
		cta: "Partner with DoraDAO"
	},
	{
		slug: "donate",
		title: "Donate",
		to: "/partners/donate",
		tint: "sage",
		icon: Sprout,
		art: mentoring_books_default,
		body: "Your contribution helps us create more opportunities, support communities, and keep building a kinder, more open internet together.",
		cta: "Donate now"
	}
];
function PartnershipCards({ exclude, descriptions = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `partnership-cards ${descriptions ? "partnership-cards-home" : "partnership-cards-other"}`,
		children: options.filter((card) => card.slug !== exclude).map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "ghost",
			className: `csr-mentor-card partnership-choice mentor-${card.tint}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: card.to,
				"aria-label": card.cta,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "csr-mentor-icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, {
							size: 24,
							strokeWidth: 1.7,
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: card.slug === "philanthropic" ? "partnership-long-title" : void 0,
						children: card.title
					}),
					descriptions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: card.body }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "csr-mentor-arrow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							size: 19,
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "csr-mentor-art",
						src: card.art,
						alt: "",
						"aria-hidden": "true",
						loading: "lazy",
						width: 540,
						height: 540
					})
				]
			})
		}, card.slug))
	});
}
//#endregion
export { PartnershipCards as t };
