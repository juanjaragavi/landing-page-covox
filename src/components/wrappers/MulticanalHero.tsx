"use client"

import { Hero } from "@/components/ui/Hero"

export function MulticanalHero() {
  return (
    <Hero
      title="Centraliza y Automatiza tus Conversaciones con Agentes de IA Multicanal 🚀"
      description={
        <>
          <span className="font-semibold text-[#77FF00]">COVOX AI</span>{" "}
          organiza y automatiza las conversaciones de tu negocio con{" "}
          <span className="font-semibold text-white">
            agentes de IA disponibles 24/7
          </span>
          , para que crezcas tus ventas sin perder un solo contacto.
        </>
      }
    />
  )
}
