"use client"

import { usePathname } from "next/navigation"
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { defaultCountry } from "../../lib/countryData"
import { CountrySelector } from "./CountrySelector"

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

export function CallToAction() {
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
      formDataObj.source = "formulario_landing_page_call_to_action"

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
          "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
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
    <div aria-labelledby="cta-title" className="mx-auto max-w-6xl">
      <div className="grid items-start sm:grid-cols-6 sm:gap-8 sm:px-0">
        <div className="px-6 sm:col-span-2 sm:px-0">
          <h2
            id="cta-title"
            className="scroll-my-40 text-center text-3xl font-semibold tracking-tighter text-balance text-[#77FF00] sm:mt-8 sm:text-left md:text-4xl"
          >
            ¡No Esperes Más!
          </h2>
          <p className="mt-2 text-center text-lg leading-tight text-white sm:mt-3 sm:mb-8 sm:text-left">
            Empieza ahora y automatiza tu negocio con COVOX AI.
          </p>
        </div>
        <div className="relative isolate rounded-xl sm:col-span-4 sm:h-full">
          <div className="absolute inset-0 -z-5 rounded-2xl bg-gray-900/80 blur-xl"></div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative z-10 rounded-2xl bg-gray-900/80 p-8 backdrop-blur-sm"
          >
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
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Nombre"
                      aria-label="Nombre"
                      className="block w-full rounded-md border-gray-700 bg-gray-800 px-2 py-1 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
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
                      className="block w-full rounded-md border-gray-700 bg-gray-800 px-2 py-1 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
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
                    className="block w-full rounded-md border-gray-700 bg-gray-800 px-2 py-1 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
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
                      className="block h-full w-full rounded-md border-gray-700 bg-gray-800 px-2 py-1 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <select
                    id="reason"
                    name="reason"
                    aria-label="Motivo de Contacto"
                    className="block w-full rounded-md border-gray-700 bg-gray-800 p-2 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                    required
                  >
                    <option value="" className="font-medium text-[#77FF00]/80">
                      Motivo de Contacto
                    </option>
                    <option value="demo">Quiero Solicitar una Demo</option>
                    <option value="call">Quiero una Llamada de Prueba</option>
                    <option value="sales">Tengo una Consulta Comercial</option>
                  </select>
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Mensaje"
                    aria-label="Mensaje"
                    className="block w-full rounded-md border-gray-700 bg-gray-800 p-2 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`text-md w-full cursor-pointer rounded-md ${
                    isSubmitting ? "bg-gray-400" : "bg-[#77FF00] hover:bg-white"
                  } px-4 py-2 font-semibold text-gray-900 shadow-sm transition-all duration-200 ease-linear focus:ring-2 focus:ring-[#77FF00] focus:ring-offset-2 focus:outline-none`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
