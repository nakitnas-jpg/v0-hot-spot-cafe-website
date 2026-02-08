"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

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
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background with exterior image */}
      <div className="absolute inset-0">
        <Image
          src="/images/exterior-night.jpg"
          alt="Hot Spot Cafe exterior at night"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(0,0%,4%)]/85 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(215,70%,48%,0.1),transparent_70%)]" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="mx-auto mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-secondary" />
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-secondary">
            Hungry Yet?
          </p>
          <div className="h-px w-12 bg-secondary" />
        </div>
        <h2 className="font-serif text-5xl tracking-wider text-foreground md:text-6xl lg:text-7xl text-balance">
          YOUR NEXT <span className="text-primary">FAVORITE MEAL</span> IS JUST A CLICK AWAY
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
          Whether you are craving our crispy broast, hand-tossed pizza, juicy
          burgers, creamy pasta, or a refreshing juice, we have got something for everyone.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+971545036410"
            className="rounded-full bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105 hover:brightness-110"
          >
            Call to Order
          </a>
          <a
            href="#deals"
            className="rounded-full border border-secondary/40 bg-transparent px-10 py-4 text-sm font-semibold uppercase tracking-wider text-secondary transition-all hover:border-secondary hover:bg-secondary/10"
          >
            See All Deals
          </a>
        </div>
      </div>
    </section>
  )
}
