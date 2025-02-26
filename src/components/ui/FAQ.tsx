"use client"

import { IconMinus, IconPlus } from "@tabler/icons-react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqData: FAQItem[] = [
    {
      question: "¿Necesito conocimientos técnicos?",
      answer:
        "No, es fácil de configurar. Nuestra plataforma está diseñada para ser intuitiva y fácil de usar, incluso para personas sin experiencia técnica. Ofrecemos guías paso a paso y soporte para ayudarte en el proceso de implementación de tus agentes conversacionales.",
    },
    {
      question: "¿Funciona con mi CRM?",
      answer:
        "Sí, integración sencilla. COVOX AI se integra con la mayoría de los CRM populares como Salesforce, HubSpot, Zoho, y muchos más. Nuestras APIs y conectores facilitan la sincronización de datos entre sistemas, permitiendo que tus agentes conversacionales accedan a la información necesaria para ofrecer una experiencia personalizada.",
    },
    {
      question: "¿En qué idiomas opera?",
      answer:
        "Actualmente, nuestra plataforma soporta español, inglés, portugués, francés y alemán, con planes para añadir más idiomas en el futuro cercano. Nuestros agentes conversacionales pueden interactuar de manera natural en estos idiomas, facilitando la comunicación con clientes internacionales.",
    },
    {
      question: "¿Cómo funciona la prueba gratuita?",
      answer:
        "Ofrecemos una prueba gratuita de 14 días con acceso completo a todas las funcionalidades. No se requiere tarjeta de crédito y puedes cancelar en cualquier momento sin compromiso. Durante este período, podrás crear tus propios agentes conversacionales y probar todas las características de nuestra plataforma.",
    },
    {
      question: "¿Qué tipo de soporte ofrecen?",
      answer:
        "Dependiendo del plan, ofrecemos soporte por email, chat y soporte técnico personalizado. Los planes Business y Enterprise incluyen soporte prioritario y acceso a un equipo técnico dedicado que te ayudará a optimizar tus agentes conversacionales y resolver cualquier problema que pueda surgir.",
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer:
        "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se reflejarán en tu próxima facturación, y si actualizas a un plan superior, solo pagarás la diferencia proporcional. Esto te permite escalar el uso de nuestros agentes conversacionales según las necesidades de tu negocio.",
    },
    {
      question: "¿Cómo ayudan los agentes conversacionales a mi negocio?",
      answer:
        "Nuestros agentes conversacionales automatizan conversaciones, agendan citas y ayudan a cerrar más ventas. Responden y atienden automáticamente el 100% de tus leads sin perder oportunidades, reducen costos y aumentan conversiones sin necesidad de contratar más personal. Disponibles 24/7, ofrecen respuesta inmediata y mantienen una calidad consistente en todas las interacciones.",
    },
    {
      question: "¿Para qué industrias está diseñado COVOX AI?",
      answer:
        "COVOX AI está optimizado para múltiples sectores, incluyendo inmobiliario (calificación de leads y agenda de visitas), automotriz (consultas y citas en concesionarios), logística y transporte (automatización de novedades), cobranzas (gestiones de cobro automatizadas) y ventas en general (seguimiento de leads y aumento de cierres). Nuestros agentes se adaptan a las necesidades específicas de cada industria.",
    },
  ]

  return (
    <section id="faq" className="w-full bg-transparent px-4 pb-14">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Preguntas Frecuentes (FAQ)
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg bg-white/5 backdrop-blur-sm"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-[#77FF00]">
                  {item.question}
                </span>
                <span className="ml-6 shrink-0">
                  {activeIndex === index ? (
                    <IconMinus className="size-6 text-green-400" />
                  ) : (
                    <IconPlus className="size-6 text-green-400" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-300">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
