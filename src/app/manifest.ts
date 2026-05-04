import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Morpheus",
    short_name: "Morpheus",
    description:
      "Control any machine from your phone. Voice commands, encrypted pairing, and remote access.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#00ff88",
  };
}
