"use client"

import { motion } from "motion/react"
import Image from "next/image"

const partnerLogos = [
  {
    src: "/images/logos-aceleradoras/logo-google-for-startups.webp",
    alt: "Google for Startups",
    width: 160,
    height: 60,
  },
  {
    src: "/images/logos-aceleradoras/logo-camara-de-comercio-de-bogota.webp",
    alt: "Cámara de Comercio de Bogotá",
    width: 160,
    height: 60,
  },
]

export function OfertaEspecialCTA() {
  const scrollToHero = () => {
    const heroForm = document.getElementById("top")
    if (heroForm) {
      heroForm.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Background glow effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-[#77FF00]/5 blur-3xl" />
      </div>

      <div className="relative text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" as const }}
          className="mb-6 inline-block"
        >
          <span className="rounded-full border border-[#77FF00]/30 bg-[#77FF00]/10 px-5 py-2 text-sm font-bold tracking-widest text-[#77FF00] uppercase">
            Oferta Especial
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-balance text-white md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring" as const }}
        >
          Aumenta tus matrículas hoy
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" as const }}
        >
          Incrementa tus inscripciones, mejora la experiencia de admisiones y
          toma el control del crecimiento de tu institución{" "}
          <span className="inline-block">🎓🚀</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" as const }}
          className="mt-10"
        >
          <button
            onClick={scrollToHero}
            className="cursor-pointer rounded-lg bg-[#77FF00] px-10 py-4 text-lg font-bold tracking-wide text-gray-900 shadow-lg shadow-[#77FF00]/20 transition-all duration-200 ease-out hover:scale-105 hover:bg-white hover:shadow-[#77FF00]/30 focus:ring-2 focus:ring-[#77FF00] focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none active:scale-100"
          >
            AGENDA DEMO
          </button>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mx-auto mt-6 max-w-xl text-sm font-medium text-[#77FF00]/70 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          La herramienta perfecta para equipos de tres o más personas atendiendo
          a clientes por WhatsApp.
        </motion.p>

        {/* Partner logos */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" as const }}
        >
          <p className="mb-6 text-xs font-medium tracking-widest text-gray-500 uppercase">
            Respaldados por
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {partnerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="relative flex h-14 w-40 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-12 w-auto object-contain brightness-0 invert transition-all duration-300 hover:brightness-100 hover:invert-0"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OfertaEspecialCTA
