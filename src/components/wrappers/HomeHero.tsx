"use client"

import { Hero } from "@/components/ui/Hero"

export function HomeHero() {
  return (
    <Hero
      title="Más Citas, Menos Esfuerzo: Deja que tu Equipo Cierre Ventas"
      description={
        <>
          <span className="font-semibold text-[#77FF00]">COVOX AI</span>{" "}
          automatiza llamadas consultivas y agendamiento de visitas, permitiendo
          que tu equipo se enfoque en{" "}
          <span className="font-semibold text-white">cerrar negocios</span>.
        </>
      }
      // Removed boldParts prop as it no longer exists in HeroProps
    />
  )
}
