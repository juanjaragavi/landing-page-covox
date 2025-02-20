import { RiArrowRightUpLine } from "@remixicon/react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"
import GameOfLife from "./HeroBackground"

export function Hero() {
  return (
    <section aria-label="hero">
      <FadeContainer className="relative flex flex-col items-center justify-center">
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
                News
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">
                  Smart Irrigation System Launch
                </span>

                <RiArrowRightUpLine className="size-4 shrink-0 stroke-[#77FF00] text-gray-700 dark:text-gray-300" />
              </span>
            </div>
          </a>
        </FadeDiv>
        <h1 className="mt-8 text-center text-4xl font-semibold tracking-tighter text-gray-900 sm:text-7xl sm:leading-[5rem] dark:text-gray-900">
          <FadeSpan>Autonomy</FadeSpan> <FadeSpan>for</FadeSpan>
          <br />
          <FadeSpan>every</FadeSpan> <FadeSpan>Farm</FadeSpan>
        </h1>
        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-lg dark:text-gray-700">
          <FadeSpan>Revolutionizing agriculture with AI-powered</FadeSpan>{" "}
          <FadeSpan>sensors, drones, and automation for</FadeSpan>{" "}
          <FadeSpan>sustainable and efficient farming.</FadeSpan>
        </p>
        <FadeDiv>
          <a
            className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md border-b-[1.5px] border-[#77FF00] bg-[#77FF00] px-5 py-3 text-lg leading-4 font-medium tracking-wide whitespace-nowrap text-black shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_10px_0_rgba(255,255,255,0.15)] transition-all duration-200 ease-in-out hover:bg-white hover:shadow-white/50"
            href="#"
          >
            Automate now
          </a>
        </FadeDiv>
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-radial absolute inset-0 from-transparent via-transparent to-gray-950/80 dark:to-gray-950"></div>
          <div className="flex items-center justify-center">
            <GameOfLife />
          </div>
        </div>
      </FadeContainer>
    </section>
  )
}
