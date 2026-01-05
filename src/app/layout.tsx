import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://acessorios-premium.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Acessórios Premium | Relógios, Óculos, Bolsas e Joias",
    template: "%s | Acessórios Premium",
  },
  description:
    "Acessórios premium selecionados para quem valoriza presença. Compre pelo WhatsApp com atendimento humanizado e entrega rápida.",
  keywords: [
    "acessórios premium",
    "relógios",
    "óculos de sol",
    "bolsas",
    "joias",
    "luxo acessível",
    "comprar pelo WhatsApp",
  ],
  authors: [{ name: "Acessórios Premium" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Acessórios Premium | Relógios, Óculos, Bolsas e Joias",
    description:
      "Catálogo premium de relógios, óculos, bolsas e joias. Atendimento rápido pelo WhatsApp.",
    images: [
      {
        url: "/acessorios-premium/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Coleção premium de acessórios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acessórios Premium | Relógios, Óculos, Bolsas e Joias",
    description:
      "Catálogo premium de relógios, óculos, bolsas e joias. Atendimento rápido pelo WhatsApp.",
    images: ["/acessorios-premium/hero.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  category: "ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} font-body min-h-screen bg-background text-foreground antialiased`}
      >
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-atelier" />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
