import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { l as Sparkles, r as Users } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/csr-impact-section-BM96SMrJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var impact_friend_default = "/assets/impact-friend-PqG0_rIj.png";
var csrImpactCards = [
	{
		title: "Impact you can take straight to your leadership team",
		text: "We track career outcomes, job placements, and confidence gains, then deliver transparent reports that show your leadership team (and your employees) the real difference you're making."
	},
	{
		title: "We handle the logistics. Your team just shows up.",
		text: "Let us worry about registration, platform hosting, member recruitment, and follow-up reporting. Your employees just show up to meaningful conversations."
	},
	{
		title: "More than a moment. A movement.",
		text: "Your team starts real mentoring relationships, they become better leaders, and join a movement driving economic impact for women in tech. That's what year-round engagement looks like."
	},
	{
		title: "Show up for those who don't have a roadmap",
		text: "Many in our community are first-generation college students. The women your team mentors are breaking generational cycles, the kind of impact that belongs in your annual report."
	}
];
function CsrImpactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactCardStack, {
		id: "csr-impact-title",
		badge: "02 · Why it matters",
		note: "Tracked, reported and built to last.",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["More voices. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "More possibilities." })] }),
		cards: csrImpactCards
	});
}
function ImpactCardStack({ id, badge, note, title, cards, className = "" }) {
	const sectionRef = (0, import_react.useRef)(null);
	const sceneRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const section = sectionRef.current;
		const scene = sceneRef.current;
		if (!section || !scene) return;
		const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
		let frame = 0;
		const update = () => {
			frame = 0;
			if (motion.matches) return;
			const top = Number.parseFloat(getComputedStyle(scene).top) || 0;
			const distance = section.offsetHeight - scene.offsetHeight;
			const last = cards.length - 1;
			const progress = Math.max(0, Math.min(last, (top - section.getBoundingClientRect().top) / Math.max(1, distance) * last));
			setActive(Math.min(last, Math.floor(progress + .001)));
			scene.querySelectorAll(".csr-impact-card").forEach((card, i) => {
				const incoming = Math.max(0, Math.min(1, i - progress));
				const behind = Math.max(0, Math.min(2, progress - i));
				card.style.setProperty("--rise", String(incoming));
				card.style.setProperty("--behind", String(behind));
			});
		};
		const schedule = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", schedule, { passive: true });
		window.addEventListener("resize", schedule);
		motion.addEventListener("change", schedule);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", schedule);
			window.removeEventListener("resize", schedule);
			motion.removeEventListener("change", schedule);
		};
	}, [cards.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: sectionRef,
		className: `csr-impact ${className}`,
		"aria-labelledby": id,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: sceneRef,
			className: "csr-impact-scene",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "csr-impact-heading csr-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "csr-heading-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "csr-heading-pill",
							children: badge
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "csr-heading-note",
							children: note
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id,
						className: "csr-heading-title",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "csr-impact-rays",
						"aria-hidden": "true"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "csr-impact-orange",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
						className: "csr-impact-spark",
						size: 54,
						strokeWidth: 1.3,
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "csr-impact-doodle",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "csr-impact-stack",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "csr-impact-friend",
								src: impact_friend_default,
								alt: "",
								"aria-hidden": "true",
								loading: "lazy",
								width: 720,
								height: 610
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "csr-impact-backing backing-two",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "csr-impact-backing backing-one",
								"aria-hidden": "true"
							}),
							cards.map((card, i) => {
								const Icon = card.icon ?? Users;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: `csr-impact-card impact-card-${i}`,
									"data-active": active === i,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "csr-impact-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											size: 38,
											strokeWidth: 2.5,
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "csr-impact-copy",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "csr-impact-meta",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "DoraDAO" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													String(i + 1).padStart(2, "0"),
													" / ",
													String(cards.length).padStart(2, "0")
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: card.title }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: card.text })
										]
									})]
								}, card.title);
							})
						]
					})
				]
			})]
		})
	});
}
//#endregion
export { ImpactCardStack as n, CsrImpactSection as t };
