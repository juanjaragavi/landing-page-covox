import {
  RiCarFill,
  RiHome3Fill,
  RiMoneyDollarCircleFill,
  RiTruckFill,
  RiUserStarFill,
} from "@remixicon/react"
import { Divider } from "../Divider"
import AnalyticsIllustration from "./AnalyticsIllustration"
import { StickerCard } from "./StickerCard"

export function SolarAnalytics() {
  return (
    <section
      aria-labelledby="solar-analytics"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2
          id="solar-analytics"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-[#77FF00]"
        >
          Verticales y Casos de Uso
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-[#77FF00]" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-white md:text-4xl">
          Descubre cómo COVOX AI
          <br />
          potencia tu negocio
        </p>
      </div>
      <div className="*:pointer-events-none">
        <AnalyticsIllustration />
      </div>
      <Divider className="mt-0"></Divider>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={RiHome3Fill}
          title="Sector Inmobiliario"
          description="Califica leads y agenda visitas automáticamente."
        />
        <StickerCard
          Icon={RiCarFill}
          title="Sector Automotriz"
          description="Responde consultas y agenda citas en concesionarios."
        />
        <StickerCard
          Icon={RiTruckFill}
          title="Logística y Transporte"
          description="Automatiza novedades y mejora la comunicación."
        />
        <StickerCard
          Icon={RiMoneyDollarCircleFill}
          title="Cobranzas"
          description="Llama a clientes y automatiza gestiones de cobro."
        />
        <StickerCard
          Icon={RiUserStarFill}
          title="Agente Comercial Multiindustria"
          description="Impacta más leads, haz seguimiento y aumenta cierres."
        />
      </div>
    </section>
  )
}
