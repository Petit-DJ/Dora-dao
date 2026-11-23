/** Evergreen program copy drawn from DoraDAO's supplied origin and program notes. */
export const programEditorial: Record<number, {
  lead: string; intro: string; introNote: string; tracksIntro: string;
  facts: { value: string; label: string }[];
  journey: [string, string][];
}> = {
  0: {
    lead: "A women-first community for exploring emerging technology, creating real work and finding your people.",
    intro: "Girls Who Yap began as a practical entry point into Web3 for women creators, communicators and curious newcomers. It has grown into a space for AI experimentation, product creation and public storytelling. You do not have to arrive as an expert: learning, making and belonging happen together.",
    introNote: "The program gives us a reason to come together. The friendships, shared challenges and late-night conversations give us reasons to stay. Each cohort shares its own schedule and opportunities.",
    tracksIntro: "From your first question to something you can proudly share, the fellowship connects practical creation with community:",
    facts: [{ value: "Women-first", label: "A dedicated learning community" }, { value: "Hands-on", label: "AI and emerging technology" }, { value: "Global", label: "Remote participation" }, { value: "Public", label: "Storytelling and proof of work" }, { value: "Together", label: "Relationships beyond the cohort" }],
    journey: [
      ["Learn & Explore", "Explore emerging technology through virtual sessions and practical tools. The fellowship began with Web3 onboarding and expanded into AI-powered creation."],
      ["Experiment Together", "Try tools, ask basic questions and work through weekly challenges alongside women taking their own first steps."],
      ["Create Proof of Work", "Make content, prototypes or mini-projects that show what you are learning. Your work becomes a starting point for feedback and future collaboration."],
      ["Find Your Voice", "Tell the story behind your work and build in public. Share your perspective, practise communicating ideas and become visible through what you create."],
      ["Build & Launch", "Explore bounties, collaborative product work and the girls-only hackathon within the fellowship journey. Opportunities and formats are announced for each cohort."],
      ["Stay Connected", "Meet mentors, creators and fellow learners. Make room for conversations, friendships and collaboration that can continue after formal sessions end."],
    ],
  },
  1: {
    lead: "A creator-first meeting point for women shaping culture, community and emerging technology.",
    intro: "The Girls Who Yap Conference grew from the community formed through the fellowship. Where a fellowship offers a shared learning journey, the conference opens a wider meeting point for creators, artists, writers, designers, founders and community builders. Come to exchange ideas, discover collaborators and help shape the conversation.",
    introNote: "The online pre-conference brought together speaker sessions, Talent Night, creator challenges, community spotlights and gaming rooms. In-person gatherings have their own announcements and participation details.",
    tracksIntro: "More than a sequence of talks: different ways to listen, create, connect and take the lead.",
    facts: [{ value: "Women-led", label: "Voices and ideas" }, { value: "Creator-first", label: "Across disciplines" }, { value: "Online", label: "Pre-conference participation" }, { value: "Local", label: "In-person gathering announcements" }, { value: "Community", label: "Co-hosting and collaboration" }],
    journey: [["Conversations", "Explore culture, community and emerging technology through speaker sessions and honest exchanges with other creators."], ["Creator Challenges", "Practise finding your voice through storytelling and creative challenges. Share work, learn from peers and explore new forms of expression."], ["Talent & Spotlights", "Bring your interests into Talent Night and community spotlights. Make space for the people and initiatives shaping the wider ecosystem."], ["Meet Your People", "Connect through informal rooms, games and shared interests, not just professional introductions."], ["Community Partnerships", "College collectives, independent communities and organizations can explore co-hosting, co-branding and amplifying the experience together."], ["Help Shape the Gathering", "Contribute as a volunteer, conversation host or organizer. Discover ways to move from attending the program to helping create it."]],
  },
  2: {
    lead: "Turn an idea into a working product, launch it publicly and learn from the people who use it.",
    intro: "DoraHacks makes building less exclusive. AI-powered tools create room for designers, marketers, storytellers and curious newcomers alongside developers. The goal is not simply a hackathon submission: it is something useful that can reach real users and keep evolving after the event.",
    introNote: "Different editions have used different sprint lengths. Each announcement sets its own timeline, team requirements, mentoring opportunities and launch process, without making prizes or traction a promise.",
    tracksIntro: "Idea → team → prototype → feedback → public launch → iteration. Shipping is the beginning, not the finish line.",
    facts: [{ value: "Ideas", label: "A practical starting point" }, { value: "Teams", label: "Across complementary skills" }, { value: "MVPs", label: "Working products" }, { value: "Launch", label: "Product Hunt and Peerlist" }, { value: "Feedback", label: "Learn from real users" }],
    journey: [["Find a Problem", "Start with a problem worth solving. Bring your experience, curiosity and understanding of the people who might use your idea."], ["Form a Team", "Work with people whose skills complement yours. Product thinking, design, storytelling, marketing and engineering can all contribute."], ["Build a Prototype", "Use practical tools and AI-powered development to turn the idea into a working prototype during the edition's building sprint."], ["Test & Refine", "Share progress with mentors and fellow builders. Test assumptions, gather feedback and improve the product before launching."], ["Launch Publicly", "Prepare your product story and put your work in front of people through platforms such as Product Hunt and Peerlist."], ["Listen & Iterate", "Treat the launch as a learning opportunity. Use early feedback to discover what is useful and decide what to improve next."]],
  },
  3: {
    lead: "Contribution over consumption. A structured space to make consistent progress on something real.",
    intro: "Build with Us is for builders, creators and operators with an idea they want to put into motion. A product, a campaign, a guide, an automation or a community gathering can all belong here. Choose a direction, make your progress visible and develop something tangible with feedback from other hoomans.",
    introNote: "The published format is a six-week, asynchronous-first cohort, starting every eight weeks, with approximately five hours of participation per week and one or two live sessions. Check the program announcement for the next intake.",
    tracksIntro: "Pick one primary contribution track. Weekly milestones and public updates lead toward a Demo Day or final showcase.",
    facts: [{ value: "6 weeks", label: "Published cohort duration" }, { value: "8 weeks", label: "Between cohort starts" }, { value: "~5 hours", label: "Weekly time commitment" }, { value: "Async-first", label: "With 1-2 live sessions per week" }, { value: "Showcase", label: "A tangible final contribution" }],
    journey: [["Products & Experiments", "Build an application, bot, utility, MVP or side project. Choose a useful problem and make progress visible through weekly milestones."], ["Content & Creative Work", "Create writing, podcasts, videos, documentation, art or films. Develop a publishing rhythm and a concrete body of work."], ["Growth & Marketing", "Work on campaigns, newsletters, distribution or community growth. Apply your skills to a real project and share what you learn."], ["Systems & Automation", "Make workflows, internal tools, no-code systems or AI automations that solve an everyday need."], ["Community & Education", "Organize an event or community initiative, or create a guide, playbook or learning resource that helps others begin."], ["Research & Exploration", "Explore AI experiments, Web3 prototypes or cultural research. Document the process, invite peer feedback and present your outcome at the final showcase."]],
  },
  5: {
    lead: "A shared community identity, brought to life by the people in each place.",
    intro: "WORLD TOUR ft. Dora connects the DoraDAO ecosystem with local communities through virtual gatherings, meetups, workshops and collaborations. Each stop belongs to the people who make it happen: their stories, interests and culture shape the experience. Opportunity should travel in every direction.",
    introNote: "Join as a volunteer, city lead, regional program manager or community host. Bring your local perspective and help create a gathering that feels like your city, not a copy of somewhere else.",
    tracksIntro: "A global community with local ownership. Find your own way to bring hoomans together.",
    facts: [{ value: "Local", label: "Community-led experiences" }, { value: "Virtual", label: "Gather across borders" }, { value: "In person", label: "Meetups and workshops" }, { value: "Shared", label: "Culture and curiosity" }, { value: "Open", label: "Ways to contribute" }],
    journey: [["Discover Your Community", "Find curious people, collectives and local spaces that could become part of a DoraDAO gathering."], ["Host a Gathering", "Bring people together for a meetup, workshop or virtual conversation shaped by local interests."], ["Lead in Your City", "Explore taking responsibility as a city lead or community host. Help others find their place and contribute."], ["Connect Communities", "Introduce local groups, universities and organizations to the wider ecosystem and discover what you could create together."], ["Share Local Stories", "Bring your city's voices, traditions and experiences into the community. Let each stop have a personality of its own."], ["Keep the Connection", "Continue the conversations after the gathering. Create opportunities for people to collaborate and help shape what comes next."]],
  },
};