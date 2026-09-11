import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AmbientBackground } from "@/components/backgrounds";
import { DashboardMockup } from "./dashboard-mockup";
import { fadeUp, stagger } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
      <AmbientBackground />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 text-xs font-medium text-foreground"
          >
            <Sparkle className="size-3.5 text-brand-2" />
            5 specialised agents · powered by LangGraph
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-bold tracking-[-0.035em] sm:text-6xl lg:text-7xl"
          >
            Ask your data <span className="text-gradient">anything</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
          >
            Upload a CSV or Excel file, ask a question in plain English, and get back answers,
            charts, anomalies and a complete report — produced by an autonomous team of AI agents.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <Link to="/dashboard">
                Try the Demo <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="#how-it-works">See how it works</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-20"
        >
          <div className="absolute inset-x-10 -top-6 h-40 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
