export const SITE_METADATA = {
  title: "Anjana Nandam | Product Manager",
  description:
    "Anjana Nandam's portfolio — PM at Gabriel AI, ex-Amazon. Explore her work and chat with her AI career advocate.",
};

export interface HighlightCard {
  title: string;
  stat: string;
  description: string;
  icon: string;
}

export const HIGHLIGHT_CARDS: HighlightCard[] = [
  {
    title: "Captain Efficiency Award",
    stat: "2x",
    description:
      "Earned Amazon's Captain Efficiency Award back-to-back in Q1 and Q2 for consistent operational impact",
    icon: "🏆",
  },
  {
    title: "Products Launched",
    stat: "1,600+",
    description:
      "End-to-end launch strategy across 15 global Amazon marketplaces",
    icon: "🌐",
  },
  {
    title: "Community Impact",
    stat: "50+",
    description:
      "Led strategic programs as President of Husky Systers Code, helping 100+ members tackle challenging coding problems and grow technical skills",
    icon: "🎓",
  },
  {
    title: "Roadmap Built",
    stat: "0→1",
    description:
      "Defined strategy and technical roadmap for a SaaS Execution Management System targeting 2026 launch at Trading Technologies",
    icon: "🗺️",
  },
];

export const WELCOME_MESSAGE =
  "Hey! I'm Bloom. I know all the cool stuff Anjana has worked on. You can ask me anything about her experience, her vibe, what she's like to work with.";
