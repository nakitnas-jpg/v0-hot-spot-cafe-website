"use client"

import { useEffect, useRef, useState } from "react"

export function CtaBanner() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-primary/5" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
          Hungry Yet?
        </p>
        <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">
          Your Next Favorite Meal Is Just a Click Away
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Whether you are craving our crispy broast, hand-tossed pizza, juicy
          burgers, or a refreshing juice, we have got something for everyone.
          Order now and taste the difference.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+971000000000"
            className="rounded-full bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105 hover:brightness-110"
          >
            Call to Order
          </a>
          <a
            href="#deals"
            className="rounded-full border border-foreground/20 bg-transparent px-10 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
          >
            See All Deals
          </a>
        </div>

        {/* Decorative line */}
        <div className="mx-auto mt-16 h-px w-32 bg-border" />
      </div>
    </section>
  )
}
