"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const deals = [
  {
    title: "Crispy Combo",
    subtitle: "Zinger + Coca-Cola + Fries",
    price: "9.99",
    currency: "AED",
    image: "/images/crispy-combo.jpg",
  },
  {
    title: "Family Saver",
    subtitle: "2 Large Pizzas + 1.5L Coca-Cola",
    price: "49",
    originalPrice: "145",
    currency: "AED",
    image: "/images/family-saver.jpg",
  },
  {
    title: "Mega Feast Deal",
    subtitle: "1 Large Pizza + 1 Large Pasta + 2 Zinger + Coca-Cola 1.5L",
    price: "59",
    originalPrice: "160",
    currency: "AED",
    image: "/images/mega-feast.jpg",
  },
  {
    title: "Chicken Burger",
    subtitle: "Crispy chicken patty with special sauce",
    price: "4.99",
    currency: "AED",
    image: "/images/chicken-burger.jpg",
  },
  {
    title: "Pizza Deal",
    subtitle: "2 Medium Pizzas + 1 Liter Coke",
    price: "39",
    originalPrice: "139",
    currency: "AED",
    image: "/images/pizza-deal.jpg",
  },
  {
    title: "Combo Treat Deal",
    subtitle: "1 Medium Pizza + 1L Coke + Pasta + Zinger Burger",
    price: "44",
    originalPrice: "145",
    currency: "AED",
    image: "/images/combo-treat.jpg",
  },
]

export function DealsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    el?.addEventListener("scroll", checkScroll)
    return () => el?.removeEventListener("scroll", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const scrollAmount = 340
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section id="deals" className="relative py-24 md:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-muted/30" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Limited Time Offers
              </p>
            </div>
            <h2 className="font-serif text-5xl tracking-wider text-foreground md:text-6xl lg:text-7xl">
              HOT <span className="text-primary">DEALS</span>
            </h2>
          </div>

          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Deals carousel */}
        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {deals.map((deal) => (
            <div
              key={deal.title}
              className="group flex w-72 flex-none snap-start flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 sm:w-80"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={deal.image || "/placeholder.svg"}
                  alt={deal.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {deal.originalPrice && (
                  <div className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    SAVE {deal.originalPrice && `${Number(deal.originalPrice) - Number(deal.price)} AED`}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-2xl tracking-wider text-foreground">
                  {deal.title.toUpperCase()}
                </h3>
                <p className="mt-1 flex-1 text-sm font-light leading-relaxed text-muted-foreground">
                  {deal.subtitle}
                </p>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-serif text-4xl tracking-wider text-primary">
                    {deal.price}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">{deal.currency}</span>
                  {deal.originalPrice && (
                    <span className="text-sm text-muted-foreground/60 line-through">
                      {deal.originalPrice} {deal.currency}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
