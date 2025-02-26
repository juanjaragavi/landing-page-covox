import { RiPlayLine, RiSettings3Line, RiUserAddLine } from "@remixicon/react"

export const ComoFunciona = () => {
  return (
    <div
      id="como-funciona"
      aria-labelledby="como-funciona"
      className="relative flex w-full max-w-6xl scroll-my-24 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-950 px-10 shadow-2xl shadow-black/50 sm:px-16 sm:pb-10 md:px-28 lg:mx-auto"
    >
      <div className="absolute inset-0 z-0">
        <svg className="h-full w-full">
          <defs>
            <pattern
              id="diagonal-pattern"
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
                    className="stroke-zinc-800/50"
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-pattern)" />
        </svg>
      </div>
      <div className="absolute left-0 z-10 h-full backdrop-blur-[2px]">
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage:
              "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          }}
        >
          <defs>
            <pattern
              id="diagonal-border-pattern"
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
        </svg>
      </div>
      <div className="absolute right-0 z-10 h-full backdrop-blur-[2px]">
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage:
              "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          }}
        >
          <defs>
            <pattern
              id="diagonal-border-pattern"
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
        </svg>
      </div>

      <div className="z-10 pt-12 text-base font-semibold tracking-tight text-[#77FF00] sm:pt-20 sm:text-lg">
        ¿Cómo Funciona?
      </div>
      <h2
        id="management-title"
        className="z-20 max-w-[700px] text-center text-2xl font-semibold tracking-tight text-balance text-white sm:mb-10 md:text-5xl"
      >
        Totalmente personalizable, fácil e intuitivo.
      </h2>
      <div className="relative z-10 mt-10 mb-10 flex w-full items-center justify-center">
        {/* Mobile layout - vertical stack */}
        <div className="flex w-full flex-col items-center space-y-8 md:hidden">
          {/* Step 1 */}
          <div className="flex w-full items-center space-x-4 px-4">
            <div className="relative flex-shrink-0">
              <div className="size-12 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
              <RiUserAddLine className="absolute top-1/2 left-1/2 z-10 size-6 -translate-x-1/2 -translate-y-1/2 text-white" />
              <div
                style={{ animationDelay: "0.2s" }}
                className="absolute top-0 left-0 size-12 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
              ></div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-[#77FF00]">Paso 1</h3>
              <p className="text-sm leading-tight text-white">
                Selecciona objetivo del agente, configura el prompt y
                personaliza la voz.
              </p>
            </div>
          </div>

          {/* Vertical Connector Line */}
          <div className="relative h-8 w-px overflow-hidden bg-gradient-to-b from-gray-900 via-[#77FF00] to-gray-900">
            <div className="animate-slide-vertical absolute inset-0 bg-gradient-to-b from-transparent via-[#77FF00] to-transparent"></div>
          </div>

          {/* Step 2 */}
          <div className="flex w-full items-center space-x-4 px-4">
            <div className="relative flex-shrink-0">
              <div className="size-12 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
              <RiSettings3Line className="absolute top-1/2 left-1/2 z-10 size-6 -translate-x-1/2 -translate-y-1/2 text-white" />
              <div
                style={{ animationDelay: "1s" }}
                className="absolute top-0 left-0 size-12 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
              ></div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-[#77FF00]">Paso 2</h3>
              <p className="text-sm leading-tight text-white">
                Selecciona la base de datos de tus leads y clientes.
              </p>
            </div>
          </div>

          {/* Vertical Connector Line */}
          <div className="relative h-8 w-px overflow-hidden bg-gradient-to-b from-gray-900 via-[#77FF00] to-gray-900">
            <div className="animate-slide-vertical absolute inset-0 bg-gradient-to-b from-transparent via-[#77FF00] to-transparent"></div>
          </div>

          {/* Step 3 */}
          <div className="flex w-full items-center space-x-4 px-4">
            <div className="relative flex-shrink-0">
              <div className="size-12 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
              <RiPlayLine className="absolute top-1/2 left-1/2 z-10 size-6 -translate-x-1/2 -translate-y-1/2 text-white" />
              <div
                style={{ animationDelay: "2s" }}
                className="absolute top-0 left-0 size-12 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
              ></div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-[#77FF00]">Paso 3</h3>
              <p className="text-sm leading-tight text-white">
                Programa día y hora de las llamadas.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop layout - horizontal */}
        <div className="hidden w-full max-w-3xl items-center justify-between md:flex">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center">
            <div className="flex h-full items-center justify-center">
              <div className="absolute size-14 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
              <RiUserAddLine
                className="absolute z-10 size-8 text-white"
                style={{
                  top: "0%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  animationDelay: "0.2s",
                }}
                className="absolute top-0 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
              ></div>
            </div>
            <h3 className="mt-10 text-xl font-semibold text-[#77FF00]">
              Paso 1
            </h3>
            <div className="relative mt-2 max-w-[20rem] text-center text-sm leading-tight text-white">
              Selecciona objetivo del agente, configura el prompt y personaliza
              la voz.
            </div>
          </div>

          {/* Connector Line */}
          <div className="relative h-px w-1/4 overflow-hidden bg-gradient-to-r from-gray-900 via-[#77FF00] to-gray-900">
            <div className="animate-slide absolute inset-0 bg-gradient-to-r from-transparent via-[#77FF00] to-transparent"></div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center">
            <div className="flex h-full items-center justify-center">
              <div className="absolute size-14 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
              <RiSettings3Line
                className="absolute z-10 size-8 text-white"
                style={{
                  top: "0%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  animationDelay: "1s",
                }}
                className="absolute top-0 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
              ></div>
            </div>
            <h3 className="mt-10 text-xl font-semibold text-[#77FF00]">
              Paso 2
            </h3>
            <div className="relative mt-2 max-w-[20rem] text-center text-sm leading-tight text-white">
              Selecciona la base de datos de tus leads y clientes.
            </div>
          </div>

          {/* Connector Line */}
          <div className="relative h-px w-1/4 overflow-hidden bg-gradient-to-r from-gray-900 via-[#77FF00] to-gray-900">
            <div className="animate-slide absolute inset-0 bg-gradient-to-r from-transparent via-[#77FF00] to-transparent"></div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center">
            <div className="flex h-full items-center justify-center">
              <div className="absolute size-14 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
              <RiPlayLine
                className="absolute z-10 size-8 text-white"
                style={{
                  top: "0%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  animationDelay: "2s",
                }}
                className="absolute top-0 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
              ></div>
            </div>
            <h3 className="mt-10 text-xl font-semibold text-[#77FF00]">
              Paso 3
            </h3>
            <div className="relative mt-2 max-w-[20rem] text-center text-sm leading-tight text-white">
              Programa día y hora de las llamadas.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
