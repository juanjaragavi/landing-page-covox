"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

// Array of logo file names
const logos = [
  "/images/logos/logo-black-danta.webp",
  "/images/logos/logo-dalta.webp",
  "/images/logos/logo-delta-oil.webp",
  "/images/logos/logo-leadelt.webp",
  "/images/logos/logo-tiendorama.webp",
  "/images/logos/logo-zione.webp",
]

// For a seamless infinite carousel, we duplicate some logos
const extendedLogos = [...logos, ...logos, ...logos]

export function BrandCarousel() {
  const [position, setPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Calculate the width of each logo container
  const logoWidth = 170 // width of each logo + padding + gap

  useEffect(() => {
    // Auto rotation every 3 seconds
    if (!isPaused) {
      const interval = setInterval(() => {
        setPosition((prevPosition) => {
          // If we've gone through all the original logos, reset to start
          if (prevPosition >= logos.length * logoWidth) {
            return 0
          }
          return prevPosition + logoWidth
        })
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isPaused])

  const handlePrev = () => {
    setPosition((prevPosition) => {
      // Handle wrap-around for previous
      if (prevPosition <= 0) {
        return (logos.length - 1) * logoWidth
      }
      return prevPosition - logoWidth
    })
  }

  const handleNext = () => {
    setPosition((prevPosition) => {
      // Handle wrap-around for next
      if (prevPosition >= (logos.length - 1) * logoWidth) {
        return 0
      }
      return prevPosition + logoWidth
    })
  }

  // Pause animation on mouse hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <div className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <div className="z-10 w-full pt-6 text-center text-base font-semibold tracking-tight text-[#77FF00] sm:pt-20 sm:text-lg">
          Conoce a algunos de Nuestros Clientes
        </div>
        <h2
          id="management-title"
          className="z-20 mx-auto max-w-[700px] text-center text-2xl font-semibold tracking-tight text-balance text-white sm:mb-4 md:text-5xl"
        >
          Elos confían en nosotros para la gestión de sus clientes
        </h2>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Previous button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-gray-900/50 p-2 text-white shadow-lg transition-all hover:bg-gray-900/80"
          aria-label="Previous logo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="lime"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Logos container - sized to fit exactly 5 logos */}
        <div className="mx-auto max-w-[950px] overflow-hidden">
          <motion.div
            className="flex gap-5 px-4"
            animate={{ x: -position }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.8,
            }}
          >
            {extendedLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-xl border-2 border-[#77FF00] bg-white p-0.5 backdrop-blur-sm transition-all duration-300 hover:border-[#99FF33] hover:shadow-lg hover:shadow-[#77FF00]/30 sm:h-40 sm:w-40"
              >
                <div className="h-full w-full overflow-hidden rounded-lg bg-white">
                  <Image
                    src={logo}
                    alt={`Client logo ${index % logos.length}`}
                    width={100}
                    height={100}
                    className="h-full w-full object-contain p-2"
                    priority={index < 10} // Prioritize loading the first few logos
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-gray-900/50 p-2 text-white shadow-lg transition-all hover:bg-gray-900/80"
          aria-label="Next logo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="lime"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
