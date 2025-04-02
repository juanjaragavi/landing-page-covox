"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// SVG components
const GraphIcon = () => (
  <motion.svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    className="text-[#77FF00]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    {/* Line chart */}
    <motion.path
      d="M10,60 L10,20 M5,60 L70,60"
      stroke="#444"
      strokeWidth="2"
      fill="none"
    />
    <motion.path
      d="M10,45 L25,40 L40,25 L55,10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.2, type: "tween" }}
    />
    {/* Points on the chart */}
    <motion.circle
      cx="10"
      cy="45"
      r="4"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    />
    <motion.circle
      cx="25"
      cy="40"
      r="4"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    />
    <motion.circle
      cx="40"
      cy="25"
      r="4"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    />
    <motion.circle
      cx="55"
      cy="10"
      r="4"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.6 }}
    />
  </motion.svg>
)

const PhoneIcon = () => (
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
    <path
      d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
      fill="#77FF00"
    />
    <path
      d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58172 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37258 22 2 16.6274 2 10Z"
      fill="#77FF00"
    />
    <motion.path
      d="M17.5 7C17.5 7 17.5 9 19.5 11C21.5 13 23.5 13 23.5 13"
      stroke="#77FF00"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    />
  </motion.svg>
)

const CRMIcon = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      fill="#131836"
      stroke="#77FF00"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8 }}
    />
    <motion.path
      d="M9 8h6M9 12h6M9 16h4"
      stroke="#77FF00"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />
  </motion.svg>
)

const PersonIcon = () => (
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
    <motion.circle
      cx="12"
      cy="8"
      r="4"
      fill="#77FF00"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    />
    <motion.path
      d="M20 19v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6Z"
      fill="#77FF00"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    />
  </motion.svg>
)

const ProductivityIcon = () => (
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
      d="M12 6v6l4 4"
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

      {/* Centered shine effect */}
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

      {/* Rays */}
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

export function AnimatedStatsSection() {
  const count = useCounter(30)

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
      {/* Background gradient and animated particles */}
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
              <GraphIcon />
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
                    +{count}%
                  </motion.span>{" "}
                  más visitas
                </motion.h2>
                <p className="mt-2 text-xl text-gray-300">
                  sin contratar más personal
                </p>
              </motion.div>
            </div>

            <motion.div
              className="relative mt-8 rounded-xl border border-[#77FF00]/30 bg-black/20 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <ul className="space-y-4">
                <motion.li
                  className="flex items-center text-white"
                  custom={0}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <PhoneIcon />
                  <span className="ml-3 text-lg">
                    IA que llama, agenda y confirma por ti
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center text-white"
                  custom={1}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <PersonIcon />
                  <span className="ml-3 text-lg">
                    Interacciones naturales y personalizadas con cada prospecto
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center text-white"
                  custom={2}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <CRMIcon />
                  <span className="ml-3 text-lg">
                    Integración con tu CRM y herramientas actuales
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-center text-white"
                  custom={3}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <ProductivityIcon />
                  <span className="ml-3 text-lg">
                    Mayor productividad sin aumentar costos
                  </span>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              className="mt-10 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <LightbulbIcon />
              <p className="ml-4 text-lg text-white">
                Empresas como la tuya ya están{" "}
                <span className="font-bold text-[#77FF00]">
                  escalando su operación
                </span>{" "}
                sin esfuerzo
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Graphics */}
          <motion.div
            className="relative hidden items-center justify-center md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Animated illustration representing growth */}
            <motion.div
              className="relative h-96 w-96"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Circles */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#77FF00]/20"
                animate={{
                  scale: [1, 1.05, 1],
                  borderColor: [
                    "rgba(119, 255, 0, 0.1)",
                    "rgba(119, 255, 0, 0.3)",
                    "rgba(119, 255, 0, 0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  type: "tween",
                }}
              />
              <motion.div
                className="absolute inset-10 rounded-full border-2 border-[#77FF00]/30"
                animate={{
                  scale: [1, 1.1, 1],
                  borderColor: [
                    "rgba(119, 255, 0, 0.2)",
                    "rgba(119, 255, 0, 0.4)",
                    "rgba(119, 255, 0, 0.2)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                  type: "tween",
                }}
              />
              <motion.div
                className="absolute inset-20 rounded-full border-2 border-[#77FF00]/40"
                animate={{
                  scale: [1, 1.15, 1],
                  borderColor: [
                    "rgba(119, 255, 0, 0.3)",
                    "rgba(119, 255, 0, 0.6)",
                    "rgba(119, 255, 0, 0.3)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.8,
                  type: "tween",
                }}
              />

              {/* Central Element */}
              <motion.div
                className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#77FF00] shadow-lg shadow-[#77FF00]/30"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 10px 15px -3px rgba(119, 255, 0, 0.3)",
                    "0 20px 30px -6px rgba(119, 255, 0, 0.4)",
                    "0 10px 15px -3px rgba(119, 255, 0, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  type: "tween",
                }}
              >
                <div className="flex h-full w-full items-center justify-center">
                  <motion.span
                    className="text-3xl font-bold text-gray-900"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      type: "tween",
                    }}
                  >
                    30%
                  </motion.span>
                </div>
              </motion.div>

              {/* Animated Particles */}
              {/* Generate particles with more controlled positioning */}
              {[...Array(12)].map((_, i) => {
                // Calculate position on a circle around the center element
                const angle = (i / 12) * Math.PI * 2 // Distribute evenly around circle
                const distance = 100 + Math.random() * 60 // Distance from center (100-160px)
                const x = Math.cos(angle) * distance
                const y = Math.sin(angle) * distance

                return (
                  <motion.div
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-[#77FF00]"
                    style={{
                      top: "50%",
                      left: "50%",
                      marginLeft: -4,
                      marginTop: -4,
                    }}
                    initial={{
                      x,
                      y,
                      opacity: 0,
                      scale: 0.2,
                    }}
                    animate={{
                      x,
                      y,
                      opacity: [0.2, 0.7, 0.2],
                      scale: [0.2, 1, 0.2],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: Math.random() * 2,
                      type: "tween",
                    }}
                  />
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
