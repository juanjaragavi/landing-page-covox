"use client"

import { RiPlayFill } from "@remixicon/react"
import { usePathname } from "next/navigation"
import React, { ChangeEvent, FormEvent, useRef, useState } from "react"
import { defaultCountry } from "../../lib/countryData"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"
import { ScaleContainer, ScaleDiv } from "../Scale"
import { CountrySelector } from "./CountrySelector"
import GameOfLife from "./HeroBackground"

// Helper function to extract simplified page slug from the path
function getSimplifiedPageSlug(path: string | null): string {
  if (!path || path === "/") return "home"

  // Remove leading slash and get first segment
  const cleanPath = path.replace(/^\/+/, "").split("/")[0]

  // Only return valid slugs we care about
  if (cleanPath === "agendavisitas" || cleanPath === "cobranzas") {
    return cleanPath
  }

  // Default to home for any other pages
  return "home"
}

export interface HeroProps {
  title?: string
  description?: string
  boldParts?: string[] // Array of text patterns that should be bold in the description
}

export function Hero({
  title = "Agentes Conversacionales de IA Hiper Realistas que puedes crear en Minutos 🚀",
  description = "Automatiza conversaciones, agenda citas y cierra más ventas con nuestra plataforma SaaS de IA conversacional.",
  boldParts = [],
}: HeroProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const formRef = useRef<HTMLFormElement>(null)
  const pathname = usePathname()
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>(
    defaultCountry.dialCode,
  )
  const [phoneNumber, setPhoneNumber] = useState("")

  // Handle country selection
  const handleCountryChange = (dialCode: string) => {
    setSelectedCountryCode(dialCode)
  }

  // Handle phone number input
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: "" })

    try {
      const formData = new FormData(event.currentTarget)

      // Create an object from FormData to send as JSON
      const formDataObj: Record<string, string> = {}
      formData.forEach((value, key) => {
        // Skip the original phone input as we'll format it with country code
        if (key !== "phoneNumber") {
          formDataObj[key] = value.toString()
        }
      })

      // Format phone with country code for Make.com (integer format)
      formDataObj.phone =
        `${selectedCountryCode.replace("+", "")}${phoneNumber}`.trim()

      // Add source information
      formDataObj.source = "formulario_landing_page_hero"

      // Add simplified page slug
      const pageSlug = getSimplifiedPageSlug(pathname)
      formDataObj.page = pageSlug

      // Send to Make.com webhook
      const response = await fetch(
        "https://hook.us2.make.com/15d2nl66cm26l2k33dy68qtvbdvcoxn4",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObj),
        },
      )

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || "Error al enviar el formulario")
      }

      // Success - no need to parse JSON as Make.com may not return JSON
      setFormStatus({
        type: "success",
        message:
          "¡Solicitud enviada con éxito! Un agente virtual te llamará pronto.",
      })

      // Reset the form
      formRef.current?.reset()
      setPhoneNumber("")
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setFormStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div aria-label="hero">
      <div className="relative px-8">
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-radial absolute inset-0 from-transparent via-transparent to-gray-950"></div>
          <ScaleContainer>
            <ScaleDiv className="flex items-center justify-center overflow-visible">
              <GameOfLife className="overflow-visible" />
            </ScaleDiv>
          </ScaleContainer>
        </div>

        {/* Two column layout for larger screens */}
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Left column - Content */}
            <div>
              <FadeContainer className="flex flex-col items-center justify-center md:items-start">
                <FadeDiv className="mx-auto md:mx-0">
                  <a
                    aria-label="View latest update the changelog page"
                    href="#video-demo"
                    className="mx-auto w-full"
                  >
                    <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/5 px-2 py-0.5 text-xs font-medium text-gray-100 ring-1 shadow-md shadow-[#77FF00]/10 ring-black/10 backdrop-blur-[1px] transition-colors hover:bg-[#77FF00]/[2.5%] focus:outline-hidden sm:text-sm">
                      <span className="shrink-0 truncate rounded-full border border-[#77FF00] bg-gray-800 px-2 py-1 text-xs text-gray-300">
                        VIDEO
                      </span>
                      <span className="flex items-center gap-1 truncate">
                        <span className="w-full truncate">
                          ¡Mira cómo funciona nuestra IA Conversacional!
                        </span>
                        <RiPlayFill className="size-3.5 shrink-0 fill-[#77FF00] text-gray-300" />
                      </span>
                    </div>
                  </a>
                </FadeDiv>
                <h1 className="mt-10 text-center text-3xl leading-8 font-semibold tracking-tighter text-white sm:mt-10 sm:text-4xl sm:leading-[1.1em] md:text-left">
                  {title.split(" ").map((word, index) => (
                    <span key={index}>
                      <FadeSpan>{word}</FadeSpan>
                      {index < title.split(" ").length - 1 ? " " : ""}
                    </span>
                  ))}
                </h1>
                <p className="mt-4 max-w-xl text-center text-xl leading-5 font-normal text-balance text-white sm:mt-2 sm:text-xl md:text-left">
                  {description.split(".").map((sentence, index) => {
                    const trimmedSentence = sentence.trim()
                    if (!trimmedSentence) return null

                    // Create a JSX array to hold our processed content
                    const jsxElements: React.ReactNode[] = []

                    // Sort boldParts by length (longest first) to avoid partial matches
                    const sortedBoldParts = [...boldParts].sort(
                      (a, b) => b.length - a.length,
                    )

                    // Check if any bold parts exist in this sentence
                    const hasBoldParts = sortedBoldParts.some((part) =>
                      trimmedSentence.includes(part),
                    )

                    // If no bold parts, just return the sentence
                    if (!hasBoldParts) {
                      jsxElements.push(trimmedSentence)
                    } else {
                      // Handle text with bold parts
                      let remainingText = trimmedSentence
                      let currentIndex = 0

                      // Find all instances of bold parts
                      while (remainingText.length > 0) {
                        // Find the first occurrence of any bold part
                        let nextBoldIndex = -1
                        let boldPartToUse = ""

                        for (const boldPart of sortedBoldParts) {
                          const index = remainingText.indexOf(boldPart)
                          if (
                            index !== -1 &&
                            (nextBoldIndex === -1 || index < nextBoldIndex)
                          ) {
                            nextBoldIndex = index
                            boldPartToUse = boldPart
                          }
                        }

                        if (nextBoldIndex === -1) {
                          // No more bold parts, add remaining text
                          jsxElements.push(remainingText)
                          break
                        }

                        // Add text before the bold part
                        if (nextBoldIndex > 0) {
                          jsxElements.push(
                            remainingText.substring(0, nextBoldIndex),
                          )
                        }

                        // Add the bold part
                        jsxElements.push(
                          <strong
                            key={currentIndex}
                            className="font-extrabold text-[#77FF00]"
                          >
                            {boldPartToUse}
                          </strong>,
                        )
                        currentIndex++

                        // Update remaining text
                        remainingText = remainingText.substring(
                          nextBoldIndex + boldPartToUse.length,
                        )
                      }
                    }

                    return (
                      <span key={index}>
                        <FadeSpan>
                          {jsxElements.map((element, i) => (
                            <React.Fragment key={i}>{element}</React.Fragment>
                          ))}
                        </FadeSpan>
                        {index < description.split(".").length - 1 &&
                        trimmedSentence
                          ? ". "
                          : ""}
                      </span>
                    )
                  })}
                </p>
                <FadeDiv className="hidden w-full md:w-auto">
                  <a
                    className="mt-6 flex w-full cursor-pointer flex-row items-center justify-center gap-1 rounded-xl border-b-[1.5px] border-[#77FF00] bg-[#77FF00] px-6 py-4 text-lg leading-4 font-semibold tracking-wide whitespace-nowrap text-black shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_10px_0_rgba(255,255,255,0.15)] transition-all duration-200 ease-in-out hover:bg-white hover:shadow-white/50 sm:text-xl md:w-auto"
                    href="https://admin.covox.io/login"
                  >
                    Solicita una Demo GRATUITA
                  </a>
                </FadeDiv>
              </FadeContainer>
            </div>

            {/* Right column - Form */}
            <div className="mt-10 md:mt-0">
              <FadeDiv className="w-full">
                <div className="relative isolate w-full rounded-xl">
                  <div className="absolute inset-0 -z-5 rounded-2xl bg-gray-900/80 blur-xl"></div>
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="relative z-10 rounded-2xl bg-gray-900/80 p-6 backdrop-blur-sm"
                  >
                    <h2 className="mb-4 text-center text-xl font-semibold text-[#FFFFFF] md:text-left md:text-xl">
                      ¿Quieres recibir una llamada de un Agente Virtual?
                    </h2>

                    {formStatus.type && (
                      <div
                        className={`mb-4 rounded-md p-3 ${
                          formStatus.type === "success"
                            ? "bg-green-800/30 text-[#77FF00]"
                            : "bg-red-900/30 text-red-400"
                        }`}
                      >
                        {formStatus.message}
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Nombre"
                            aria-label="Nombre"
                            className="block w-full rounded-md border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Apellido"
                            aria-label="Apellido"
                            className="block w-full rounded-md border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Correo Electrónico"
                          aria-label="Correo Electrónico"
                          className="block w-full rounded-md border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-6 gap-2">
                        <div className="col-span-2">
                          <CountrySelector
                            onChange={handleCountryChange}
                            className="h-full"
                          />
                        </div>
                        <div className="col-span-4">
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            placeholder="Número de teléfono"
                            aria-label="Número de teléfono"
                            className="block h-full w-full rounded-md border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full cursor-pointer rounded-md ${
                          isSubmitting
                            ? "bg-gray-400"
                            : "bg-[#77FF00] hover:bg-white"
                        } px-4 py-3 font-semibold text-gray-900 shadow-sm transition-all duration-200 ease-linear focus:ring-2 focus:ring-[#77FF00] focus:ring-offset-2 focus:outline-none`}
                      >
                        {isSubmitting
                          ? "Enviando..."
                          : "Quiero que me llame un Agente Virtual"}
                      </button>
                      <p className="mt-2 text-center text-xs text-gray-400">
                        Al hacer clic, aceptas que te contactemos por teléfono
                      </p>
                    </div>
                  </form>
                </div>
              </FadeDiv>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
