"use client"

import { usePathname } from "next/navigation"
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { defaultCountry } from "../../lib/countryData"
import { CountrySelector } from "./CountrySelector"

// Helper function to extract simplified page slug from the path
function getSimplifiedPageSlug(path: string | null): string {
  if (!path || path === "/") return "home"

  const cleanPath = path.replace(/^\/+/, "").split("/")[0]

  if (
    cleanPath === "agendavisitas" ||
    cleanPath === "cobranzas" ||
    cleanPath === "multicanal"
  ) {
    return cleanPath
  }

  return "home"
}

const prospectsOptions = [
  "Menos de 1.000",
  "Entre 1.000 y 5.000",
  "Entre 5.000 y 20.000",
  "Más de 20.000",
]

const crmOptions = [
  "HubSpot",
  "Salesforce",
  "GoHighLevel",
  "Odoo",
  "Clientify",
  "Zoho",
  "Otro",
]

const urgencyOptions = [
  "En menos de 1 mes",
  "Entre 1 y 3 meses",
  "Más de 3 meses",
]

export function AgendaDemoForm() {
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

  const handleCountryChange = (dialCode: string) => {
    setSelectedCountryCode(dialCode)
  }

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
      formDataObj.source = "formulario_landing_page_agenda_demo"

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

      // Success
      setFormStatus({
        type: "success",
        message:
          "¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.",
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

  const inputClasses =
    "block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2.5 text-white shadow-sm placeholder:text-gray-400 focus:border-[#77FF00] focus:ring-[#77FF00] focus:outline-none"
  const labelClasses = "mb-1.5 block text-sm font-medium text-gray-300"
  const selectClasses =
    "block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2.5 text-white shadow-sm focus:border-[#77FF00] focus:ring-[#77FF00] focus:outline-none"

  return (
    <div id="agenda-demo" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      {/* Section heading */}
      <div className="mb-10 text-center">
        <span className="mb-4 inline-block rounded-full border border-[#77FF00]/30 bg-[#77FF00]/10 px-5 py-2 text-sm font-bold tracking-widest text-[#77FF00] uppercase">
          Agenda tu Demo
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Solicita una{" "}
          <span className="text-[#77FF00]">Demostración Gratuita</span>
        </h2>
        <p className="mt-3 text-lg text-gray-400">
          Completa el formulario y un especialista te contactará para mostrarte
          cómo funciona COVOX AI en tu institución.
        </p>
      </div>

      {/* Form card */}
      <div className="relative isolate rounded-2xl">
        <div className="absolute inset-0 -z-5 rounded-2xl bg-gray-900/80 blur-xl" />
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative z-10 space-y-5 rounded-2xl bg-gray-900/80 p-6 backdrop-blur-sm sm:p-8"
        >
          {/* Status message */}
          {formStatus.type && (
            <div
              className={`rounded-md p-3 ${
                formStatus.type === "success"
                  ? "bg-green-800/30 text-[#77FF00]"
                  : "bg-red-900/30 text-red-400"
              }`}
            >
              {formStatus.message}
            </div>
          )}

          {/* 1. Nombres y Apellidos */}
          <div>
            <label htmlFor="fullName" className={labelClasses}>
              Nombres y Apellidos
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Nombres y Apellidos"
              aria-label="Nombres y Apellidos"
              className={inputClasses}
              required
            />
          </div>

          {/* 2. Correo Corporativo o Institucional */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              Correo Corporativo o Institucional
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="correo@institucion.edu"
              aria-label="Correo Corporativo o Institucional"
              className={inputClasses}
              required
            />
          </div>

          {/* 3. WhatsApp — country code + phone */}
          <div>
            <label className={labelClasses}>WhatsApp</label>
            <div className="grid grid-cols-5 gap-2">
              <div className="col-span-2">
                <CountrySelector
                  onChange={handleCountryChange}
                  className="h-full"
                />
              </div>
              <div className="col-span-3">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="Tu número sin código país"
                  aria-label="Número de WhatsApp"
                  className={`${inputClasses} h-full`}
                  required
                />
              </div>
            </div>
          </div>

          {/* 4. Rol dentro de la Institución */}
          <div>
            <label htmlFor="role" className={labelClasses}>
              Rol dentro de la Institución
            </label>
            <input
              type="text"
              id="role"
              name="role"
              placeholder="Ej: Director de admisiones"
              aria-label="Rol dentro de la Institución"
              className={inputClasses}
              required
            />
          </div>

          {/* 5. Cantidad de prospectos que atiendes por mes */}
          <div>
            <label htmlFor="prospects" className={labelClasses}>
              Cantidad de prospectos que atiendes por mes
            </label>
            <select
              id="prospects"
              name="prospects"
              aria-label="Cantidad de prospectos que atiendes por mes"
              className={selectClasses}
              required
            >
              <option value="">Seleccionar...</option>
              {prospectsOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* 6. CRM de tu Institución */}
          <div>
            <label htmlFor="crm" className={labelClasses}>
              CRM de tu Institución
            </label>
            <select
              id="crm"
              name="crm"
              aria-label="CRM de tu Institución"
              className={selectClasses}
              required
            >
              <option value="">Seleccionar...</option>
              {crmOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* 7. Urgencia para mejorar tu tasa de conversión */}
          <div>
            <label htmlFor="urgency" className={labelClasses}>
              Urgencia para mejorar tu tasa de conversión
            </label>
            <select
              id="urgency"
              name="urgency"
              aria-label="Urgencia para mejorar tu tasa de conversión"
              className={selectClasses}
              required
            >
              <option value="">Seleccionar...</option>
              {urgencyOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full cursor-pointer rounded-md ${
              isSubmitting ? "bg-gray-400" : "bg-[#77FF00] hover:bg-white"
            } px-4 py-3.5 text-lg font-semibold text-gray-900 shadow-sm transition-all duration-200 ease-linear focus:ring-2 focus:ring-[#77FF00] focus:ring-offset-2 focus:outline-none`}
          >
            {isSubmitting ? "Enviando..." : "Comienza ahora"}
          </button>

          <p className="text-center text-xs text-gray-400">
            Al hacer clic, aceptas que te contactemos por WhatsApp o teléfono.
          </p>
        </form>
      </div>
    </div>
  )
}
