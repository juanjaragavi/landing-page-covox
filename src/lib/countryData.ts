// Country data for Spanish-speaking countries
export interface CountryData {
  code: string
  name: string
  flag: string
  dialCode: string
}

export const spanishSpeakingCountries: CountryData[] = [
  { code: "ES", name: "España", flag: "🇪🇸", dialCode: "+34" },
  { code: "AR", name: "Argentina", flag: "🇦🇷", dialCode: "+54" },
  { code: "BO", name: "Bolivia", flag: "🇧🇴", dialCode: "+591" },
  { code: "CL", name: "Chile", flag: "🇨🇱", dialCode: "+56" },
  { code: "CO", name: "Colombia", flag: "🇨🇴", dialCode: "+57" },
  { code: "CR", name: "Costa Rica", flag: "🇨🇷", dialCode: "+506" },
  { code: "CU", name: "Cuba", flag: "🇨🇺", dialCode: "+53" },
  { code: "DO", name: "República Dominicana", flag: "🇩🇴", dialCode: "+1" },
  { code: "EC", name: "Ecuador", flag: "🇪🇨", dialCode: "+593" },
  { code: "SV", name: "El Salvador", flag: "🇸🇻", dialCode: "+503" },
  { code: "GQ", name: "Guinea Ecuatorial", flag: "🇬🇶", dialCode: "+240" },
  { code: "GT", name: "Guatemala", flag: "🇬🇹", dialCode: "+502" },
  { code: "HN", name: "Honduras", flag: "🇭🇳", dialCode: "+504" },
  { code: "MX", name: "México", flag: "🇲🇽", dialCode: "+52" },
  { code: "NI", name: "Nicaragua", flag: "🇳🇮", dialCode: "+505" },
  { code: "PA", name: "Panamá", flag: "🇵🇦", dialCode: "+507" },
  { code: "PY", name: "Paraguay", flag: "🇵🇾", dialCode: "+595" },
  { code: "PE", name: "Perú", flag: "🇵🇪", dialCode: "+51" },
  { code: "PR", name: "Puerto Rico", flag: "🇵🇷", dialCode: "+1" },
  { code: "UY", name: "Uruguay", flag: "🇺🇾", dialCode: "+598" },
  { code: "VE", name: "Venezuela", flag: "🇻🇪", dialCode: "+58" },
]

// Default to Colombia
export const defaultCountry =
  spanishSpeakingCountries.find((country) => country.code === "CO") ||
  spanishSpeakingCountries[0]
