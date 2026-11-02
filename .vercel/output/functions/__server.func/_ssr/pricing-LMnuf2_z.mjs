import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as CheckboxIndicator, p as require_jsx_runtime, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Mail, O as MicVocal, Ot as ArrowUpRight, Y as HeartHandshake, _t as ChevronDown, c as Sprout, f as SlidersHorizontal, j as Megaphone, kt as ArrowRight, l as Sparkles, r as Users, ut as CodeXml, vt as Check, w as Newspaper } from "../_libs/lucide-react.mjs";
import { t as SiteFooter } from "./site-footer-D8XPLK4z.mjs";
import { s as SiteNavbar } from "./site-navbar-DzTC3Ebp.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { t as speakerPortraits } from "./speaker-portraits-B49dDe8u.mjs";
import { n as mentoring_circles_default, t as mentoring_books_default } from "./mentoring-books-DLNz2pgN.mjs";
import { n as mentoring_meetup_default, t as mentoring_laptop_default } from "./mentoring-laptop-C6ilSYDr.mjs";
import { t as mentoring_coffee_default } from "./mentoring-coffee-B8OqJCS9.mjs";
import { t as speaking_speaker_default } from "./speaking-speaker-D8lNX6sx.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
import { n as dora_community_characters_default, t as dora_community_background_default } from "./dora-community-background-CD3hipcy.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-LMnuf2_z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
var sponsorshipOpportunities = [
	{
		id: "content",
		category: "Content & newsletter",
		title: "Get your story in front of the right audience.",
		description: "Share your product, research, ecosystem, or ideas through dedicated editorial content and newsletter placements.",
		best: "Brand awareness, thought leadership, product education and ecosystem announcements.",
		formats: [
			"Newsletter mention: up to 15 words, a product link and CTA",
			"Dedicated feature: one image and up to 45 words",
			"Deep dive: 500-700 words of editorial storytelling"
		],
		deliverables: [
			"Agreed editorial placement",
			"Product and campaign links",
			"Relevant call to action"
		],
		cta: "Explore Content Sponsorship",
		tone: "gold"
	},
	{
		id: "events",
		category: "Events & experiences",
		title: "Don’t just reach the community. Meet them.",
		description: "Put your brand at the centre of real conversations, experiences, and community gatherings.",
		best: "Developer adoption, product launches, ecosystem expansion and community building.",
		formats: [
			"Event, main-stage or session sponsorship",
			"Panels, workshops and masterclasses",
			"Hackathons, prizes and builder challenges",
			"Meetups, product demos and conference activations"
		],
		deliverables: [
			"Brand visibility across agreed event assets",
			"Speaking or demonstration opportunities",
			"Event-related social coverage and a recap",
			"Registration attribution where consent permits"
		],
		cta: "Explore Event Sponsorship",
		tone: "peach"
	},
	{
		id: "programs",
		category: "Community & programs",
		title: "Build relationships that last beyond a campaign.",
		description: "Become part of programs that help people learn, build, collaborate, and access new opportunities.",
		best: "Ecosystem development, developer relations, education and community growth.",
		formats: [
			"Fellowships and learning cohorts",
			"Builder, developer and creator programs",
			"Workshops, mentorship and ambassador initiatives",
			"Grants and opportunity programs"
		],
		deliverables: [
			"Program association and community announcements",
			"Educational or technical sessions",
			"Co-created resources",
			"Agreed participant engagement"
		],
		cta: "Explore Program Partnerships",
		tone: "sage"
	},
	{
		id: "creators",
		category: "Creator & marketing campaigns",
		title: "Let people experience what you’re building.",
		description: "Collaborate with creators and community voices through authentic product and campaign storytelling.",
		best: "Product launches, brand awareness, user acquisition and campaign distribution.",
		formats: [
			"Creator collaborations and sponsored content",
			"Product reviews and demonstrations",
			"Interviews, founder stories and social campaigns",
			"User-generated content initiatives"
		],
		deliverables: [
			"Relevant creator discovery",
			"Coordinated content and campaign messaging",
			"Custom calls to action",
			"Available performance reporting"
		],
		cta: "Explore Marketing Campaigns",
		tone: "peach"
	},
	{
		id: "talent",
		category: "Jobs & talent",
		title: "Meet the people who can build your next big thing.",
		description: "Connect with emerging and experienced talent across technology, AI, Web3, product, design, and community operations.",
		best: "Hiring, talent discovery and employer visibility.",
		formats: [
			"Standard and featured job listings",
			"Hiring campaigns and employer branding",
			"Career events and talent-focused sessions",
			"Recruitment partnerships"
		],
		deliverables: [
			"Relevant role visibility and targeted promotion",
			"Interested applicant engagement with consent",
			"Employer branding opportunities",
			"Campaign delivery recap"
		],
		cta: "Explore Talent Partnerships",
		tone: "gold"
	},
	{
		id: "custom",
		category: "Custom ecosystem campaigns",
		title: "Have a bigger goal? Let’s design around it.",
		description: "Combine multiple activations into a campaign designed around your company’s objectives.",
		best: "Integrated campaigns, sustained visibility and strategic collaboration.",
		formats: [
			"Newsletter + social campaign",
			"Hackathon + developer workshop",
			"Product launch + creator activation",
			"Event sponsorship + content coverage",
			"Hiring campaign + job promotion",
			"Quarterly or annual ecosystem partnership"
		],
		deliverables: [
			"Custom campaign strategy",
			"Itemised cross-channel deliverables",
			"Agreed timeline and review cadence",
			"Campaign performance report"
		],
		cta: "Build a Custom Campaign",
		tone: "sage"
	}
];
var sponsorshipPackages = [
	{
		name: "Community",
		caption: "A thoughtful introduction.",
		description: "For teams introducing their brand to the DoraDAO ecosystem.",
		includes: [
			"One newsletter mention OR social feature",
			"Partner recognition for an agreed period",
			"One community announcement",
			"Basic delivery recap"
		],
		cta: "Start with Community"
	},
	{
		name: "Growth",
		caption: "More connection. More context.",
		description: "For brands seeking stronger visibility and audience engagement.",
		includes: [
			"One dedicated feature OR equivalent activation",
			"Two to three social placements",
			"Newsletter visibility",
			"One community engagement activation",
			"Campaign CTA, tracking links and recap"
		],
		cta: "Choose Growth",
		featured: true
	},
	{
		name: "Ecosystem",
		caption: "Become part of the journey.",
		description: "For companies seeking deeper, multi-touchpoint involvement.",
		includes: [
			"Integrated content and social campaign",
			"Event or program participation",
			"Speaking, workshop or showcase where applicable",
			"Community activation and performance report"
		],
		cta: "Explore Ecosystem"
	},
	{
		name: "Strategic Partner",
		caption: "Build something lasting.",
		description: "For long-term or multi-activation partnerships.",
		includes: [
			"Quarterly or annual collaboration",
			"Multiple events and programs",
			"Co-branded content and ecosystem initiatives",
			"Talent or developer initiatives",
			"Custom strategy and agreed review cadence"
		],
		cta: "Discuss a Strategic Partnership"
	}
];
var sponsorshipDeliverables = [
	{
		title: "Brand visibility",
		items: [
			"Website and event logo placements",
			"Sponsor recognition",
			"Digital banners and posters",
			"Newsletter and social acknowledgements"
		]
	},
	{
		title: "Content & distribution",
		items: [
			"Sponsored editorial content",
			"Newsletter placements",
			"Interviews and features",
			"Creator-generated content and social campaigns"
		]
	},
	{
		title: "Direct engagement",
		items: [
			"Speaking opportunities and product demos",
			"Workshops and panels",
			"Hackathon challenges",
			"Community sessions"
		]
	},
	{
		title: "Talent & community",
		items: [
			"Job promotions and hiring activations",
			"Community introductions",
			"Fellowship participation",
			"Relevant audience engagement"
		]
	},
	{
		title: "Reporting & insights",
		items: [
			"Available reach and engagement metrics",
			"Registrations and participation",
			"Click-throughs and referrals",
			"Completed content and delivery recap"
		]
	}
];
var sponsorObjectives = [
	"Brand awareness",
	"Developer adoption",
	"Product launch",
	"Community growth",
	"Hiring and talent discovery",
	"Event participation",
	"Thought leadership",
	"Ecosystem expansion"
];
var sponsorTimelines = [
	"Within 2 weeks",
	"Within 1 month",
	"Within 3 months",
	"Long-term partnership",
	"Flexible"
];
var sponsorFaqs = [
	["What is DoraDAO’s sponsorship program?", "DoraDAO sponsorship connects companies with builders, developers, founders, creators and emerging technology communities through content, events, programs, talent initiatives and custom ecosystem campaigns."],
	["Who can sponsor DoraDAO?", "AI and technology companies, Web3 protocols, SaaS teams, recruiters, VCs, accelerators, ecosystem funds, and consumer or creator brands can discuss a partnership. CSR teams and philanthropic organizations can support education, mentorship and access through our partnership pathways."],
	["What audiences can brands reach through DoraDAO?", "Partnerships can engage developers, founders, builders, creators, students and technology enthusiasts. Audience fit and current channel data are discussed when defining the campaign."],
	["What sponsorship opportunities does DoraDAO offer?", "Options include newsletters and editorial features, events and hackathons, community programs, creator campaigns, job promotion, and custom ecosystem campaigns."],
	["How much does a DoraDAO sponsorship cost?", "Pricing is provided on request in USD. Costs depend on the activation, deliverables, placement duration, audience, timeline and execution needs. Your selected planning budget is not a quote; applicable taxes and final scope are set out in the proposal."],
	["Can I sponsor an individual event or hackathon?", "Yes. Discuss an event, workshop, session, hackathon, prize or challenge sponsorship with the team. Availability and benefits depend on the event and agreed scope."],
	["Can I sponsor a newsletter or content feature?", "Yes. Options include a short newsletter mention, an image-and-text feature, and a 500-700-word deep dive. Placement, editorial scope and campaign links are agreed in the proposal."],
	["Can DoraDAO help with developer acquisition and ecosystem growth?", "Workshops, demonstrations, hackathon challenges, technical content and builder programs can support developer engagement and product exploration. Adoption, conversions and registrations are not guaranteed."],
	["Can I create a custom sponsorship package?", "Yes. Combine content, events, creators, community programs or talent opportunities into a campaign designed around your goals, budget and timeline."],
	["Does DoraDAO offer in-kind or community partnerships?", "In-kind and community collaborations can be considered separately from paid sponsorships, including tools, credits, mentorship and co-created opportunities. The team confirms suitability and terms."],
	["How are sponsorship results measured?", "Reporting covers agreed deliverables and available metrics such as engagement, registrations, participation, clicks and referrals. Attribution and participant information are shared only where appropriate and with consent."],
	["How do I become a DoraDAO partner?", "Use the partnership builder to prepare an email brief, email Connectdoradao@gmail.com, or book a conversation at cal.com/doradao/call. The team will discuss fit, availability, deliverables and pricing."]
];
function planningAllocation(budget, activations) {
	return activations > 0 ? Math.floor(Math.max(0, budget) / activations) : 0;
}
function partnershipDraft(brief) {
	const body = [
		`Name: ${brief.name}`,
		`Business email: ${brief.email}`,
		`Organization: ${brief.company}`,
		`Objective: ${brief.objective}`,
		`Activations: ${brief.activations.join(", ")}`,
		`Planning budget (USD): ${brief.budget === null ? "Not sure yet" : `$${brief.budget.toLocaleString("en-US")}`}`,
		`Timeline: ${brief.timeline}`,
		`Additional context: ${brief.note}`,
		"",
		"Please share suitable activations, scoped deliverables, availability, applicable taxes and USD pricing."
	].join("\n");
	return `mailto:Connectdoradao@gmail.com?subject=${encodeURIComponent(`Partnership enquiry, ${brief.company}`)}&body=${encodeURIComponent(body)}`;
}
function SponsorshipBuilder() {
	const [objective, setObjective] = (0, import_react.useState)(sponsorObjectives[0] ?? "Brand awareness");
	const [selected, setSelected] = (0, import_react.useState)(["content"]);
	const [budget, setBudget] = (0, import_react.useState)(1e3);
	const [unsure, setUnsure] = (0, import_react.useState)(false);
	const [timeline, setTimeline] = (0, import_react.useState)("Within 1 month");
	const [notice, setNotice] = (0, import_react.useState)("");
	const money = (n) => new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(n);
	function submit(event) {
		event.preventDefault();
		if (!selected.length) {
			setNotice("Choose at least one activation to include in your brief.");
			return;
		}
		const form = new FormData(event.currentTarget);
		const href = partnershipDraft({
			name: String(form.get("name") ?? ""),
			email: String(form.get("email") ?? ""),
			company: String(form.get("company") ?? ""),
			objective,
			activations: selected.map((id) => sponsorshipOpportunities.find((o) => o.id === id)?.category ?? id),
			budget: unsure ? null : budget,
			timeline,
			note: String(form.get("note") ?? "")
		});
		window.location.href = href;
		setNotice("Your email draft is ready to open. Send it from your email app to complete the enquiry. If it doesn’t open, email Connectdoradao@gmail.com.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "sp-builder-form",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sp-builder-fields",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sp-field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "sp-objective",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), " What is your primary objective?"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: objective,
						onValueChange: setObjective,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "sp-objective",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: sponsorObjectives.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: o,
							children: o
						}, o)) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "sp-field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), " Which activations interest you?"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sp-activation-options",
						children: sponsorshipOpportunities.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "sp-check-option",
							"data-selected": selected.includes(o.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: selected.includes(o.id),
								onCheckedChange: (checked) => {
									setSelected(checked ? [...selected, o.id] : selected.filter((id) => id !== o.id));
									setNotice("");
								}
							}), o.category]
						}, o.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sp-field",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "sp-budget",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), " What’s your approximate budget?"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sp-budget-input",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "USD $" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sp-budget",
								type: "number",
								min: 100,
								max: 5e4,
								step: 50,
								value: budget,
								disabled: unsure,
								onChange: (e) => setBudget(Number(e.target.value))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							"aria-label": "Planning budget in USD",
							min: 100,
							max: 1e4,
							step: 50,
							value: [Math.min(budget, 1e4)],
							disabled: unsure,
							onValueChange: (values) => setBudget(values[0] ?? 1e3)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sp-slider-scale",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$10,000+" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "sp-unsure",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: unsure,
								onCheckedChange: (v) => setUnsure(v === true)
							}), "Not sure yet, help me plan"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sp-field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "sp-timeline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04" }), " When would you like to start?"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: timeline,
						onValueChange: setTimeline,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "sp-timeline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: sponsorTimelines.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: t,
							children: t
						}, t)) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "sp-field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "05" }), " A little about you"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sp-contact-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Full name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "name",
								required: true,
								autoComplete: "name",
								placeholder: "Your name",
								maxLength: 100
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Business email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "email",
								type: "email",
								required: true,
								autoComplete: "email",
								placeholder: "you@company.com",
								maxLength: 200
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "sp-full",
								children: ["Organization", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "company",
									required: true,
									autoComplete: "organization",
									placeholder: "Company or community",
									maxLength: 120
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "sp-full",
								children: [
									"Anything else? ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "(optional)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "note",
										placeholder: "Audience, launch, location or accessibility goals",
										maxLength: 700
									})
								]
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "sp-builder-summary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "sp-mini-label",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { size: 16 }), " Your partnership canvas"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: objective }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sp-summary-budget",
							children: unsure ? "Let’s plan together" : money(budget)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sp-muted",
							children: unsure ? "We’ll help shape a suitable scope." : "Your planning budget · USD"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: selected.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }), sponsorshipOpportunities.find((o) => o.id === id)?.category] }, id)) }),
						!unsure && selected.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sp-allocation",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(planningAllocation(budget, selected.length)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "per activation if split equally" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sp-fine",
							children: "This is a budget planning calculation, not a price estimate. Actual costs differ by activation; availability, scope and applicable taxes are confirmed in your proposal."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "sp-summary-timeline",
					children: ["Timeline ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: timeline })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					className: "sp-button sp-button-gold",
					children: ["Get My Partnership Proposal", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "sp-email-note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 14 }), " Opens your email app with your brief. Nothing is submitted automatically."]
				}),
				notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "status",
					className: "sp-form-notice",
					children: notice
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "sp-direct-email",
					href: "mailto:Connectdoradao@gmail.com",
					children: "Connectdoradao@gmail.com"
				})
			]
		})]
	});
}
var sponsorContact = (subject) => `mailto:Connectdoradao@gmail.com?subject=${encodeURIComponent(subject)}`;
var illustrations = [
	mentoring_books_default,
	speaking_speaker_default,
	mentoring_circles_default,
	mentoring_coffee_default,
	mentoring_laptop_default,
	mentoring_meetup_default
];
var icons = [
	Newspaper,
	MicVocal,
	Users,
	Megaphone,
	CodeXml,
	Sparkles
];
var nav = [
	["overview", "Overview"],
	["opportunities", "Opportunities"],
	["packages", "Packages"],
	["partners", "Partners"],
	["sponsor-faqs", "FAQs"]
];
function Action({ href, children, secondary = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		className: `sp-button ${secondary ? "sp-button-outline" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": "true" })]
		})
	});
}
function Heading({ eyebrow, title, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sp-section-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sp-heading-meta",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sp-pill",
				children: eyebrow
			}), note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: note })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title })]
	});
}
function Opportunity({ index }) {
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const o = sponsorshipOpportunities[index];
	const Icon = icons[index] ?? Sparkles;
	if (!o) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `sp-opportunity sp-tone-${o.tone}`,
		id: `opportunity-${o.id}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sp-opportunity-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sp-card-icon",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 23 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					String(index + 1).padStart(2, "0"),
					" / ",
					o.category
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: o.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: o.description }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: illustrations[index],
				alt: "",
				width: 540,
				height: 540,
				loading: "lazy",
				decoding: "async",
				className: "sp-opportunity-art"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "sp-best",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Best for" }), o.best]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				className: "sp-detail-toggle",
				"aria-expanded": expanded,
				"aria-controls": `details-${o.id}`,
				onClick: () => setExpanded(!expanded),
				children: ["Formats & deliverables", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { "aria-hidden": "true" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: `details-${o.id}`,
				hidden: !expanded,
				className: "sp-opportunity-details",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Available activations" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: o.formats.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: f }, f)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Deliverable examples" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: o.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: d }, d)) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "link",
				className: "sp-opportunity-link",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: sponsorContact(o.cta),
					children: [o.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
				})
			})
		]
	});
}
function SponsorshipPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sp-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "sp-hero",
					id: "overview",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: dora_community_background_default,
							alt: "",
							className: "sp-hero-scenery",
							fetchPriority: "high"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sp-hero-copy sp-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "sp-eyebrow",
									children: "DoraDAO partnerships"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
									"Don’t just sponsor",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"the ecosystem.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Become part of it." })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "sp-hero-lead",
									children: "Reach builders, developers, founders, creators, and emerging technology communities through targeted content, events, talent access, and community-led activations."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sp-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
										href: "#partnership-builder",
										children: "Build a Partnership"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
										href: "#opportunities",
										secondary: true,
										children: "Explore Sponsorship Opportunities"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "sp-trust-line",
									children: "Content · Events · Community · Talent · Ecosystem Growth"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: dora_community_characters_default,
							alt: "DoraDAO’s illustrated community of curious hoomans",
							className: "sp-hero-characters",
							width: 1536,
							height: 600
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "sp-local-nav",
					"aria-label": "Sponsorship navigation",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sp-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sp-nav-links",
							children: nav.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `#${id}`,
									children: label
								})
							}, id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "sp-button",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#partnership-builder",
								children: ["Build a Partnership", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "sp-section sp-wrap sp-why",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: "01 / Why DoraDAO?",
							title: "The right audience. The right context. The right conversations.",
							note: "People first. Possibilities next."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sp-intro",
							children: "DoraDAO helps brands reach the people building what comes next. Traditional advertising gets your brand seen. Community-led partnerships help people understand, experience, and engage with what you’re building."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sp-benefits",
							children: [
								{
									title: "Reach the right people",
									body: "Connect with developers, founders, builders, creators, students and technology enthusiasts across relevant communities.",
									icon: Users
								},
								{
									title: "Build trust through communities",
									body: "Engage through authentic relationships, not exclusively through paid advertising.",
									icon: HeartHandshake
								},
								{
									title: "Turn visibility into participation",
									body: "Go beyond logos with demos, workshops, hackathons, creator activations and real conversations.",
									icon: Sprout
								},
								{
									title: "Create measurable outcomes",
									body: "Agree meaningful goals: registrations, participation, content engagement, applications and product interest.",
									icon: Check
								}
							].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { size: 28 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "sp-mini-label",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: b.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: b.body })
							] }, b.title))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "sp-section sp-wrap",
					id: "opportunities",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: "02 / Ways to partner",
							title: "One ecosystem. Multiple ways to make an impact.",
							note: "A good partnership starts with a shared goal."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sp-intro",
							children: "Launch a product, reach developers, hire talent or build long-term recognition. Choose the activation that matches your goals."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sp-opportunity-grid",
							children: sponsorshipOpportunities.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opportunity, { index: i }, o.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sp-social-path",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { size: 30 }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Grow an ecosystem. Open a door for someone." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Support education, mentorship and access to emerging technology through community-led programs. Explore a dedicated CSR or philanthropic partnership." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "link",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/partners/csr",
										children: ["CSR partnerships", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "link",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/partners/philanthropic",
										children: ["Philanthropy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "sp-section sp-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: "03 / What sponsors get",
							title: "More than a logo on a banner."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sp-intro",
							children: "Every partnership is designed around specific deliverables. Depending on your activation, your sponsorship may include:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sp-deliverables",
							children: sponsorshipDeliverables.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "sp-deliverable-number",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: d.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: d.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) })
							] }, d.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sp-scope-note",
							children: "Deliverables vary according to the partnership scope, channel availability, campaign objectives, and agreed terms. Audience data and introductions are shared only where appropriate and with participant consent."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "sp-section sp-wrap",
					id: "packages",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: "04 / Partnership options",
							title: "Choose how deeply you want to engage.",
							note: "Focused activations to lasting relationships."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sp-intro",
							children: "Start with a focused activation or build a larger partnership across content, events and communities. Different opportunities have different costs and commercial value."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sp-packages",
							children: sponsorshipPackages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "sp-package",
								"data-featured": "featured" in p && p.featured,
								children: [
									"featured" in p && p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sp-package-badge",
										children: "Recommended"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "sp-mini-label",
										children: p.caption
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: p.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "sp-package-price",
										children: "featured" in p || p.name !== "Strategic Partner" ? "Request pricing" : "Custom pricing"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "sp-package-currency",
										children: "Scoped proposal · USD ($)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p.description }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Potential inclusions" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: p.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }), item] }, item)) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
										href: sponsorContact(p.cta),
										secondary: true,
										children: p.cta
									})
								]
							}, p.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sp-scope-note",
							children: "Final proposals define deliverable quantities, placement duration, timelines, revisions, reporting and applicable taxes. In-kind and community arrangements are scoped separately. Reach, conversions and registrations are not guaranteed."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "sp-section sp-wrap",
					id: "partnership-builder",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: "05 / Partnership calculator",
							title: "Your goals. Your audience. Your campaign.",
							note: "Let’s turn an idea into a useful brief."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sp-intro",
							children: "Select the outcomes you care about and plan your budget in USD. We’ll discuss a combination of opportunities that fits your objectives."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SponsorshipBuilder, {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "sp-section sp-wrap",
					id: "partners",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							eyebrow: "06 / People & programs",
							title: "Built through people, programs, and partnerships."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sp-intro",
							children: "Explore the programs and voices at the heart of DoraDAO. Discuss relevant campaign examples and available channel data with our team as part of your proposal."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sp-proof",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sp-proof-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "sp-handwritten",
										children: "Real people. Shared curiosity."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
										"A community for hoomans,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"built by hoomans."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Learning, building and belonging connect our initiatives. Find the program that aligns with the opportunities you want to create." })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sp-portrait-grid",
								children: speakerPortraits.slice(0, 8).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.alt,
									loading: "lazy",
									decoding: "async",
									width: 240,
									height: 240
								}, p.image))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sp-proof-links",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/programs/gwy-fellowship",
										children: ["Explore GWY Fellowship", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/programs/dorahacks",
										children: ["Explore DoraHacks", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/programs/m2m-mentorship",
										children: ["Explore mentorship", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://connectdoradao.xyz/voices",
									target: "_blank",
									rel: "noreferrer",
									children: ["Meet the GWY speakers", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sp-fine",
							children: "Speaker participation and community collaboration are distinct from paid sponsorship. Sponsor, technology, event and community relationships are identified separately in partnership proposals."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "sp-section sp-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						eyebrow: "07 / How it works",
						title: "From first conversation to real-world impact."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "sp-process",
						children: [
							["Tell us your goals", "Share what you’re trying to achieve, who you want to reach, and when."],
							["Get a tailored proposal", "We’ll recommend suitable activations, deliverables, timelines and pricing."],
							["Launch your partnership", "Our team coordinates execution across the agreed channels and initiatives."],
							["Review the results", "Receive a summary of completed deliverables and available performance metrics."]
						].map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", i + 1] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: body })
						] }, title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "sp-section sp-wrap sp-faq-section",
					id: "sponsor-faqs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						eyebrow: "08 / Your questions, answered",
						title: "A little clarity before we build together."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sp-faq-list",
						children: sponsorFaqs.map(([q, a], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							open: i === 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: [q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 19 })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: a })]
						}, q))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "sp-closing",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sp-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "sp-handwritten",
								children: "Good things begin with a conversation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"Let’s make your next",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"partnership count."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Whether you’re launching a product, growing a developer ecosystem, hiring talent, or bringing a community together, let’s find the right people and the right way to engage them." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sp-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
									href: "mailto:Connectdoradao@gmail.com",
									children: "Talk to Our Partnerships Team"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
									href: "#opportunities",
									secondary: true,
									children: "Explore Partnership Opportunities"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sp-closing-links",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "mailto:Connectdoradao@gmail.com",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }), "Connectdoradao@gmail.com"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://cal.com/doradao/call",
										target: "_blank",
										rel: "noreferrer",
										children: ["Book a conversation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#partnership-builder",
										children: ["Prepare your partnership enquiry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
									})
								]
							})
						]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var SplitComponent = SponsorshipPage;
//#endregion
export { SplitComponent as component };
