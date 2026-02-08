"use client"

import Image from "next/image"
import { Flame, Clock, Truck, Star } from "lucide-react"

const features = [
  {
    icon: Flame,
    title: "Fresh & Hot",
    description: "Every order is prepared fresh to order, never pre-made",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Quick preparation without compromising on quality",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "We deliver straight to your doorstep, hot and ready",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Only the finest ingredients go into every dish",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/broast.jpg"
                    alt="Crunchy broast chicken"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/juices.jpg"
                    alt="Fresh juices"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/combo-treat.jpg"
                    alt="Combo treat deal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/crispy-combo.jpg"
                    alt="Crispy combo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border border-border bg-card px-8 py-4 shadow-xl">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo.jpg"
                  alt="Hot Spot Cafe"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-serif text-lg font-bold text-foreground">Hot Spot Cafe</p>
                  <p className="text-xs text-muted-foreground">Pizza, Burger & Broast</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
              Our Story
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Bold Flavors,<br />Warm Hearts
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At Hot Spot Cafe, we believe that great food brings people together.
              From our signature crispy broast to our hand-tossed pizzas, every
              dish is crafted with passion and the finest ingredients. We are not
              just a restaurant — we are your neighborhood spot for bold flavors
              and unforgettable meals.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
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
