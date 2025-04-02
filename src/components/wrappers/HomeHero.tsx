"use client"

import { Hero } from "@/components/ui/Hero"

export function HomeHero() {
  return (
    <Hero
      title="Más Citas, Menos Esfuerzo: Deja que tu Equipo Cierre Ventas"
      description="COVOX AI automatiza llamadas consultivas y agendamiento de visitas, permitiendo que tu equipo se enfoque en cerrar negocios."
      boldParts={[
        "Si tu equipo pasa demasiado tiempo llamando en lugar de generando cierres,",
        "COVOX AI",
        "llamadas consultivas y persuasivas",
        "agenda visitas automáticamente",
        "cerrar negocios",
      ]} // No bold parts for home page
    />
  )
}
