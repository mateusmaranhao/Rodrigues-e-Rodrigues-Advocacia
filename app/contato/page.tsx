import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contato | Rodrigues & Rodrigues Advocacia | Indaiatuba",
  description:
    "Entre em contato com a Rodrigues & Rodrigues Advocacia em Indaiatuba - SP pelo WhatsApp ou visite nosso escritório na Cidade Nova I.",
  alternates: {
    canonical: "/contato/",
  },
  openGraph: {
    title: "Contato | Rodrigues & Rodrigues Advocacia | Indaiatuba",
    description:
      "Atendimento presencial em Indaiatuba/SP ou orientação remota via WhatsApp (19) 99194-3728.",
    url: `${SITE_CONFIG.siteUrl}/contato/`,
  },
};

export default function ContatoPage() {
  return (
    <div className="bg-[#000000] text-[#E5E5E5] min-h-screen">
      {/* Header com Breadcrumbs */}
      <section className="py-20 border-b border-[#222222] bg-[#040404]">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Contato", href: "/contato/" }]} />
          <div className="mt-6 text-left">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-3">
              Atendimento Institucional
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight mb-6">
              Entre em contato com a Rodrigues & Rodrigues Advocacia
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#CCCCCC] font-light max-w-2xl">
              Se você busca orientação jurídica em Indaiatuba, entre em contato para apresentar sua necessidade com discrição e sigilo profissional.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal de Contato */}
      <section className="py-20 border-b border-[#222222]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Informações Oficiais e Presença Local */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-[#FFFFFF] mb-4">
                Informações do Escritório
              </h2>
              <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed font-light">
                Dispomos de infraestrutura para reuniões presenciais com agendamento prévio ou orientação remota imediata através de canais digitais seguros.
              </p>
            </div>

            <div className="border-t border-[#222222] pt-6 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#D4AF37] block font-medium mb-1">
                  Telefone e WhatsApp Oficial
                </span>
                <span className="font-serif text-xl text-[#FFFFFF] block">
                  {SITE_CONFIG.contact.phoneDisplay}
                </span>
                <span className="text-[11px] text-[#888888] font-light mt-0.5 block">
                  Atendimento de Segunda a Sexta, das 09:00 às 18:00
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#D4AF37] block font-medium mb-1">
                  Sede Presencial
                </span>
                <address className="not-italic text-xs text-[#E5E5E5] space-y-1 font-light">
                  <p className="text-[#FFFFFF] font-medium">{SITE_CONFIG.location.street}</p>
                  <p>{SITE_CONFIG.location.neighborhood}</p>
                  <p>
                    {SITE_CONFIG.location.city} - {SITE_CONFIG.location.state}, CEP {SITE_CONFIG.location.postalCode}
                  </p>
                  <p className="text-[#888888]">{SITE_CONFIG.location.country}</p>
                </address>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#D4AF37] block font-medium mb-1">
                  Canais Oficiais
                </span>
                <a
                  href={SITE_CONFIG.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#E5E5E5] hover:text-[#D4AF37] underline decoration-[#444444] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Página Institucional no Facebook</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* Ações Rápidas */}
            <div className="border border-[#222222] p-6 bg-[#050505] space-y-4">
              <a
                href={SITE_CONFIG.contact.whatsappUrlWithMessage(
                  "Olá, gostaria de falar diretamente com a Rodrigues & Rodrigues Advocacia."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-6 py-3.5 font-medium hover:bg-[#FFFFFF] transition-colors"
              >
                Falar pelo WhatsApp
              </a>

              <a
                href={SITE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs uppercase tracking-[0.16em] border border-[#333333] text-[#FFFFFF] px-6 py-3 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
              >
                Como chegar (Google Maps)
              </a>
            </div>
          </div>

          {/* Formulário Institucional com Validação & LGPD */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-1">
                Formulário de Contato
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-[#FFFFFF]">
                Envie uma Mensagem ao Escritório
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
