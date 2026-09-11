import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Brain,
  FileText,
  Lightbulb,
  ListTree,
  MessageSquareText,
  Microscope,
  UploadCloud,
  Workflow,
  Github,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { agents, techStack } from "@/lib/mock-data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-2">
        {eyebrow}
      </motion.span>
      <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </motion.h2>
      <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
        {body}
      </motion.p>
    </motion.div>
  );
}

const steps = [
  { icon: UploadCloud, title: "Upload", body: "Drop in a CSV or Excel file. We profile columns, types and gaps instantly." },
  { icon: MessageSquareText, title: "Ask", body: "Type a question in plain English — no SQL, no notebooks." },
  { icon: Workflow, title: "Analyze", body: "Five agents plan, compute and detect anomalies automatically." },
  { icon: FileText, title: "Report", body: "Get charts, insights and a shareable, exportable report." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From spreadsheet to insight in four steps"
          body="No setup, no code. Upload, ask, and let the agents do the analysis."
        />
        <motion.ol
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative grid gap-5 md:grid-cols-4"
        >
          <div className="absolute top-12 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent md:block" />
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl glass p-6 transition-shadow hover:shadow-glow-sm"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow-sm transition-transform group-hover:scale-110">
                  <s.icon className="size-5" />
                </span>
                <span className="text-xs font-semibold text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

const agentIcons = { understanding: Brain, planner: ListTree, analysis: Microscope, insight: Lightbulb, report: FileText };

export function AgentsSection() {
  return (
    <section id="agents" className="relative scroll-mt-24 overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Multi-agent system"
          title="Five agents, one autonomous analyst"
          body="Each agent owns a stage of the pipeline and hands off to the next, orchestrated with LangGraph."
        />
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {agents.map((a, i) => {
            const Icon = agentIcons[a.key];
            return (
              <motion.div
                key={a.key}
                variants={fadeUp}
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl glass p-5 hover:shadow-glow-sm"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-2/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-lg bg-brand/15 text-brand transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full border px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold">{a.short}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.role}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function TechStrip() {
  return (
    <section id="stack" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Built on a proven data stack
        </p>
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {techStack.map((t) => (
            <motion.span
              key={t}
              variants={fadeUp}
              whileHover={{ scale: 1.06 }}
              className="rounded-full glass px-5 py-2.5 text-sm font-medium tracking-tight hover:border-brand/40"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl ring-gradient bg-card/60 px-6 py-16 text-center sm:px-12"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-brand-animated opacity-15" />
          <div className="absolute inset-0 -z-10 bg-grid" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to interrogate your data?</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Try the interactive demo with a sample district health-spending dataset. No sign-up required.
          </p>
          <Button asChild variant="hero" size="xl" className="mt-8">
            <Link to="/dashboard">
              Try the Demo <ArrowRight />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <Logo />
        <p className="text-sm text-muted-foreground">© 2026 Autonomous Data Analyst Agent. Built for curious analysts.</p>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="#" aria-label="GitHub" className="transition-colors hover:text-foreground">
            <Github className="size-4.5" />
          </a>
          <a href="#" aria-label="Twitter" className="transition-colors hover:text-foreground">
            <Twitter className="size-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
