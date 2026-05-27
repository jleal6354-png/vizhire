import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VizHire | Human-first video hiring",
  description:
    "VizHire helps candidates go beyond the resume and helps employers discover better-fit talent faster through authentic video profiles, references, and recommendations."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4d20f5"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
