"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const categories = [
  {
    name: "Pizza",
    description: "Hand-tossed dough, premium toppings, and melted cheese perfection. Our signature pizzas are the heart of Hot Spot.",
    image: "/images/pizza-hero.png",
    items: "26+ Varieties",
    featured: true,
  },
  {
    name: "Burgers",
    description: "Juicy patties, crispy breading, and signature sauces",
    image: "/images/burgers.jpg",
    items: "3+ Options",
    featured: false,
  },
  {
    name: "Broast",
    description: "Golden fried chicken, crunchy outside and tender inside",
    image: "/images/broast.jpg",
    items: "3+ Pieces",
    featured: false,
  },
  {
    name: "Fresh Juices",
    description: "Freshly squeezed fruits blended for pure refreshment",
    image: "/images/juices.jpg",
    items: "10+ Flavors",
    featured: false,
  },
  {
    name: "Pasta",
    description: "Rich sauces, al dente pasta, and generous toppings",
    image: "/images/pasta.png",
    items: "2+ Options",
    featured: false,
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
      { threshold: 0.15 }
    )

    for (const ref of refs.current) {
      if (ref) observer.observe(ref)
    }

    return () => observer.disconnect()
  }, [])

  const pizza = categories[0]
  const rest = categories.slice(1)

  return (
    <section id="menu" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-secondary" />
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-secondary">
              Our Menu
            </p>
            <div className="h-px w-12 bg-secondary" />
          </div>
          <h2 className="font-serif text-5xl tracking-wider text-foreground md:text-6xl lg:text-7xl">
            CRAFTED TO <span className="text-primary">PERFECTION</span>
          </h2>
        </div>

        {/* Featured Pizza - full width hero card */}
        <div
          ref={(el) => { refs.current[0] = el }}
          data-index={0}
          className={`group relative mb-6 overflow-hidden rounded-3xl transition-all duration-700 ${
            visibleCards.has(0)
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div className="relative aspect-[16/7] overflow-hidden md:aspect-[21/9]">
            <Image
              src={pizza.image || "/placeholder.svg"}
              alt={pizza.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,4%)]/90 via-[hsl(0,0%,4%)]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,4%)]/60 via-transparent to-transparent" />
            {/* Neon blue glow accent */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,hsl(215,70%,48%,0.08),transparent_50%)]" />
          </div>

          <div className="absolute inset-0 flex items-end p-8 md:items-center md:p-16">
            <div className="max-w-lg">
              <span className="mb-3 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                {pizza.items}
              </span>
              <h3 className="font-serif text-6xl tracking-wider text-foreground md:text-8xl">
                {pizza.name.toUpperCase()}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70 md:text-base">
                {pizza.description}
              </p>
              <a
                href="#deals"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:gap-3"
              >
                View Pizza Deals
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Other categories - 2x2 grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((category, i) => (
            <div
              key={category.name}
              ref={(el) => { refs.current[i + 1] = el }}
              data-index={i + 1}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                visibleCards.has(i + 1)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,4%)] via-[hsl(0,0%,4%)]/40 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="mb-2 inline-block rounded-full border border-primary/70 bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                  {category.items}
                </span>
                <h3 className="font-serif text-3xl tracking-wider text-foreground">
                  {category.name.toUpperCase()}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
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
