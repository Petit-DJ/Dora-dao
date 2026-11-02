import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { At as ArrowLeft, E as Minus, J as Heart, X as Handshake, a as TreePalm, bt as CalendarDays, kt as ArrowRight, o as TentTree, p as Send, q as House, r as Users, st as Coins, y as Plus } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-footer-D8XPLK4z.mjs";
import { s as SiteNavbar } from "./site-navbar-DzTC3Ebp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-ZvwpKDhX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	{
		label: "General",
		Icon: House
	},
	{
		label: "Programs",
		Icon: TentTree
	},
	{
		label: "Community",
		Icon: Users
	},
	{
		label: "Partnerships",
		Icon: Handshake
	}
];
var faqs = [
	{
		q: "What is GWY Island?",
		Icon: TreePalm,
		tabs: ["General", "Community"],
		a: "GWY Island is a global community by DoraDAO that brings together builders, creators, and changemakers through programs, events, and collaborations. It's a space to learn, build, and create real-world impact, together."
	},
	{
		q: "Who can join GWY Island?",
		Icon: Users,
		tabs: ["General", "Community"],
		a: "Anyone curious to learn, build or share, students, professionals, creators and first-time builders from all walks of life are welcome."
	},
	{
		q: "What kind of programs do you run?",
		Icon: TentTree,
		tabs: ["General", "Programs"],
		a: "Fellowships, conferences, hackathons, mentorship and community weeks, from GirlsWhoYap to DoraHacks, DWoC, WORLD TOUR ft. Dora, AiFest, M2M Mentorship and Hooman."
	},
	{
		q: "Are the events online or in person?",
		Icon: CalendarDays,
		tabs: ["General", "Programs"],
		a: "Both. Each program shares its own format, dates and location when it opens."
	},
	{
		q: "Is there any cost to join?",
		Icon: Coins,
		tabs: ["General", "Community"],
		a: "Joining details are shared with each program when it opens. Drop us a message if you'd like to know more."
	},
	{
		q: "How can I become a partner?",
		Icon: Heart,
		tabs: ["General", "Partnerships"],
		a: "Reach out through Contact us and tell us what you'd like to build together, our team will get back to you."
	},
	{
		q: "Still have a question?",
		Icon: Send,
		tabs: [
			"General",
			"Community",
			"Partnerships",
			"Programs"
		],
		a: "We're just a message away. Tap Contact us and say hello."
	}
];
function FaqContent() {
	const [tab, setTab] = (0, import_react.useState)("General");
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "faq-directory-topics",
		role: "group",
		"aria-label": "FAQ topics",
		children: tabs.map(({ label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			"aria-pressed": tab === label,
			onClick: () => {
				setTab(label);
				setOpen(null);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" }), label]
		}, label))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "faq-directory-list",
		children: faqs.filter((f) => f.tabs.includes(tab)).map(({ q, a }, i) => {
			const expanded = open === q;
			const id = `faq-answer-${tab.toLowerCase()}-${i}`;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				className: "faq-directory-question",
				"aria-expanded": expanded,
				"aria-controls": id,
				onClick: () => setOpen(expanded ? null : q),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "faq-directory-toggle",
					"aria-hidden": "true",
					children: expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id,
				hidden: !expanded,
				className: "faq-directory-answer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: a })
			})] }, q);
		})
	})] });
}
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "faq-directory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "faq-directory-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "faq-directory-back",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							size: 16,
							"aria-hidden": "true"
						}), "Back to DoraDAO"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "faq-gateway-note",
							children: "Questions people actually ask"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Before you show up, here's everything." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "faq-directory-intro",
							children: "Everything you need to know about GWY Island, our programs, community, partnerships, and more. Still curious? We’re just a message away."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqContent, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "faq-directory-contact",
						"aria-labelledby": "faq-contact-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "faq-gateway-note",
							children: "One more thing?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "faq-contact-heading",
							children: "Still have a question we didn't cover?"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "faq-gateway-link",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:Connectdoradao@gmail.com?subject=DoraDAO%20question",
								children: ["Contact us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { FaqPage as component };
