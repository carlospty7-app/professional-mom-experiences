import type { Metadata } from "next";
import { Montserrat, Inter, Caveat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional Mom Experiences | Experiencias Corporativas Día de la Madre",
  description:
    "Experiencias corporativas para reconocer a las madres profesionales de tu organización con herramientas de productividad, autoimagen, inteligencia artificial y bienestar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
