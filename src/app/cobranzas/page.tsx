import AIVsHumans from "@/components/ui/AIVsHumans"
import { BrandCarousel } from "@/components/ui/BrandCarousel"
import { CallToAction } from "@/components/ui/CallToAction"
import { CobranzasStatsSection } from "@/components/ui/CobranzasStatsSection" // Use Cobranzas specific stats
import { ComoFunciona } from "@/components/ui/ComoFunciona/ComoFunciona"
import FAQ from "@/components/ui/FAQ"
import FeatureDivider from "@/components/ui/FeatureDivider"
import LaSolucion from "@/components/ui/LaSolucion"
import Pricing from "@/components/ui/Pricing"
import { StatsSectionCTA } from "@/components/ui/StatsSectionCTA"
import Testimonial from "@/components/ui/Testimonial"
import { Video } from "@/components/ui/Video"
import { CobranzasHero } from "@/components/wrappers/CobranzasHero" // Use Cobranzas specific hero

export default function CobranzasPage() {
  // Changed function name for clarity
  return (
    <main id="top" className="relative mx-auto flex flex-col overflow-x-hidden">
      {/* Structure replicated from src/app/page.tsx */}
      <section className="pt-28">
        <CobranzasHero />
      </section>
      <section className="mt-12">
        {/* Replaced AnimatedStatsSection with CobranzasStatsSection */}
        <CobranzasStatsSection />
      </section>
      <section className="mt-12 px-4 xl:px-0">
        <LaSolucion />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      <section className="mt-12 mb-16 px-4 xl:px-0">
        <CallToAction />
      </section>
      <section className="mt-24 px-4 xl:px-0">
        <ComoFunciona />
      </section>
      <section className="my-12 px-4 xl:px-0">
        <AIVsHumans />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      <section className="my-12">
        <StatsSectionCTA />
      </section>
      <section className="mb-12 px-4 xl:px-0">
        <BrandCarousel />
      </section>
      <section className="px-4 xl:px-0">
        <Testimonial />
      </section>
      <FeatureDivider className="mt-12 max-w-6xl" />
      <section className="px-4 xl:px-0">
        <Pricing />
      </section>
      <section className="px-4 xl:px-0">
        <FAQ />
      </section>
      <section className="mt-8 px-4 xl:px-0">
        <Video />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/* Duplicated StatsSectionCTA as in src/app/page.tsx */}
      <section className="my-12">
        <StatsSectionCTA />
      </section>
    </main>
  )
}
