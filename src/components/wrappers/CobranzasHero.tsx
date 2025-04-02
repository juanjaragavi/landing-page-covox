"use client"

import { Hero } from "@/components/ui/Hero"

export function CobranzasHero() {
  return (
    <Hero
      title="Cobranza Inteligente con IA: Recupera Más sin Perder Clientes"
      description={
        <>
          <span className="font-semibold text-[#77FF00]">COVOX AI</span>{" "}
          automatiza la{" "}
          <span className="font-semibold text-white">
            recuperación de cartera
          </span>{" "}
          con llamadas proactivas y persuasivas, manteniendo la relación con tus
          clientes.
        </>
      } // Summarized description & added styling
      // Removed boldParts prop as it no longer exists in HeroProps
    />
  )
}
