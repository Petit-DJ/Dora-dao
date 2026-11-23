import { programs, formatHighlightValue } from "./programs-data";
import { fellowshipHighlights, fellowshipPillars, fellowshipTracks } from "./fellowship-data";

import { programDestinations } from "./program-destinations";
import { programEditorial } from "./program-editorial";
export { programDestinations } from "./program-destinations";

const journeys = [
  [],
  [
    ["Fresh Perspectives", "Hear ideas and experiences from people bringing different perspectives to the same conversation."],
    ["Shared Stories", "Make room for honest stories about learning, building and finding your voice."],
    ["Meaningful Conversations", "Go beyond introductions and explore the questions that matter to the community."],
    ["Voice & Visibility", "Share your perspective and help more voices become part of the conversation."],
    ["Community Connections", "Meet curious hoomans and carry those connections beyond the conference."],
    ["Ideas into Action", "Take the ideas that resonate with you into your next project or community conversation."],
  ],
  [
    ["Explore Challenges", "Bring your curiosity to a challenge and discover what you could build together."],
    ["Find Collaborators", "Connect with builders whose skills and perspectives complement your own."],
    ["Shape an Idea", "Turn a rough concept into a shared direction your team can explore."],
    ["Build a Prototype", "Learn by making, testing and improving something that works."],
    ["Exchange Feedback", "Share progress with fellow builders and use their perspectives to take the next step."],
    ["Share Your Work", "Show what you have built and celebrate the learning behind it."],
  ],
  [
    ["Bring an Idea", "Start with a question, a problem or an idea you would love to explore."],
    ["Meet Your People", "Find fellow builders who want to learn by doing alongside you."],
    ["Plan Together", "Choose a direction and turn a big idea into smaller, achievable steps."],
    ["Learn by Doing", "Explore new skills as you make progress on something real."],
    ["Share Progress", "Swap feedback, ask questions and keep your collaborators in the loop."],
    ["Grow Together", "Take what you have learned into your next idea and keep the connections you have made."],
  ],
  [
    ["Explore Open Source", "Discover the ideas and communities behind projects you could contribute to."],
    ["Find a Contribution", "Look for a place where your curiosity and skills can help move a project forward."],
    ["Learn the Codebase", "Build understanding by exploring the code, asking questions and learning from others."],
    ["Code Together", "Work through challenges with a community that values collaboration."],
    ["Review & Improve", "Use feedback to refine your work and learn how contributions take shape."],
    ["Share Your Learning", "Reflect on what you have made and help the next contributor find their way."],
  ],
  [
    ["Explore Emerging Ideas", "Follow your curiosity into new ideas across the DoraDAO ecosystem."],
    ["Open Conversations", "Ask questions and exchange perspectives with people exploring alongside you."],
    ["Learn Together", "Make sense of new possibilities through shared learning rather than going it alone."],
    ["Meet Curious Hoomans", "Connect with people whose interests open up a different way of seeing things."],
    ["Share Perspectives", "Bring your experience into the conversation and make room for someone else's."],
    ["Discover Possibilities", "Carry what you discover into your own learning, projects and community connections."],
  ],
  [
    ["Explore AI Ideas", "Discover questions and possibilities at the intersection of AI and everyday life."],
    ["Creative Experiments", "Explore how curiosity and creativity can shape what we make with AI."],
    ["Exchange Perspectives", "Hear different viewpoints and bring your own questions to the conversation."],
    ["Learn by Exploring", "Build understanding through experimentation and shared learning."],
    ["Connect with Creators", "Meet people imagining and exploring new uses for emerging technology."],
    ["Imagine What Comes Next", "Think together about the possibilities and responsibilities ahead."],
  ],
  [
    ["Meet the Community", "Get to know the people whose curiosity and care make DoraDAO what it is."],
    ["Share Your Story", "Bring your experiences, questions and small wins into the conversation."],
    ["Exchange Ideas", "Discover what others are exploring and share what has caught your imagination."],
    ["Celebrate Connections", "Make space for the relationships that turn a network into a community."],
    ["Create Together", "Find common interests and explore what you could do alongside one another."],
    ["Keep Connected", "Carry the conversations and connections into life beyond CommunityWeek."],
  ],
  [
    ["Start a Conversation", "Begin with what you are curious about and where you would like to grow."],
    ["Share Experience", "Learn from another hooman's journey and bring your own experiences to the table."],
    ["Ask Real Questions", "Make room for the questions you do not have to figure out alone."],
    ["Explore Your Next Step", "Talk through possibilities and find a direction that feels meaningful to you."],
    ["Find Encouragement", "Build confidence through thoughtful feedback and community support."],
    ["Learn from One Another", "Keep the exchange going and share what you discover along the way."],
  ],
  [
    ["Come as You Are", "Find space for who you are, not just what you do or what you have achieved."],
    ["Find Common Ground", "Connect through the interests, questions and experiences you share."],
    ["Everyday Conversations", "Make room for the small conversations that grow into meaningful relationships."],
    ["Share Your Curiosity", "Bring what excites you and discover what sparks someone else's imagination."],
    ["Build Belonging", "Help create a community where people feel seen, welcomed and valued."],
    ["People First, Always", "Carry genuine care into the way you learn, build and connect with others."],
  ],
] satisfies string[][][];

export const programPages = programs.map((program, index) => {
  const destination = programDestinations[index] ?? programDestinations[0];
  const editorial = programEditorial[index];
  const tracks = (editorial?.journey ?? journeys[index] ?? []).map(([title = "", text = ""], trackIndex) => {
    const media = fellowshipTracks[trackIndex] ?? fellowshipTracks[0];
    if (!media) throw new Error("Missing program track artwork");
    return { ...media, title, text, story: `Explore ${title}`, alt: "Hoomans learning and connecting in the DoraDAO community" };
  });
  const page = {
    ...destination,
    description: program.description,
    heroLines: index === 0 ? ["Learn,", "Build, Grow,", "All in", "One fellowship"] : ["Learn,", "Build, Belong,", "Together at", index === 4 ? "DWoC" : index === 8 ? "M2M Mentorship" : destination.label],
    lead: index === 0 ? "The GirlsWhoYap Fellowship brings members together to learn, build and grow, wherever they are." : program.description,
    intro: index === 0 ? "At DoraDAO, the GirlsWhoYap Fellowship is more than a course, it's a home where women find their voice, sharpen real skills and ship real projects. Through workshops, mentorship and real-world initiatives, fellows grow alongside a community that spans countries, careers and dreams." : `At DoraDAO, ${program.name} is part of a community for hoomans, built by hoomans. ${program.description} Come as you are, bring your curiosity, and discover what we can do together.`,
    introNote: index === 0 ? "Whether you're writing your first line of code or leading your first panel, the Fellowship is already there for you." : "Whether you are taking your first step or exploring a new direction, there is a place for your curiosity here.",
    pillarsTitle: index === 0 ? "A Unified Fellowship" : "One Community. Shared Possibilities.",
    pillars: index === 0 ? fellowshipPillars : tracks.slice(0, 5).map(({ title, text }) => ({ title, text })),
    highlights: index === 0 ? fellowshipHighlights : program.highlights.map(({ value, label }) => ({ value: formatHighlightValue(value), label })),
    tracksIntro: index === 0 ? "Whether you're exploring a new career, testing a product idea or finding your voice on stage, every track delivers skills that drive meaningful growth:" : "Different ways to participate, one welcoming community. Find the path that speaks to your curiosity:",
    tracks: editorial ? tracks : index === 0 ? fellowshipTracks : tracks,
    ctaTitle: index === 0 ? "the Fellowship?" : `${destination.label}?`,
    ctaLabel: index === 0 ? "Apply now" : "Get involved",
  };
  return editorial ? {
    ...page, lead: editorial.lead, intro: editorial.intro, introNote: editorial.introNote,
    tracksIntro: editorial.tracksIntro, highlights: editorial.facts,
    pillars: tracks.slice(0, 5).map(({ title, text }) => ({ title, text })),
  } : page;
});

export type ProgramPageData = (typeof programPages)[number];

export function getProgramPage(index: number): ProgramPageData {
  const program = programPages[index];
  if (!program) throw new Error("Unknown DoraDAO program");
  return program;
}