import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Define fallback transporter options
const createTransporter = () => {
  // Primary transporter - Gmail
  if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
    console.log("Using Gmail transporter")
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })
  }

  // Fallback transporter - SMTP configuration (you can use a different provider)
  if (process.env.SMTP_HOST && process.env.SMTP_PORT) {
    console.log("Using fallback SMTP transporter")
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASSWORD || "",
      },
    })
  }

  // Emergency fallback - ethereal.email (for testing)
  console.log("Using emergency ethereal.email transporter")
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "ethereal.user@ethereal.email", // Replace with your test account or use nodemailer.createTestAccount()
      pass: "ethereal.password",
    },
  })
}

export async function POST(request: NextRequest) {
  // Create a transporter on demand (to handle changes in environment variables)
  const transporter = createTransporter()

  try {
    // Get form data
    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const reason = formData.get("reason") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !phone || !reason || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 },
      )
    }

    // Map reason value to readable text
    let reasonText = ""
    switch (reason) {
      case "demo":
        reasonText = "Solicitar Demo"
        break
      case "support":
        reasonText = "Soporte Técnico"
        break
      case "sales":
        reasonText = "Consultas Comerciales"
        break
      case "work":
        reasonText = "Trabaja con Nosotros"
        break
      case "other":
        reasonText = "Otro"
        break
      default:
        reasonText = reason
    }

    // Construct email
    const mailOptions = {
      from: process.env.EMAIL_USER || "noreply@covox.ai",
      to: process.env.DESTINATION_EMAIL || "camilo@zione.shop",
      subject: `COVOX AI - Formulario de Contacto - ${reasonText}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo electrónico:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Motivo:</strong> ${reasonText}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Try to send email
    try {
      const info = await transporter.sendMail(mailOptions)
      console.log("Mensaje enviado correctamente:", info.messageId)

      // Return success response
      return NextResponse.json({
        success: true,
        messageId: info.messageId,
      })
    } catch (emailError) {
      console.error(
        "Error al enviar el correo a través del transportador principal:",
        emailError,
      )

      // Try with an alternative method if possible
      // Store transporter type in a variable we can check
      const transporterType = process.env.EMAIL_USER
        ? "gmail"
        : process.env.SMTP_HOST
          ? "smtp"
          : "ethereal"
      if (transporterType === "gmail") {
        console.log("Intentando método alternativo de envío...")
        try {
          // Create a backup transporter
          const backupTransporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
              user: "ethereal.user@ethereal.email",
              pass: "ethereal.password",
            },
          })

          const backupInfo = await backupTransporter.sendMail(mailOptions)
          console.log(
            "Mensaje enviado correctamente con método alternativo:",
            backupInfo.messageId,
          )

          return NextResponse.json({
            success: true,
            messageId: backupInfo.messageId,
            note: "Enviado a través de un servicio alternativo",
          })
        } catch (backupError) {
          console.error("Error en el método alternativo:", backupError)
          throw new Error("Falló el envío a través de múltiples métodos")
        }
      } else {
        throw emailError
      }
    }
  } catch (error) {
    console.error("Error al procesar la solicitud:", error)

    // Log detailed error information
    if (error instanceof Error) {
      console.error({
        message: error.message,
        stack: error.stack,
        name: error.name,
      })
    }

    return NextResponse.json(
      {
        error:
          "Error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.",
        details: error instanceof Error ? error.message : "Error desconocido",
        time: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
