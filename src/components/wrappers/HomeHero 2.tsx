"use client"

import { Hero } from "@/components/ui/Hero"

export function HomeHero() {
  return (
    <Hero
      title="Más Citas, Menos Esfuerzo: Deja que tu Equipo Cierre Ventas"
      description="Si tu equipo pasa demasiado tiempo llamando en lugar de generando cierres, COVOX AI lo soluciona. Nuestros agentes de IA realiza llamadas consultivas y persuasivas, agenda visitas automáticamente y deja que tu equipo se enfoque en lo más importante: cerrar negocios."
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
