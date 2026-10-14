import { useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
import { profile } from "../data";
import { GithubIcon, NpmIcon, XIcon } from "./BrandIcons";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the mailto link still works */
    }
  };

  return (
    <section id="contact" className="px-4 pb-6 pt-28 sm:px-6 sm:pt-36">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-fg px-6 py-16 text-bg sm:px-14 sm:py-24">
          <div
            className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full opacity-60 blur-[100px]"
            style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
            aria-hidden
          />
          <p className="relative font-mono text-xs uppercase tracking-[0.18em] opacity-60">05 — Contact</p>
          <h2 className="relative mt-6 max-w-4xl text-balance text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.05em]">
            Have an idea? <span className="font-serif font-normal italic text-accent">Let's build it.</span>
          </h2>
          <p className="relative mt-6 max-w-lg text-lg opacity-70">
            Tell me about your product, timeline and budget. I usually reply within one business day.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}?subject=Project%20enquiry%20via%20Howelldevs`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-medium text-accent-fg transition-transform hover:-translate-y-0.5"
            >
              Email me
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-current/20 px-5 py-4 text-sm transition-colors hover:bg-bg/5"
            >
              {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} className="opacity-60" />}
              <span className="truncate">{copied ? "Copied to clipboard" : profile.email}</span>
            </button>
          </div>

          <div className="relative mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-current/15 pt-8 text-sm">
            {[
              { href: profile.socials.x, label: "@IAmKelvin16", Icon: XIcon },
              { href: profile.socials.github, label: "ihemehowell", Icon: GithubIcon },
              { href: profile.socials.npm, label: "npm packages", Icon: NpmIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
              >
                <Icon size={15} /> {label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <footer className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between gap-4 px-2 py-6 text-sm text-muted sm:flex-row">
        <Logo />
        <p>
          © {new Date().getFullYear()} {profile.brand}. Designed & built by {profile.short}.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 hover:text-fg">
          Back to top <ArrowUp size={15} />
        </a>
      </footer>
    </section>
  );
}
