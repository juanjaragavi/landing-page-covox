"use client"

import { useEffect, useRef, useState } from "react"
import {
  CountryData,
  defaultCountry,
  spanishSpeakingCountries,
} from "../../lib/countryData"

interface CountrySelectorProps {
  onChange: (dialCode: string) => void
  className?: string
}

export function CountrySelector({
  onChange,
  className = "",
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] =
    useState<CountryData>(defaultCountry)
  const [searchTerm, setSearchTerm] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Filter countries based on search term
  const filteredCountries = searchTerm
    ? spanishSpeakingCountries.filter(
        (country) =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.dialCode.includes(searchTerm),
      )
    : spanishSpeakingCountries

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle country selection
  const selectCountry = (country: CountryData) => {
    setSelectedCountry(country)
    setIsOpen(false)
    onChange(country.dialCode)
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className="flex w-full items-center rounded-md border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-[#77FF00] focus:ring-[#77FF00]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">{selectedCountry.flag}</span>
        <span className="mr-2">{selectedCountry.dialCode}</span>
        <svg
          className="ml-auto h-4 w-4 fill-current text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-[100] mt-1 max-h-60 w-full min-w-[15rem] overflow-auto rounded-md border border-gray-700 bg-gray-800 shadow-lg">
          <div className="sticky top-0 z-10 bg-gray-800 p-2">
            <input
              type="text"
              className="w-full rounded-md border-gray-700 bg-gray-800 px-3 py-2 text-white shadow-sm placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
              placeholder="Buscar país..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul className="py-1">
            {filteredCountries.map((country) => (
              <li
                key={country.code}
                className="cursor-pointer px-3 py-2 hover:bg-gray-700"
                onClick={() => selectCountry(country)}
              >
                <div className="flex items-center">
                  <span className="mr-2">{country.flag}</span>
                  <span className="mr-2">{country.name}</span>
                  <span className="text-gray-400">{country.dialCode}</span>
                </div>
              </li>
            ))}
            {filteredCountries.length === 0 && (
              <li className="px-3 py-2 text-gray-400">
                No se encontraron países
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
