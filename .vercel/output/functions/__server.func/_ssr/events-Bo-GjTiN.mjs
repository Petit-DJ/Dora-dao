import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { P as MapPin, bt as CalendarDays, nt as ExternalLink } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-footer-D8XPLK4z.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, o as DialogTrigger, r as DialogDescription, s as SiteNavbar, t as Dialog } from "./site-navbar-DzTC3Ebp.mjs";
import { i as parseCsv } from "./world-sheet-BQaR1nrD.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { t as Label$1 } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-Bo-GjTiN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Label$1.displayName;
var EVENTS_CSV = `https://docs.google.com/spreadsheets/d/1wxheHLHJLJ589JDBFuUIXA-hfVM1m_muE_NlwCJsW50/gviz/tq?tqx=out:csv&sheet=Events`;
/** Google Apps Script web app URL that appends submissions with Status=Pending (see docs/events-apps-script.gs). */
var EVENTS_SUBMIT_URL = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/"
}["VITE_EVENTS_SUBMIT_URL"] ?? "";
var safeUrl = (u = "") => /^https:\/\//i.test(u) ? u : "";
function approvedEvents(rows) {
	const out = [];
	for (const r of rows) {
		if ((r.status ?? "").trim().toLowerCase() !== "approved" || !r.title || !r.date) continue;
		out.push({
			title: r.title,
			date: r.date,
			time: r.time ?? "",
			city: r.city ?? "",
			country: r.country ?? "",
			venue: r.venue ?? "",
			category: r.category || "Community",
			description: r.description ?? "",
			link: safeUrl(r.link),
			image: safeUrl(r.image),
			host: r.host || r.hostname || ""
		});
	}
	return out.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
}
async function fetchEvents() {
	const res = await fetch(EVENTS_CSV, {
		credentials: "omit",
		signal: AbortSignal.timeout(15e3)
	});
	const text = await res.text();
	if (!res.ok || text.trimStart().startsWith("<")) return [];
	return approvedEvents(parseCsv(text));
}
var fields = [
	["title", "Event name"],
	[
		"date",
		"Date",
		"date"
	],
	["time", "Time"],
	["city", "City"],
	["country", "Country"],
	["venue", "Venue"],
	["category", "Category (Tech, Creative...)"],
	[
		"link",
		"RSVP link (https://)",
		"url"
	],
	[
		"image",
		"Cover image link (optional)",
		"url"
	],
	["host", "Host / organisation"],
	[
		"email",
		"Your email",
		"email"
	]
];
function SubmitForm() {
	const [state, setState] = (0, import_react.useState)("idle");
	async function submit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		if (!EVENTS_SUBMIT_URL) {
			const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
			window.location.href = `mailto:Connectdoradao@gmail.com?subject=${encodeURIComponent(`Event listing: ${data.get("title")}`)}&body=${encodeURIComponent(body)}`;
			setState("done");
			return;
		}
		setState("sending");
		try {
			await fetch(EVENTS_SUBMIT_URL, {
				method: "POST",
				mode: "no-cors",
				body: new URLSearchParams(data)
			});
			setState("done");
		} catch {
			setState("error");
		}
	}
	if (state === "done") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "py-6 text-center",
		children: "Thanks! Your event is pending review and will appear here once approved."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "grid gap-3 sm:grid-cols-2",
		children: [
			fields.map(([name, label, type]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: `ev-${name}`,
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: `ev-${name}`,
					name,
					type: type ?? "text",
					maxLength: 300,
					required: [
						"title",
						"date",
						"city",
						"email"
					].includes(name)
				})]
			}, name)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1 sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "ev-description",
					children: "Short description"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "ev-description",
					name: "description",
					maxLength: 1e3,
					rows: 3
				})]
			}),
			state === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-destructive sm:col-span-2",
				children: "Something went wrong. Please try again."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: state === "sending",
				className: "sm:col-span-2",
				children: state === "sending" ? "Sending..." : "Submit for listing"
			})
		]
	});
}
function EventCard({ ev }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm",
		children: [ev.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: ev.image,
			alt: "",
			loading: "lazy",
			className: "aspect-[16/9] w-full object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-[16/9] w-full bg-muted",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-2 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-fit rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground",
					children: ev.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold",
					children: ev.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
							className: "size-4",
							"aria-hidden": "true"
						}),
						ev.date,
						ev.time && ` · ${ev.time}`
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: "size-4",
						"aria-hidden": "true"
					}), [
						ev.venue,
						ev.city,
						ev.country
					].filter(Boolean).join(", ")]
				}),
				ev.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: ev.description
				}),
				ev.host && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: ["Hosted by ", ev.host]
				}),
				ev.link && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "mt-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: ev.link,
						target: "_blank",
						rel: "noopener noreferrer",
						children: ["RSVP ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { "aria-hidden": "true" })]
					})
				})
			]
		})]
	});
}
function EventsPage() {
	const [events, setEvents] = (0, import_react.useState)(null);
	const [city, setCity] = (0, import_react.useState)("All");
	(0, import_react.useEffect)(() => {
		fetchEvents().then(setEvents).catch(() => setEvents([]));
	}, []);
	const cities = (0, import_react.useMemo)(() => ["All", ...new Set((events ?? []).map((e) => e.city).filter(Boolean))], [events]);
	const shown = (events ?? []).filter((e) => city === "All" || e.city === city);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNavbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-5 pb-20 pt-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm uppercase tracking-widest text-muted-foreground",
							children: "Events"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl font-bold sm:text-5xl",
							children: "Find your people, offline"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-muted-foreground",
							children: "Community gatherings hosted by DoraDAO chapters and friends around the world."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							children: "List your event"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-h-[90vh] overflow-y-auto sm:max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "List your event" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "No login needed. Our team reviews each submission before it goes live." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmitForm, {})]
					})] })]
				}),
				cities.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 flex flex-wrap gap-2",
					role: "group",
					"aria-label": "Filter by city",
					children: cities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: c === city ? "default" : "outline",
						"aria-pressed": c === city,
						onClick: () => setCity(c),
						children: c
					}, c))
				}),
				events === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Loading events..."
				}) : shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground",
					children: "No upcoming events yet. Be the first to list one!"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: shown.map((ev, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { ev }, `${ev.title}-${i}`))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { EventsPage as component };
