"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const galleryImages = [
  {
    src: "/images/exterior-night.jpg",
    alt: "Hot Spot Cafe storefront at night with signature blue signage",
    span: "col-span-2 row-span-2",
    aspectClass: "aspect-square",
  },
  {
    src: "/images/interior-neon.jpg",
    alt: "Inside Hot Spot Cafe with neon lights and fresh pizzas on display",
    span: "col-span-1 row-span-1",
    aspectClass: "aspect-square",
  },
  {
    src: "/images/slice-of-heaven.jpg",
    alt: "Slice of Heaven neon sign with Hot Spot Cafe branding",
    span: "col-span-1 row-span-1",
    aspectClass: "aspect-square",
  },
  {
    src: "/images/pizza-counter.jpg",
    alt: "Fresh pizzas ready to serve at the counter",
    span: "col-span-2 row-span-1",
    aspectClass: "aspect-[2/1]",
  },
]

export function GallerySection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-24 md:py-32">
      {/* Subtle blue glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(215,70%,48%,0.04),transparent_70%)]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-secondary" />
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-secondary">
              Step Inside
            </p>
            <div className="h-px w-12 bg-secondary" />
          </div>
          <h2 className="font-serif text-5xl tracking-wider text-foreground md:text-6xl lg:text-7xl">
            THE <span className="text-secondary">EXPERIENCE</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-light text-muted-foreground">
            Neon vibes, dark marble walls, and the aroma of freshly baked pizza.
            Welcome to your new favorite spot.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`${image.span} group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`relative ${image.aspectClass} w-full overflow-hidden`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Blue glow overlay on hover */}
                <div className="absolute inset-0 bg-secondary/0 transition-colors duration-500 group-hover:bg-secondary/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,4%)]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
