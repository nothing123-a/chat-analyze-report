import { motion } from "motion/react";
import { Check, FileSpreadsheet, MessageSquare, Sparkles, UploadCloud } from "lucide-react";
import { agents } from "@/lib/mock-data";

const bars = [42, 68, 55, 90, 62, 78, 100, 84];

/** Stylised static-but-animated mockup of the upload → chat → insights flow. */
export function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl glass p-2 shadow-glow sm:p-3">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-warning/70" />
        <span className="size-2.5 rounded-full bg-success/70" />
        <span className="ml-3 h-5 flex-1 rounded-md bg-muted/70 text-[10px] leading-5 text-muted-foreground pl-2">
          app.dataanalyst.ai/dashboard
        </span>
      </div>
      <div className="grid gap-3 rounded-xl bg-background/60 p-3 md:grid-cols-[1.1fr_1.3fr_1.2fr]">
        {/* Upload */}
        <Panel title="1 · Upload" icon={<UploadCloud className="size-3.5" />}>
          <div className="relative flex h-32 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-brand/50 bg-brand/5">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            >
              <FileSpreadsheet className="size-7 text-brand" />
            </motion.div>
            <span className="text-[11px] text-muted-foreground">health_spending.csv</span>
            <div className="h-1 w-24 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full bg-gradient-brand"
                initial={{ width: "0%" }}
                animate={{ width: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 3, repeatDelay: 1, ease: "easeInOut" }}
              />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ["18.4k", "rows"],
              ["14", "cols"],
              ["2.4%", "missing"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-md border bg-card/60 p-2 text-center">
                <div className="text-sm font-semibold">{v}</div>
                <div className="text-[10px] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </Panel>

        {/* Chat + pipeline */}
        <Panel title="2 · Ask" icon={<MessageSquare className="size-3.5" />}>
          <div className="ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-gradient-brand px-3 py-2 text-[11px] text-primary-foreground">
            Which districts show unusual healthcare spending?
          </div>
          <div className="mt-3 space-y-1.5">
            {agents.map((a, i) => (
              <motion.div
                key={a.key}
                className="flex items-center gap-2 text-[11px]"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 1, 1] }}
                transition={{ repeat: Infinity, duration: 6, delay: i * 0.9, times: [0, 0.15, 1] }}
              >
                <motion.span
                  className="grid size-4 place-items-center rounded-full bg-success/20 text-success"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 1] }}
                  transition={{ repeat: Infinity, duration: 6, delay: i * 0.9 + 0.5, times: [0, 0.15, 1] }}
                >
                  <Check className="size-2.5" />
                </motion.span>
                <span className="text-muted-foreground">{a.short} agent</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-3 rounded-xl rounded-bl-sm border bg-card/70 px-3 py-2 text-[11px] leading-relaxed text-muted-foreground">
            Found <span className="font-medium text-foreground">3 anomalies</span>. Pune spends ₹1,450 cr
            vs a ₹650 cr average…
          </div>
        </Panel>

        {/* Insights */}
        <Panel title="3 · Insights" icon={<Sparkles className="size-3.5" />}>
          <div className="flex h-28 items-end gap-1.5 rounded-lg border bg-card/60 p-3">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-brand to-brand-2"
                initial={{ height: "8%" }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1.1, delay: 0.8 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{ opacity: i === 6 ? 1 : 0.7 }}
              />
            ))}
          </div>
          <div className="mt-3 space-y-2">
            <div className="rounded-md border border-warning/40 bg-warning/10 p-2 text-[11px] animate-pulse-danger">
              <span className="font-semibold text-foreground">Pune</span>
              <span className="text-muted-foreground"> · ₹1,450 cr vs ₹650 cr avg</span>
            </div>
            <div className="rounded-md border bg-card/60 p-2 text-[11px] text-muted-foreground">
              Spend concentrated in 2 urban districts (41%)
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}

function Panel({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-card/50 p-3">
      <div className="mb-3 flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
        <span className="grid size-5 place-items-center rounded-md bg-brand/15 text-brand">{icon}</span>
        {title}
      </div>
      {children}
    </div>
  );
}
