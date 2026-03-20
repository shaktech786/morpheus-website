import type { Metadata } from "next";
import DownloadContent from "./DownloadContent";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Morpheus for macOS, Windows, Linux, iOS, and Android. Control any machine from your phone.",
};

export default function DownloadPage() {
  return <DownloadContent />;
}
