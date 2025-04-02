"use client"

import { Hero } from "@/components/ui/Hero"

export function AgendaVisitasHero() {
  return (
    <Hero
      title="Agenda Más Visitas Comerciales con Agentes de IA que Nunca Descansan"
      description={
        <>
          <span className="font-semibold text-[#77FF00]">COVOX AI</span>{" "}
          automatiza la{" "}
          <span className="font-semibold text-white">
            calificación de prospectos
          </span>{" "}
          con llamadas consultivas, permitiendo que tu equipo se enfoque en los
          clientes interesados.
        </>
      } // Summarized description & added styling
      // Removed boldParts prop as it no longer exists in HeroProps
    />
  )
}
