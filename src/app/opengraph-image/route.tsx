import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "COVOX AI - Agentes Conversacionales de IA Hiper Realistas"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  try {
    const logoUrl = new URL(
      "../../public/images/logo-header.webp",
      import.meta.url,
    )
    const logoData = await fetch(logoUrl).then((res) => res.arrayBuffer())
    const logoBase64 = Buffer.from(logoData).toString("base64")
    const logoDataUrl = `data:image/webp;base64,${logoBase64}`

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 40,
            color: "white",
            background: "linear-gradient(to bottom, #111827, #1f2937)",
            width: "100%",
            height: "100%",
            padding: "50px 80px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Background grid pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "radial-gradient(circle, rgba(119, 255, 0, 0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              opacity: 0.3,
            }}
          />

          {/* Logo */}
          <div style={{ marginBottom: 40 }}>
            <img
              src={logoDataUrl}
              width={240}
              height={64}
              alt="COVOX AI Logo"
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Main heading */}
          <div
            style={{
              fontSize: 60,
              fontWeight: "bold",
              color: "#77FF00",
              marginBottom: 20,
              textShadow: "0 2px 10px rgba(119, 255, 0, 0.3)",
            }}
          >
            Agentes Conversacionales de IA
          </div>

          {/* Subheading */}
          <div style={{ fontSize: 32, marginBottom: 40, maxWidth: "80%" }}>
            Automatiza conversaciones, agenda citas y cierra más ventas con IA
          </div>

          {/* Features */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 20,
            }}
          >
            <Feature icon="🤖" text="Disponible 24/7" />
            <Feature icon="💬" text="100% de tus leads" />
            <Feature icon="💰" text="Reduce costos" />
          </div>

          {/* URL */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            covox.ai
          </div>
        </div>
      ),
      {
        ...size,
      },
    )
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}

function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: "12px",
        padding: "20px",
        width: "30%",
      }}
    >
      <div style={{ fontSize: 40 }}>{icon}</div>
      <div style={{ fontSize: 24 }}>{text}</div>
    </div>
  )
}
