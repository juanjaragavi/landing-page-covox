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
        "No, es fácil de configurar. Nuestra plataforma está diseñada para ser intuitiva y fácil de usar, incluso para personas sin experiencia técnica. Ofrecemos guías paso a paso y soporte para ayudarte en el proceso.",
    },
    {
      question: "¿Funciona con mi CRM?",
      answer:
        "Sí, integración sencilla. COVOX AI se integra con la mayoría de los CRM populares como Salesforce, HubSpot, Zoho, y muchos más. Nuestras APIs y conectores facilitan la sincronización de datos entre sistemas.",
    },
    {
      question: "¿En qué idiomas opera?",
      answer:
        "Soporta varios idiomas. Actualmente, nuestra plataforma soporta español, inglés, portugués, francés y alemán, con planes para añadir más idiomas en el futuro cercano.",
    },
    {
      question: "¿Cómo funciona la prueba gratuita?",
      answer:
        "Ofrecemos una prueba gratuita de 14 días con acceso completo a todas las funcionalidades. No se requiere tarjeta de crédito y puedes cancelar en cualquier momento sin compromiso.",
    },
    {
      question: "¿Qué tipo de soporte ofrecen?",
      answer:
        "Dependiendo del plan, ofrecemos soporte por email, chat y soporte técnico personalizado. Los planes Business y Enterprise incluyen soporte prioritario y acceso a un equipo técnico dedicado.",
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer:
        "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se reflejarán en tu próxima facturación, y si actualizas a un plan superior, solo pagarás la diferencia proporcional.",
    },
  ]

  return (
    <section id="faq" className="w-full bg-transparent px-4 py-20">
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
                <span className="text-lg font-semibold text-white">
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
