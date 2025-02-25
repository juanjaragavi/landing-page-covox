import { Button } from "@/components/Button"
import Link from "next/link"
import { siteConfig } from "./siteConfig"

import Image from "next/image"

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Link href={siteConfig.baseLinks.home}>
        <Image
          src="/images/logo-header.webp"
          priority
          loading="eager"
          quality={90}
          alt="Covox Logo"
          width={150}
          height={40}
        />
      </Link>
      <p className="mt-6 text-4xl font-semibold text-green-600 sm:text-5xl">
        Error 404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-white">
        Página no encontrada.
      </h1>
      <p className="mt-2 text-sm text-gray-300">
        Lo sentimos, no pudimos encontrar la página que busca.
      </p>
      <Button asChild className="group mt-8" variant="light">
        <Link href={siteConfig.baseLinks.home}>Volver al Home</Link>
      </Button>
    </div>
  )
}
