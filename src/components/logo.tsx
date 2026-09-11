import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-brand shadow-glow-sm",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-4.5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M22 19H2" />
        <circle cx="16" cy="7" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

export function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      {!compact && (
        <span className="text-[15px] font-semibold tracking-tight">
          Autonomous <span className="text-muted-foreground">Data Analyst</span>
        </span>
      )}
    </Link>
  );
}
