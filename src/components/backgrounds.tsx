import { cn } from "@/lib/utils";

/** Animated gradient orbs + grid, for hero / key pages. Absolutely positioned; parent must be relative. */
export function AmbientBackground({ className, intensity = 1 }: { className?: string; intensity?: number }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-grid" />
      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-brand-animated blur-3xl"
        style={{ opacity: 0.22 * intensity }}
      />
      <div
        className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-brand-2 blur-3xl animate-float"
        style={{ opacity: 0.1 * intensity }}
      />
      <div
        className="absolute top-1/2 -right-40 h-[480px] w-[480px] rounded-full bg-brand blur-3xl animate-float"
        style={{ opacity: 0.12 * intensity, animationDelay: "-3s" }}
      />
    </div>
  );
}
