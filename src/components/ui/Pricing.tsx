"use client"

import { IconCheck } from "@tabler/icons-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Básico",
      description: "Para empresas que buscan escalar sus operaciones.",
      priceMonthly: 9,
      priceAnnual: 7,
      annualNote: "$87 USD anual",
      features: [
        "3 Agentes conversacionales",
        "5 usuarios",
        "Autoservicio",
        "Soporte por email",
        "3GB de almacenamiento",
      ],
      cta: "Comenzar",
      popular: false,
      pricePerMinute: "$0.22 USD",
      monthlyPayment: true,
      selfService: true,
    },
    {
      name: "Startup",
      description: "Para startups en crecimiento",
      priceMonthly: 49,
      priceAnnual: 39,
      annualNote: "$468 USD anual",
      features: [
        "Agentes ilimitados",
        "Usuarios ilimitados",
        "Soporte por email y chat",
        "Prioridad en soporte",
        "10GB de almacenamiento",
        "Gestor de cuenta",
      ],
      cta: "Comenzar",
      popular: true,
      pricePerMinute: "$0.21 USD",
      monthlyPayment: true,
      selfService: true,
    },
    {
      name: "Business",
      description: "Para empresas que REALMENTE quieren potenciar la IA.",
      priceMonthly: 399,
      priceAnnual: 299,
      annualNote: "$3,588 USD anual",
      features: [
        "Agentes ilimitados",
        "Usuarios ilimitados",
        "Soporte premium",
        "Prioridad en soporte",
        "Soporte 1-1 con equipo técnico",
        "20GB de almacenamiento",
        "Gestor de cuenta dedicado",
      ],
      cta: "Comenzar",
      popular: false,
      pricePerMinute: "$0.20 USD",
      monthlyPayment: true,
      premiumSupport: true,
    },
    {
      name: "Enterprise",
      description: "Contacta a nuestro equipo de ventas",
      price: "Contacta a nuestro equipo de ventas",
      features: [
        "Agentes personalizados",
        "Usuarios ilimitados",
        "Soporte premium",
        "Soporte prioritario",
        "Equipo técnico dedicado",
        "Soluciones de almacenamiento personalizadas",
        "Gestor de cuenta dedicado",
        "Integraciones personalizadas",
      ],
      cta: "Contactar ventas",
      popular: false,
      enterprise: true,
    },
  ]

  return (
    <div id="pricing" className="w-full bg-transparent py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Planes y Precios
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xl leading-tight text-gray-300">
            Diferentes planes según necesidades, con opción de prueba gratuita.
          </p>
        </div>

        {/* Monthly/Annual Switcher */}
        <div className="mt-12 flex justify-center">
          <div className="relative">
            <div className="flex items-center space-x-3">
              <motion.span
                className="text-sm"
                animate={{
                  color: !isAnnual ? "#4ade80" : "#d1d5db",
                }}
              >
                Mensual
              </motion.span>
              <motion.button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ease-out ${
                  isAnnual ? "bg-green-500" : "bg-green-300"
                }`}
              >
                <motion.span
                  className={`inline-block size-4 rounded-full bg-white ${
                    !isAnnual ? "ring-0 ring-white" : "bg-white"
                  }`}
                  animate={{
                    x: isAnnual ? 24 : 2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 30,
                  }}
                />
              </motion.button>
              <motion.span
                className="text-sm"
                animate={{
                  color: isAnnual ? "#77FF00" : "#d1d5db",
                }}
              >
                Anual <span className="text-[#77FF00]">20% descuento</span>
              </motion.span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-2xl bg-white/5 px-4 py-8 backdrop-blur-sm ${
                plan.popular ? "ring-2 ring-[#77FF00]" : "ring-1 ring-white/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-5 left-1/2 w-11/12 -translate-x-1/2 rounded-full bg-[#77FF00] p-0 px-2 py-1 text-center text-sm font-semibold text-black">
                  Más Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-center text-xl font-bold text-[#77FF00] md:text-left md:text-xl">
                  {plan.name}
                </h3>
                <p className="text-md mt-2 text-center leading-tight text-gray-300 md:text-left md:text-sm">
                  {plan.description}
                </p>
                <div className="mx-auto mt-6 flex items-center justify-center">
                  {plan.enterprise ? (
                    <div className="text-3xl font-bold text-white">
                      {plan.price}
                    </div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-white">
                        ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                      </span>
                      <span className="ml-2 text-gray-300">USD/mes</span>
                    </div>
                  )}
                </div>
                {plan.annualNote && isAnnual && (
                  <div className="mt-2 text-center text-sm text-gray-400">
                    {plan.annualNote}
                  </div>
                )}
                {plan.monthlyPayment && !isAnnual && (
                  <div className="mt-2 text-center text-sm text-gray-400">
                    Pago mensual
                  </div>
                )}
                {plan.selfService && (
                  <div className="mt-1 text-center text-sm text-gray-400">
                    Autoservicio
                  </div>
                )}
                {plan.premiumSupport && (
                  <div className="mt-1 text-center text-sm text-gray-400">
                    Soporte premium
                  </div>
                )}
                {plan.pricePerMinute && (
                  <div className="mt-3 text-center text-sm text-[#77FF00]">
                    Precio por minuto: {plan.pricePerMinute}
                  </div>
                )}
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <IconCheck className="mr-3 size-6 shrink-0 text-[#77FF00]" />
                    <span className="text-sm leading-tight text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.enterprise ? (
                <Link
                  href="https://admin.covox.io/login"
                  className="inline-block w-full"
                  aria-label={`Contactar sobre el plan ${plan.name}`}
                  rel="noopener noreferrer"
                  title={`Obtener más información sobre nuestro plan ${plan.name}`}
                >
                  <button className="w-full rounded-lg bg-white px-4 py-2 text-center font-semibold text-black transition-colors hover:bg-gray-100">
                    {plan.cta}
                  </button>
                </Link>
              ) : (
                <Link
                  href="https://admin.covox.io/login"
                  className="inline-block w-full"
                  aria-label={`Registrarse para el plan ${plan.name}`}
                  title={`Comenzar con nuestro plan ${plan.name}`}
                  rel="noopener noreferrer"
                >
                  <button className="w-full rounded-lg bg-[#77FF00] px-4 py-2 text-center font-semibold text-black transition-colors hover:bg-green-600">
                    {plan.cta}
                  </button>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-14"
        >
          <h2 className="mb-10 text-center text-3xl font-bold text-white">
            Información Adicional
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-[#77FF00]">
                Prueba Gratuita
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-300">
                  • 10 minutos de créditos para hacer llamadas GRATIS
                </li>
                <li className="text-gray-300">
                  • Soporte técnico durante la prueba
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-[#77FF00]">
                Términos y Condiciones
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-300">
                  • Facturación mensual o anual según el plan
                </li>
                <li className="text-gray-300">
                  • Cancelación en cualquier momento
                </li>
                <li className="text-gray-300">
                  • Actualizaciones y soporte incluidos
                </li>
                <li className="text-gray-300">
                  • Garantía de devolución de 30 días
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
