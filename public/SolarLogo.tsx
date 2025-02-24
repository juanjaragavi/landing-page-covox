import Image from "next/image"

export const CovoxAILogo = () => (
  <Image
    src="/images/logo-header.webp"
    priority
    loading="eager"
    quality={90}
    alt="Covox Logo"
    width={150}
    height={40}
  />
)
