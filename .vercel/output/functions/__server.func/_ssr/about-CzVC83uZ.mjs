import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { gt as ChevronLeft, ht as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-footer-D8XPLK4z.mjs";
import { s as SiteNavbar } from "./site-navbar-DzTC3Ebp.mjs";
import { t as fellowship_png_asset_default } from "./fellowship.png.asset-D8h3JoVK.mjs";
import { a as portrait_6_default, i as portrait_5_default, n as portrait_2_default, r as portrait_4_default, t as portrait_1_default } from "./portrait-6-CzPu3iMF.mjs";
import { t as portrait_7_default } from "./portrait-7-RfVrmajc.mjs";
import { t as portrait_3_default } from "./portrait-3-r8IfpMP5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CzVC83uZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var portrait_8_default = "/assets/portrait-8-QKPzKggF.jpg";
var portrait_9_default = "/assets/portrait-9-AR6x9bWI.jpg";
var realFaces = [{
	name: "Nikhil Sharma",
	linkedin: "https://www.linkedin.com/in/sharmanikh03/"
}];
var samples = [
	portrait_1_default,
	portrait_2_default,
	portrait_3_default,
	portrait_4_default,
	portrait_5_default,
	portrait_6_default,
	portrait_7_default,
	portrait_8_default,
	portrait_9_default
].map((image, i) => ({
	name: `Sample member ${i + 1}`,
	image
}));
var rotate = (arr, n) => [...arr.slice(n), ...arr.slice(0, n)];
var faceRows = [
	[...realFaces, ...samples],
	rotate(samples, 3),
	[...rotate(samples, 6), ...realFaces]
];
var floaters = [
	{
		src: portrait_1_default,
		x: 10,
		y: 36,
		s: 138,
		v: .35
	},
	{
		src: portrait_2_default,
		x: 69,
		y: 0,
		s: 137,
		v: .6
	},
	{
		src: portrait_3_default,
		x: 89,
		y: 28,
		s: 137,
		v: .25
	},
	{
		src: portrait_4_default,
		x: 69,
		y: 60,
		s: 137,
		v: .45
	},
	{
		src: portrait_5_default,
		x: 24,
		y: 77,
		s: 216,
		v: .15
	},
	{
		src: portrait_6_default,
		x: 20,
		y: 73,
		s: 60,
		v: .7
	},
	{
		src: portrait_7_default,
		x: 0,
		y: -4,
		s: 150,
		v: .8
	}
];
var mission = "A community built by hoomans, for hoomans. We make emerging technology accessible, inclusive and human. Curiosity is welcome here. You can learn, create, contribute and find your people, then help the next person begin. Because the real measure of a community is what its people become capable of doing together.";
var reasons = [
	{
		title: "Different Doors. One Home.",
		text: "Learn with Girls Who Yap, launch with DoraHacks, contribute with Build with Us, serve with DoraHood or host a World Tour gathering. Your first interest does not have to define your whole journey."
	},
	{
		title: "Local Roots, Global Reach",
		text: "Opportunity travels in both directions. Local people bring their talent, ideas and culture into the global ecosystem, and shape gatherings around their own communities."
	},
	{
		title: "Work You Can Point To",
		text: "Projects, workshops, portfolios and community contributions give learning a practical direction. Participation is a chance to make something, not just watch."
	},
	{
		title: "Room to Take Ownership",
		text: "An attendee can become a contributor, host, mentor or program lead. Leadership means creating space for others to make decisions and grow."
	},
	{
		title: "Relationships That Continue",
		text: "Programs give us a reason to meet. Shared experiences, friendships and collaboration give us reasons to stay connected as our interests change."
	}
];
var steps = [
	{
		title: "Discover",
		text: "Find a program that fits where you are, from writing your first line of code to shipping your own product."
	},
	{
		title: "Join",
		text: "Apply or sign up, and get introduced to the people, channels and mentors you'll be working alongside."
	},
	{
		title: "Learn",
		text: "Workshops, live sessions and community calls give you the skills and context to keep moving forward."
	},
	{
		title: "Build",
		text: "Team up with peers on real projects during hackathons, cohorts and sprints, with support at every step."
	},
	{
		title: "Share",
		text: "Present your work, celebrate small wins and receive honest, kind feedback from the community."
	},
	{
		title: "Give Back",
		text: "Become a mentor, speaker or organiser and help the next person begin their own journey."
	}
];
var tabs = [
	{
		id: "about",
		label: "About"
	},
	{
		id: "why",
		label: "Why Us"
	},
	{
		id: "process",
		label: "Process"
	},
	{
		id: "difference",
		label: "Difference"
	},
	{
		id: "team",
		label: "Team"
	}
];
var team = [
	{
		role: "Founder",
		image: portrait_2_default
	},
	{
		role: "Community Lead",
		image: portrait_8_default
	},
	{
		role: "Programs Lead",
		image: portrait_9_default
	}
];
function useScrollY() {
	const [y, setY] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const on = () => setY(window.scrollY);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return y;
}
function useProgress(ref, y, start = .85, end = .25) {
	const [p, setP] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const vh = window.innerHeight;
		const total = r.height + vh * (start - end);
		setP(Math.min(1, Math.max(0, (vh * start - r.top) / total)));
	}, [
		y,
		ref,
		start,
		end
	]);
	return p;
}
function Wave({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: `ab-wave ${className}`,
		viewBox: "0 0 180 20",
		preserveAspectRatio: "none",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M2 12 Q 17 2 32 12 T 62 12 T 92 12 T 122 12 T 152 12 T 178 12",
			fill: "none",
			strokeWidth: "7",
			strokeLinecap: "round"
		})
	});
}
function About() {
	const y = useScrollY();
	const [active, setActive] = (0, import_react.useState)("about");
	const missionRef = (0, import_react.useRef)(null);
	const swirlRef = (0, import_react.useRef)(null);
	const track = (0, import_react.useRef)(null);
	const mp = useProgress(missionRef, y, .9, .35);
	const sp = useProgress(swirlRef, y, 1, .2);
	const words = mission.split(" ");
	(0, import_react.useEffect)(() => {
		const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
		tabs.forEach((t) => {
			const el = document.getElementById(t.id);
			if (el) io.observe(el);
		});
		return () => io.disconnect();
	}, []);
	const slide = (dir) => track.current?.scrollBy({
		left: dir * 367,
		behavior: "smooth"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "ab bg-ab-cream text-ab-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "about",
				className: "ab-hero",
				children: [floaters.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: f.src,
					alt: "",
					"aria-hidden": true,
					className: "ab-float",
					style: {
						left: `${f.x}%`,
						top: `${f.y}%`,
						width: f.s,
						height: f.s * (i === 4 ? .72 : 1),
						transform: `translateY(${-y * f.v}px)`
					}
				}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ab-hero-copy",
					style: { transform: `translateY(${y * .15}px)` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"We are",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"DoraDAO"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A nonprofit, people-first ecosystem where curiosity becomes contribution, strangers become collaborators, and you find a place you can help shape." })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "why",
				className: "ab-green",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: missionRef,
						className: "ab-mission",
						children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							style: { opacity: mp * words.length > i ? 1 : .18 },
							children: [w, " "]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ab-wrap ab-trust",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "ab-h2 ab-trust-title",
								children: [
									"Why People",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ab-trust-word",
										children: ["Trust", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wave, { className: "ab-wave-yellow" })]
									}),
									" ",
									"DoraDAO"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ab-split",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									loading: "lazy",
									decoding: "async",
									src: fellowship_png_asset_default.url,
									alt: "DoraDAO community members working together",
									className: "ab-trust-img"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Trust grows through experience, not a promise on a page. We build toward it by making room for people to contribute, giving program leads responsibility and helping members create work they can show. A newcomer can ask a basic question, a creator can find collaborators, and a volunteer can grow into a leader. Belonging, honest communication and shared ownership matter as much as the size of the community." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ab-row-head",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "What Sets Us Apart" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Previous",
									onClick: () => slide(-1),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 20 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Next",
									onClick: () => slide(1),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 20 })
								})] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: track,
						className: "ab-cards",
						children: reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "ab-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: r.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: r.text })]
						}, r.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "process",
				className: "ab-beige",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: swirlRef,
						className: "ab-wrap ab-journey",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ab-journey-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ab-journey-eyebrow",
									children: "How it works"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "ab-journey-title",
									children: ["A Journey Built ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Around You" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ab-journey-intro",
									children: "There is no single route through DoraDAO. Begin wherever your curiosity takes you, and find new ways to learn, contribute and help others grow."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ab-journey-art",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "ab-journey-path",
								viewBox: "0 0 400 400",
								fill: "none",
								"aria-hidden": true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M30 330 C 10 160, 140 40, 260 60 C 380 80, 400 240, 300 320 C 220 380, 120 340, 140 260",
									strokeWidth: "22",
									strokeLinecap: "round",
									pathLength: 1,
									style: {
										strokeDasharray: 1,
										strokeDashoffset: Math.max(0, 1 - sp * 1.6)
									}
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								loading: "lazy",
								decoding: "async",
								src: portrait_4_default,
								alt: "A DoraDAO member smiling",
								className: "ab-journey-img"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "ab-wrap ab-steps ab-steps-v2",
						children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(i + 1).padStart(2, "0") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: s.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.text })
						] }, s.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ab-wrap ab-tags",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Friendly from day one" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "One welcoming community" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built for every journey" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "difference",
				className: "ab-cream-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ab-wrap ab-split ab-diff",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "ab-h3",
						children: [
							"Not a Typical",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative",
								children: ["Community", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wave, { className: "ab-wave-lilac" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ab-origin-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In May 2025, a heartfelt conversation brought a simple need into focus: a place where people could be themselves, valued for who they are, not just what they produce. Around us, opportunities in emerging technology were growing, but access to them was uneven." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "DoraDAO began as a bridge between global opportunities and curious people in India and emerging markets. Opportunity should travel in both directions: the world should discover the talent, ideas and communities already growing here, too." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Inspired by Dora the Explorer, we make curiosity a legitimate starting point. What began as a bridge is becoming a shared ecosystem, somewhere to belong, contribute and create opportunities for others." })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ab-wrap",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ab-compare",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								loading: "lazy",
								decoding: "async",
								src: portrait_3_default,
								alt: "",
								"aria-hidden": true,
								className: "ab-avatar ab-avatar-blue"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
								"A Place",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"to Begin"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: [
								"Follow your curiosity",
								"Find an initiative that fits",
								"Ask without embarrassment",
								"Meet people beyond your circle"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t }, t)) })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								loading: "lazy",
								decoding: "async",
								src: portrait_6_default,
								alt: "",
								"aria-hidden": true,
								className: "ab-avatar ab-avatar-green"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
								"A Place",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"to Help Shape"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: [
								"Create tangible work",
								"Contribute in your own way",
								"Grow into responsibility",
								"Help someone else begin"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t }, t)) })
						] })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "team",
				className: "ab-cream-panel",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ab-wrap ab-split",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "ab-h3",
							children: [
								"The People",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative",
									children: ["Behind", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wave, { className: "ab-wave-yellow" })]
								}),
								" ",
								"DoraDAO"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ab-team-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "DoraDAO comes to life through its organizers, mentors, volunteers, creators and local hosts. Different contributions count, from welcoming a newcomer to building a product or leading a program." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our founding team works to create space for others. Program managers take responsibility for their initiatives, and the wider community brings its own stories, traditions and leadership. The mission is bigger than any one person." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "ab-ngo-link",
										href: "https://dorahood.vercel.app/",
										target: "_blank",
										rel: "noreferrer",
										children: "Explore DoraHood NGO →"
									}),
									" ",
									"Turn the desire to serve into social-impact contributions."
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "ab-wrap ab-team",
						children: team.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							loading: "lazy",
							decoding: "async",
							src: m.image,
							alt: ""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: m.role }) })] }, m.role))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ab-network",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The real faces behind every DoraDAO moment." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "We work with an incredible global network of builders, mentors and friends." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ab-faces",
						children: faceRows.map((row, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `ab-faces-row ${r % 2 ? "is-reverse" : ""}`,
							children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "ab-faces-track",
								"aria-hidden": copy === 1 || void 0,
								children: row.map((f, i) => {
									const inner = f.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: f.image,
										alt: copy ? "" : f.name,
										loading: "lazy"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ab-face-initials",
										children: f.name.split(" ").map((w) => w[0]).join("")
									});
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "ab-face",
										title: f.name,
										children: f.linkedin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: f.linkedin,
											target: "_blank",
											rel: "noreferrer",
											tabIndex: copy ? -1 : void 0,
											"aria-label": `${f.name} on LinkedIn`,
											children: inner
										}) : inner
									}, i);
								})
							}, copy))
						}, r))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "ab-tabs",
				"aria-label": "About sections",
				children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${t.id}`,
					className: active === t.id ? "is-active" : "",
					children: t.label
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { About as component };
