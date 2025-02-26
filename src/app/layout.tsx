import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import { lazy, Suspense } from "react"
import "./globals.css"
import { siteConfig } from "./siteConfig"

const NavBar = lazy(() => import("@/components/ui/Navbar"))
const Footer = lazy(() => import("@/components/ui/Footer"))
const BackToTop = lazy(() => import("@/components/ui/BackToTop"))

export const metadata: Metadata = {
  metadataBase: new URL("https://covox.ai"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Agentes Conversacionales IA",
    "IA Conversacional",
    "Automatización de Ventas",
    "Inteligencia Artificial",
    "Chatbots Inteligentes",
    "Asistentes Virtuales",
    "Automatización de Conversaciones",
    "Atención al Cliente 24/7",
    "Generación de Leads",
    "Agentes Virtuales",
    "SaaS IA",
    "Plataforma de Ventas IA",
    "Reducción de Costos Operativos",
    "Aumento de Conversiones",
    "IA para Ventas",
    "IA para Inmobiliarias",
    "IA para Sector Automotriz",
    "IA para Logística",
    "IA para Cobranzas",
  ],
  authors: [
    {
      name: "COVOX AI",
      url: "https://covox.ai",
    },
  ],
  creator: "COVOX AI",
  publisher: "COVOX AI",
  category: "Tecnología de IA",
  applicationName: "COVOX AI",
  alternates: {
    canonical: "https://covox.ai",
    languages: {
      "es-ES": "https://covox.ai",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/logo-header.webp",
        width: 120,
        height: 32,
        alt: "COVOX AI Logo",
      },
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "COVOX AI - Agentes Conversacionales de IA Hiper Realistas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@covoxai",
    site: "@covoxai",
    images: ["/images/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/images/favicon.png",
  },
  verification: {
    google: "google-site-verification-code", // Placeholder - replace with actual code when available
  },
  other: {
    "theme-color": "#77FF00",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="color-scheme" content="dark" />
        <style>{`
          html { color-scheme: dark !important; }
          @media (prefers-color-scheme: light) {
            html.dark { color-scheme: dark !important; }
          }
        `}</style>
      </head>
      <body
        className={`${GeistSans.className} min-h-[100dvh] overflow-x-hidden scroll-auto bg-gray-900 antialiased selection:bg-[#77FF00] selection:text-gray-800`}
      >
        <Suspense fallback={null}>
          <NavBar />
          {children}
          <BackToTop />
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
