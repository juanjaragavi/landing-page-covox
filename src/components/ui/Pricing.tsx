"use client"

import { IconCheck } from "@tabler/icons-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Basic",
      description: "For companies looking to scale their operations.",
      priceMonthly: 9,
      priceAnnual: 7,
      annualNote: "$87 USD annual",
      features: [
        "3 Agents",
        "5 users",
        "Self Service",
        "Email support",
        "3GB of database storage",
      ],
      cta: "Get Started",
      popular: false,
      pricePerMinute: "$0.22 USD",
      monthlyPayment: true,
      selfService: true,
    },
    {
      name: "Startup",
      description: "For growing startups",
      priceMonthly: 49,
      priceAnnual: 39,
      annualNote: "$39 USD annual",
      features: [
        "Unlimited Agents",
        "Unlimited users",
        "Email and chat support",
        "Chat support priority",
        "10GB of database storage",
        "Account Manager",
      ],
      cta: "Get Started",
      popular: true,
      pricePerMinute: "$0.21 USD",
      monthlyPayment: true,
      selfService: true,
    },
    {
      name: "Business",
      description: "For companies that REALLY want to unleash AI.",
      priceMonthly: 399,
      priceAnnual: 299,
      annualNote: "$299 USD annual",
      features: [
        "Unlimited Agents",
        "Unlimited users",
        "Premium support",
        "Chat support priority",
        "1-1 support with tech team",
        "20GB of database storage",
        "Dedicated Account Manager",
      ],
      cta: "Get Started",
      popular: false,
      pricePerMinute: "$0.20 USD",
      monthlyPayment: true,
      premiumSupport: true,
    },
    {
      name: "Enterprise",
      description: "Contact our Sales Team",
      price: "Contact our Sales Team",
      features: [
        "Custom Agents",
        "Unlimited users",
        "Premium support",
        "Priority support",
        "Dedicated tech team",
        "Custom storage solutions",
        "Dedicated Account Manager",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      popular: false,
      enterprise: true,
    },
  ]

  return (
    <section id="pricing" className="w-full bg-transparent py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Planes y Precios
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl leading-tight text-gray-300">
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
                  color: isAnnual ? "#4ade80" : "#d1d5db",
                }}
              >
                Anual <span className="text-green-400">20% descuento</span>
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
                plan.popular ? "ring-2 ring-green-500" : "ring-1 ring-white/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-5 left-1/2 w-11/12 -translate-x-1/2 rounded-full bg-green-500 p-0 px-2 py-1 text-center text-sm font-semibold text-black">
                  Más Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-center text-xl font-bold text-white md:text-left md:text-xl">
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
                {plan.monthlyPayment && (
                  <div className="mt-2 text-center text-sm text-gray-400">
                    Pago mensual
                  </div>
                )}
                {plan.selfService && (
                  <div className="mt-1 text-center text-sm text-gray-400">
                    Self service
                  </div>
                )}
                {plan.premiumSupport && (
                  <div className="mt-1 text-center text-sm text-gray-400">
                    Premium support
                  </div>
                )}
                {plan.pricePerMinute && (
                  <div className="mt-3 text-center text-sm text-green-400">
                    Price per minute: {plan.pricePerMinute}
                  </div>
                )}
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <IconCheck className="mr-3 size-6 shrink-0 text-green-400" />
                    <span className="text-sm leading-tight text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.enterprise ? (
                <Link
                  href="#contact"
                  className="inline-block w-full"
                  aria-label={`Contact us about ${plan.name} plan`}
                  rel="noopener noreferrer"
                  title={`Get more information about our ${plan.name} plan`}
                >
                  <button className="w-full rounded-lg bg-white px-4 py-2 text-center font-semibold text-black transition-colors hover:bg-gray-100">
                    {plan.cta}
                  </button>
                </Link>
              ) : (
                <Link
                  href="#contact"
                  className="inline-block w-full"
                  aria-label={`Sign up for ${plan.name} plan`}
                  title={`Get started with our ${plan.name} plan`}
                  rel="noopener noreferrer"
                >
                  <button className="w-full rounded-lg bg-green-500 px-4 py-2 text-center font-semibold text-black transition-colors hover:bg-green-600">
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
          className="mt-20"
        >
          <h2 className="my-10 text-center text-3xl font-bold text-white">
            Información Adicional
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">
                Prueba Gratuita
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-300">
                  • Prueba gratuita de 14 días sin compromiso
                </li>
                <li className="text-gray-300">
                  • Acceso completo a todas las funcionalidades
                </li>
                <li className="text-gray-300">
                  • Soporte técnico durante la prueba
                </li>
                <li className="text-gray-300">
                  • Sin necesidad de tarjeta de crédito
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">
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
    </section>
  )
}
