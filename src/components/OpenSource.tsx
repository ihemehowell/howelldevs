import { useState } from "react";
import { ArrowUpRight, Check, Copy, Package } from "lucide-react";
import { packages } from "../data";
import { GithubIcon, NpmIcon } from "./BrandIcons";
import { Reveal, SectionLabel } from "./Reveal";
import { trackSpotlight } from "./Work";

const tokenColor: Record<string, string> = {
  k: "text-[#c792ea]",
  p: "text-white/50",
  v: "text-[#82aaff]",
  s: "text-[#c3e88d]",
};

export function OpenSource() {
  return (
    <section id="open-source" className="border-y border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <SectionLabel index="02">Open source</SectionLabel>
            <h2 className="text-balance text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Tools I build, publish{" "}
              <span className="font-serif font-normal italic text-accent">and use</span>.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              When a project needs something that doesn't exist, I build it as a reusable, typed package — then put it
              to work in my own client products.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.08}>
                <article
                  onMouseMove={trackSpotlight}
                  className="spotlight flex h-full flex-col rounded-[28px] border border-line bg-surface p-6 transition-colors hover:border-line-strong"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-accent">
                      <Package size={20} />
                    </span>
                    <div className="flex gap-1">
                      <a
                        href={pkg.npm}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${pkg.name} on npm`}
                        className="grid size-9 place-items-center rounded-full text-muted hover:bg-surface-2 hover:text-fg"
                      >
                        <NpmIcon size={16} />
                      </a>
                      <a
                        href={pkg.code}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${pkg.name} source on GitHub`}
                        className="grid size-9 place-items-center rounded-full text-muted hover:bg-surface-2 hover:text-fg"
                      >
                        <GithubIcon size={16} />
                      </a>
                    </div>
                  </div>

                  <h3 className="mt-6 break-words font-mono text-lg font-medium">{pkg.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{pkg.description}</p>

                  <div className="mt-6 overflow-hidden rounded-2xl bg-[#0f0f11] ring-1 ring-white/5">
                    <InstallLine command={pkg.install} />
                    <pre className="overflow-x-auto border-t border-white/5 px-4 py-3.5 font-mono text-[12px] leading-relaxed">
                      <code>
                        {pkg.snippet.map(([t, text], j) => (
                          <span key={j} className={tokenColor[t]}>
                            {text}
                          </span>
                        ))}
                      </code>
                    </pre>
                  </div>

                  <div className="mt-auto pt-6 text-xs">
                    <p className="flex items-center gap-2 text-muted">
                      <span className="live-dot size-1.5 rounded-full bg-live" />
                      Running in production
                    </p>
                    <p className="mt-1.5 pl-3.5 text-fg">{pkg.usedIn}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <a
            href="https://github.com/ihemehowell"
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-fg"
          >
            Browse all repositories on GitHub
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function InstallLine({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — the command is still visible to select manually */
    }
  };
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 font-mono text-[12.5px] text-white/85">
      <span className="truncate">
        <span className="select-none text-[#ff8a5c]">$ </span>
        {command}
      </span>
      <button
        onClick={copy}
        aria-label={copied ? "Copied" : `Copy “${command}”`}
        className="grid size-7 shrink-0 place-items-center rounded-md text-white/50 transition-colors hover:bg-white/10 hover:text-white"
      >
        {copied ? <Check size={14} className="text-[#3ddc84]" /> : <Copy size={14} />}
      </button>
    </div>
  );
}
