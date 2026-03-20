import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Morpheus - AI Agent Control From Your Phone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_SRC = "data:image/png;base64,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";

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
        {/* Logo */}
        <img
          src={LOGO_SRC}
          width={160}
          height={160}
          style={{ marginBottom: 20 }}
        />
        <div
          style={{
            fontSize: 72,
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
            marginTop: 16,
            display: "flex",
          }}
        >
          AI Agent Control From Your Phone
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#00cc00",
            marginTop: 32,
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
