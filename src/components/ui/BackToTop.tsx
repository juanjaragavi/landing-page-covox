"use client"

import { RiArrowUpLine } from "@remixicon/react"
import { useEffect, useState } from "react"
import { Button } from "../Button"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll to top function with smooth animation
  const scrollToTop = () => {
    const topElement = document.getElementById("top")
    if (topElement) {
      topElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } else {
      // Fallback if element not found
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#77FF00] p-0 shadow-lg transition-all duration-300 ease-linear hover:bg-white hover:text-gray-900"
          aria-label="Back to top"
        >
          <RiArrowUpLine className="size-6 fill-gray-900" />
        </Button>
      )}
    </>
  )
}
