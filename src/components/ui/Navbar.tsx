"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "../Button"

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(15)

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-gray-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm dark:bg-gray-900/80"
          : "bg-white/0 dark:bg-gray-900/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between gap-x-10">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">CovoxAI Tech Logo</span>
            <Image
              src="/images/logo-header.webp"
              priority
              loading="eager"
              quality={90}
              alt="Covox Logo"
              width={120}
              height={32}
            />
          </Link>
          <nav className="hidden sm:block">
            <div className="flex items-center gap-6 text-sm font-medium">
              <Link
                className="px-2 py-1 text-gray-900 underline-offset-2 transition-all duration-300 ease-out hover:text-[#77FF00] hover:underline dark:text-gray-100"
                href="#solucion"
              >
                La Solución
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 underline-offset-2 transition-all duration-300 ease-out hover:text-[#77FF00] hover:underline dark:text-gray-100"
                href="#como-funciona"
              >
                ¿Cómo Funciona?
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 underline-offset-2 transition-all duration-300 ease-out hover:text-[#77FF00] hover:underline dark:text-gray-100"
                href="#casos-de-uso"
              >
                Casos de Uso
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 underline-offset-2 transition-all duration-300 ease-out hover:text-[#77FF00] hover:underline dark:text-gray-100"
                href="#testimoniales"
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
              Solicita una Demo Gratuita
            </Button>
          </div>
          <Button
            onClick={() => setOpen(!open)}
            variant="secondary"
            className="p-1.5 sm:hidden"
            aria-label={open ? "CloseNavigation Menu" : "Open Navigation Menu"}
          >
            {!open ? (
              <RiMenuFill
                className="size-6 shrink-0 text-gray-900 dark:text-gray-100"
                aria-hidden
              />
            ) : (
              <RiCloseFill
                className="size-6 shrink-0 text-gray-900 dark:text-gray-100"
                aria-hidden
              />
            )}
          </Button>
        </div>
        <nav
          className={cx(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium text-gray-900 dark:text-gray-100">
            <li onClick={() => setOpen(false)}>
              <Link href="#solucion">La Solución</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#como-funciona">¿Cómo Funciona?</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#casos-de-uso">Analytics</Link>
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
              Login
            </Button>
            <Button
              onClick={() =>
                (window.location.href = "https://admin.covox.io/login")
              }
              variant="secondary"
              className="text-lg"
            >
              Solicita una Demo Gratuita
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
