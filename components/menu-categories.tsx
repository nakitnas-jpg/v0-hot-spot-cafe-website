"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const categories = [
  {
    name: "Pizza",
    description: "Hand-tossed dough, premium toppings, and melted cheese perfection",
    image: "/images/family-saver.jpg",
    items: "12+ Varieties",
  },
  {
    name: "Burgers",
    description: "Juicy patties, crispy breading, and signature sauces",
    image: "/images/chicken-burger.jpg",
    items: "8+ Options",
  },
  {
    name: "Broast",
    description: "Golden fried chicken, crunchy outside and tender inside",
    image: "/images/broast.jpg",
    items: "6+ Pieces",
  },
  {
    name: "Fresh Juices",
    description: "Freshly squeezed fruits blended for pure refreshment",
    image: "/images/juices.jpg",
    items: "10+ Flavors",
  },
]

export function MenuCategories() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        }
      },
      { threshold: 0.2 }
    )

    for (const ref of refs.current) {
      if (ref) observer.observe(ref)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="menu" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Our Specialties
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Crafted to Perfection
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-primary" />
        </div>

        {/* Category grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={category.name}
              ref={(el) => { refs.current[index] = el }}
              data-index={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                visibleCards.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                  {category.items}
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
