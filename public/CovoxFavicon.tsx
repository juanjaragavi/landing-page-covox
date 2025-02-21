import Image from "next/image"

export const CovoxFavicon = () => (
  <Image
    src="/images/favicon.png"
    priority
    loading="eager"
    quality={90}
    alt="Covox Favicon"
    width={50}
    height={50}
  />
)
