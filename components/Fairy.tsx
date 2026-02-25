const StarShape = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path d="M6 0 L7.2 4.8 L12 6 L7.2 7.2 L6 12 L4.8 7.2 L0 6 L4.8 4.8 Z" fill={color} />
  </svg>
);

export default function Fairy({ size = 32 }: { size?: number }) {
  const sparkles = [
    { top: -size * 0.2,  left: size * 0.55, delay: "0s",    sz: size * 0.28, color: "white" },
    { top:  size * 0.05, left: -size * 0.2,  delay: "0.65s", sz: size * 0.22, color: "#f9a8d4" },
    { top: -size * 0.1,  left: size * 0.15, delay: "1.3s",  sz: size * 0.18, color: "#fbbf24" },
    { top:  size * 0.5,  left: size * 0.65, delay: "1.95s", sz: size * 0.2,  color: "#e879f9" },
  ];

  return (
    <div
      className="relative animate-fairy-float"
      style={{ width: size, height: size }}
    >
      {/* Fairy emoji with magic glow */}
      <div
        style={{
          fontSize: size * 0.88,
          lineHeight: 1,
          filter:
            "drop-shadow(0 0 6px rgba(236,72,153,0.95)) drop-shadow(0 0 14px rgba(168,85,247,0.6)) drop-shadow(0 0 24px rgba(236,72,153,0.3))",
        }}
      >
        🧚‍♀️
      </div>

      {/* Orbiting sparkles */}
      {sparkles.map((sp, i) => (
        <div
          key={i}
          className="absolute animate-fairy-sparkle pointer-events-none"
          style={{
            top: sp.top,
            left: sp.left,
            animationDelay: sp.delay,
          }}
        >
          <StarShape size={sp.sz} color={sp.color} />
        </div>
      ))}
    </div>
  );
}
