import { HIGHLIGHT_CARDS } from "@/lib/constants";

export default function HighlightCards() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-muted">
        By the Numbers
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHT_CARDS.map((card, i) => (
          <div
            key={card.title}
            className="card group cursor-default"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <span className="mb-3 block text-2xl">{card.icon}</span>
            <p className="mb-1 text-3xl font-bold text-white">{card.stat}</p>
            <p className="mb-2 text-sm font-semibold text-accent-light">
              {card.title}
            </p>
            <p className="text-xs leading-relaxed text-muted">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
