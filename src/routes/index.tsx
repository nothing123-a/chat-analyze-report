import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { AgentsSection, CTA, Footer, HowItWorks, TechStrip } from "@/components/landing/sections";

const title = "Autonomous Data Analyst Agent — Ask your data anything";
const description =
  "Upload a CSV or Excel file, ask questions in plain English, and get answers, charts, anomalies and a full report from a team of AI agents.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <AgentsSection />
      <TechStrip />
      <CTA />
      <Footer />
    </main>
  );
}
