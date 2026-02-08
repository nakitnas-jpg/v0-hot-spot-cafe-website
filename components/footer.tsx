import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Hot Spot Cafe Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-serif text-xl font-bold text-foreground">
                Hot Spot Cafe
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Your go-to destination for Pizza, Burgers, Broast, and fresh
              Juices. Bold flavors in every bite.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Menu", href: "#menu" },
                { label: "Deals", href: "#deals" },
                { label: "About Us", href: "#about" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <a href="tel:+971000000000" className="text-sm text-muted-foreground hover:text-primary">
                  +971 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <a href="mailto:info@hotspotcafe.ae" className="text-sm text-muted-foreground hover:text-primary">
                  info@hotspotcafe.ae
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Opening Hours
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <Clock size={18} className="flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Mon - Thu</p>
                  <p className="text-sm text-muted-foreground">10:00 AM - 12:00 AM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Fri - Sun</p>
                  <p className="text-sm text-muted-foreground">10:00 AM - 2:00 AM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Hot Spot Cafe. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Pizza &middot; Burger &middot; Broast &middot; Juices
          </p>
        </div>
      </div>
    </footer>
  )
}
