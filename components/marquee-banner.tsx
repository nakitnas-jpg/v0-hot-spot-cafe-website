"use client"

const items = [
  "Hand-Tossed Pizza",
  "Crispy Broast",
  "Juicy Burgers",
  "Fresh Juices",
  "Creamy Pasta",
  "Combo Deals",
  "Family Saver",
  "Mega Feast",
  "Chicken Zinger",
    "Margherita",
    "Peperoni",
    "Urban Chicken Pizza",
    "Chicken Ranchero Pizza",
    "Cheddarino Pizza",
    "The OG Smash Burger",
  "Chessy Spaghetti Pasta",
]

export function MarqueeBanner() {
  return (
    <div className="overflow-hidden border-y border-secondary/20 bg-secondary py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mx-8 font-serif text-base uppercase tracking-[0.3em] text-secondary-foreground"
          >
            {item}
            <span className="ml-8 text-secondary-foreground/30">/</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-53.33%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  )
}
