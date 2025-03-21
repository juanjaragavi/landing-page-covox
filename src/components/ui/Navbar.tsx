"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { Button } from "../Button"

export default function NavBar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(15)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Function to handle smooth scrolling to sections
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Only handle internal anchor links
    if (href.startsWith("/#")) {
      e.preventDefault()

      // If we're not on the home page, navigate to the home page with the anchor
      if (!isHomePage) {
        window.location.href = href
        return
      }

      // If we are on the home page, scroll to the section
      const targetId = href.replace("/#", "")
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset to account for fixed header
          behavior: "smooth",
        })

        // Update URL without the jump
        window.history.pushState({}, "", href)

        // Close mobile menu if open
        if (open) setOpen(false)
      }
    }
  }

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-gray-200/50 bg-gray-900/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
          : "bg-gray-900/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">CovoxAI Tech Logo</span>
            <Image
              src="/images/logo-header.webp"
              className="sm:mr-4"
              priority
              loading="eager"
              quality={90}
              alt="Covox Logo"
              width={120}
              height={32}
            />
          </Link>
          <nav className="mx-auto hidden sm:block">
            <div className="text-md flex items-center gap-4 font-medium">
              <Link
                className="px-2 py-1 text-gray-100 underline-offset-2 transition-all duration-300 ease-out hover:text-[#77FF00] hover:underline"
                href="/#solucion"
                onClick={(e) => scrollToSection(e, "/#solucion")}
              >
                La Solución
              </Link>
              <Link
                className="px-2 py-1 text-gray-100 underline-offset-2 transition-all duration-300 ease-out hover:text-[#77FF00] hover:underline"
                href="/#como-funciona"
                onClick={(e) => scrollToSection(e, "/#como-funciona")}
              >
                ¿Cómo Funciona?
              </Link>
              <Link
                className="px-2 py-1 text-gray-100 underline-offset-2 transition-all duration-300 ease-out hover:text-[#77FF00] hover:underline"
                href="/#casos-de-uso"
                onClick={(e) => scrollToSection(e, "/#casos-de-uso")}
              >
                Casos de Uso
              </Link>
              <Link
                className="px-2 py-1 text-gray-100 underline-offset-2 transition-all duration-300 ease-out hover:text-[#77FF00] hover:underline"
                href="/#testimoniales"
                onClick={(e) => scrollToSection(e, "/#testimoniales")}
              >
                Testimoniales
              </Link>
            </div>
          </nav>
          <div className="ml-auto hidden items-center gap-4 sm:flex">
            <Button
              variant="ghost"
              className="text-md h-10 font-semibold"
              onClick={() =>
                (window.location.href = "https://admin.covox.io/login")
              }
            >
              Inicia Sesión
            </Button>
            <Button
              onClick={() =>
                (window.location.href = "https://admin.covox.io/login")
              }
              variant="secondary"
              className="text-md h-10 bg-[#77FF00] font-semibold"
            >
              Empieza gratis
            </Button>
          </div>
          <Button
            onClick={() => setOpen(!open)}
            variant="secondary"
            className="border border-[#77FF00]/80 bg-gray-950/80 p-2 shadow-sm shadow-[#77FF00]/10 hover:bg-[#77FF00]/10 sm:hidden"
            aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {!open ? (
              <RiMenuFill
                className="size-6 shrink-0 text-gray-100"
                aria-hidden
              />
            ) : (
              <RiCloseFill
                className="size-6 shrink-0 text-gray-100"
                aria-hidden
              />
            )}
          </Button>
        </div>
        <nav
          className={cx(
            "mt-6 flex flex-col gap-3 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="font-medium text-gray-100">
            <li>
              <Link
                href="/#solucion"
                onClick={(e) => scrollToSection(e, "/#solucion")}
              >
                La Solución
              </Link>
            </li>
            <li>
              <Link
                href="/#como-funciona"
                onClick={(e) => scrollToSection(e, "/#como-funciona")}
              >
                ¿Cómo Funciona?
              </Link>
            </li>
            <li>
              <Link
                href="/#casos-de-uso"
                onClick={(e) => scrollToSection(e, "/#casos-de-uso")}
              >
                Casos de Uso
              </Link>
            </li>
            <li>
              <Link
                href="/#testimoniales"
                onClick={(e) => scrollToSection(e, "/#testimoniales")}
              >
                Testimoniales
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <div className="flex flex-col gap-4">
            <Button
              variant="ghost"
              className="text-lg"
              onClick={() =>
                (window.location.href = "https://admin.covox.io/login")
              }
            >
              Inicia Sesión
            </Button>
            <Button
              onClick={() =>
                (window.location.href = "https://admin.covox.io/login")
              }
              variant="secondary"
              className="text-lg"
            >
              Crea tu Cuenta
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
