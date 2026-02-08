import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { MarqueeBanner } from "@/components/marquee-banner"
import { MenuCategories } from "@/components/menu-categories"
import { DealsSection } from "@/components/deals-section"
import { AboutSection } from "@/components/about-section"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      <MarqueeBanner />
      <MenuCategories />
      <DealsSection />
      <AboutSection />
      <CtaBanner />
      <Footer />
    </main>
  )
}
