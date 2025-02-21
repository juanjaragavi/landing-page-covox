import { RiPlayFill } from "@remixicon/react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"
import { ScaleContainer, ScaleDiv } from "../Scale"
import GameOfLife from "./HeroBackground"

export function Hero() {
  return (
    <section aria-label="hero">
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-radial absolute inset-0 from-transparent via-transparent to-gray-950/80 dark:to-gray-950"></div>
          <ScaleContainer>
            <ScaleDiv className="flex items-center justify-center">
              <GameOfLife />
            </ScaleDiv>
          </ScaleContainer>
        </div>
        <FadeContainer className="flex flex-col items-center justify-center">
          <FadeDiv className="mx-auto">
            <a
              aria-label="View latest update the changelog page"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto w-full"
            >
              <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 shadow-lg shadow-[#77FF00]/20 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-[#77FF00]/[2.5%] focus:outline-hidden sm:text-sm dark:text-gray-100">
                <span className="shrink-0 truncate rounded-full border border-[#77FF00] px-2.5 py-1 text-sm text-gray-600 sm:text-xs dark:bg-gray-800 dark:text-gray-300">
                  VIDEO
                </span>
                <span className="flex items-center gap-1 truncate">
                  <span className="w-full truncate">
                    ¡Mira cómo funciona nuestra IA Conversacional!
                  </span>

                  <RiPlayFill className="size-4 shrink-0 fill-[#77FF00] text-gray-700 dark:text-gray-300" />
                </span>
              </div>
            </a>
          </FadeDiv>
          <h1 className="mt-4 text-center text-2xl font-semibold tracking-tighter text-gray-900 sm:mt-24 sm:text-5xl sm:leading-[1em] dark:text-gray-900">
            <FadeSpan>Agentes Conversacionales de IA</FadeSpan>
            <br />
            <FadeSpan>Hiper Realistas</FadeSpan>{" "}
            <FadeSpan>que puedes crear</FadeSpan>
            <br />
            <FadeSpan>en Minutos</FadeSpan> <FadeSpan>🚀</FadeSpan>
          </h1>
          <p className="mt-4 max-w-xl text-center text-base leading-tight font-medium text-balance text-gray-700 sm:mt-2 sm:text-xl dark:text-gray-900">
            <FadeSpan>Automatiza conversaciones,</FadeSpan>{" "}
            <FadeSpan>agenda citas</FadeSpan>{" "}
            <FadeSpan>y cierra más ventas</FadeSpan>{" "}
            <FadeSpan>con nuestra plataforma SaaS</FadeSpan>{" "}
            <FadeSpan>de IA conversacional.</FadeSpan>
          </p>
          <FadeDiv>
            <a
              className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-xl border-b-[1.5px] border-[#77FF00] bg-[#77FF00] px-6 py-4 text-lg leading-4 font-semibold tracking-wide whitespace-nowrap text-black shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_10px_0_rgba(255,255,255,0.15)] transition-all duration-200 ease-in-out hover:bg-white hover:shadow-white/50 sm:text-xl"
              href="#"
            >
              🔹 Solicita una Demo GRATUITA
            </a>
          </FadeDiv>
        </FadeContainer>
      </div>
    </section>
  )
}
