"use client"

import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { defaultCountry } from "../../lib/countryData"
import { CountrySelector } from "./CountrySelector"

export function StatsSectionCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const formRef = useRef<HTMLFormElement>(null)
  // We don't need this for the current implementation, but keeping it commented for future reference
  // const pathname = usePathname()
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
      const firstName = formData.get("firstName") as string
      const lastName = formData.get("lastName") as string

      // Format phone with country code for API (removing + and joining)
      const formattedPhone =
        `${selectedCountryCode.replace("+", "")}${phoneNumber}`.trim()

      // Prepare request payload according to requirements
      const requestPayload = {
        uuid_agent: "67eb09e9269a2", // Static value as required
        first_name: firstName,
        last_name: lastName,
        phone: formattedPhone,
        dynamicVariables: {
          data_1: "-", // Static value as required
        },
      }

      // Send to the specified API endpoint
      const response = await fetch(
        "https://kenobi.drop-elite.com/campaign-users-unitary",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestPayload),
        },
      )

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || "Error al enviar el formulario")
      }

      // Success response handling
      setFormStatus({
        type: "success",
        message:
          "Solicitud enviada con éxito. ¡Pronto te llamará un Agente Virtual!",
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
    <div className="w-full bg-gray-900/70 py-8 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-6 text-center text-xl font-semibold text-white md:text-2xl">
          ➡ Solicita una demo y empieza a llenar tu calendario de citas hoy
          mismo. 🚀
        </h3>

        <div className="relative isolate rounded-xl">
          <div className="absolute inset-0 -z-10 rounded-xl bg-gray-900/60 blur-sm"></div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative z-0 mx-auto flex max-w-full flex-col items-center gap-3 rounded-xl bg-gray-900/60 p-4 backdrop-blur-sm sm:flex-row sm:flex-wrap"
          >
            {formStatus.type && (
              <div
                className={`w-full rounded-md p-3 text-center ${
                  formStatus.type === "success"
                    ? "bg-green-800/30 text-[#77FF00]"
                    : "bg-red-900/30 text-red-400"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <div className="w-full sm:w-auto sm:flex-1">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Nombre"
                aria-label="Nombre"
                className="block h-full w-full rounded-md border-gray-700 bg-gray-800 p-3 text-lg text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                required
              />
            </div>
            <div className="w-full sm:w-auto sm:flex-1">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Apellido"
                aria-label="Apellido"
                className="block h-full w-full rounded-md border-gray-700 bg-gray-800 p-3 text-lg text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                required
              />
            </div>
            <div className="flex w-full gap-2 sm:w-auto sm:flex-[2]">
              <div className="w-1/3">
                <CountrySelector
                  onChange={handleCountryChange}
                  className="h-full"
                />
              </div>
              <div className="w-2/3">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="Número de teléfono"
                  aria-label="Número de teléfono"
                  className="block h-full w-full rounded-md border-gray-700 bg-gray-800 p-3 text-lg text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                  required
                />
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full cursor-pointer rounded-md ${
                  isSubmitting ? "bg-gray-400" : "bg-[#77FF00] hover:bg-white"
                } px-4 py-3 text-lg font-semibold text-gray-900 shadow-sm transition-all duration-200 ease-linear focus:ring-2 focus:ring-[#77FF00] focus:ring-offset-2 focus:outline-none sm:whitespace-nowrap`}
              >
                {isSubmitting ? "Enviando..." : "Quiero que me llame un Agente"}
              </button>
            </div>
            <p className="mt-2 w-full text-center text-xs text-gray-400">
              Al hacer clic, aceptas que te contactemos por teléfono
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
