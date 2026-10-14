import { Blocks, Boxes, Code2, ShoppingBag, Sparkles, type LucideIcon } from "lucide-react";
import { process, services } from "../data";
import { Reveal, SectionLabel } from "./Reveal";
import { trackSpotlight } from "./Work";

const icons: LucideIcon[] = [Code2, Boxes, Blocks, ShoppingBag, Sparkles];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
      <Reveal>
        <SectionLabel index="03">What I do</SectionLabel>
        <h2 className="max-w-3xl text-balance text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
          From first sketch to <span className="font-serif font-normal italic text-accent">production</span>.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[i];
          const lead = i === 0;
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.06} className={lead ? "lg:row-span-2" : ""}>
              <article
                onMouseMove={lead ? undefined : trackSpotlight}
                className={`flex h-full flex-col rounded-[28px] p-7 ${
                  lead
                    ? "relative overflow-hidden bg-accent text-accent-fg"
                    : "spotlight border border-line bg-surface transition-colors hover:border-line-strong"
                }`}
              >
                {lead && (
                  <div
                    className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full border-[40px] border-black/10"
                    aria-hidden
                  />
                )}
                <span
                  className={`grid size-12 place-items-center rounded-2xl ${
                    lead ? "bg-black/10" : "bg-accent-soft text-accent"
                  }`}
                >
                  <Icon size={22} />
                </span>
                <h3 className={`mt-8 font-medium tracking-[-0.03em] ${lead ? "text-3xl sm:text-4xl" : "text-xl"}`}>
                  {s.title}
                </h3>
                <p className={`mt-3 leading-relaxed ${lead ? "max-w-xs text-lg opacity-80" : "text-muted"}`}>{s.body}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-8">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className={`rounded-full px-3 py-1 text-xs ${lead ? "bg-black/10" : "bg-surface-2 text-muted"}`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-28">
        <Reveal>
          <h3 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">How we'll work together</h3>
        </Reveal>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <li key={p.step} className="bg-bg">
              <Reveal delay={i * 0.06} className="h-full p-7">
                <span className="font-mono text-sm text-accent">{p.step}</span>
                <h4 className="mt-10 text-xl font-medium tracking-tight">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
