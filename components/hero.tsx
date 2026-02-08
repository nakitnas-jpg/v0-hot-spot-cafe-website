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
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/unnamed-20-282-29.jpg"
          alt="Delicious burgers at Hot Spot Cafe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <div
            className={`transition-all duration-1000 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
              Pizza &middot; Burger &middot; Broast &middot; Juices
            </p>

            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
              <span className="block">Where Every</span>
              <span className="block text-primary">Bite Ignites</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              Bold flavors, crispy perfection, and fresh ingredients
              crafted to satisfy your deepest cravings.
            </p>
          </div>

          <div
            className={`mt-10 flex flex-wrap items-center gap-4 transition-all delay-500 duration-1000 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="#menu"
              className="rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105 hover:brightness-110"
            >
              Explore Menu
            </a>
            <a
              href="#deals"
              className="rounded-full border border-foreground/20 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
            >
              View Deals
            </a>
          </div>

          {/* Stats bar */}
          <div
            className={`mt-16 flex gap-12 transition-all delay-700 duration-1000 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {[
              { value: "4.9", label: "Rating" },
              { value: "50+", label: "Menu Items" },
              { value: "10K+", label: "Happy Customers" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a href="#menu" aria-label="Scroll to menu">
          <ChevronDown size={28} className="text-primary" />
        </a>
      </div>
    </section>
  )
}
