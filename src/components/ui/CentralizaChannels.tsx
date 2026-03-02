"use client"

import { motion } from "motion/react"

const channels = [
  {
    name: "WhatsApp",
    description:
      "Responde automáticamente a todos tus mensajes de WhatsApp Business con IA conversacional.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "from-green-500/20 to-green-600/5",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    name: "Llamadas Telefónicas",
    description:
      "Agentes de IA que realizan y reciben llamadas como un humano, con voz natural y seguimiento inteligente.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    name: "Redes Sociales",
    description:
      "Atiende DMs de Instagram, Facebook Messenger y más canales digitales desde un solo panel.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
]

export function CentralizaChannels() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="mb-14 text-center">
        <motion.p
          className="text-base font-semibold tracking-tight text-[#77FF00] sm:text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Todo en un Solo Lugar
        </motion.p>
        <motion.h2
          className="mx-auto mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-balance text-white md:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Así funciona
        </motion.h2>
      </div>

      {/* Two-column layout: description + highlight card */}
      <div className="mb-14 grid items-center gap-8 md:grid-cols-2">
        <motion.p
          className="text-lg leading-relaxed text-gray-400"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Con COVOX centraliza y automatiza tus conversaciones de WhatsApp,
          Facebook e Instagram en un solo lugar, integradas a tu CRM de
          admisiones y conectadas con llamadas automatizadas con IA de voz
          hiperrealista.
        </motion.p>

        <motion.div
          className="rounded-xl border border-[#77FF00]/20 bg-[#77FF00]/5 p-6 backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg font-semibold text-white">
            ¡Tuvimos el mismo reto en procesos comerciales y de matrícula!
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Muchas instituciones educativas tienen dificultades para gestionar
            cientos de interesados por múltiples canales. Por eso, creamos una
            solución con agentes de IA que califican leads, responden, llaman
            automáticamente, agendan citas y evitan la pérdida de oportunidades
            de matrícula 🎓🚀
          </p>
        </motion.div>
      </div>

      {/* Channel cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {channels.map((channel, i) => (
          <motion.div
            key={channel.name}
            className={`rounded-xl border ${channel.borderColor} bg-gradient-to-br ${channel.color} p-6 backdrop-blur-sm transition-all hover:border-[#77FF00]/40`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <div
              className={`mb-4 inline-flex rounded-lg bg-black/30 p-3 ${channel.iconColor}`}
            >
              {channel.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{channel.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {channel.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a
          href="https://admin.covox.io/login"
          className="rounded-xl border-b-[1.5px] border-[#77FF00] bg-[#77FF00] px-8 py-4 text-lg font-semibold text-black shadow transition-all hover:bg-white hover:shadow-white/50"
        >
          AGENDA DEMO
        </a>
      </motion.div>
    </div>
  )
}
