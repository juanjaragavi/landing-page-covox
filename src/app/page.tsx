import { CallToAction } from "@/components/ui/CallToAction"
import { CovoxAIAnalytics } from "@/components/ui/CovoxAIAnalytics"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import { Map } from "@/components/ui/Map/Map"
import Testimonial from "@/components/ui/Testimonial"

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <div className="pt-28">
        <Hero />
      </div>
      <div className="mt-20 px-4 xl:px-0">
        <Features />
      </div>
      <div className="mt-32 px-4 xl:px-0">
        <Map />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="mb-12 px-4 xl:px-0">
        <CovoxAIAnalytics />
      </div>
      <div className="px-4 xl:px-0">
        <Testimonial />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="mt-4 mb-16 px-4 xl:px-0">
        <CallToAction />
      </div>
    </main>
  )
}
