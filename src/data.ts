// All site content lives here — edit this file to update the portfolio.

/** Resolves a file in public/ against the deploy base path (e.g. /howelldevs/ on GitHub Pages). */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Iheme Uchenna Howell",
  short: "Howell",
  brand: "Howelldevs",
  role: "Full-stack web developer",
  location: "Nigeria · Remote worldwide",
  email: "infobitvoratech@gmail.com",
  avatar: asset("avatar.jpg"),
  socials: {
    github: "https://github.com/ihemehowell",
    x: "https://x.com/IAmKelvin16",
    npm: "https://www.npmjs.com/~ihemehowell",
    company: "https://www.bitvoratech.com",
  },
};

export const stats = [
  { value: "6", label: "Production apps & packages" },
  { value: "2", label: "Libraries published on npm" },
  { value: "65+", label: "Public repositories" },
  { value: "2018", label: "Writing code since" },
];

export type Project = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  image?: string;
  live?: string;
  code?: string;
  /** Background tint used behind the screenshot frame */
  tint: string;
};

// Only shipped, publicly reachable work is listed here.
export const projects: Project[] = [
  {
    slug: "switch-icons",
    title: "Switch Icons",
    kind: "Open-source library · Docs site",
    year: "2026",
    summary:
      "A tree-shakeable React icon library covering the icons mainstream sets ignore — fintech and West-African payment rails (Naira, USSD, POS, bank transfer), logistics, AI and security.",
    highlights: ["Published on npm", "Live playground", "Used in production by MSHD Portal"],
    stack: ["React", "TypeScript", "SVG", "Vite", "Tailwind"],
    image: asset("projects/switchicons.webp"),
    live: "https://switch-icons-site.vercel.app",
    code: "https://github.com/ihemehowell/switchicons",
    tint: "#e7e9ee",
  },
  {
    slug: "mshd-portal",
    title: "MSHD Student Portal",
    kind: "Client product · Education",
    year: "2026",
    summary:
      "A calm, focused student portal for the MIV School of Healing & Deliverance — sessions, course materials, assignments, notifications and personal progress reports for each cohort.",
    highlights: ["Student dashboard", "Session scheduling", "Progress reporting"],
    stack: ["Next.js 16", "React 19", "TypeScript", "Switch Icons"],
    image: asset("projects/ministry.webp"),
    live: "https://ministry-tau.vercel.app",
    code: "https://github.com/ihemehowell/ministry",
    tint: "#c9a88a",
  },
  {
    slug: "big-brother-ai",
    title: "Big Brother AI",
    kind: "Interactive 3D experience",
    year: "2026",
    summary:
      "A reality-show simulation where AI housemates live in a real-time 3D house. Viewers watch a live relationship graph evolve, browse the episode guide and vote in weekly evictions.",
    highlights: ["Real-time 3D scene", "D3 relationship graph", "Live voting"],
    stack: ["Next.js", "Three.js", "React Three Fiber", "D3", "pnpm monorepo"],
    image: asset("projects/big-brother.webp"),
    live: "https://big-brother-ai-web.vercel.app",
    code: "https://github.com/ihemehowell/big-brother-ai",
    tint: "#9ec3dd",
  },
  {
    slug: "jochenna",
    title: "Jochenna Thrift",
    kind: "E-commerce storefront",
    year: "2026",
    summary:
      "A children's thrift marketplace that helps parents find clothes, toys and baby items by age, condition and category — with wishlist, cart and a two-step checkout.",
    highlights: ["Filter by age & condition", "Two-step checkout", "Unit-tested with Vitest"],
    stack: ["Next.js 16", "TypeScript", "Tailwind 4", "Zustand", "Framer Motion"],
    image: asset("projects/jochenna.webp"),
    live: "https://jochenna.vercel.app",
    code: "https://github.com/ihemehowell/jochenna",
    tint: "#f3e9c6",
  },
  {
    slug: "trinity-house",
    title: "Trinity House",
    kind: "Multi-page website",
    year: "2026",
    summary:
      "A cinematic multi-page site for a non-denominational worship centre — ministries, events, media, gallery, online giving and a live-stream entry point.",
    highlights: ["9 pages", "Online giving flow", "Watch-live CTA"],
    stack: ["React", "Vite", "Radix UI", "Tailwind", "Motion"],
    image: asset("projects/trinity.webp"),
    live: "https://trinity-red.vercel.app",
    code: "https://github.com/ihemehowell/trinity",
    tint: "#1b2741",
  },
];

export const packages = [
  {
    name: "switch-icons",
    install: "npm i switch-icons",
    description:
      "React icon library with a consistent 24×24 grid, currentColor, forwardRef and per-icon tree-shaking — plus the fintech icons Africa's products actually need.",
    usedIn: "MSHD Portal · Switch Icons docs",
    npm: "https://www.npmjs.com/package/switch-icons",
    code: "https://github.com/ihemehowell/switchicons",
    snippet: [
      ["k", "import"],
      ["p", " {"],
      ["v", "\n  Naira, BankTransfer, Waybill\n"],
      ["p", "} "],
      ["k", "from"],
      ["s", ' "switch-icons"'],
      ["p", ";"],
    ],
  },
  {
    name: "@ihemehowell/react-utils",
    install: "npm i @ihemehowell/react-utils",
    description:
      "A lean, fully-typed toolkit: 10 production hooks, SSR-safe DOM helpers and formatters for Naira/USD currency, relative time and file sizes. Dual ESM/CJS with CI.",
    usedIn: "Jochenna Thrift",
    npm: "https://www.npmjs.com/package/@ihemehowell/react-utils",
    code: "https://github.com/ihemehowell/react-utils",
    snippet: [
      ["k", "import"],
      ["p", " {"],
      ["v", "\n  useDebounce, formatCurrency\n"],
      ["p", "} "],
      ["k", "from"],
      ["s", ' "@ihemehowell/react-utils"'],
      ["p", ";"],
    ],
  },
] as const;

export const stack = [
  "TypeScript",
  "React 19",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Three.js",
  "Zustand",
  "Framer Motion",
  "Vite",
  "Docker",
  "Vercel",
  "LangChain",
];

export const services = [
  {
    title: "Product frontends",
    body: "Fast, accessible interfaces in React and Next.js — from marketing sites to dashboards that people use every day.",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "Full-stack apps",
    body: "APIs, auth and data modelling with Express, Prisma, PostgreSQL and MongoDB — shipped and containerised.",
    tags: ["Node", "Prisma", "Postgres"],
  },
  {
    title: "Design systems & libraries",
    body: "Typed, tree-shakeable component and icon libraries your whole team can build on. Published, versioned, documented.",
    tags: ["npm", "TypeScript", "Docs"],
  },
  {
    title: "Commerce",
    body: "Storefronts with filtering, wishlist, cart and checkout flows tuned for conversion and mobile-first shoppers.",
    tags: ["Checkout", "State", "SEO"],
  },
  {
    title: "AI & interactive",
    body: "LLM-powered features with retrieval, plus real-time 3D and data-viz experiences that make products memorable.",
    tags: ["RAG", "Three.js", "D3"],
  },
];

export const process = [
  { step: "01", title: "Discover", body: "We map goals, users and constraints. You get a clear scope, timeline and fixed milestones." },
  { step: "02", title: "Design", body: "Wireframes to high-fidelity UI, validated early so we build the right thing once." },
  { step: "03", title: "Build", body: "Typed, tested code with weekly preview deploys — you see progress, not promises." },
  { step: "04", title: "Launch & grow", body: "Performance, SEO and analytics checked before launch, then support as you scale." },
];
