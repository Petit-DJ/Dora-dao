import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { B as Link2, D as Mic, Et as Award, G as Image, J as Heart, L as LoaderCircle, Q as GraduationCap, S as Pause, T as Monitor, Tt as BookOpen, V as Lightbulb, _ as Rocket, at as Copy, b as Play, c as Sprout, g as RotateCw, it as Download, j as Megaphone, kt as ArrowRight, l as Sparkles, nt as ExternalLink, r as Users, s as Star, tt as FileText, vt as Check } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-footer-D8XPLK4z.mjs";
import { l as mentoring_girl_default, s as SiteNavbar } from "./site-navbar-DzTC3Ebp.mjs";
import { n as Squiggle, t as Reveal } from "./reveal-JZeUNUD2.mjs";
import { n as mentoring_circles_default, t as mentoring_books_default } from "./mentoring-books-DLNz2pgN.mjs";
import { n as speaking_laptop_default, r as speaking_microphone_default, t as mentoring_directory_default } from "./speaking-microphone-CAK0TzuA.mjs";
import { t as speaking_speaker_default } from "./speaking-speaker-D8lNX6sx.mjs";
import { n as ImpactCardStack } from "./csr-impact-section-BM96SMrJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-B6_Cg2Te.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var opening_scenery_default = "/assets/opening-scenery-AonAwfUl.jpg";
var certify_reference_png_asset_default = {
	version: 1,
	asset_id: "e56bd67a-c383-48ad-9b85-22c939b5a8b8",
	project_id: "1867a2f3-a7e9-402e-ad69-09b8be648dc4",
	url: "/media/program-photos-conference-6.webp",
	r2_key: "a/v1/8554b99e-3125-4fcb-a6bb-0e4b9685c09a/e56bd67a-c383-48ad-9b85-22c939b5a8b8/certify-reference.png",
	original_filename: "certify-reference.png",
	size: 258873,
	content_type: "image/png",
	created_at: "2026-10-18T13:56:49Z"
};
var hack_reference_png_asset_default = {
	version: 1,
	asset_id: "8bb29d55-628e-4649-9233-198bb431fb40",
	project_id: "1867a2f3-a7e9-402e-ad69-09b8be648dc4",
	url: "/media/program-photos-dorahacks-1.webp",
	r2_key: "a/v1/8554b99e-3125-4fcb-a6bb-0e4b9685c09a/8bb29d55-628e-4649-9233-198bb431fb40/hack-reference.png",
	original_filename: "hack-reference.png",
	size: 263693,
	content_type: "image/png",
	created_at: "2026-10-18T13:56:52Z"
};
var book_art_default = "/assets/book-art-BMmT9fXb.png";
var community_portraits_png_asset_default = {
	version: 1,
	asset_id: "526d43e6-ce35-42d1-aed8-21e465bf2517",
	project_id: "1867a2f3-a7e9-402e-ad69-09b8be648dc4",
	url: "/media/program-photos-fellowship-8.webp",
	r2_key: "a/v1/8554b99e-3125-4fcb-a6bb-0e4b9685c09a/526d43e6-ce35-42d1-aed8-21e465bf2517/community-portraits.png",
	original_filename: "community-portraits.png",
	size: 10897,
	content_type: "image/png",
	created_at: "2026-10-18T13:56:56Z"
};
var offerings = [
	{
		name: "DoraCertify",
		description: "On-chain certificates for real contributions and learning.",
		icon: Award,
		art: certify_reference_png_asset_default.url,
		tint: "certify"
	},
	{
		name: "ProductHack",
		description: "Turn ideas into real products with the right people and support.",
		icon: Lightbulb,
		art: hack_reference_png_asset_default.url,
		tint: "hack"
	},
	{
		name: "CCBook",
		description: "A community-powered knowledge hub for the open internet.",
		icon: BookOpen,
		art: book_art_default,
		tint: "book"
	}
];
function ProductsOpening() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
		const narrow = window.matchMedia("(max-width: 600px)");
		const update = () => setProgress(reduce.matches || narrow.matches ? 0 : Math.min(1, window.scrollY / window.innerHeight));
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "po-opening",
		"aria-labelledby": "products-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "po-scenery",
				src: opening_scenery_default,
				alt: "",
				width: 1536,
				height: 1024,
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "po-dim",
				style: { opacity: progress * .12 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "po-copy",
				style: {
					transform: `scale(${1 - progress * .2})`,
					opacity: 1 - progress * .7
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "po-proof",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: community_portraits_png_asset_default.url,
							alt: "",
							width: 76,
							height: 27
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"10K+ creators & builders",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"growing with DoraDAO"
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "po-title-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
								className: "po-sparkles",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								id: "products-title",
								children: [
									"Tools for a more",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "open internet." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "po-doodle",
								viewBox: "0 0 60 90",
								fill: "none",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M9 12c39 11 43 45 22 43-23-2-6-27 7-15 18 18 0 41-25 33M46 3l-6 14M55 24l-13 3M10 48l-4 14",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "po-description",
						children: [
							"Products, programs and infrastructure to help creators,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "po-desktop-break" }),
							" builders and communities grow, together."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "po-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "po-explore",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#digital",
								children: ["Explore Products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "po-join",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/#programs",
								children: ["Join DoraDAO ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "po-cards",
				children: offerings.map(({ name, description, icon: Icon, art, tint }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `po-card po-card-${tint}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "po-card-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "po-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "icon",
								className: "po-arrow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:Connectdoradao@gmail.com?subject=${encodeURIComponent(name)}`,
									"aria-label": `Ask about ${name}`,
									title: `Ask about ${name}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "po-card-art",
						src: art,
						loading: "lazy",
						decoding: "async",
						alt: name === "DoraCertify" ? "Dora with a certificate of contribution" : name === "ProductHack" ? "Dora building together with a laptop and project checklist" : "Community knowledge library and illustrated books",
						width: 360,
						height: 320
					})]
				}, name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "po-tail",
				viewBox: "0 0 1440 80",
				preserveAspectRatio: "none",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 20Q190 90 400 48T810 40T1180 55T1440 15V80H0Z" })
			})
		]
	});
}
var digitalProducts = [
	{
		id: "certify",
		name: "DoraCertify",
		category: "Certificates & credentials",
		headline: "Give every achievement its moment.",
		description: "One certificate design, one spreadsheet, and personalised certificates for your whole community.",
		features: [
			"Personalised certificates",
			"Spreadsheet imports",
			"Verification IDs & ZIP exports"
		],
		url: "https://doracertifier.lovable.app",
		tone: "sage"
	},
	{
		id: "panelly",
		name: "Panelly",
		category: "Dora Comic Book",
		headline: "Your story. A whole new panel.",
		description: "Turn your stories and photos into a comic book, and give your community a different way to share its journey.",
		features: [
			"Stories & photo uploads",
			"Comic book creation",
			"Creative storytelling"
		],
		url: "https://doracomicbook.lovable.app",
		tone: "gold"
	},
	{
		id: "hacks",
		name: "DoraHacks",
		category: "Build & launch together",
		headline: "Good ideas deserve a launch.",
		description: "Explore DoraHacks 2.0 and discover a space for builders to create, share and launch together.",
		features: [
			"Builder community",
			"Project discovery",
			"Collaborative launches"
		],
		url: "https://dorahacks.lovable.app",
		tone: "peach"
	}
];
var icons = [
	Award,
	BookOpen,
	Rocket
];
function DigitalProducts() {
	const [active, setActive] = (0, import_react.useState)(0);
	const [visited, setVisited] = (0, import_react.useState)(false);
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	const [interactive, setInteractive] = (0, import_react.useState)(false);
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	const [slow, setSlow] = (0, import_react.useState)(false);
	const [revision, setRevision] = (0, import_react.useState)(0);
	const section = (0, import_react.useRef)(null);
	const product = digitalProducts[active] ?? digitalProducts[0];
	(0, import_react.useEffect)(() => {
		const element = section.current;
		if (!element) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				setVisited(true);
				if (window.matchMedia("(min-width: 768px)").matches && !navigator.connection?.saveData) setEnabled(true);
				observer.disconnect();
			}
		}, { rootMargin: "0px" });
		observer.observe(element);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		setLoaded(false);
		setSlow(false);
		if (!enabled) return;
		const timeout = window.setTimeout(() => setSlow(true), 15e3);
		return () => window.clearTimeout(timeout);
	}, [
		active,
		enabled,
		revision
	]);
	const choose = (index) => {
		setActive(index);
		setInteractive(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "digital",
		className: "pd-sec digital-suite",
		ref: section,
		"aria-labelledby": "digital-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "digital-heading",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "digital-eyebrow",
					children: "Made for hoomans who make things"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "digital-title",
					children: ["Our digital ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "products." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Celebrate a milestone. Tell your story. Launch an idea. A little less admin, a lot more possibility." })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "digital-console",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "digital-details",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "digital-tabs",
					role: "tablist",
					"aria-label": "Digital products",
					children: digitalProducts.map((item, index) => {
						const Icon = icons[index] ?? Award;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							role: "tab",
							id: `digital-tab-${item.id}`,
							"aria-selected": index === active,
							"aria-controls": "digital-product-panel",
							tabIndex: index === active ? 0 : -1,
							"data-tone": item.tone,
							onClick: () => choose(index),
							onKeyDown: (event) => {
								if ([
									"ArrowDown",
									"ArrowRight",
									"ArrowUp",
									"ArrowLeft",
									"Home",
									"End"
								].includes(event.key)) {
									event.preventDefault();
									const next = event.key === "Home" ? 0 : event.key === "End" ? 2 : (active + (["ArrowDown", "ArrowRight"].includes(event.key) ? 1 : 2)) % 3;
									choose(next);
									document.getElementById(`digital-tab-${digitalProducts[next]?.id}`)?.focus();
								}
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "digital-product-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 22 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.category })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })
							]
						}, item.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "digital-product-panel",
					role: "tabpanel",
					"aria-labelledby": `digital-tab-${product.id}`,
					className: "digital-product-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: product.headline }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.description }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: product.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }), feature] }, feature)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "digital-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "digital-launch",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: product.url,
									target: "_blank",
									rel: "noopener noreferrer",
									children: [
										"Open ",
										product.name,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 15 })
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "link",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:Connectdoradao@gmail.com?subject=${encodeURIComponent(`${product.name} for our community`)}`,
									children: ["For your community", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
								})
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "digital-browser",
				"data-tone": product.tone,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "digital-browser-bar",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "digital-browser-dots",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "digital-address",
								children: new URL(product.url).hostname
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": "Reload live preview",
								title: "Reload live preview",
								disabled: !enabled,
								onClick: () => {
									setLoaded(false);
									setRevision((value) => value + 1);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { size: 15 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": enabled ? "Pause live preview" : "Load live preview",
								title: enabled ? "Pause live preview" : "Load live preview",
								onClick: () => {
									setEnabled(!enabled);
									setInteractive(false);
								},
								children: enabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { size: 15 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 15 })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "digital-preview",
						children: [visited && enabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: product.url,
							title: `${product.name} live app`,
							loading: "lazy",
							referrerPolicy: "strict-origin-when-cross-origin",
							tabIndex: interactive ? 0 : -1,
							className: interactive ? "is-interactive" : "",
							onLoad: () => setLoaded(true)
						}, `${product.id}-${revision}`), !enabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "digital-preview-gate",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "digital-gate-icon",
									children: active === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { size: 40 }) : active === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { size: 40 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { size: 40 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: product.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "digital-launch",
									onClick: () => {
										setEnabled(true);
										setInteractive(true);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 16 }), "Load live preview"]
								})
							]
						}) : !loaded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "digital-preview-gate",
							role: "status",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									className: "digital-spinner",
									size: 26
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: slow ? "Taking a little longer to connect." : `Opening ${product.name}…` }),
								slow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: product.url,
										target: "_blank",
										rel: "noopener noreferrer",
										children: ["Open app", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 15 })]
									})
								})
							]
						}) : !interactive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "digital-preview-shield",
							"aria-label": `Interact with ${product.name} live preview`,
							onClick: () => setInteractive(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 15 }), "Try the live app"] })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "digital-browser-footer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), enabled ? "Live product" : "Preview paused"] }), interactive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => setInteractive(false),
							children: "Stop interacting"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: product.url,
								target: "_blank",
								rel: "noopener noreferrer",
								children: ["Open full screen", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 13 })]
							})
						})]
					})
				]
			})]
		})]
	});
}
var MAIL = "mailto:Connectdoradao@gmail.com?subject=";
var products = [
	{
		t: "Workshop Kits",
		d: "Ready-to-use session plans, slides, and facilitator guides for technical and non-technical topics.",
		img: speaking_laptop_default,
		icon: Monitor,
		tint: "peach"
	},
	{
		t: "Swag & Merch",
		d: "DoraDAO stickers, posters and digital assets to make your event feel special.",
		img: mentoring_directory_default,
		icon: Heart,
		tint: "orange"
	},
	{
		t: "Community Speakers",
		d: "Access our network of builders, creators, and domain experts for talks and panel discussions.",
		img: speaking_microphone_default,
		icon: Mic,
		tint: "gold"
	},
	{
		t: "Community Campaigns",
		d: "Co-branded social media campaigns to amplify your event's reach.",
		img: speaking_speaker_default,
		icon: Megaphone,
		tint: "sage"
	},
	{
		t: "Fellowship & Program Support",
		d: "Guidance on designing and running fellowships, cohorts, or community programs.",
		img: mentoring_circles_default,
		icon: GraduationCap,
		tint: "cream"
	},
	{
		t: "Resource Library",
		d: "Templates, checklists, branding assets, and your-go community guides.",
		img: mentoring_books_default,
		icon: BookOpen,
		tint: "seafoam"
	}
];
var partnershipBenefits = [
	[
		Users,
		"Engaged community",
		"Connect with a global network of builders, creators and students."
	],
	[
		Megaphone,
		"Greater visibility",
		"Get featured across our channels and community networks."
	],
	[
		Star,
		"High-quality resources",
		"Access ready-to-use content, tools, and support."
	],
	[
		Sprout,
		"Meaningful impact",
		"Help us make learning and opportunities more open and inclusive."
	]
].map(([icon, title, text]) => ({
	icon,
	title,
	text
}));
var asks = [
	[
		Image,
		"Include DoraDAO as a community partner",
		"Add our logo on your event website, banners, and posters."
	],
	[
		Megaphone,
		"Announce our partnership",
		"Mention DoraDAO in your event announcements and opening/closing remarks."
	],
	[
		Link2,
		"Share on social media",
		"Tag DoraDAO in your event posts across platforms (X, LinkedIn, etc.)."
	],
	[
		FileText,
		"Provide a short write-up (optional)",
		"Share a recap or testimonial about how our products supported your event."
	],
	[
		Users,
		"Let participants know",
		"Inform your attendees about DoraDAO and our community."
	]
];
var assets = [
	["DoraDAO Logo", "(PNG/SVG)"],
	["Brand Description", "(1-2 lines)"],
	["Social Media Creatives", "(Banners & Posts)"],
	["Posters & Banners", ""]
];
var WORDING = `We're excited to have DoraDAO as a community partner for [Your Event/Program Name]!

DoraDAO is a global community platform that empowers creators, builders, and changemakers through programs, resources, and opportunities. They're supporting our event with [specific products/resources, e.g., workshop kits, speaker support, digital assets] to help us create a more engaging and impactful experience for our community.`;
function H2({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
		className: "pd-h2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				children: "›"
			}),
			" ",
			children,
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pd-tick",
				"aria-hidden": true,
				children: "≈"
			})
		]
	});
}
function ProductsPage() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const copy = async () => {
		try {
			await navigator.clipboard.writeText(WORDING);
			setCopied(true);
			setTimeout(() => setCopied(false), 1800);
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pr-page pd-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsOpening, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pd-sheet",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitalProducts, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pd-sec pd-community-products",
						"aria-labelledby": "pd-community-title",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pd-sub",
							children: "Plug-and-play offerings to make your event or program more engaging, inclusive, and impactful."
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "csr-mentor-grid pd-community-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								className: "csr-mentor-lead-wrap",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "csr-mentor-lead pd-community-lead",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "csr-mentor-brand",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
												size: 23,
												"aria-hidden": "true"
											}), " DoraDAO"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											id: "pd-community-title",
											children: [
												"Our community",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "products" })
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
											width: 504,
											height: 640
										})
									]
								})
							}), products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 70,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									className: `csr-mentor-card pd-community-card mentor-${p.tint}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `${MAIL}${encodeURIComponent(p.t)}`,
										"aria-label": `Ask about ${p.t}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "csr-mentor-icon",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
													size: 26,
													strokeWidth: 1.7,
													"aria-hidden": "true"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.t }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p.d }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "csr-mentor-arrow",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
													size: 17,
													"aria-hidden": "true"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												className: "csr-mentor-art",
												src: p.img,
												alt: "",
												"aria-hidden": "true",
												loading: "lazy",
												width: 540,
												height: 540
											})
										]
									})
								})
							}, p.t))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactCardStack, {
						id: "pd-partner-benefits-title",
						className: "pd-partner-benefits",
						badge: "Why partner with us",
						note: "Same energy. More impact.",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Why partner with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "DoraDAO?" })] }),
						cards: partnershipBenefits
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pd-sec pd-ask",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "What we ask in return" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "To keep DoraDAO sustainable and continue supporting more communities, we kindly ask you to feature us in your event or program as a community partner." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: "pd-heart",
								"aria-hidden": true
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: asks.map(([I, t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 70,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pd-check",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "pd-ic" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: d })] })
							] })
						}, t)) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pd-sec",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pd-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Sponsor wording you can use" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pd-sub",
									children: "Use the template below to announce our partnership. Feel free to customize it for your event."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "pd-outline",
									onClick: copy,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 15 }), copied ? "Copied!" : "Copy wording"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "pd-quote",
								children: WORDING.split("\n\n").map((t, i) => i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t }, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t }, i))
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Squiggle, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "pd-sec",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pd-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Sponsor assets" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pd-sub",
								children: "Use these assets in your event website, social media, and promotional materials."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "pd-outline",
								href: `${MAIL}Sponsor%20assets%20request`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 15 }), "Request all assets"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pd-assets",
							children: assets.map(([t, s], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 70,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "pd-asset",
									href: `${MAIL}${encodeURIComponent(`Asset request: ${t}`)}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "pd-ic" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: s })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
											size: 15,
											className: "pd-dl"
										})
									]
								})
							}, t))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ProductsPage as component };
