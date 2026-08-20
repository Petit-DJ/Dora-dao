# 🌸 GWY Fellowship 2.0 — Girls Who Yap × AI

> **"Soft skies. Bold algorithms. Build, yap, ship & earn."**

A women-first, creator-led fellowship and ecosystem platform demystifying Artificial Intelligence. **GWY Fellowship 2.0** empowers women builders, creators, product managers, marketers, and designers to harness AI, collaborate on high-impact projects, participate in hackathons, and earn bounties.

---

## 🌟 Concept & Vision

In an era dominated by rapid AI evolution, technical barriers often exclude non-traditional builders. **Girls Who Yap (GWY) × AI** bridges this gap by blending storytelling ("yapping") with cutting-edge artificial intelligence, creating an inclusive, high-energy environment for women to ideate, prototype, and launch real-world applications.

### Core Pillars

- 💡 **Demystifying AI**: Hands-on workshops, prompt engineering, agentic workflow building, and no-code/low-code/full-stack AI integration.
- 🎨 **Creator & Builder Synergy**: Bringing together developers, designers, PMs, and marketers to build cross-functional products.
- 🚀 **Build, Yap, Ship & Earn**: Earn micro-grants, hackathon prizes, and bounties while showcasing products to industry leaders.
- 🌐 **Global Chapters & Community**: Fostering inclusive tech communities across global regions and university campuses through **Dora DAO**.

---

## ⚡ Key Features & Initiatives

### 1. 🎓 Fellowship Cohorts (`/programs/gwy-26`, `/programs/gwy-25`)
- Structured **4-week immersive learning tracks** tailored for beginner to advanced AI builders.
- Live workshops, fireside yaps with industry mentors, and hands-on capstone projects.
- Interactive countdown timers, application tracking, and cohort referral incentives.

### 2. ⚡ Hack with Dora (`/hack-with-dora`)
- Community hackathons featuring multi-track challenges:
  - **AI & Autonomous Agents**
  - **Creator Economy & Content Tools**
  - **Web3 & Open Source Protocols**
  - **Design & User Experience**

### 3. 🤝 Partner & Ecosystem Portal (`/partner`)
- Tailored onboarding pathways for partners:
  - **Corporate Sponsorships**: Mentorship, API credits, talent scouting.
  - **CSR & Impact**: Driving diversity in tech and AI accessibility.
  - **Ecosystem & Community**: Cross-community events, co-hosted hackathons.
  - **Volunteers**: Mentor, judge, and facilitate cohort sessions.

### 4. 🌍 Regional Chapters & Dora DAO (`/chapters`, `/doradao`)
- Local meetup organization, campus ambassadors, and decentralized community governance.

### 5. 🎙️ Voices & Community Showcase (`/voices`, `/contributors`)
- Highlighting alumni stories, speaker showcases, sponsor carousels, and community contributors.

---

## 🏗️ Technology Stack

This application is built on a modern, high-performance web architecture:

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [TanStack Start](https://tanstack.com/start) | SSR & Full-stack framework built on Vite & TanStack Router |
| **Routing** | [TanStack Router](https://tanstack.com/router) | Fully type-safe router with auto-generated route trees |
| **UI Library** | [React 19](https://react.dev/) | Component architecture & state management |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first styling engine with glassmorphism & gradients |
| **Primitives** | [Radix UI](https://www.radix-ui.com/) | Unstyled, accessible UI components |
| **Icons & Visuals** | [Lucide React](https://lucide.dev/) | Modern vector icons |
| **Build & Dev** | [Vite 7](https://vitejs.dev/) | Next-generation frontend tooling |
| **Server / Engine** | [Nitro Engine](https://nitro.unjs.io/) | Server engine targeting Cloudflare Pages & Netlify |

---

## 📂 Project Structure

```
Dreamwave-Digital/
├── public/                # Static assets, logos, and program media
├── src/
│   ├── assets/            # Component-imported images, graphics, and icons
│   ├── components/        # Reusable UI components
│   │   ├── ui/            # Radix UI & primitive elements
│   │   ├── ApplyBar.tsx   # Fixed bottom application bar
│   │   ├── Countdown.tsx  # Dynamic event/fellowship timer
│   │   ├── SiteNav.tsx    # Header & responsive navigation
│   │   └── SiteFooter.tsx # Footer with social links & sitemap
│   ├── hooks/             # Custom React hooks (theme, scroll, analytics)
│   ├── lib/               # Utility functions & data models (speakers, sponsors)
│   ├── routes/            # TanStack Router file-based pages
│   │   ├── index.tsx      # Main Landing Page (GWY 2.0)
│   │   ├── chapters.tsx   # Global & Campus Chapters
│   │   ├── contributors.tsx # Community Builders & Alumni
│   │   ├── doradao.tsx    # Dora DAO Overview
│   │   ├── hack-with-dora.tsx # Hackathon Hub
│   │   ├── partner.*.tsx  # Partner Onboarding Portal
│   │   └── programs.*.tsx # Fellowship & Program Details
│   ├── router.tsx         # TanStack Router configuration
│   └── styles.css         # Global design system & Tailwind setup
├── vite.config.ts         # Vite configuration with TanStack Start integration
├── wrangler.jsonc         # Cloudflare Workers/Pages configuration
└── package.json           # Project dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/Petit-DJ/Dora-dao.git
cd Dreamwave-Digital
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be accessible at `http://localhost:8080` (or `http://localhost:5173`).

### 4. Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Options

- **Cloudflare Pages**: Configured via [`wrangler.jsonc`](file:///g:/Project/doradaomain/Dreamwave-Digital/wrangler.jsonc).
- **Netlify**: Configured via [`netlify.toml`](file:///g:/Project/doradaomain/Dreamwave-Digital/netlify.toml).

---

## 💬 Community & Support

Join the Girls Who Yap & Dora DAO movements!

- 🌐 **Website**: [GWY Fellowship](http://localhost:8080)
- 🐤 **Twitter / X**: [@GirlsWhoYap](https://x.com)
- 💬 **Discord**: Community Chat & Support
- 📧 **Contact**: `fellowship@doradao.org`

---

<p center>
  Made with 💖 by <b>Girls Who Yap × Dora DAO</b>
</p>
