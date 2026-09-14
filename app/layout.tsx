import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LgpdConsentBanner from "@/components/LgpdConsentBanner";
import { SITE_CONFIG, getLegalServiceSchema } from "@/lib/site-data";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: "Rodrigues & Rodrigues Advocacia | Escritório de Advocacia em Indaiatuba",
    template: "%s | Rodrigues & Rodrigues Advocacia",
  },
  description:
    "Rodrigues & Rodrigues Advocacia em Indaiatuba - SP. Assessoria jurídica e empresarial com orientação estratégica, clareza e segurança para decisões jurídicas.",
  keywords: [
    "escritório de advocacia em Indaiatuba",
    "advogado em Indaiatuba",
    "advocacia em Indaiatuba",
    "assessoria jurídica em Indaiatuba",
    "assessoria jurídica e empresarial em Indaiatuba",
    "direito empresarial Indaiatuba",
    "Rodrigues e Rodrigues Advocacia",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rodrigues & Rodrigues Advocacia | Escritório de Advocacia em Indaiatuba",
    description:
      "Assessoria jurídica e empresarial em Indaiatuba/SP. Rigor técnico, discrição e segurança negocial.",
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigues & Rodrigues Advocacia | Escritório de Advocacia em Indaiatuba",
    description:
      "Assessoria jurídica e empresarial em Indaiatuba/SP. Rigor técnico, discrição e segurança negocial.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const legalServiceJsonLd = getLegalServiceSchema();

  return (
    <html lang="pt-BR" className="bg-[#000000] text-[#FFFFFF]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col justify-between bg-[#000000] text-[#FFFFFF] antialiased selection:bg-[#D4AF37] selection:text-[#000000]">
        {/* Skip to Main Content Link for WCAG 2.2 AA Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#D4AF37] text-[#000000] px-4 py-2 text-xs font-semibold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
        >
          Pular para o conteúdo principal
        </a>

        <Navbar />

        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>

        <Footer />
        <WhatsAppFloat />
        <LgpdConsentBanner />
      </body>
    </html>
  );
}
