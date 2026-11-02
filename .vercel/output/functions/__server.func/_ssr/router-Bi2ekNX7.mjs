import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LanguageProvider } from "./language-provider-B2S1TV55.mjs";
import { n as partnerPages } from "./partnership-data-4gEIbqRn.mjs";
import { t as data$1 } from "./partners.corporate-DCWH4kiY.mjs";
import { t as data$2 } from "./partners.donate-B2ys3CRP.mjs";
import { t as data$3 } from "./partners.philanthropic-C0LOAZts.mjs";
import { t as program } from "./programs.aifest-D5pFXiXw.mjs";
import { t as dora_hero_background_default } from "./dora-hero-background-D2FeKvs1.mjs";
import { t as program$1 } from "./programs.buildwithus-U77dF-8c.mjs";
import { t as program$2 } from "./programs.communityweek-D3swE3UC.mjs";
import { t as program$3 } from "./programs.dorahacks-D5rRyMxJ.mjs";
import { t as program$4 } from "./programs.dwoc-Bfrc6IEv.mjs";
import { t as program$5 } from "./programs.gwy-conference-BlfJqSn1.mjs";
import { t as program$6 } from "./programs.hooman-ku-AcwC8.mjs";
import { t as program$7 } from "./programs.m2m-mentorship-qyxmqu1U.mjs";
import { t as program$8 } from "./programs.w3m-DnymG2lv.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Bi2ekNX7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-ftOvDBGy.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$22 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "DoraDAO" },
			{
				name: "description",
				content: "Global qualitative market research"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "DoraDAO"
			},
			{
				property: "og:description",
				content: "Global qualitative market research"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400..800;1,400..800&family=Kalam:wght@400;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$22.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$21 = () => import("./routes-Duw4PoGe.mjs");
var Route$21 = createFileRoute("/")({
	head: () => ({
		links: [{
			rel: "preload",
			as: "image",
			href: dora_hero_background_default,
			fetchPriority: "high"
		}],
		meta: [
			{ title: "DoraDAO, A community for hoomans, built by hoomans" },
			{
				name: "description",
				content: "A purpose-driven, non-profit community making emerging technology accessible to everyone. Find your people across 35+ countries and learn, build, and belong."
			},
			{
				property: "og:title",
				content: "DoraDAO, Built by hoomans. Cherished for who you are."
			},
			{
				property: "og:description",
				content: "A community for ambitious hoomans across 35+ countries. Explore ten pathways to learn, build, and belong, supported by 80+ ecosystem partners."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./about-CzVC83uZ.mjs");
var Route$20 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About DoraDAO, The people behind the community" },
		{
			name: "description",
			content: "Discover DoraDAO's origin and people-first philosophy: a nonprofit ecosystem where curiosity becomes contribution, belonging and shared ownership."
		},
		{
			property: "og:title",
			content: "About DoraDAO"
		},
		{
			property: "og:description",
			content: "A community built by hoomans, for hoomans. Discover the story, shared culture and pathways from participation to ownership."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./events-Bo-GjTiN.mjs");
var Route$19 = createFileRoute("/events")({
	head: () => ({ meta: [
		{ title: "Events, DoraDAO community gatherings near you" },
		{
			name: "description",
			content: "Discover upcoming DoraDAO community events by city, or list your own event in a minute with no login."
		},
		{
			property: "og:title",
			content: "DoraDAO Events"
		},
		{
			property: "og:description",
			content: "Upcoming community gatherings by city. Hosts can submit events for listing, no account needed."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./faq-ZvwpKDhX.mjs");
var Route$18 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "DoraDAO FAQ, Programs, community and partnerships" },
		{
			name: "description",
			content: "Answers to your questions about DoraDAO, GWY Island, community programs, events and becoming a partner."
		},
		{
			property: "og:title",
			content: "DoraDAO FAQ, Your questions, answered"
		},
		{
			property: "og:description",
			content: "Explore DoraDAO programs, community and partnership questions, or get in touch with our team."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./hiring-zHqGuKrY.mjs");
var Route$17 = createFileRoute("/hiring")({
	head: () => ({ meta: [
		{ title: "Hiring · Join the DoraDAO team" },
		{
			name: "description",
			content: "Open roles at DoraDAO across community, design, engineering, marketing and operations. Remote-first and global."
		},
		{
			property: "og:title",
			content: "Join our team to build a more open and inclusive future · DoraDAO"
		},
		{
			property: "og:description",
			content: "Explore open roles at DoraDAO and apply today."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./pricing-LMnuf2_z.mjs");
var title$10 = "DoraDAO Sponsorship & Partnerships | Reach Builders, Creators & Developers";
var description$1 = "Partner with DoraDAO to reach builders, developers, founders, and creators through technology events, newsletters, community programs, marketing campaigns, and talent opportunities.";
var url = "https://doradao.lovable.app/pricing";
var Route$16 = createFileRoute("/pricing")({
	head: () => ({
		meta: [
			{ title: title$10 },
			{
				name: "description",
				content: description$1
			},
			{
				property: "og:title",
				content: title$10
			},
			{
				property: "og:description",
				content: description$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: url
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: url
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [
					{
						"@type": "Organization",
						"@id": "https://doradao.lovable.app/#organization",
						name: "DoraDAO",
						url: "https://doradao.lovable.app",
						email: "Connectdoradao@gmail.com",
						description: "A community for hoomans, built by hoomans, making emerging technology accessible and inclusive."
					},
					{
						"@type": "WebPage",
						"@id": `${url}#webpage`,
						url,
						name: title$10,
						description: description$1,
						about: { "@id": `${url}#service` }
					},
					{
						"@type": "Service",
						"@id": `${url}#service`,
						name: "DoraDAO sponsorship and partnerships",
						serviceType: "Community-led sponsorship and ecosystem partnerships",
						provider: { "@id": "https://doradao.lovable.app/#organization" },
						description: "Content, newsletter, event, community program, creator, talent and custom ecosystem partnerships."
					},
					{
						"@type": "BreadcrumbList",
						itemListElement: [{
							"@type": "ListItem",
							position: 1,
							name: "DoraDAO",
							item: "https://doradao.lovable.app"
						}, {
							"@type": "ListItem",
							position: 2,
							name: "Sponsorship & Partnerships",
							item: url
						}]
					}
				]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./products-B6_Cg2Te.mjs");
var Route$15 = createFileRoute("/products")({
	head: () => ({
		links: [{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400..700&display=swap"
		}],
		meta: [
			{ title: "Products for Organizers · DoraDAO" },
			{
				name: "description",
				content: "DoraDAO's digital and community products, speakers, swag and resources to make your events more engaging."
			},
			{
				property: "og:title",
				content: "Bring more value to your events, together · DoraDAO"
			},
			{
				property: "og:description",
				content: "Plug-and-play tools, community products and sponsor assets for organizers."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./partners.corporate-DgwhFjTC.mjs");
var Route$14 = createFileRoute("/partners/corporate")({
	head: () => ({ meta: [
		{ title: data$1.metaTitle },
		{
			name: "description",
			content: data$1.metaDesc
		},
		{
			property: "og:title",
			content: data$1.metaTitle
		},
		{
			property: "og:description",
			content: data$1.metaDesc
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./partners.csr-C92xj36e.mjs");
var data = partnerPages.find((p) => p.slug === "csr");
var Route$13 = createFileRoute("/partners/csr")({
	head: () => ({ meta: [
		{ title: data.metaTitle },
		{
			name: "description",
			content: data.metaDesc
		},
		{
			property: "og:title",
			content: data.metaTitle
		},
		{
			property: "og:description",
			content: data.metaDesc
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./partners.donate-xoglRPOw.mjs");
var Route$12 = createFileRoute("/partners/donate")({
	head: () => ({ meta: [
		{ title: data$2.metaTitle },
		{
			name: "description",
			content: data$2.metaDesc
		},
		{
			property: "og:title",
			content: data$2.metaTitle
		},
		{
			property: "og:description",
			content: data$2.metaDesc
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./partners.philanthropic-D3v6JsJC.mjs");
var Route$11 = createFileRoute("/partners/philanthropic")({
	head: () => ({ meta: [
		{ title: data$3.metaTitle },
		{
			name: "description",
			content: data$3.metaDesc
		},
		{
			property: "og:title",
			content: data$3.metaTitle
		},
		{
			property: "og:description",
			content: data$3.metaDesc
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./programs.aifest-dQU8NRVQ.mjs");
var title$9 = `${program.name}, DoraDAO`;
var Route$10 = createFileRoute("/programs/aifest")({
	head: () => ({ meta: [
		{ title: title$9 },
		{
			name: "description",
			content: program.description
		},
		{
			property: "og:title",
			content: title$9
		},
		{
			property: "og:description",
			content: program.description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./programs.buildwithus-c2vv_jY_.mjs");
var title$8 = `${program$1.name}, DoraDAO`;
var Route$9 = createFileRoute("/programs/buildwithus")({
	head: () => ({ meta: [
		{ title: title$8 },
		{
			name: "description",
			content: program$1.description
		},
		{
			property: "og:title",
			content: title$8
		},
		{
			property: "og:description",
			content: program$1.description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./programs.communityweek-DcUCb8cd.mjs");
var title$7 = `${program$2.name}, DoraDAO`;
var Route$8 = createFileRoute("/programs/communityweek")({
	head: () => ({ meta: [
		{ title: title$7 },
		{
			name: "description",
			content: program$2.description
		},
		{
			property: "og:title",
			content: title$7
		},
		{
			property: "og:description",
			content: program$2.description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./programs.dorahacks-B5LXa6qk.mjs");
var title$6 = `${program$3.name}, DoraDAO`;
var Route$7 = createFileRoute("/programs/dorahacks")({
	head: () => ({ meta: [
		{ title: title$6 },
		{
			name: "description",
			content: program$3.description
		},
		{
			property: "og:title",
			content: title$6
		},
		{
			property: "og:description",
			content: program$3.description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./programs.dwoc-fE1M_Tll.mjs");
var title$5 = `${program$4.name}, DoraDAO`;
var Route$6 = createFileRoute("/programs/dwoc")({
	head: () => ({ meta: [
		{ title: title$5 },
		{
			name: "description",
			content: program$4.description
		},
		{
			property: "og:title",
			content: title$5
		},
		{
			property: "og:description",
			content: program$4.description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./programs.gwy-conference-DCP3oBRI.mjs");
var title$4 = `${program$5.name}, DoraDAO`;
var Route$5 = createFileRoute("/programs/gwy-conference")({
	head: () => ({ meta: [
		{ title: title$4 },
		{
			name: "description",
			content: program$5.description
		},
		{
			property: "og:title",
			content: title$4
		},
		{
			property: "og:description",
			content: program$5.description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./programs.gwy-fellowship-DVLKJEFv.mjs");
var title$3 = "GWY Fellowship, DoraDAO";
var description = "The GirlsWhoYap Fellowship helps women learn, build and grow through workshops, mentorship and real-world projects.";
var Route$4 = createFileRoute("/programs/gwy-fellowship")({
	head: () => ({ meta: [
		{ title: title$3 },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title$3
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./programs.hooman-BeYTI43s.mjs");
var title$2 = `${program$6.name}, DoraDAO`;
var Route$3 = createFileRoute("/programs/hooman")({
	head: () => ({ meta: [
		{ title: title$2 },
		{
			name: "description",
			content: program$6.description
		},
		{
			property: "og:title",
			content: title$2
		},
		{
			property: "og:description",
			content: program$6.description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./programs.m2m-mentorship-MRLe_p9M.mjs");
var title$1 = `${program$7.name}, DoraDAO`;
var Route$2 = createFileRoute("/programs/m2m-mentorship")({
	head: () => ({ meta: [
		{ title: title$1 },
		{
			name: "description",
			content: program$7.description
		},
		{
			property: "og:title",
			content: title$1
		},
		{
			property: "og:description",
			content: program$7.description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./programs.w3m-BftBmC2B.mjs");
var title = `${program$8.name}, DoraDAO`;
var Route$1 = createFileRoute("/programs/w3m")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: program$8.description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: program$8.description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./sectors.technology-9oqSbQHM.mjs");
var Route = createFileRoute("/sectors/technology")({
	head: () => ({ meta: [
		{ title: "Technology Communities · DoraDAO" },
		{
			name: "description",
			content: "How DoraDAO helps technology teams meet real builders, hear honest feedback and grow communities across 60+ countries."
		},
		{
			property: "og:title",
			content: "Technology Communities That Actually Make Sense · DoraDAO"
		},
		{
			property: "og:description",
			content: "Real builders, real conversations, one friendly partner across 60+ countries."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$21.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$22
	}),
	AboutRoute: Route$20.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$22
	}),
	EventsRoute: Route$19.update({
		id: "/events",
		path: "/events",
		getParentRoute: () => Route$22
	}),
	FaqRoute: Route$18.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$22
	}),
	HiringRoute: Route$17.update({
		id: "/hiring",
		path: "/hiring",
		getParentRoute: () => Route$22
	}),
	PricingRoute: Route$16.update({
		id: "/pricing",
		path: "/pricing",
		getParentRoute: () => Route$22
	}),
	ProductsRoute: Route$15.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => Route$22
	}),
	PartnersCorporateRoute: Route$14.update({
		id: "/partners/corporate",
		path: "/partners/corporate",
		getParentRoute: () => Route$22
	}),
	PartnersCsrRoute: Route$13.update({
		id: "/partners/csr",
		path: "/partners/csr",
		getParentRoute: () => Route$22
	}),
	PartnersDonateRoute: Route$12.update({
		id: "/partners/donate",
		path: "/partners/donate",
		getParentRoute: () => Route$22
	}),
	PartnersPhilanthropicRoute: Route$11.update({
		id: "/partners/philanthropic",
		path: "/partners/philanthropic",
		getParentRoute: () => Route$22
	}),
	ProgramsAifestRoute: Route$10.update({
		id: "/programs/aifest",
		path: "/programs/aifest",
		getParentRoute: () => Route$22
	}),
	ProgramsBuildwithusRoute: Route$9.update({
		id: "/programs/buildwithus",
		path: "/programs/buildwithus",
		getParentRoute: () => Route$22
	}),
	ProgramsCommunityweekRoute: Route$8.update({
		id: "/programs/communityweek",
		path: "/programs/communityweek",
		getParentRoute: () => Route$22
	}),
	ProgramsDorahacksRoute: Route$7.update({
		id: "/programs/dorahacks",
		path: "/programs/dorahacks",
		getParentRoute: () => Route$22
	}),
	ProgramsDwocRoute: Route$6.update({
		id: "/programs/dwoc",
		path: "/programs/dwoc",
		getParentRoute: () => Route$22
	}),
	ProgramsGwyConferenceRoute: Route$5.update({
		id: "/programs/gwy-conference",
		path: "/programs/gwy-conference",
		getParentRoute: () => Route$22
	}),
	ProgramsGwyFellowshipRoute: Route$4.update({
		id: "/programs/gwy-fellowship",
		path: "/programs/gwy-fellowship",
		getParentRoute: () => Route$22
	}),
	ProgramsHoomanRoute: Route$3.update({
		id: "/programs/hooman",
		path: "/programs/hooman",
		getParentRoute: () => Route$22
	}),
	ProgramsM2mMentorshipRoute: Route$2.update({
		id: "/programs/m2m-mentorship",
		path: "/programs/m2m-mentorship",
		getParentRoute: () => Route$22
	}),
	ProgramsW3mRoute: Route$1.update({
		id: "/programs/w3m",
		path: "/programs/w3m",
		getParentRoute: () => Route$22
	}),
	SectorsTechnologyRoute: Route.update({
		id: "/sectors/technology",
		path: "/sectors/technology",
		getParentRoute: () => Route$22
	})
};
var routeTree = Route$22._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreload: false,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
