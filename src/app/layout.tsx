import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "QR Code Generator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
