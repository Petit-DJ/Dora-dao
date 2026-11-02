import { i as programDestinations } from "./language-provider-B2S1TV55.mjs";
import { t as fellowship_png_asset_default } from "./fellowship.png.asset-D8h3JoVK.mjs";
import { a as portrait_6_default, i as portrait_5_default, n as portrait_2_default, r as portrait_4_default, t as portrait_1_default } from "./portrait-6-CzPu3iMF.mjs";
import { t as portrait_7_default } from "./portrait-7-RfVrmajc.mjs";
import { n as conference_png_asset_default, t as community_png_asset_default } from "./conference.png.asset-CmzUqrjc.mjs";
import { n as programs, t as formatHighlightValue } from "./programs-data-C5W6ilQ8.mjs";
import { t as gathering_png_asset_default } from "./gathering.png.asset-79u62IlS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/program-pages-data-r1cidYKR.js
var FELLOWSHIP_EMAIL = "Connectdoradao@gmail.com";
var fellowshipHighlights = [
	{
		value: "5,000+",
		label: "Voices signed up"
	},
	{
		value: "600K",
		label: "Social reach"
	},
	{
		value: "2,000+",
		label: "User-generated posts"
	},
	{
		value: "11",
		label: "Countries represented"
	},
	{
		value: "50+",
		label: "Workshops & events"
	}
];
var fellowshipPillars = [
	{
		title: "Real Skills with a Real Community",
		text: "Hands-on workshops pair practical skills with a warm community, so every lesson turns into something you can actually use."
	},
	{
		title: "One Mentor in Your Corner",
		text: "Every fellow is matched with a mentor who guides their journey, from first goals to final showcase."
	},
	{
		title: "Learn by Building",
		text: "Ship real projects through hackathons and real-world initiatives, building a portfolio that speaks for itself."
	},
	{
		title: "Every Time Zone Welcome",
		text: "Live sessions and recordings across regions mean you can learn alongside fellows wherever you are."
	},
	{
		title: "Cross-Community Learning",
		text: "Meet builders, creators and leaders from other DoraDAO programs and discover paths you never knew existed."
	}
];
var fellowshipTracks = [
	{
		title: "Workshops",
		text: "Weekly hands-on sessions on Web3, AI, product and design, led by practitioners who've done the work. Every workshop ends with something you've made yourself.",
		story: "Inside a GWY workshop week",
		photo: fellowship_png_asset_default.url,
		thumb: portrait_1_default,
		alt: "Fellows working together at a workshop"
	},
	{
		title: "Mentorship",
		text: "One-on-one and circle mentoring with women leading in tech. Mentors help you set goals, unblock challenges and plan your next move with confidence.",
		story: "How mentors shape the fellowship",
		photo: community_png_asset_default.url,
		thumb: portrait_2_default,
		alt: "A mentor circle gathered in conversation"
	},
	{
		title: "Build Projects",
		text: "Turn ideas into real products through team sprints and hackathons. Fellows leave with shipped projects, feedback from builders and a portfolio to show.",
		story: "From idea to demo in four weeks",
		photo: gathering_png_asset_default.url,
		thumb: portrait_4_default,
		alt: "Fellows building a project together"
	},
	{
		title: "Voice & Visibility",
		text: "Find your voice on stage and online. Practise speaking, share your story with the GirlsWhoYap community and step onto panels at our conference.",
		story: "Fellows taking the conference stage",
		photo: conference_png_asset_default.url,
		thumb: portrait_5_default,
		alt: "A fellow speaking at a conference"
	},
	{
		title: "Community Circles",
		text: "Small, friendly circles that meet regularly to share wins, swap resources and keep each other going, long after the fellowship ends.",
		story: "Why circles keep fellows connected",
		photo: fellowship_png_asset_default.url,
		thumb: portrait_6_default,
		alt: "Fellows gathered in a community circle"
	},
	{
		title: "Demo Day",
		text: "Celebrate the journey by presenting your work to the community, partners and mentors, the moment your growth becomes visible to everyone.",
		story: "Highlights from the last demo day",
		photo: gathering_png_asset_default.url,
		thumb: portrait_7_default,
		alt: "Fellows celebrating at demo day"
	}
];
/** Evergreen program copy drawn from DoraDAO's supplied origin and program notes. */
var programEditorial = {
	0: {
		lead: "A women-first community for exploring emerging technology, creating real work and finding your people.",
		intro: "Girls Who Yap began as a practical entry point into Web3 for women creators, communicators and curious newcomers. It has grown into a space for AI experimentation, product creation and public storytelling. You do not have to arrive as an expert: learning, making and belonging happen together.",
		introNote: "The program gives us a reason to come together. The friendships, shared challenges and late-night conversations give us reasons to stay. Each cohort shares its own schedule and opportunities.",
		tracksIntro: "From your first question to something you can proudly share, the fellowship connects practical creation with community:",
		facts: [
			{
				value: "Women-first",
				label: "A dedicated learning community"
			},
			{
				value: "Hands-on",
				label: "AI and emerging technology"
			},
			{
				value: "Global",
				label: "Remote participation"
			},
			{
				value: "Public",
				label: "Storytelling and proof of work"
			},
			{
				value: "Together",
				label: "Relationships beyond the cohort"
			}
		],
		journey: [
			["Learn & Explore", "Explore emerging technology through virtual sessions and practical tools. The fellowship began with Web3 onboarding and expanded into AI-powered creation."],
			["Experiment Together", "Try tools, ask basic questions and work through weekly challenges alongside women taking their own first steps."],
			["Create Proof of Work", "Make content, prototypes or mini-projects that show what you are learning. Your work becomes a starting point for feedback and future collaboration."],
			["Find Your Voice", "Tell the story behind your work and build in public. Share your perspective, practise communicating ideas and become visible through what you create."],
			["Build & Launch", "Explore bounties, collaborative product work and the girls-only hackathon within the fellowship journey. Opportunities and formats are announced for each cohort."],
			["Stay Connected", "Meet mentors, creators and fellow learners. Make room for conversations, friendships and collaboration that can continue after formal sessions end."]
		]
	},
	1: {
		lead: "A creator-first meeting point for women shaping culture, community and emerging technology.",
		intro: "The Girls Who Yap Conference grew from the community formed through the fellowship. Where a fellowship offers a shared learning journey, the conference opens a wider meeting point for creators, artists, writers, designers, founders and community builders. Come to exchange ideas, discover collaborators and help shape the conversation.",
		introNote: "The online pre-conference brought together speaker sessions, Talent Night, creator challenges, community spotlights and gaming rooms. In-person gatherings have their own announcements and participation details.",
		tracksIntro: "More than a sequence of talks: different ways to listen, create, connect and take the lead.",
		facts: [
			{
				value: "Women-led",
				label: "Voices and ideas"
			},
			{
				value: "Creator-first",
				label: "Across disciplines"
			},
			{
				value: "Online",
				label: "Pre-conference participation"
			},
			{
				value: "Local",
				label: "In-person gathering announcements"
			},
			{
				value: "Community",
				label: "Co-hosting and collaboration"
			}
		],
		journey: [
			["Conversations", "Explore culture, community and emerging technology through speaker sessions and honest exchanges with other creators."],
			["Creator Challenges", "Practise finding your voice through storytelling and creative challenges. Share work, learn from peers and explore new forms of expression."],
			["Talent & Spotlights", "Bring your interests into Talent Night and community spotlights. Make space for the people and initiatives shaping the wider ecosystem."],
			["Meet Your People", "Connect through informal rooms, games and shared interests, not just professional introductions."],
			["Community Partnerships", "College collectives, independent communities and organizations can explore co-hosting, co-branding and amplifying the experience together."],
			["Help Shape the Gathering", "Contribute as a volunteer, conversation host or organizer. Discover ways to move from attending the program to helping create it."]
		]
	},
	2: {
		lead: "Turn an idea into a working product, launch it publicly and learn from the people who use it.",
		intro: "DoraHacks makes building less exclusive. AI-powered tools create room for designers, marketers, storytellers and curious newcomers alongside developers. The goal is not simply a hackathon submission: it is something useful that can reach real users and keep evolving after the event.",
		introNote: "Different editions have used different sprint lengths. Each announcement sets its own timeline, team requirements, mentoring opportunities and launch process, without making prizes or traction a promise.",
		tracksIntro: "Idea → team → prototype → feedback → public launch → iteration. Shipping is the beginning, not the finish line.",
		facts: [
			{
				value: "Ideas",
				label: "A practical starting point"
			},
			{
				value: "Teams",
				label: "Across complementary skills"
			},
			{
				value: "MVPs",
				label: "Working products"
			},
			{
				value: "Launch",
				label: "Product Hunt and Peerlist"
			},
			{
				value: "Feedback",
				label: "Learn from real users"
			}
		],
		journey: [
			["Find a Problem", "Start with a problem worth solving. Bring your experience, curiosity and understanding of the people who might use your idea."],
			["Form a Team", "Work with people whose skills complement yours. Product thinking, design, storytelling, marketing and engineering can all contribute."],
			["Build a Prototype", "Use practical tools and AI-powered development to turn the idea into a working prototype during the edition's building sprint."],
			["Test & Refine", "Share progress with mentors and fellow builders. Test assumptions, gather feedback and improve the product before launching."],
			["Launch Publicly", "Prepare your product story and put your work in front of people through platforms such as Product Hunt and Peerlist."],
			["Listen & Iterate", "Treat the launch as a learning opportunity. Use early feedback to discover what is useful and decide what to improve next."]
		]
	},
	3: {
		lead: "Contribution over consumption. A structured space to make consistent progress on something real.",
		intro: "Build with Us is for builders, creators and operators with an idea they want to put into motion. A product, a campaign, a guide, an automation or a community gathering can all belong here. Choose a direction, make your progress visible and develop something tangible with feedback from other hoomans.",
		introNote: "The published format is a six-week, asynchronous-first cohort, starting every eight weeks, with approximately five hours of participation per week and one or two live sessions. Check the program announcement for the next intake.",
		tracksIntro: "Pick one primary contribution track. Weekly milestones and public updates lead toward a Demo Day or final showcase.",
		facts: [
			{
				value: "6 weeks",
				label: "Published cohort duration"
			},
			{
				value: "8 weeks",
				label: "Between cohort starts"
			},
			{
				value: "~5 hours",
				label: "Weekly time commitment"
			},
			{
				value: "Async-first",
				label: "With 1-2 live sessions per week"
			},
			{
				value: "Showcase",
				label: "A tangible final contribution"
			}
		],
		journey: [
			["Products & Experiments", "Build an application, bot, utility, MVP or side project. Choose a useful problem and make progress visible through weekly milestones."],
			["Content & Creative Work", "Create writing, podcasts, videos, documentation, art or films. Develop a publishing rhythm and a concrete body of work."],
			["Growth & Marketing", "Work on campaigns, newsletters, distribution or community growth. Apply your skills to a real project and share what you learn."],
			["Systems & Automation", "Make workflows, internal tools, no-code systems or AI automations that solve an everyday need."],
			["Community & Education", "Organize an event or community initiative, or create a guide, playbook or learning resource that helps others begin."],
			["Research & Exploration", "Explore AI experiments, Web3 prototypes or cultural research. Document the process, invite peer feedback and present your outcome at the final showcase."]
		]
	},
	5: {
		lead: "A shared community identity, brought to life by the people in each place.",
		intro: "WORLD TOUR ft. Dora connects the DoraDAO ecosystem with local communities through virtual gatherings, meetups, workshops and collaborations. Each stop belongs to the people who make it happen: their stories, interests and culture shape the experience. Opportunity should travel in every direction.",
		introNote: "Join as a volunteer, city lead, regional program manager or community host. Bring your local perspective and help create a gathering that feels like your city, not a copy of somewhere else.",
		tracksIntro: "A global community with local ownership. Find your own way to bring hoomans together.",
		facts: [
			{
				value: "Local",
				label: "Community-led experiences"
			},
			{
				value: "Virtual",
				label: "Gather across borders"
			},
			{
				value: "In person",
				label: "Meetups and workshops"
			},
			{
				value: "Shared",
				label: "Culture and curiosity"
			},
			{
				value: "Open",
				label: "Ways to contribute"
			}
		],
		journey: [
			["Discover Your Community", "Find curious people, collectives and local spaces that could become part of a DoraDAO gathering."],
			["Host a Gathering", "Bring people together for a meetup, workshop or virtual conversation shaped by local interests."],
			["Lead in Your City", "Explore taking responsibility as a city lead or community host. Help others find their place and contribute."],
			["Connect Communities", "Introduce local groups, universities and organizations to the wider ecosystem and discover what you could create together."],
			["Share Local Stories", "Bring your city's voices, traditions and experiences into the community. Let each stop have a personality of its own."],
			["Keep the Connection", "Continue the conversations after the gathering. Create opportunities for people to collaborate and help shape what comes next."]
		]
	}
};
var journeys = [
	[],
	[
		["Fresh Perspectives", "Hear ideas and experiences from people bringing different perspectives to the same conversation."],
		["Shared Stories", "Make room for honest stories about learning, building and finding your voice."],
		["Meaningful Conversations", "Go beyond introductions and explore the questions that matter to the community."],
		["Voice & Visibility", "Share your perspective and help more voices become part of the conversation."],
		["Community Connections", "Meet curious hoomans and carry those connections beyond the conference."],
		["Ideas into Action", "Take the ideas that resonate with you into your next project or community conversation."]
	],
	[
		["Explore Challenges", "Bring your curiosity to a challenge and discover what you could build together."],
		["Find Collaborators", "Connect with builders whose skills and perspectives complement your own."],
		["Shape an Idea", "Turn a rough concept into a shared direction your team can explore."],
		["Build a Prototype", "Learn by making, testing and improving something that works."],
		["Exchange Feedback", "Share progress with fellow builders and use their perspectives to take the next step."],
		["Share Your Work", "Show what you have built and celebrate the learning behind it."]
	],
	[
		["Bring an Idea", "Start with a question, a problem or an idea you would love to explore."],
		["Meet Your People", "Find fellow builders who want to learn by doing alongside you."],
		["Plan Together", "Choose a direction and turn a big idea into smaller, achievable steps."],
		["Learn by Doing", "Explore new skills as you make progress on something real."],
		["Share Progress", "Swap feedback, ask questions and keep your collaborators in the loop."],
		["Grow Together", "Take what you have learned into your next idea and keep the connections you have made."]
	],
	[
		["Explore Open Source", "Discover the ideas and communities behind projects you could contribute to."],
		["Find a Contribution", "Look for a place where your curiosity and skills can help move a project forward."],
		["Learn the Codebase", "Build understanding by exploring the code, asking questions and learning from others."],
		["Code Together", "Work through challenges with a community that values collaboration."],
		["Review & Improve", "Use feedback to refine your work and learn how contributions take shape."],
		["Share Your Learning", "Reflect on what you have made and help the next contributor find their way."]
	],
	[
		["Explore Emerging Ideas", "Follow your curiosity into new ideas across the DoraDAO ecosystem."],
		["Open Conversations", "Ask questions and exchange perspectives with people exploring alongside you."],
		["Learn Together", "Make sense of new possibilities through shared learning rather than going it alone."],
		["Meet Curious Hoomans", "Connect with people whose interests open up a different way of seeing things."],
		["Share Perspectives", "Bring your experience into the conversation and make room for someone else's."],
		["Discover Possibilities", "Carry what you discover into your own learning, projects and community connections."]
	],
	[
		["Explore AI Ideas", "Discover questions and possibilities at the intersection of AI and everyday life."],
		["Creative Experiments", "Explore how curiosity and creativity can shape what we make with AI."],
		["Exchange Perspectives", "Hear different viewpoints and bring your own questions to the conversation."],
		["Learn by Exploring", "Build understanding through experimentation and shared learning."],
		["Connect with Creators", "Meet people imagining and exploring new uses for emerging technology."],
		["Imagine What Comes Next", "Think together about the possibilities and responsibilities ahead."]
	],
	[
		["Meet the Community", "Get to know the people whose curiosity and care make DoraDAO what it is."],
		["Share Your Story", "Bring your experiences, questions and small wins into the conversation."],
		["Exchange Ideas", "Discover what others are exploring and share what has caught your imagination."],
		["Celebrate Connections", "Make space for the relationships that turn a network into a community."],
		["Create Together", "Find common interests and explore what you could do alongside one another."],
		["Keep Connected", "Carry the conversations and connections into life beyond CommunityWeek."]
	],
	[
		["Start a Conversation", "Begin with what you are curious about and where you would like to grow."],
		["Share Experience", "Learn from another hooman's journey and bring your own experiences to the table."],
		["Ask Real Questions", "Make room for the questions you do not have to figure out alone."],
		["Explore Your Next Step", "Talk through possibilities and find a direction that feels meaningful to you."],
		["Find Encouragement", "Build confidence through thoughtful feedback and community support."],
		["Learn from One Another", "Keep the exchange going and share what you discover along the way."]
	],
	[
		["Come as You Are", "Find space for who you are, not just what you do or what you have achieved."],
		["Find Common Ground", "Connect through the interests, questions and experiences you share."],
		["Everyday Conversations", "Make room for the small conversations that grow into meaningful relationships."],
		["Share Your Curiosity", "Bring what excites you and discover what sparks someone else's imagination."],
		["Build Belonging", "Help create a community where people feel seen, welcomed and valued."],
		["People First, Always", "Carry genuine care into the way you learn, build and connect with others."]
	]
];
var programPages = programs.map((program, index) => {
	const destination = programDestinations[index] ?? programDestinations[0];
	const editorial = programEditorial[index];
	const tracks = (editorial?.journey ?? journeys[index] ?? []).map(([title = "", text = ""], trackIndex) => {
		const media = fellowshipTracks[trackIndex] ?? fellowshipTracks[0];
		if (!media) throw new Error("Missing program track artwork");
		return {
			...media,
			title,
			text,
			story: `Explore ${title}`,
			alt: "Hoomans learning and connecting in the DoraDAO community"
		};
	});
	const page = {
		...destination,
		description: program.description,
		heroLines: index === 0 ? [
			"Learn,",
			"Build, Grow,",
			"All in",
			"One fellowship"
		] : [
			"Learn,",
			"Build, Belong,",
			"Together at",
			index === 4 ? "DWoC" : index === 8 ? "M2M Mentorship" : destination.label
		],
		lead: index === 0 ? "The GirlsWhoYap Fellowship brings members together to learn, build and grow, wherever they are." : program.description,
		intro: index === 0 ? "At DoraDAO, the GirlsWhoYap Fellowship is more than a course, it's a home where women find their voice, sharpen real skills and ship real projects. Through workshops, mentorship and real-world initiatives, fellows grow alongside a community that spans countries, careers and dreams." : `At DoraDAO, ${program.name} is part of a community for hoomans, built by hoomans. ${program.description} Come as you are, bring your curiosity, and discover what we can do together.`,
		introNote: index === 0 ? "Whether you're writing your first line of code or leading your first panel, the Fellowship is already there for you." : "Whether you are taking your first step or exploring a new direction, there is a place for your curiosity here.",
		pillarsTitle: index === 0 ? "A Unified Fellowship" : "One Community. Shared Possibilities.",
		pillars: index === 0 ? fellowshipPillars : tracks.slice(0, 5).map(({ title, text }) => ({
			title,
			text
		})),
		highlights: index === 0 ? fellowshipHighlights : program.highlights.map(({ value, label }) => ({
			value: formatHighlightValue(value),
			label
		})),
		tracksIntro: index === 0 ? "Whether you're exploring a new career, testing a product idea or finding your voice on stage, every track delivers skills that drive meaningful growth:" : "Different ways to participate, one welcoming community. Find the path that speaks to your curiosity:",
		tracks: editorial ? tracks : index === 0 ? fellowshipTracks : tracks,
		ctaTitle: index === 0 ? "the Fellowship?" : `${destination.label}?`,
		ctaLabel: index === 0 ? "Apply now" : "Get involved"
	};
	return editorial ? {
		...page,
		lead: editorial.lead,
		intro: editorial.intro,
		introNote: editorial.introNote,
		tracksIntro: editorial.tracksIntro,
		highlights: editorial.facts,
		pillars: tracks.slice(0, 5).map(({ title, text }) => ({
			title,
			text
		}))
	} : page;
});
function getProgramPage(index) {
	const program = programPages[index];
	if (!program) throw new Error("Unknown DoraDAO program");
	return program;
}
//#endregion
export { getProgramPage as n, FELLOWSHIP_EMAIL as t };
