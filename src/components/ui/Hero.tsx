"use client"

import { RiPlayFill } from "@remixicon/react"
import { usePathname } from "next/navigation"
// Removed duplicate React import, ChangeEvent etc are implicitly imported via React namespace usually or directly if needed
import { ChangeEvent, FormEvent, useRef, useState } from "react"
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

// Removed duplicate React import line
import { ReactNode } from "react" // Import ReactNode

export interface HeroProps {
  title?: string
  description?: ReactNode // Changed type from string to ReactNode
  // boldParts prop is no longer needed as styling will be passed via JSX
}

export function Hero({
  title = "Agentes Conversacionales de IA Hiper Realistas que puedes crear en Minutos 🚀",
  description = "Automatiza conversaciones, agenda citas y cierra más ventas con nuestra plataforma SaaS de IA conversacional.",
  // Removed boldParts from destructuring and default props
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
          "¡Solicitud enviada con éxito! Un Agente de IA te llamará pronto.",
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

        {/* Single column centered layout */}
        <div className="mx-auto max-w-7xl">
          {/* Changed grid to flex-col and centered items */}
          <div className="flex flex-col items-center gap-10 pt-10">
            {/* Text Content Block */}
            <div className="w-full max-w-3xl">
              {" "}
              {/* Added max-width for text block */}
              {/* Removed md:items-start to keep content centered */}
              <FadeContainer className="flex flex-col items-center justify-center">
                {/* Kept video link centered */}
                <FadeDiv className="mx-auto">
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
                {/* Removed md:text-left from h1 */}
                <h1 className="mt-10 text-center text-3xl leading-8 font-semibold tracking-tighter text-white sm:mt-10 sm:text-4xl sm:leading-[1.1em]">
                  {title.split(" ").map((word, index) => (
                    <span key={index}>
                      <FadeSpan>{word}</FadeSpan>
                      {index < title.split(" ").length - 1 ? " " : ""}
                    </span>
                  ))}
                </h1>
                {/* Removed md:text-left from p */}
                {/* Simplified description rendering: directly render the description prop */}
                <p className="mt-4 max-w-xl text-center text-xl leading-5 font-normal text-balance text-white sm:mt-2 sm:text-xl">
                  <FadeSpan>{description}</FadeSpan>
                </p>
                {/* Made button visible and centered */}
                <FadeDiv className="mt-6 flex w-full justify-center">
                  <a
                    className="flex cursor-pointer flex-row items-center justify-center gap-1 rounded-xl border-b-[1.5px] border-[#77FF00] bg-[#77FF00] px-6 py-4 text-lg leading-4 font-semibold tracking-wide whitespace-nowrap text-black shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_10px_0_rgba(255,255,255,0.15)] transition-all duration-200 ease-in-out hover:bg-white hover:shadow-white/50 sm:text-xl"
                    href="https://admin.covox.io/login" // Consider if this link should be dynamic or removed if form is primary CTA
                  >
                    Solicita una Demo GRATUITA
                  </a>
                </FadeDiv>
              </FadeContainer>
            </div>

            {/* Form Block - Now below text content */}
            {/* Removed md:mt-0, kept mt-10 */}
            <div className="mt-10 w-full max-w-md">
              {" "}
              {/* Added max-width for form */}
              <FadeDiv className="w-full">
                <div className="relative isolate w-full rounded-xl">
                  <div className="absolute inset-0 -z-5 rounded-2xl bg-gray-900/80 blur-xl"></div>
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="relative z-10 rounded-2xl bg-gray-900/80 p-6 backdrop-blur-sm"
                  >
                    {/* Centered form title */}
                    <h2 className="mb-4 text-center text-xl leading-tight font-semibold text-[#FFFFFF] md:text-xl">
                      ¿Quieres recibir una llamada de un Agente de IA?
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
                          : "Quiero que me llame un Agente de IA"}
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
