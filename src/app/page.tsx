import AIVsHumans from "@/components/ui/AIVsHumans"
import { CallToAction } from "@/components/ui/CallToAction"
import { CovoxAIAnalytics } from "@/components/ui/CovoxAIAnalytics"
import FAQ from "@/components/ui/FAQ"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import { Map } from "@/components/ui/Map/Map"
import Pricing from "@/components/ui/Pricing"
import Testimonial from "@/components/ui/Testimonial"

export default function Home() {
  return (
    <main id="top" className="relative mx-auto flex flex-col overflow-x-hidden">
      <section className="pt-28">
        <Hero />
      </section>
      <section className="mt-20 px-4 xl:px-0">
        <Features />
      </section>
      <section className="mt-32 px-4 xl:px-0">
        <Map />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      <section className="mb-12 px-10 xl:px-0">
        <CovoxAIAnalytics />
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
      <section className="mt-4 mb-16 px-4 xl:px-0">
        <CallToAction />
      </section>
    </main>
  )
}
