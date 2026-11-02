import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as PartnershipCards } from "./partnership-cards-Ci6J886r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partners-section-DK1cAzTN.js
var import_jsx_runtime = require_jsx_runtime();
function PartnersSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "partners",
		"aria-labelledby": "partners-title",
		className: "partners-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "partners-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "partners-eyebrow",
					children: "· Grow with DoraDAO ·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "partners-title",
					className: "partners-title",
					children: [
						"Help us keep emerging tech open to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-hero-orange",
							children: "every curious hooman"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnershipCards, { descriptions: true })
			]
		})
	});
}
//#endregion
export { PartnersSection };
