import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as MessageCircleQuestionMark, kt as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-section-CVRjcT6C.js
var import_jsx_runtime = require_jsx_runtime();
function FaqSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		"aria-labelledby": "faq-title",
		className: "faq-gateway",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "faq-gateway-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleQuestionMark, {
					className: "faq-gateway-symbol",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "faq-gateway-note",
					children: "Questions people actually ask"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "faq-title",
					children: "Before you show up, here's everything."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "faq-gateway-link",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/faq",
						children: ["Open the FAQ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
					})
				})
			]
		})
	});
}
//#endregion
export { FaqSection };
