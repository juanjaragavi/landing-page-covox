import Image from "next/image"
import { Divider } from "../Divider"

export default function FeatureDivider({ className }: { className?: string }) {
  return (
    <Divider className={className}>
      <div className="relative z-0 size-8">
        <Image
          src="/images/divider.webp"
          priority
          loading="eager"
          quality={90}
          alt="Covox Logo"
          width={128}
          height={128}
          className="z-0"
        />
      </div>
    </Divider>
  )
}
