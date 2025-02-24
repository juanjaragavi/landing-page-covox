import {
  RiGithubFill,
  RiSlackFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const sections = {
    product: {
      title: "Producto",
      items: [
        { label: "La Solución", href: "#solucion" },
        { label: "¿Cómo Funciona?", href: "#como-funciona" },
        { label: "Casos de Uso", href: "#casos-de-uso", external: true },
      ],
    },
    resources: {
      title: "Recursos",
      items: [
        { label: "Blog", href: "#" },
        { label: "Testimoniales", href: "#testimoniales" },
      ],
    },
    company: {
      title: "Compañía",
      items: [
        { label: "Sobre Nosotros", href: "#" },
        { label: "Carreras", href: "#" },
        { label: "Contacto", href: "#" },
      ],
    },
    legal: {
      title: "Legal",
      items: [
        { label: "Términos de Servicio", href: "#" },
        { label: "Política de Privacidad", href: "#" },
      ],
    },
  }

  return (
    <div className="px-4 xl:px-0">
      <footer
        id="footer"
        className="relative mx-auto flex max-w-6xl flex-wrap pt-4"
      >
        {/* Vertical Lines */}
        <div className="pointer-events-none inset-0">
          {/* Left */}
          <div
            className="absolute inset-y-0 my-[-5rem] w-px"
            style={{
              maskImage: "linear-gradient(transparent, white 5rem)",
            }}
          >
            <svg className="h-full w-full" preserveAspectRatio="none">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                className="stroke-gray-400"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
            </svg>
          </div>

          {/* Right */}
          <div
            className="absolute inset-y-0 right-0 my-[-5rem] w-px"
            style={{
              maskImage: "linear-gradient(transparent, white 5rem)",
            }}
          >
            <svg className="h-full w-full" preserveAspectRatio="none">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                className="stroke-gray-400"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
            </svg>
          </div>
        </div>
        <svg
          className="mb-10 h-20 w-full border-y border-dashed border-gray-400 stroke-gray-400"
          // style={{
          //   maskImage:
          //     "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          // }}
        >
          <defs>
            <pattern
              id="diagonal-footer-pattern"
              patternUnits="userSpaceOnUse"
              width="64"
              height="64"
            >
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8
                return (
                  <path
                    key={i}
                    d={`M${-106 + offset} 110L${22 + offset} -18`}
                    stroke=""
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
          <rect
            stroke="none"
            width="100%"
            height="100%"
            fill="url(#diagonal-footer-pattern)"
            opacity={0.5}
          />
        </svg>
        <div className="mr-auto ml-8 flex w-full justify-between lg:w-fit lg:flex-col">
          <Link
            href="/"
            className="flex items-center font-medium text-white select-none sm:text-sm"
          >
            <Image
              src="/images/logo-header.webp"
              priority
              loading="eager"
              quality={90}
              alt="Covox Logo"
              width={150}
              height={40}
            />

            <span className="sr-only">COVOX AI (go home)</span>
          </Link>

          <div>
            <div className="mt-4 flex items-center">
              {/* Social Icons */}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-white transition-colors duration-200 hover:bg-gray-200 hover:text-white"
              >
                <RiTwitterXFill className="size-5 fill-[#77FF00]" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-white transition-colors duration-200 hover:bg-gray-200 hover:text-white"
              >
                <RiYoutubeFill className="size-5 fill-[#77FF00]" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-white transition-colors duration-200 hover:bg-gray-200 hover:text-white"
              >
                <RiGithubFill className="size-5 fill-[#77FF00]" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-white transition-colors duration-200 hover:bg-gray-200 hover:text-white"
              >
                <RiSlackFill className="size-5 fill-[#77FF00]" />
              </Link>
            </div>
            <div className="ml-0 hidden text-sm text-white lg:inline">
              TRADEBOG LLC: 16192 COASTAL HIGHWAY
              <br />
              LEWES, DELAWARE.
            </div>
          </div>
        </div>

        {/* Footer Sections */}
        {Object.entries(sections).map(([key, section]) => (
          <div key={key} className="mt-6 min-w-44 pl-2 lg:mt-0 lg:pl-0">
            <h3 className="mb-4 font-medium text-[#77FF00] sm:text-sm">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.label} className="text-sm leading-tight">
                  <Link
                    href={item.href}
                    className="leading-tight font-normal text-white sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
    </div>
  )
}

export default Footer
