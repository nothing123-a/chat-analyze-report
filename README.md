# Insight Weaver

Build a modern, polished web app called "Autonomous Data Analyst Agent" — an AI-powered 

data analysis platform where users upload a CSV/Excel file and ask questions about it in 

plain English, then get back answers, charts, anomalies, and a full report.

TECH STACK: React + TypeScript + Tailwind CSS. Use mock/dummy data for now — no backend 

yet, I will connect it to a FastAPI backend later.

DESIGN DIRECTION:

- Clean, modern SaaS aesthetic — think Linear, Vercel, or Notion. Dark mode by default 

  with a light mode toggle.

- Accent color: electric blue/indigo gradient (e.g. #6366F1 to #06B6D4) against a deep 

  slate/near-black background.

- Generous whitespace, rounded-xl cards, soft shadows, subtle glassmorphism on panels.

- Use a clean sans-serif (Inter or similar).

- Smooth micro-animations throughout using Framer Motion: fade/slide-ins on scroll, 

  staggered card reveals, hover scale/glow on buttons and cards, animated number 

  counters for stats, smooth page transitions.

PAGES / FLOW:

1. LANDING PAGE

   - Hero section: bold headline ("Ask your data anything"), subheadline explaining the 

     product, animated gradient background or subtle particle/grid effect.

   - Animated illustration or mock dashboard preview showing the upload → chat → insights 

     flow (can be a stylized mockup graphic).

   - "How it works" section with 3-4 animated step cards: Upload → Ask → Analyze → Report 

     (icons + short text, reveal on scroll with stagger).

   - Section showcasing the 5 AI agents as animated cards (Understanding, Planner, 

     Analysis, Insight, Report agents) — each with an icon, name, and one-line role, 

     hover to expand slightly.

   - Tech stack strip (logos/badges: Pandas, NumPy, Scikit-learn, Plotly, FastAPI, 

     LangGraph).

   - CTA button "Try the Demo" leading to the dashboard.

   - Footer.

2. DASHBOARD (main app)

   - Sidebar: list of past analysis sessions/datasets (mock data), "New Analysis" button.

   - Main panel with a drag-and-drop file upload zone (animated dashed border, 

     drag-hover glow effect, upload progress animation, success checkmark animation).

   - After "upload" (mock), show an animated dataset summary card: rows, columns, column 

     types, missing values — as small animated stat tiles.

3. ASK / CHAT VIEW

   - Chat-style interface where the user types a question (e.g. "Which districts show 

     unusual healthcare

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ba8e59c7-8825-4293-82ce-09d1206ddedc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
