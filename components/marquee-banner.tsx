"use client"

const items = [
  "Hand-Tossed Pizza",
  "Crispy Broast",
  "Juicy Burgers",
  "Fresh Juices",
  "Combo Deals",
  "Family Saver",
  "Mega Feast",
  "Chicken Zinger",
]

export function MarqueeBanner() {
  return (
    <div className="overflow-hidden border-y border-border bg-primary py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mx-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground"
          >
            {item}
            <span className="ml-8 text-primary-foreground/40">/</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
