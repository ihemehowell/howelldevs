import { ArrowUpRight } from "lucide-react";
import { profile } from "../data";
import { GithubIcon, NpmIcon, XIcon } from "./BrandIcons";
import { Reveal, SectionLabel } from "./Reveal";

const principles = [
  { title: "Ship it for real", body: "Deployed, reachable and maintained — not a mockup that only works on my machine." },
  { title: "Typed end to end", body: "TypeScript everywhere, so products stay safe to change as they grow." },
  { title: "Detail is the product", body: "Motion, empty states, keyboard support, dark mode — the parts users feel." },
];

export function About() {
  return (
    <section id="about" className="border-t border-line bg-bg-2">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-28 sm:px-6 sm:py-36 lg:grid-cols-[0.9fr_1.4fr]">
        <Reveal>
          <div className="rounded-[28px] border border-line bg-surface p-3 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src={profile.avatar}
                alt={`${profile.name}`}
                loading="lazy"
                width={400}
                height={400}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16 text-white">
                <p className="text-xl font-medium tracking-tight">{profile.name}</p>
                <p className="text-sm text-white/70">{profile.role}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-3">
              {[
                { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
                { href: profile.socials.x, label: "X", Icon: XIcon },
                { href: profile.socials.npm, label: "npm", Icon: NpmIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-surface-2 py-3 text-sm text-muted transition-colors hover:text-fg"
                >
                  <Icon size={15} /> {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel index="04">About</SectionLabel>
            <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              I'm Howell — a developer who cares about the{" "}
              <span className="font-serif font-normal italic text-accent">last 10%</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I've been writing code since 2018, and today I build full-stack products with TypeScript, React and
                Next.js — from client portals and storefronts to real-time 3D experiences.
              </p>
              <p>
                I run{" "}
                <a
                  href={profile.socials.company}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fg underline decoration-accent decoration-2 underline-offset-4"
                >
                  BitvoraTech
                </a>
                , where I help businesses turn ideas into fast, maintainable software. Along the way I publish the tools
                I wish existed — like an icon set that finally includes the Naira sign, USSD and bank transfers.
              </p>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.06}>
                <li className="h-full rounded-3xl border border-line p-5">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <p className="mt-6 font-medium">{p.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex items-center gap-2 font-medium"
            >
              See my activity on GitHub
              <ArrowUpRight size={18} className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
