import type { Metadata } from "next";
import { Geist_Mono, Pirata_One, Barlow } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/sections/header";
import { cn } from "@/lib/utils";

const pirataOne = Pirata_One({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caps My Luck - Acá en Caps My Luck, vendemos gorras",
  description:
    "En Caps My Luck, nos dedicamos a la venta de gorras de alta calidad y estilo único. Explora nuestra colección y encuentra la gorra perfecta para ti. Entregas en Rafael Lara Grajales, Puebla",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={cn(
        "h-full",
        "antialiased",
        geistMono.variable,
        "font-sans",
        barlow.variable,
        pirataOne.variable,
      )}>
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
