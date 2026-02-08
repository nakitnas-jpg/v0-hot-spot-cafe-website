"use client"

import Image from "next/image"
import { Flame, Clock, Truck, Star } from "lucide-react"

const features = [
  {
    icon: Flame,
    title: "Fresh & Hot",
    description: "Every order prepared fresh, never pre-made",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Quick preparation without compromise",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Hot and ready straight to your door",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Only the finest ingredients in every dish",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image collage with real interior photos */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/interior-neon.jpg"
                    alt="Hot Spot Cafe interior with neon lights and fresh pizza display"
                    fill
                    className="object-cover"
                  />
                  {/* Blue glow */}
                  <div className="absolute inset-0 bg-secondary/5" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/broast.jpg"
                    alt="Crunchy broast chicken"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/family-saver.jpg"
                    alt="Family saver pizza deal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/slice-of-heaven.jpg"
                    alt="Slice of Heaven neon sign inside the cafe"
                    fill
                    className="object-cover"
                  />
                  {/* Blue glow */}
                  <div className="absolute inset-0 bg-secondary/5" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border border-secondary/20 bg-card px-8 py-4 shadow-xl shadow-secondary/5">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo.jpg"
                  alt="Hot Spot Cafe"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-serif text-xl tracking-wider text-foreground">HOT SPOT <span className="text-secondary">CAFE</span></p>
                  <p className="text-xs font-light text-muted-foreground">Pizza, Burger & Broast</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-secondary" />
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-secondary">
                Our Story
              </p>
            </div>
            <h2 className="font-serif text-5xl tracking-wider text-foreground md:text-6xl">
              BOLD FLAVORS
              <br />
              <span className="text-primary">WARM HEARTS</span>
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              At Hot Spot Cafe, we believe great food brings people together.
              From our signature crispy broast to our hand-tossed pizzas, every
              dish is crafted with passion and the finest ingredients. Step into
              our neon-lit space, feel the energy, and taste something
              unforgettable.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-secondary/20 bg-secondary/10">
                    <feature.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{feature.title}</h4>
                    <p className="mt-1 text-xs font-light leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
