import { AgendaDemoForm } from "@/components/ui/AgendaDemoForm"
import { BrandCarousel } from "@/components/ui/BrandCarousel"
import { CentralizaChannels } from "@/components/ui/CentralizaChannels"
import FeatureDivider from "@/components/ui/FeatureDivider"
import { MulticanalStatsSection } from "@/components/ui/MulticanalStatsSection"
import { OfertaEspecialCTA } from "@/components/ui/OfertaEspecialCTA"
import { PressSection } from "@/components/ui/PressSection"
import { TestimonialesVideos } from "@/components/ui/TestimonialesVideos"
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
      {/* 2.5. Testimoniales — three YouTube video testimonials */}
      <section className="px-4 xl:px-0">
        <TestimonialesVideos />
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
      {/* 4.5. Press — Forbes recognition + press article screenshots */}
      <section className="px-4 xl:px-0">
        <PressSection />
      </section>
      {/* 4.6. Oferta Especial CTA — mirrors Leadsales "AGENDAR DEMO" + partner logos */}
      <section className="px-4 xl:px-0">
        <OfertaEspecialCTA />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/* 14. Agenda Demo form — anchor target for all AGENDA DEMO CTAs */}
      <section className="px-4 xl:px-0">
        <AgendaDemoForm />
      </section>
    </main>
  )
}
