import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { Intro } from "@/components/Intro";
import { siteContent } from "@/lib/site-content";
import "./globals.css";

// Yapari (their display face) and Sneak (their text face) are both commercial.
// Archivo is the closest free grotesque — same wide, squared-off bones at heavy
// weights — and its variable width axis lets the display type stretch the way
// Yapari does. Inter carries the body copy.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["wdth"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    url: siteContent.meta.url,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <Intro />
        {children}
      </body>
    </html>
  );
}
