// Browser-safe content for the four Partnership pages. Stat values are preview numbers until DoraDAO supplies real figures.
export const PARTNER_EMAIL = "Connectdoradao@gmail.com";

export type Block = { kicker?: string; title: string; intro?: string; items: { tag?: string; title: string; text: string; points?: string[] }[]; cols?: 2 | 3 | 4 };
export type PartnerPageData = {
  slug: string; label: string; metaTitle: string; metaDesc: string;
  kicker: string; title: string; titleEm: string; lead: string; cta: string; trust: string;
  statsIntro?: string; stats: { value: number; suffix: string; prefix?: string; label: string }[];
  blocks: Block[];
  quotes: { text: string; who: string }[];
  closer: { title: string; text: string; cta: string };
  faq: { q: string; a: string }[];
};

export const partnerPages: PartnerPageData[] = [
  {
    slug: "csr", label: "CSR Partners",
    metaTitle: "CSR Partnership · DoraDAO",
    metaDesc: "Give your employees skills-based ways to support women at the most critical moments of their tech careers with DoraDAO.",
    kicker: "CSR PARTNERSHIP", title: "More women leave tech than stay to lead.", titleEm: "Your team can change that.",
    lead: "DoraDAO gives your employees direct, skills-based ways to support women at the most critical moments in their careers, with the proof it's working. Open to everyone. Centered on women in tech.",
    cta: "Become a CSR Partner", trust: "Supported by leading technology companies committed to making real change",
    statsIntro: "In 2025, our CSR partners have helped guide the next generation of women in tech in:",
    stats: [
      { value: 1200, suffix: "+", label: "mentorship matches" },
      { value: 8000, suffix: "+", label: "women reached at partner-supported events" },
      { value: 900, suffix: "+", label: "resumes reviewed by partner employees" },
    ],
    blocks: [
      {
        kicker: "WAYS TO PARTNER", title: "Give your team meaningful ways to show up for women in tech",
        intro: "From 30-minute coffee chats to full-day company events, every program is designed and managed by DoraDAO to create real impact for your employees and our members.",
        cols: 3,
        items: [
          { tag: "Mentoring", title: "DoraDAO Mentor Circles (1-6 mentors)", text: "Join our quarterly mentoring events. We handle registration, hosting, and follow-up so your team just shows up ready to engage in small, high-impact groups.", points: ["1.5-hour commitment, quarterly events", "Small group format (4-6 mentees per mentor)", "Perfect entry point for first-time mentoring partners", "Space limited, first-come, first-served basis"] },
          { tag: "Mentoring", title: "Company-Sponsored Mentor Days (25+ mentors)", text: "Engage your entire team in a high-visibility, single-day mentoring experience. We provide full event management while your company takes center stage.", points: ["High-impact, one-day CSR activation", "Your company selects development focus area", "Optional co-branding on promotional materials", "Post-event reporting and feedback summary"] },
          { tag: "Mentoring", title: "Mentoring Directory", text: "Your employees mentor on their own schedule through our platform, where members book time with your team directly based on expertise and availability.", points: ["Flexible participation on your employees' own time", "Year-round availability with no set hours required", "Build trusted, long-term mentoring relationships", "Mentors choose topics they're comfortable discussing"] },
          { tag: "Mentoring", title: "Local In-Person Mentor Events", text: "Host intimate mentoring meetups in your office or local venue. Choose roundtables, speed mentoring, or open networking. We handle member recruitment and coordination.", points: ["You choose the city, venue, and format", "Scalable events (20+ attendees)", "We provide member recruitment and day-of registrant list"] },
          { tag: "Mentoring", title: "Early Career Coffee Chats", text: "Join our casual monthly coffee chats in major tech hubs. No slides, no pressure, just meaningful connection over coffee.", points: ["Available in major tech hubs", "2-4 mentors per event with 4-10 early-career women", "Monthly themed conversations (imposter syndrome, career pivots, etc.)"] },
          { tag: "Speaking", title: "The Download Series", text: "Share career insights in monthly professional development talks for early-career women." },
          { tag: "Speaking", title: "Student Career Talks", text: "Help students navigate their entry into tech with career exploration and recruiting preparation. Share your journey, demystify job paths, and provide actionable tips.", points: ["Focus on career readiness and launching a tech career", "Topics include “day in the life” sessions, technical interviews, and resume writing", "Virtual format with full DoraDAO event logistics support"] },
          { tag: "Speaking", title: "Fail Forward Series", text: "Quarterly speaker series where C-suite and executive women share the setbacks, rejections, and challenges that shaped their rise.", points: ["Executive-level speakers sharing authentic leadership journeys", "High-visibility thought leadership opportunity", "Reaches both student and early career audiences"] },
          { tag: "Speaking", title: "Custom Speaking Opportunities", text: "Flexible speaking formats where your experts share knowledge on topics they choose, from technical skills to industry insights.", points: ["Solo sessions, themed panels, or facilitated Q&As", "You bring expertise, we handle registration and moderation", "Recordings reach the entire community"] },
        ],
      },
      {
        title: "What sets a DoraDAO partnership apart", cols: 2,
        items: [
          { title: "Impact you can take straight to your leadership team", text: "We track career outcomes, job placements, and confidence gains, then deliver transparent reports that show your leadership team (and your employees) the real difference you're making." },
          { title: "We handle the logistics. Your team just shows up.", text: "Let us worry about registration, platform hosting, member recruitment, and follow-up reporting. Your employees just show up to meaningful conversations." },
          { title: "More than a moment. A movement.", text: "Your team starts real mentoring relationships, they become better leaders, and join a movement driving economic impact for women in tech. That's what year-round engagement looks like." },
          { title: "Show up for those who don't have a roadmap", text: "Many in our community are first-generation college students. The women your team mentors are breaking generational cycles, the kind of impact that belongs in your annual report." },
        ],
      },
      {
        title: "Beyond Employee Engagement", intro: "DoraDAO partners can sponsor flagship initiatives aligned with your ESG priorities.", cols: 3,
        items: [
          { title: "RewriteAI", text: "Sponsor AI skills training for women on the path to employment." },
          { title: "Rise with DoraDAO", text: "Support women at critical career transition points." },
          { title: "DoraDAO Future of Tech Fund", text: "Remove financial barriers for the next generation of tech talent." },
        ],
      },
    ],
    quotes: [{ text: "I joined DoraDAO in my senior year of college, and since then I've been fortunate to enjoy the strong community of women, the vast networking opportunities, and valuable insights into tech recruiting. The resources and mentoring I received were super helpful as a new grad entering the field.", who: "DoraDAO member" }],
    closer: { title: "Become a DoraDAO Partner", text: "Your dedicated partnership manager will contact you within 2 business days.", cta: "Talk to us about partner opportunities" },
    faq: [
      { q: "How do we measure ROI on CSR investments?", a: "We provide detailed impact reporting with metrics on employee engagement hours, program participation rates, and career outcomes. You'll receive quarterly reports showing how your partnership meets your CSR goals." },
      { q: "Will our employees actually engage meaningfully?", a: "Our structured programs have flexible time commitments, from 30-minute virtual conversations to multi-day onsite experiences. We handle all logistics and matching so employees can focus on meaningful conversations." },
    ],
  },
  {
    slug: "corporate", label: "Corporate Partners",
    metaTitle: "Corporate Partners · DoraDAO",
    metaDesc: "Year-round access to students and early-career women in tech, plus the tools to build real relationships before recruiting season.",
    kicker: "CORPORATE PARTNERS", title: "The women in tech you've been", titleEm: "looking for are here.",
    lead: "Inclusive hiring doesn't happen by accident. DoraDAO gives you year-round access to 50,000+ students and early-career professionals, plus the tools to build real relationships before recruiting season starts. Open to everyone. Centered on women in tech.",
    cta: "Start the process", trust: "Trusted by Fortune 500 companies and innovative growth-stage firms from tech to finance.",
    stats: [
      { value: 85, suffix: "%", label: "of our partners have multi-year partnerships" },
      { value: 20000, suffix: "+", label: "event attendees in 2024" },
      { value: 92, suffix: "%", label: "of members said DoraDAO has positively impacted their career or life" },
    ],
    blocks: [
      {
        title: "Access the talent. Build the relationships. See the results.", intro: "Get the tools to move beyond transactional recruiting and build relationships with early-career talent year-round.", cols: 2,
        items: [
          { title: "Reach exactly the technical talent you need", text: "Reach specific segments of our 50,000+ community based on skills, experience level, location, and more. We'll connect you with candidates who match your exact needs." },
          { title: "Stay visible year-round, not just during hiring pushes", text: "Build genuine connections through consistent touchpoints, so your workshops, mentorship sessions, and conversations are remembered when candidates make their next move." },
          { title: "Show candidates what it's actually like to work with you", text: "Share your technical challenges, culture, and opportunities through speaking events, content collaboration, and community engagement." },
          { title: "Get insights that actually improve your hiring", text: "Work with dedicated strategic advisors to track what's working. Regular analytics on engagement, applications, interviews, and hires, with clear ROI metrics." },
        ],
      },
      {
        title: "Why DoraDAO's talent and community outperform traditional recruiting channels", cols: 3,
        items: [
          { title: "Relationships that convert, not just applicant pools", text: "By the time a candidate applies, she already knows your team, understands your culture, and has chosen you deliberately." },
          { title: "Presence that compounds over time", text: "DoraDAO keeps you visible and credible throughout the full career journey, from sophomore year through the first five years of work." },
          { title: "A dedicated partner, not just another vendor", text: "Work with a strategic advisor who knows your technical hiring needs, with customized engagement strategies and detailed performance metrics." },
        ],
      },
      {
        title: "How you can engage with our community", cols: 4,
        items: [
          { tag: "STRATEGIC PARTNER PROGRAM", title: "Your complete talent relationship solution", text: "Build a year-round presence with a dedicated advisor, engaging events, and real results." },
          { tag: "VIRTUAL CAREER SUMMIT", title: "Meet motivated candidates who already know your company", text: "Our flagship recruiting event matches you with candidates specifically interested in what you offer." },
          { tag: "TECHCONNECT EVENTS", title: "Find specialists for your hardest-to-fill roles", text: "Focused sessions for AI, cybersecurity, or product engineering talent." },
          { tag: "MENTORSHIP PROGRAM", title: "Build relationships before you need to hire", text: "Your employees gain leadership experience while creating natural relationships with promising talent." },
          { tag: "teamDoraDAO PARTNER PORTAL", title: "See exactly what you're getting", text: "Track engagement to hiring outcomes in one place and generate reports that show clear ROI." },
          { tag: "THOUGHT LEADERSHIP", title: "Show what makes your workplace worth joining", text: "Share your challenges and culture through speaking events and content." },
          { tag: "CUSTOM WORKSHOPS", title: "Watch potential candidates in action", text: "Host skill-building sessions that showcase the interesting work your teams do." },
          { tag: "STRATEGIC INSIGHTS", title: "Know what technical candidates actually want", text: "Regular intelligence on what today's candidates look for and what attracts and keeps them." },
        ],
      },
    ],
    quotes: [
      { text: "DoraDAO has made finding stunning eligible talent for our entry-level roles a breeze. They personalize your experience with members so both parties connect in non-transactional ways. We've hosted dinners, panels and workshops, and found direct hires.", who: "Program Manager, Emerging Talent partner" },
      { text: "Our partnership with DoraDAO has been instrumental in connecting us with highly skilled and motivated individuals passionate about careers in technology.", who: "Program Lead, National Partnerships" },
      { text: "We've had an amazing experience with the DoraDAO team from pre- to post-events. We appreciate how seamless their team operates and how engaged their members are.", who: "University Recruiter" },
    ],
    closer: { title: "Tools and insights to optimize your talent strategy", text: "Access best-practice guides, engagement templates, and data-driven insights that help you connect more effectively with women in tech, across borders, too.", cta: "Schedule a consultation" },
    faq: [],
  },
  {
    slug: "philanthropic", label: "Philanthropic Partners",
    metaTitle: "Philanthropic Partners · DoraDAO",
    metaDesc: "Foundations invest in DoraDAO to help women navigate barriers and thrive in tech, backed by scalable programs and outcome tracking.",
    kicker: "PHILANTHROPIC PARTNERS", title: "The most critical decade in a woman's tech career", titleEm: "starts here.",
    lead: "DoraDAO is where foundations invest to help women navigate barriers, build confidence, and gain the skills to thrive in tech, backed by scalable programs and rigorous outcome tracking. Open to everyone. Centered on women in tech.",
    cta: "View impact report", trust: "Trusted by forward-thinking foundations and impact-focused donors",
    stats: [
      { value: 90, suffix: "%", label: "of DoraDAO members feel certain about pursuing a career in tech by graduation" },
      { value: 227, suffix: "+", label: "women received direct financial support through our Future of Tech Fund" },
      { value: 90, suffix: "¢", label: "of every dollar donated directly supports women in tech" },
    ],
    blocks: [
      {
        title: "Fund programs that actually move the needle", intro: "DoraDAO's workforce development model works across the full arc, from financial barriers at college through career confidence in the first five years.", cols: 3,
        items: [
          { title: "Build the relationships that keep women in tech", text: "Connection is as critical as skill, and DoraDAO members stay employed in tech at rates 22% higher than the national average." },
          { title: "Bridge education and employment, then keep going", text: "Our programming builds the foundation for long-term advancement, 78% of early-career members feel confident continuing in tech." },
          { title: "Develop the whole professional, not just the technologist", text: "Communication, leadership, and workplace navigation determine who moves up. DoraDAO programs develop both sides." },
        ],
      },
      {
        title: "Why foundations invest in DoraDAO's approach", cols: 3,
        items: [
          { title: "Continuous support across a 10-year career span", text: "DoraDAO works across the full decade from college entry through career establishment, addressing the points where women are most likely to leave tech." },
          { title: "Rigorous measurement, not just inspiring stories", text: "Our impact framework tracks immediate outcomes and long-term trajectories, giving your board the evidence it needs." },
          { title: "A community that creates lasting professional networks", text: "Job placement gets women into tech. Connection keeps them there." },
        ],
      },
      {
        title: "Ways to invest in women's advancement in tech", cols: 3,
        items: [
          { tag: "STRATEGIC IMPACT PARTNERSHIPS", title: "Customized giving aligned to your priorities", text: "Design a partnership around your impact goals, measurement framework, and program focus areas." },
          { tag: "LEADERSHIP DEVELOPMENT", title: "Invest in the next generation of tech leaders", text: "Fund programs that prepare women for leadership roles, creating multiplier effects." },
          { tag: "COLLEGE-TO-CAREER", title: "Fund the transition points where women leave tech", text: "Support women through early college, the first job, and the first years of career establishment." },
          { tag: "RESEARCH INITIATIVES", title: "Advance what the field knows about what works", text: "Support research that deepens understanding of women's retention and advancement in tech." },
          { tag: "REGIONAL EXPANSION", title: "Bring a proven model to underserved communities", text: "Create new community hubs where they're needed most." },
          { tag: "FUTURE OF TECH FUND", title: "Fund the support that keeps women in tech", text: "Direct financial support covering basic needs and emergency assistance at critical moments." },
        ],
      },
      {
        title: "Ready to make an impact? Here's where to start.", cols: 2,
        items: [
          { tag: "DONATE", title: "Make a direct contribution to women in tech", text: "One-time or recurring, every gift funds programs with clear, trackable outcomes." },
          { tag: "VOLUNTEER", title: "Bring your expertise into the community", text: "Share your knowledge as a mentor, speaker, or workshop host on your schedule." },
        ],
      },
    ],
    quotes: [{ text: "Women are more likely to face barriers and make tough trade-offs when advancing in their careers. We are thrilled to provide funding to organizations helping remove those barriers so women can thrive at work.", who: "Vice President of Program Strategy, foundation partner" }],
    closer: { title: "Let's talk about what's possible for women in tech", text: "Join the foundations and donors already funding programs that deliver measurable outcomes.", cta: "Start a conversation" },
    faq: [],
  },
  {
    slug: "donate", label: "Donate",
    metaTitle: "Donate · DoraDAO",
    metaDesc: "Your gift helps students and early-career women navigate the moments that matter most in their tech careers.",
    kicker: "DONATE", title: "The women who will lead tech", titleEm: "need your support right now.",
    lead: "Your gift helps students and early-career professionals navigate the moments that matter most: surviving freshman year, landing their first role, and staying in an industry that wasn't built for them.",
    cta: "Fund the future of tech", trust: "Supported by individuals and organizations committed to keeping women in tech.",
    stats: [
      { value: 2, prefix: "$", suffix: "M+", label: "in funds distributed to date" },
      { value: 227, suffix: "+", label: "members funded" },
      { value: 92, suffix: "%", label: "of members say DoraDAO has positively impacted their career or life" },
    ],
    blocks: [
      {
        title: "Your support reaches women at every stage of their tech career", intro: "Financial relief, community, and career guidance. When and where women need it most.", cols: 2,
        items: [
          { title: "Year-round community access", text: "A continuous community where women find peers who understand their challenges and mentors who've been where they are." },
          { title: "Career-defining opportunities", text: "Interview prep, salary negotiation workshops, and one-on-one mentorship help women land first roles and advance into leadership." },
        ],
      },
      {
        title: "How your donation creates lasting change", cols: 3,
        items: [
          { title: "Trust-based, not transactional", text: "When a student is at risk of dropping out due to financial stress, we help within days, not months." },
          { title: "Continuous, not temporary", text: "Your donation funds year-round programming, active channels, regular meetups, and ongoing mentorship." },
          { title: "Real, not random", text: "Women find study partners, mentors, and champions who stick with them from college through career." },
        ],
      },
      {
        title: "Let's create opportunities for women in tech", cols: 2,
        items: [
          { tag: "ONE-TIME", title: "One-time giving impact", text: "", points: ["Expand access to career tools and opportunities", "Fund interview prep, resume reviews, and mentorship", "Power skill-building workshops in AI and emerging tech", "Remove barriers to accessing critical opportunities"] },
          { tag: "MONTHLY", title: "Monthly giving impact", text: "", points: ["Sustain a 24/7 peer and mentor support network", "Provide ongoing workshops and career programming", "Support new programs in fast-moving tech fields", "Keep women in tech through long-term support"] },
        ],
      },
    ],
    quotes: [
      { text: "Thank you DoraDAO for the incredible opportunity to attend a conference through the DoraDAO scholarship. It was truly transformative and gave me greater confidence and clarity in my journey.", who: "Veronica A., Future of Tech Fund Recipient" },
      { text: "Days before my exams my laptop broke down. A DoraDAO leader encouraged me to apply for the Tech Fund, and the support let me get a new laptop. That gesture meant more than words can express.", who: "Olayemi A., Future of Tech Fund Recipient" },
    ],
    closer: { title: "Your support today keeps women in tech tomorrow", text: "With 100+ new members joining weekly, your donation provides holistic support when women face tough choices. Double your impact: many companies match employee donations.", cta: "Donate and support today" },
    faq: [
      { q: "I'm part of a philanthropy and would like to support DoraDAO. Who can I connect with?", a: `Visit the Philanthropic Partners page or reach out directly via ${"Connectdoradao@gmail.com"}.` },
      { q: "How quickly will my donation be put to use?", a: "Immediately, providing emergency financial aid, career-development programs, and support to women who need it today." },
      { q: "Can my company match my donation?", a: "Many companies double or even triple employee donations. Check with your employer, it doesn't hurt to ask!" },
      { q: "What are your available giving pathways?", a: "One-time or recurring donations, employer matching gifts, donor advised funds, and stock gifts." },
      { q: "How do you measure impact?", a: "We track the number of women receiving financial aid, community engagement metrics, and member survey results." },
      { q: "Can I make a dedicated gift?", a: "Yes. You can dedicate your donation in honor or memory of someone special." },
    ],
  },
];
