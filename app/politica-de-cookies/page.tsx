import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Política de Cookies | Rodrigues & Rodrigues Advocacia",
  description:
    "Informações sobre a utilização exclusiva de cookies técnicos e essenciais no website institucional da Rodrigues & Rodrigues Advocacia.",
  alternates: {
    canonical: "/politica-de-cookies/",
  },
  openGraph: {
    title: "Política de Cookies | Rodrigues & Rodrigues Advocacia",
    description:
      "Portal institucional sem cookies invasivos ou rastreadores de publicidade de terceiros.",
    url: `${SITE_CONFIG.siteUrl}/politica-de-cookies/`,
  },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="bg-[#000000] text-[#E5E5E5] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <Breadcrumbs items={[{ label: "Política de Cookies", href: "/politica-de-cookies/" }]} />

        <header className="border-b border-[#222222] pb-6 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
            Privacidade Técnica
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF]">
            Declaração sobre Uso de Cookies
          </h1>
          <p className="text-xs text-[#888888] font-light">
            Transparência sobre mecanismos de armazenamento e integridade de navegação.
          </p>
        </header>

        <article className="space-y-6 text-xs sm:text-sm leading-relaxed text-[#CCCCCC] font-light">
          <section className="space-y-2">
            <h2 className="font-serif text-base text-[#FFFFFF]">
              1. Ausência de Rastreamento Comportamental
            </h2>
            <p>
              Em observância aos princípios da minimização da coleta e da boa-fé instituídos pela Lei Geral de Proteção de Dados (artigo 6º da Lei 13.709/2018), informamos expressamente que o sítio eletrônico da <strong>Rodrigues & Rodrigues Advocacia NÃO utiliza cookies de terceiros para publicidade direcionada, retargeting ou perfis comportamentais de consumo</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base text-[#FFFFFF]">
              2. Cookies Estritamente Essenciais
            </h2>
            <p>
              O portal poderá fazer uso unicamente de armazenamento local técnico (como o registro de ciência do aviso de privacidade) e parâmetros essenciais de sessão exigidos para a renderização íntegra da página, balanceamento de tráfego e prevenção a fraudes eletrônicas. Tais recursos não identificam individualmente o usuário perante terceiros.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base text-[#FFFFFF]">
              3. Gestão pelo Navegador
            </h2>
            <p>
              O usuário pode a qualquer momento configurar as preferências de seu navegador de internet para recusar ou excluir arquivos temporários de navegação, sem prejuízo da leitura das informações institucionais deste portal.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
