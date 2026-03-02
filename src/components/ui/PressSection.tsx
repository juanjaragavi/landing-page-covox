"use client"

import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

const pressArticles = [
  {
    src: "/images/articulos-de-prensa/articulo-de-prensa-covox-1.webp",
    alt: "COVOX AI recibe inversión — New Investment announcement",
  },
  {
    src: "/images/articulos-de-prensa/articulo-de-prensa-covox-2.webp",
    alt: "Portafolio — Covox AI, el emprendimiento que apuesta por asistentes virtuales hiperrealistas",
  },
  {
    src: "/images/articulos-de-prensa/articulo-de-prensa-covox-3.webp",
    alt: "La IA que imita las interacciones humanas para mejorar el servicio al cliente, llega a Colombia",
  },
]

export function PressSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goNext = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % pressArticles.length : null,
      ),
    [],
  )

  const goPrev = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null
          ? (prev - 1 + pressArticles.length) % pressArticles.length
          : null,
      ),
    [],
  )

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxIndex, closeLightbox, goNext, goPrev])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [lightboxIndex])

  return (
    <>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 text-center">
          <motion.p
            className="text-base font-semibold tracking-tight text-[#77FF00] sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            En la Prensa
          </motion.p>
          <motion.h2
            className="mx-auto mt-2 max-w-4xl text-2xl font-semibold tracking-tight text-balance text-white md:text-5xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            COVOX AI en los medios: IA conversacional que transforma admisiones
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Medios líderes en tecnología y negocios han destacado a COVOX AI por
            su innovación en inteligencia artificial conversacional aplicada a
            ventas y admisiones.
          </motion.p>
        </div>

        {/* Press article screenshots */}
        <div className="grid gap-6 md:grid-cols-3">
          {pressArticles.map((article, i) => (
            <motion.button
              key={article.src}
              type="button"
              aria-label={`Ver artículo: ${article.alt}`}
              className="group relative cursor-pointer overflow-hidden border-[3px] border-[#77FF00] bg-white/5 transition-all hover:shadow-lg hover:shadow-[#77FF00]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              onClick={() => setLightboxIndex(i)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={article.src}
                  alt={article.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Cerrar"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Prev button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label="Anterior"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="relative mx-16 max-h-[85vh] max-w-5xl overflow-hidden border-[3px] border-[#77FF00]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={pressArticles[lightboxIndex].src}
                alt={pressArticles[lightboxIndex].alt}
                width={1200}
                height={900}
                className="h-auto max-h-[85vh] w-full object-contain"
                priority
              />
            </motion.div>

            {/* Next button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label="Siguiente"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-400">
              {lightboxIndex + 1} / {pressArticles.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
