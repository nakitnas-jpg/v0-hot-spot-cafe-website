"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image - pizza counter with neon lights */}
      <div className="absolute inset-0">
        <Image
          src="/images/pizza-counter.jpg"
          alt="Hot Spot Cafe interior with fresh pizzas and neon signs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,4%)]/95 via-[hsl(0,0%,4%)]/75 to-[hsl(0,0%,4%)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,4%)] via-transparent to-[hsl(0,0%,4%)]/50" />
        {/* Blue neon glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,hsl(215,70%,48%,0.12),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <div
            className={`transition-all duration-1000 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Tagline with neon blue accent */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-secondary" />
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-secondary">
                Slice of Heaven
              </p>
            </div>

            <h1 className="font-serif text-7xl leading-none tracking-wider text-foreground md:text-[8rem] lg:text-[10rem]">
              <span className="block">HOT</span>
              <span className="block text-primary">SPOT</span>
              <span className="block text-5xl tracking-[0.5em] text-secondary md:text-6xl lg:text-7xl">CAFE</span>
            </h1>

            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              Hand-tossed pizzas, crispy broast, juicy burgers & fresh juices.
              Bold flavors crafted to fire up your cravings.
            </p>
          </div>

          <div
            className={`mt-10 flex flex-wrap items-center gap-4 transition-all delay-500 duration-1000 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="#menu"
              className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105"
            >
              <span className="relative z-10">Explore Menu</span>
            </a>
            <a
              href="#deals"
              className="rounded-full border border-secondary/40 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-secondary transition-all hover:border-secondary hover:bg-secondary/10"
            >
              View Deals
            </a>
          </div>

          {/* Stats with blue neon feel */}
          <div
            className={`mt-20 flex gap-10 border-t border-border/50 pt-8 md:gap-16 transition-all delay-700 duration-1000 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {[
              { value: "4.9", label: "Rating" },
              { value: "70+", label: "Menu Items" },
              { value: "1K+", label: "Happy Customers" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl tracking-wider text-primary md:text-5xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a href="#menu" aria-label="Scroll to menu">
          <ChevronDown size={28} className="text-secondary" />
        </a>
      </div>
    </section>
  )
}
