import { CallToAction } from "@/components/ui/CallToAction"
import { CovoxAIAnalytics } from "@/components/ui/CovoxAIAnalytics"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import { Map } from "@/components/ui/Map/Map"
import Testimonial from "@/components/ui/Testimonial"

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col overflow-x-hidden">
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
      <section className="mb-12 px-4 xl:px-0">
        <CovoxAIAnalytics />
      </section>
      <section className="px-4 xl:px-0">
        <Testimonial />
      </section>
      <FeatureDivider className="my-16 max-w-6xl" />
      <section className="mt-4 mb-16 px-4 xl:px-0">
        <CallToAction />
      </section>
    </main>
  )
}
