"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// SVG components
const MultiChannelIcon = () => (
  <motion.svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    className="text-[#77FF00]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    {/* Central hub */}
    <motion.circle
      cx="40"
      cy="40"
      r="12"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    />
    {/* Channel nodes */}
    <motion.circle
      cx="15"
      cy="20"
      r="6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    />
    <motion.circle
      cx="65"
      cy="20"
      r="6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    />
    <motion.circle
      cx="15"
      cy="60"
      r="6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    />
    <motion.circle
      cx="65"
      cy="60"
      r="6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.6 }}
    />
    {/* Connection lines */}
    <motion.path
      d="M20 24L32 34M60 24L48 34M20 56L32 46M60 56L48 46"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    />
  </motion.svg>
)

const ConversationIcon = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5, type: "spring" }}
    whileHover={{ rotate: 10 }}
  >
    <motion.path
      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
      stroke="#77FF00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8 }}
    />
    <motion.path
      d="M8 9h8M8 13h5"
      stroke="#77FF00"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    />
  </motion.svg>
)

const LeadIcon = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.circle
      cx="12"
      cy="8"
      r="4"
      stroke="#77FF00"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8 }}
    />
    <motion.path
      d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"
      stroke="#77FF00"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
    <motion.path
      d="M16 3l2 2-2 2"
      stroke="#77FF00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    />
  </motion.svg>
)

const GrowthIcon = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <motion.path
      d="M3 20L9 14L13 18L21 10"
      stroke="#77FF00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M17 10H21V14"
      stroke="#77FF00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    />
  </motion.svg>
)

const AutomationIcon = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ rotate: -90 }}
    animate={{ rotate: 0 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
  >
    <motion.circle
      cx="12"
      cy="12"
      r="10"
      stroke="#77FF00"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M12 6v6l4 2"
      stroke="#77FF00"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    />
  </motion.svg>
)

const LightbulbIcon = () => (
  <motion.div
    className="relative"
    animate={{
      filter: [
        "drop-shadow(0 0 0px #77FF00)",
        "drop-shadow(0 0 8px #77FF00)",
        "drop-shadow(0 0 0px #77FF00)",
      ],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      type: "tween",
    }}
  >
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        type: "tween",
      }}
    >
      <motion.path
        d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
        fill="#77FF00"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, type: "tween" }}
      />
      <motion.path
        d="M9 21v-1h6v1c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1z"
        fill="#77FF00"
      />
      <motion.circle
        cx="12"
        cy="7"
        r="4"
        fill="white"
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.path
        d="M12 1V3M7 3L8 5M17 3L16 5M20 8H18M6 8H4"
        stroke="#77FF00"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </motion.svg>
  </motion.div>
)

// Counter animation hook
const useCounter = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame = 0

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration])

  return count
}

export function MulticanalStatsSection() {
  const count = useCounter(100)

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.5,
      },
    }),
  }

  return (
    <div className="relative overflow-hidden bg-gray-900 py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-[#131836] opacity-80"></div>

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column - Statistics */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex items-center">
              <MultiChannelIcon />
              <motion.div
                className="ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.h2
                  className="text-4xl font-bold text-white"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <motion.span
                    className="text-[#77FF00]"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(119, 255, 0, 0)",
                        "0 0 5px rgba(119, 255, 0, 0.5)",
                        "0 0 0px rgba(119, 255, 0, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      type: "tween",
                    }}
                  >
                    {count}% de leads
                  </motion.span>{" "}
                </motion.h2>
                <p className="mt-2 text-xl text-gray-300">
                  Atendidos automáticamente en todos tus canales, sin perder una
                  sola oportunidad
                </p>
              </motion.div>
            </div>

            <motion.div
              className="relative mt-8 rounded-xl border border-[#77FF00]/30 bg-black/20 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="absolute -top-3 left-4">
                <span className="rounded-full bg-[#77FF00] px-3 py-1 text-xs font-bold text-gray-900">
                  MULTICANAL
                </span>
              </div>
              <ul className="mt-3 space-y-4">
                {[
                  {
                    icon: <ConversationIcon />,
                    text: "Centraliza conversaciones de WhatsApp, teléfono y redes sociales en un solo lugar",
                  },
                  {
                    icon: <LeadIcon />,
                    text: "Captura y atiende el 100% de tus leads automáticamente, 24/7",
                  },
                  {
                    icon: <GrowthIcon />,
                    text: "Aumenta tus conversiones hasta 10X sin contratar más personal",
                  },
                  {
                    icon: <AutomationIcon />,
                    text: "Automatiza seguimientos y respuestas en todos los canales simultáneamente",
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    variants={listItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    <span className="flex shrink-0 items-center justify-center">
                      {item.icon}
                    </span>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              {/* Glowing background */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-[#77FF00]/5 blur-xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  type: "tween",
                }}
              />

              {/* Channel cards */}
              <div className="relative space-y-4">
                {[
                  {
                    channel: "WhatsApp",
                    messages: "2,450",
                    trend: "+32%",
                    color: "from-green-500/20 to-green-600/10",
                  },
                  {
                    channel: "Llamadas Telefónicas",
                    messages: "1,830",
                    trend: "+45%",
                    color: "from-blue-500/20 to-blue-600/10",
                  },
                  {
                    channel: "Redes Sociales",
                    messages: "980",
                    trend: "+28%",
                    color: "from-purple-500/20 to-purple-600/10",
                  },
                ].map((channel, i) => (
                  <motion.div
                    key={channel.channel}
                    className={`rounded-xl border border-[#77FF00]/20 bg-gradient-to-r ${channel.color} p-4 backdrop-blur-sm`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                    whileHover={{
                      scale: 1.02,
                      borderColor: "rgba(119, 255, 0, 0.5)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-400">
                          {channel.channel}
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {channel.messages}
                        </p>
                        <p className="text-xs text-gray-400">
                          conversaciones/mes
                        </p>
                      </div>
                      <motion.span
                        className="rounded-full bg-[#77FF00]/10 px-3 py-1 text-sm font-semibold text-[#77FF00]"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          type: "tween",
                        }}
                      >
                        {channel.trend}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}

                {/* Insight card */}
                <motion.div
                  className="mt-4 flex items-center gap-3 rounded-xl border border-[#77FF00]/30 bg-black/30 p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <LightbulbIcon />
                  <div>
                    <p className="text-sm font-medium text-[#77FF00]">
                      Los negocios que centralizan sus canales
                    </p>
                    <p className="text-xs text-gray-400">
                      aumentan su tasa de cierre un 60% en los primeros 90 días
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
