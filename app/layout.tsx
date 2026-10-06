import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pakeezah Atelier — Architecture & Interiors",
  description: "Architecture, interiors, construction and turnkey work from Pakeezah Atelier, Jamshedpur. A concept by Copywrk.",
  robots: { index: false, follow: false },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
