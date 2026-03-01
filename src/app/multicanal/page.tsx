import AIVsHumans from "@/components/ui/AIVsHumans"
import { BrandCarousel } from "@/components/ui/BrandCarousel"
import { CallToAction } from "@/components/ui/CallToAction"
import { ComoFunciona } from "@/components/ui/ComoFunciona/ComoFunciona"
import FAQ from "@/components/ui/FAQ"
import FeatureDivider from "@/components/ui/FeatureDivider"
import LaSolucion from "@/components/ui/LaSolucion"
import { MulticanalStatsSection } from "@/components/ui/MulticanalStatsSection"
import Pricing from "@/components/ui/Pricing"
import { StatsSectionCTA } from "@/components/ui/StatsSectionCTA"
import Testimonial from "@/components/ui/Testimonial"
import { Video } from "@/components/ui/Video"
import { MulticanalHero } from "@/components/wrappers/MulticanalHero"

export default function MulticanalPage() {
  return (
    <main id="top" className="relative mx-auto flex flex-col overflow-x-hidden">
      {/* 1. Hero — multi-channel headline + lead form */}
      <section className="pt-28">
        <MulticanalHero />
      </section>
      {/* 2. Brand carousel — social proof logos (mirrors reference) */}
      <section className="mb-12 px-4 xl:px-0">
        <BrandCarousel />
      </section>
      {/* 3. Stats — multi-channel metrics + channel cards (mirrors reference video/stats) */}
      <section className="mt-12">
        <MulticanalStatsSection />
      </section>
      {/* 4. Video testimonials (mirrors reference YouTube section) */}
      <section className="mt-8 px-4 xl:px-0">
        <Video />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/* 5. Problem / Solution (mirrors reference "ASÍ FUNCIONA" section) */}
      <section className="mt-12 px-4 xl:px-0">
        <LaSolucion />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/* 6. CTA form (mirrors reference mid-page CTA) */}
      <section className="mt-12 mb-16 px-4 xl:px-0">
        <CallToAction />
      </section>
      {/* 7. How it works — step-by-step (mirrors reference "Así funciona") */}
      <section className="mt-24 px-4 xl:px-0">
        <ComoFunciona />
      </section>
      {/* 8. AI vs Humans comparison */}
      <section className="my-12 px-4 xl:px-0">
        <AIVsHumans />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/* 9. Pricing (mirrors reference "Plan Básico" section) */}
      <section className="px-4 xl:px-0">
        <Pricing />
      </section>
      {/* 10. Testimonials (mirrors reference Forbes/press section) */}
      <section className="px-4 xl:px-0">
        <Testimonial />
      </section>
      <FeatureDivider className="mt-12 max-w-6xl" />
      {/* 11. FAQ (mirrors reference FAQ accordion) */}
      <section className="px-4 xl:px-0">
        <FAQ />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/* 12. Final CTA (mirrors reference "Aumenta tus ventas hoy") */}
      <section className="my-12">
        <StatsSectionCTA />
      </section>
    </main>
  )
}
