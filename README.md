# Anjana Nandam — AI Career Advocate

A personal portfolio site for Anjana Nandam featuring **Bloom**, an AI career advocate powered by Google Gemini. Visitors can explore Anjana's experience and chat directly with Bloom to learn more about her work, skills, and personality.

Live site: [anjananandam-ai-resume.vercel.app](https://anjananandam-ai-resume.vercel.app)

---

## Features

- **Bloom AI Chat** — conversational AI advocate built on Google Gemini (`gemini-2.5-flash`) via the Vercel AI SDK
- **Responsive chat UI** — desktop popup anchored bottom-right, mobile full-screen slide-up panel
- **Animated floating chat button** — with a magical fairy 🧚‍♀️ and sparkle animations
- **Hero section** — name, primary role, and secondary role tags
- **Highlight cards** — key career stats and achievements
- **Footer** — LinkedIn, GitHub, and email links

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI SDK | Vercel AI SDK v6 (`ai`, `@ai-sdk/react`) |
| AI Model | Google Gemini 2.5 Flash (`@ai-sdk/google`) |
| Deployment | Vercel |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

Get a key at [aistudio.google.com](https://aistudio.google.com).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
  page.tsx          # Entry point — passes name/role to PageContent
  api/chat/         # AI chat route using Vercel AI SDK
components/
  PageContent.tsx   # Root layout with ChatProvider
  HeroSection.tsx   # Name, roles, and CTA buttons
  HighlightCards.tsx# Career stats grid
  ChatDrawer.tsx    # Floating button + responsive chat panel
  ChatProvider.tsx  # Context for chat open/close state
  Fairy.tsx         # Animated fairy with sparkles
data/
  experience.md     # Source of truth for Bloom's knowledge
lib/
  constants.ts      # Site metadata, highlight cards, welcome message
  experience.ts     # Parses experience.md for the AI system prompt
```

---

## Deployment

Deployed on Vercel. Add `GOOGLE_GENERATIVE_AI_API_KEY` as an environment variable in the Vercel project settings before deploying.
