import fellowship from "@/assets/programs/fellowship.png.asset.json";
import community from "@/assets/programs/community.png.asset.json";
import conference from "@/assets/programs/conference.png.asset.json";
import video from "@/assets/confessions/sample.webm.asset.json";
import gwyYoutube from "@/assets/confessions/gwy-youtube.jpg.asset.json";
import gwyX from "@/assets/confessions/gwy-x.jpg.asset.json";
import gwyIg1 from "@/assets/confessions/gwy-ig1.jpg.asset.json";
import gwyIg2 from "@/assets/confessions/gwy-ig2.jpg.asset.json";

export type Confession = {
  id: string;
  type: "video" | "post" | "poster" | "text" | "social";
  title: string;
  text: string;
  signature: string;
  image?: string;
  video?: string;
  author?: string;
  source?: "YouTube" | "Instagram" | "LinkedIn" | "X";
  sourceUrl?: string;
  embedUrl?: string;
  videoUrl?: string;
  duration?: string;
};

// Editorial placeholders, not testimonials from real members, // except the "social" entries, which are real public member posts.
export const confessions: Confession[] = [
  {
    id: "gwy-yt",
    type: "social",
    title: "GWY Introduction!",
    text: "My journey into AI started a little less traditionally, through coursework like explainable AI for autonomous vehicles, and from there into hands-on research across labs and projects.",
    signature: "Chanchal · Computer engineering, UC Santa Cruz",
    author: "Chanchal",
    source: "YouTube",
    sourceUrl: "https://youtu.be/aIS-pntkmq8",
    embedUrl: "https://www.youtube-nocookie.com/embed/aIS-pntkmq8",
    image: gwyYoutube.url,
    duration: "2:31",
  },
  {
    id: "gwy-x",
    type: "social",
    title: "My chaotic creative process",
    text: "Here's a little introduction to me, my chaotic creative process, and why I'm so hyped for the DoraDAO Girls Who Yap Fellowship.",
    signature: "Harshita Raj · @cookie8054",
    author: "Harshita Raj",
    source: "X",
    sourceUrl: "https://x.com/cookie8054/status/2068770174862573572",
    videoUrl:
      "https://video.twimg.com/amplify_video/2068768520314499073/vid/avc1/1280x720/ddyE3o_q_mNTlHJU.mp4?tag=14",
    image: gwyX.url,
    duration: "2:24",
  },
  {
    id: "gwy-ig-vibecoding",
    type: "social",
    title: "AI vibecoding journey",
    text: "AI vibecoding journey. May I be able to build apps that sell, one day.",
    signature: "Fiona Li · @wjflow.co on Instagram",
    author: "Fiona Li",
    source: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/DbIrTh3sg16/",
    embedUrl: "https://www.instagram.com/reel/DbIrTh3sg16/embed",
    image: gwyIg1.url,
    duration: "Reel",
  },
  {
    id: "gwy-ig-curiosity",
    type: "social",
    title: "Curiosity brought me into tech",
    text: "Curiosity brought me into tech, now it's leading me into AI. If you've been meaning to get into AI, this might be a good entry point, let's connect and grow together.",
    signature: "@ux.mma on Instagram",
    author: "ux.mma",
    source: "Instagram",
    sourceUrl: "https://www.instagram.com/reel/Da3WC4OoSej/",
    embedUrl: "https://www.instagram.com/reel/Da3WC4OoSej/embed",
    image: gwyIg2.url,
    duration: "Reel",
  },
  {
    id: "gwy-li-oyindamola",
    type: "social",
    title: "Building in public with AI",
    text: "Sharing her #GWYFellowship journey, building in public with AI, one update at a time.",
    signature: "Oyindamola Abolarin · on LinkedIn",
    author: "Oyindamola Abolarin",
    source: "LinkedIn",
    sourceUrl:
      "https://www.linkedin.com/posts/oyindamola-abolarin-a56059242_gwyfellowship-buildinpublic-ai-activity-7484946010901929985-E0u6",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7484946010901929985",
    duration: "Post",
  },
  {
    id: "gwy-li-aneeka",
    type: "social",
    title: "A first-year hello",
    text: '"Hello everyone! I\'m Aneeka Gupta, a first-year…", introducing herself to the fellowship and documenting the road ahead.',
    signature: "Aneeka Gupta · on LinkedIn",
    author: "Aneeka Gupta",
    source: "LinkedIn",
    sourceUrl:
      "https://www.linkedin.com/posts/aneekagupta3155_hello-everyone-im-aneeka-gupta-a-first-year-activity-7487042764094791680-mWIR",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7487042764094791680",
    duration: "Post",
  },
  {
    id: "gwy-li-priya",
    type: "social",
    title: "Learning out loud",
    text: "A #GWYFellowship update shared on LinkedIn, showing up, learning out loud, and letting the community watch the progress happen.",
    signature: "Priya Gupta · on LinkedIn",
    author: "Priya Gupta",
    source: "LinkedIn",
    sourceUrl:
      "https://www.linkedin.com/posts/priya-gupta-60088441b_gwyfellowship-ugcPost-7485334014422114304-9Rae/",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7485334014422114304",
    duration: "Post",
  },
  {
    id: "first-hello",
    type: "video",
    title: "It started with a hello.",
    text: "One conversation. A room full of possibilities. Sometimes showing up is the brave part.",
    signature: "A community moment",
    image: fellowship.url,
    video: video.url,
  },
  {
    id: "quiet-builder",
    type: "text",
    title: "A small confession…",
    text: "I almost didn't introduce myself. Now I'm glad I did. Turns out, you don't have to be the loudest person in the room to find your people.",
    signature: "The quiet builder",
  },
  {
    id: "belong",
    type: "poster",
    title: "You belong before you become.",
    text: "Not after your first project. Not after your big idea. Right here. As you are.",
    signature: "A note from the wall",
  },
  {
    id: "more-than-event",
    type: "post",
    title: "More than a calendar invite.",
    text: "Came for the conversation. Stayed for the people. The best part was everything that happened between the sessions.",
    signature: "The first-time attendee",
    image: conference.url,
  },
  {
    id: "brave",
    type: "poster",
    title: "Dear overthinker, hit send.",
    text: "The idea doesn't have to be perfect. Neither do you. Someone out there is waiting to build it with you.",
    signature: "Your friendly reminder",
  },
  {
    id: "tiny-wins",
    type: "post",
    title: "Collecting tiny wins.",
    text: "A shared idea, a little encouragement, and one more reason to try again tomorrow. Keeping this moment close.",
    signature: "The work-in-progress",
    image: community.url,
  },
  {
    id: "people",
    type: "text",
    title: "My favourite plot twist?",
    text: "I thought I needed all the answers. What I actually needed was someone to ask the questions with me.",
    signature: "Still figuring it out",
  },
  {
    id: "together",
    type: "text",
    title: "A place to start.",
    text: "Here's to the unfinished projects, the first attempts, and the people who make trying feel a little less scary.",
    signature: "One of the hoomans",
  },
];
