import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 32,
          fontFamily: "monospace",
          fontWeight: 700,
          color: "#00ff00",
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
