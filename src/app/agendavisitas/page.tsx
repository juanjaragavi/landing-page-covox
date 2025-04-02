import AIVsHumans from "@/components/ui/AIVsHumans"
import { AgendaVisitasStatsSection } from "@/components/ui/AgendaVisitasStatsSection"
import { BrandCarousel } from "@/components/ui/BrandCarousel"
import { CallToAction } from "@/components/ui/CallToAction"
import { ComoFunciona } from "@/components/ui/ComoFunciona/ComoFunciona"
import FAQ from "@/components/ui/FAQ"
import FeatureDivider from "@/components/ui/FeatureDivider"
import LaSolucion from "@/components/ui/LaSolucion"
import Pricing from "@/components/ui/Pricing"
import { StatsSectionCTA } from "@/components/ui/StatsSectionCTA"
import Testimonial from "@/components/ui/Testimonial"
import { Video } from "@/components/ui/Video"
import { AgendaVisitasHero } from "@/components/wrappers/AgendaVisitasHero"
{
  /*import { CasosDeUso } from "@/components/ui/CasosDeUso"*/
}

export default function Home() {
  return (
    <main id="top" className="relative mx-auto flex flex-col overflow-x-hidden">
      <section className="pt-28">
        <AgendaVisitasHero />
      </section>
      <section className="mt-20 px-4 xl:px-0">
        <LaSolucion />
      </section>
      <section className="mt-32 px-4 xl:px-0">
        <ComoFunciona />
      </section>
      <section className="mt-16">
        <AgendaVisitasStatsSection />
        <StatsSectionCTA />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      {/*<section className="mb-12 px-10 xl:px-0">
        <CasosDeUso />
      </section>*/}
      <section className="my-12 px-4 xl:px-0">
        <AIVsHumans />
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
      <section className="mt-12 mb-16 px-4 xl:px-0">
        <CallToAction />
      </section>
    </main>
  )
}
