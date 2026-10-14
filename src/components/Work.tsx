import type { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data";
import { GithubIcon } from "./BrandIcons";
import { Reveal, SectionLabel } from "./Reveal";

const order = ["mshd-portal", "big-brother-ai", "jochenna", "switch-icons", "trinity-house"];
const spans = ["lg:col-span-12", "lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function trackSpotlight(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export function Work() {
  const list = order.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <SectionLabel index="01">Selected work</SectionLabel>
          <h2 className="max-w-2xl text-balance text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
            Shipped, live and in{" "}
            <span className="font-serif font-normal italic text-accent">real hands</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-muted">
            Every project here is deployed and publicly reachable. Click any preview to open the live product.
          </p>
        </Reveal>
      </div>

      <div className="grid gap-5 lg:grid-cols-12">
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08} className={spans[i]}>
            <ProjectCard project={p} featured={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project: p, featured }: { project: Project; featured: boolean }) {
  return (
    <article
      onMouseMove={trackSpotlight}
      className={`spotlight group h-full rounded-[28px] border border-line bg-surface p-3 transition-colors hover:border-line-strong ${
        featured ? "lg:grid lg:grid-cols-[1.45fr_1fr] lg:gap-3" : "flex flex-col"
      }`}
    >
      <a
        href={p.live}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${p.title} live site`}
        className="relative block overflow-hidden rounded-[20px] px-5 pt-6 sm:px-8 sm:pt-8"
        style={{ background: `linear-gradient(160deg, ${p.tint}, color-mix(in oklab, ${p.tint} 60%, #000 25%))` }}
      >
        <div className="overflow-hidden rounded-t-xl shadow-[0_24px_60px_-20px_rgb(0_0_0/0.55)] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.015]">
          <div className="flex items-center gap-1.5 bg-[#1d1d1f] px-3 py-2.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 truncate rounded-md bg-white/10 px-2.5 py-0.5 font-mono text-[10px] text-white/60">
              {p.live?.replace("https://", "")}
            </span>
          </div>
          <img
            src={p.image}
            alt={`${p.title} — screenshot`}
            loading="lazy"
            decoding="async"
            width={1400}
            height={875}
            className="aspect-[16/10] w-full object-cover object-top"
          />
        </div>
        <span className="absolute right-4 top-4 grid size-11 scale-75 place-items-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <ArrowUpRight size={20} />
        </span>
      </a>

      <div className={`flex flex-1 flex-col px-3 pb-3 pt-6 ${featured ? "lg:px-6 lg:py-6" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{p.kind}</p>
            <h3 className={`mt-2 font-medium tracking-[-0.03em] ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
              {p.title}
            </h3>
          </div>
          <span className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted">{p.year}</span>
        </div>

        <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>

        {featured && (
          <ul className="mt-5 space-y-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2.5 text-sm">
                <span className="size-1.5 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {p.stack.map((t) => (
            <li key={t} className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-5 pt-6 text-sm font-medium">
          <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
            Live site <ArrowUpRight size={15} />
          </a>
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-fg"
            >
              <GithubIcon size={15} /> Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
