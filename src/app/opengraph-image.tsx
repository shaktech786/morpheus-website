import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Morpheus - AI Agent Control From Your Phone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#00ff00",
            textShadow:
              "0 0 20px rgba(0,255,0,0.5), 0 0 40px rgba(0,255,0,0.2)",
            display: "flex",
          }}
        >
          morpheus
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            marginTop: 20,
            display: "flex",
          }}
        >
          AI Agent Control From Your Phone
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#00cc00",
            marginTop: 40,
            display: "flex",
            gap: 24,
          }}
        >
          <span>Voice Commands</span>
          <span style={{ color: "#333" }}>|</span>
          <span>E2E Encrypted</span>
          <span style={{ color: "#333" }}>|</span>
          <span>Remote Access</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
