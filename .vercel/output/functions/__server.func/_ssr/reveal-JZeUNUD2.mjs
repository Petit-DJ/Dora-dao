import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reveal-JZeUNUD2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useInView(threshold = .2) {
	const ref = (0, import_react.useRef)(null);
	const [seen, setSeen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) {
				setSeen(true);
				io.disconnect();
			}
		}, { threshold });
		io.observe(el);
		return () => io.disconnect();
	}, [threshold]);
	return [ref, seen];
}
function Reveal({ children, delay = 0, className = "" }) {
	const [ref, seen] = useInView(.15);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `pr-reveal ${seen ? "is-in" : ""} ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
/** Green squiggle divider that draws itself when scrolled into view. */
function Squiggle() {
	const [ref, seen] = useInView(.4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		ref,
		className: `sc-squiggle ${seen ? "is-in" : ""}`,
		viewBox: "0 0 600 60",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 30 C120 52 230 50 330 36 C360 30 380 10 350 12 C320 14 330 46 380 44 C460 40 520 30 590 22" })
	});
}
//#endregion
export { Squiggle as n, useInView as r, Reveal as t };
