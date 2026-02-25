interface HeroSectionProps {
  name: string;
  currentRole: string;
  onChatOpen: () => void;
}

export default function HeroSection({
  name,
  currentRole,
  onChatOpen,
}: HeroSectionProps) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="animate-fade-in">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">
          Get to know
        </p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
          {name}
        </h1>
        <p className="gradient-text mb-6 text-xl font-semibold sm:text-2xl">
          {currentRole}
        </p>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted">
          Turning complex, ambiguous problems into clear, shippable outcomes
          across AI startups and global enterprise scale. Explore my work below
          or chat with Bloom, my AI career advocate to learn more.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a
          href="https://anjananandam.framer.website/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost px-6 py-3 text-base"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          View My Portfolio
        </a>
        <button onClick={onChatOpen} className="btn-primary">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Chat with Bloom
        </button>
        </div>

      </div>
    </section>
  );
}
