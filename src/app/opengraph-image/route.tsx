import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "white",
            background: "#111",
            width: "100%",
            height: "100%",
            padding: "50px 200px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div style={{ fontSize: 60, fontWeight: "bold", color: "#77FF00" }}>
              COVOX AI
            </div>
            <div style={{ fontSize: 30 }}>
              AI-powered voice solutions for agriculture
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
