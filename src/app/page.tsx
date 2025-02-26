import AIVsHumans from "@/components/ui/AIVsHumans"
import { CallToAction } from "@/components/ui/CallToAction"
import { CasosDeUso } from "@/components/ui/CasosDeUso"
import { ComoFunciona } from "@/components/ui/ComoFunciona/ComoFunciona"
import FAQ from "@/components/ui/FAQ"
import FeatureDivider from "@/components/ui/FeatureDivider"
import { Hero } from "@/components/ui/Hero"
import LaSolucion from "@/components/ui/LaSolucion"
import Pricing from "@/components/ui/Pricing"
import Testimonial from "@/components/ui/Testimonial"
import { Video } from "@/components/ui/Video"

export default function Home() {
  return (
    <main id="top" className="relative mx-auto flex flex-col overflow-x-hidden">
      <section className="pt-28">
        <Hero />
      </section>
      <section className="mt-20 px-4 xl:px-0">
        <LaSolucion />
      </section>
      <section className="mt-32 px-4 xl:px-0">
        <ComoFunciona />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      <section className="mb-12 px-10 xl:px-0">
        <CasosDeUso />
      </section>
      <section className="my-12 px-4 xl:px-0">
        <AIVsHumans />
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
