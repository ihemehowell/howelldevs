type Props = { className?: string; withWordmark?: boolean };

export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="14" fill="var(--accent)" />
      <path d="M15 13v22M33 13v22" stroke="var(--accent-fg)" strokeWidth="4.2" strokeLinecap="round" />
      <path d="M15 27.5 33 20.5" stroke="var(--accent-fg)" strokeWidth="4.2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className = "", withWordmark = true }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      {withWordmark && (
        <span className="text-[1.15rem] leading-none tracking-[-0.04em]">
          <span className="font-bold">howell</span>
          <span className="text-muted">devs</span>
          <span className="font-bold text-accent">.</span>
        </span>
      )}
    </span>
  );
}
