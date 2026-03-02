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
  const count = useCounter(3)

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
        <div className="mx-auto max-w-2xl">
          {/* Centered Content */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 flex flex-col items-center text-center sm:flex-row sm:text-left">
              <MultiChannelIcon />
              <motion.div
                className="mt-4 sm:mt-0 sm:ml-4"
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
                    {count}X más matrículas
                  </motion.span>{" "}
                </motion.h2>
                <p className="mt-2 text-xl text-gray-300">
                  Toma el control de tus admisiones y convierte más interesados
                  en estudiantes con IA 🚀🎓
                </p>
              </motion.div>
            </div>

            <motion.div
              className="relative mt-8 w-full rounded-xl border border-[#77FF00]/30 bg-black/20 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="absolute -top-3 left-4">
                <span className="rounded-full bg-[#77FF00] px-3 py-1 text-xs font-bold text-gray-900">
                  ADMISIONES IA
                </span>
              </div>
              <ul className="mt-3 space-y-4">
                {[
                  {
                    icon: <ConversationIcon />,
                    text: "Centraliza consultas de WhatsApp, llamadas y redes sociales en un solo embudo de admisiones",
                  },
                  {
                    icon: <LeadIcon />,
                    text: "Captura y atiende el 100% de interesados automáticamente, 24/7",
                  },
                  {
                    icon: <GrowthIcon />,
                    text: "Aumenta tus matrículas hasta 3X sin contratar más personal",
                  },
                  {
                    icon: <AutomationIcon />,
                    text: "Automatiza seguimientos en todo el proceso de admisión simultáneamente",
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
        </div>
      </motion.div>
    </div>
  )
}
