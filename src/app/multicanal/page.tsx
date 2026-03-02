import AIVsHumans from "@/components/ui/AIVsHumans"
import { BrandCarousel } from "@/components/ui/BrandCarousel"
import { CallToAction } from "@/components/ui/CallToAction"
import { CentralizaChannels } from "@/components/ui/CentralizaChannels"
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
      {/* 1. Hero — headline + YouTube video embed + CTA (mirrors Leadsales hero) */}
      <section className="pt-28">
        <MulticanalHero />
      </section>
      {/* 2. Brand carousel — social proof logos (mirrors Leadsales client bar) */}
      <section className="mb-12 px-4 xl:px-0">
        <BrandCarousel />
      </section>
      {/* 3. Stats — multi-channel metrics + channel cards (mirrors "Toma el control" section) */}
      <section className="mt-12">
        <MulticanalStatsSection />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/* 4. Centraliza — channel cards + benefits (mirrors "Con Leadsales centraliza" section) */}
      <section className="px-4 xl:px-0">
        <CentralizaChannels />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/* 5. Video demo (mirrors Leadsales "ASÍ FUNCIONA" embedded video) */}
      <section className="mt-8 px-4 xl:px-0">
        <Video />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/* 6. Problem / Solution (mirrors Leadsales problem statement + visuals) */}
      <section className="mt-12 px-4 xl:px-0">
        <LaSolucion />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/* 7. CTA form (mirrors Leadsales mid-page CTA) */}
      <section className="mt-12 mb-16 px-4 xl:px-0">
        <CallToAction />
      </section>
      {/* 8. How it works — step-by-step (mirrors "Así funciona" walkthrough) */}
      <section className="mt-24 px-4 xl:px-0">
        <ComoFunciona />
      </section>
      {/* 9. AI vs Humans comparison — COVOX-specific section */}
      <section className="my-12 px-4 xl:px-0">
        <AIVsHumans />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/* 10. Pricing (mirrors Leadsales "Plan Básico" section) */}
      <section className="px-4 xl:px-0">
        <Pricing />
      </section>
      {/* 11. Testimonials — COVOX client story */}
      <section className="px-4 xl:px-0">
        <Testimonial />
      </section>
      <FeatureDivider className="mt-12 max-w-6xl" />
      {/* 12. FAQ (mirrors Leadsales FAQ accordion) */}
      <section className="px-4 xl:px-0">
        <FAQ />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/* 13. Final CTA (mirrors Leadsales "Aumenta tus ventas hoy") */}
      <section className="my-12">
        <StatsSectionCTA />
      </section>
    </main>
  )
}
