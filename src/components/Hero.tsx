import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile, stack, stats } from "../data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section id="top" className="relative overflow-hidden pt-36 sm:pt-44">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-260px] -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div {...rise(0)} className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-2 pr-4 text-sm backdrop-blur">
            <span className="live-dot size-2 rounded-full bg-live" />
            Available for new projects
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={14} /> {profile.location}
          </span>
        </motion.div>

        <motion.h1
          {...rise(0.08)}
          className="mt-8 max-w-5xl text-balance text-[clamp(2.6rem,7.4vw,6.4rem)] font-medium leading-[0.98] tracking-[-0.045em]"
        >
          Hi, I'm{" "}
          <span className="inline-flex translate-y-[-0.06em] items-center align-middle">
            <img
              src={profile.avatar}
              alt="Portrait of Howell"
              width={96}
              height={96}
              className="mx-1 inline-block h-[0.82em] w-[0.82em] rotate-[-6deg] rounded-[0.22em] border-2 border-bg object-cover shadow-[var(--shadow)] ring-1 ring-line-strong"
            />
          </span>{" "}
          Howell. I build web products that{" "}
          <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">feel effortless</span>{" "}
          and ship to production.
        </motion.h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <motion.p {...rise(0.18)} className="max-w-xl text-lg leading-relaxed text-muted">
            Full-stack developer working in TypeScript, React and Next.js. I design and ship storefronts, dashboards,
            interactive 3D experiences — and publish the open-source tools I build them with.
          </motion.p>

          <motion.div {...rise(0.26)} className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-accent-fg transition-transform hover:-translate-y-0.5"
            >
              View selected work
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium transition-colors hover:bg-surface-2"
            >
              Start a project
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.dl
          {...rise(0.34)}
          className="mt-16 grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface/50 backdrop-blur sm:mt-20 lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-1 p-6 sm:p-7 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i >= 2 ? "border-t border-line lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="order-2 text-sm text-muted">{s.label}</dt>
              <dd className="order-1 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = [...stack, ...stack];
  return (
    <div
      className="marquee-wrap relative mt-20 border-y border-line py-6 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
      aria-label="Technologies I work with"
    >
      <ul className="marquee flex w-max items-center gap-10">
        {items.map((t, i) => (
          <li
            key={`${t}-${i}`}
            aria-hidden={i >= stack.length}
            className="flex items-center gap-10 whitespace-nowrap text-xl font-medium tracking-tight text-muted sm:text-2xl"
          >
            {t}
            <span className="text-accent">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
