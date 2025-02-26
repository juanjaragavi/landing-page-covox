import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import { lazy, Suspense } from "react"
import "./globals.css"
import { siteConfig } from "./siteConfig"

const NavBar = lazy(() => import("@/components/ui/Navbar"))
const Footer = lazy(() => import("@/components/ui/Footer"))
const BackToTop = lazy(() => import("@/components/ui/BackToTop"))

export const metadata: Metadata = {
  metadataBase: new URL("https://yoururl.com"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Marketing", "Database", "Software"],
  authors: [
    {
      name: "yourname",
      url: "",
    },
  ],
  creator: "yourname",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@yourname",
  },
  icons: {
    icon: "/favicon.ico",
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
