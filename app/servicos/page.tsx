import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Serviços Jurídicos | Rodrigues & Rodrigues Advocacia",
  description:
    "Conheça os serviços de orientação jurídica e empresarial da Rodrigues & Rodrigues Advocacia em Indaiatuba - SP.",
  alternates: {
    canonical: "/servicos/",
  },
  openGraph: {
    title: "Serviços Jurídicos | Rodrigues & Rodrigues Advocacia",
    description:
      "Assessoria jurídica e empresarial, direito civil e consultoria preventiva em Indaiatuba/SP.",
    url: `${SITE_CONFIG.siteUrl}/servicos/`,
  },
};

export default function ServicosPage() {
  return (
    <div className="bg-[#000000] text-[#E5E5E5] min-h-screen">
      {/* Header com Breadcrumbs */}
      <section className="py-20 border-b border-[#222222] bg-[#040404]">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Serviços", href: "/servicos/" }]} />
          <div className="mt-6 text-left">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-3">
              Atuação Técnica
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight mb-6">
              Serviços Jurídicos em Indaiatuba
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#CCCCCC] font-light max-w-2xl">
              Conheça as soluções de orientação jurídica e empresarial oferecidas pela Rodrigues & Rodrigues Advocacia.
            </p>
          </div>
        </div>
      </section>

      {/* Lista Editorial de Serviços */}
      <section className="py-20 border-b border-[#222222]">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {/* Serviço 1: Destaque Central - Assessoria Jurídica e Empresarial */}
          <article className="border border-[#D4AF37] p-8 sm:p-12 bg-[#060606] relative shadow-2xl">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] font-medium block mb-3">
              Prática Central Confirmada
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF] mb-4">
              Assessoria Jurídica e Empresarial
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#CCCCCC] font-light mb-6 max-w-3xl">
              Orientação jurídica contínua e preventiva para empresas de micro, pequeno e médio porte em Indaiatuba e na Região Metropolitana de Campinas. Auditoria de instrumentos contratuais, prevenção de litígios trabalhistas, governança societária e apoio qualificado à tomada de decisões executivas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#222222] text-xs text-[#E5E5E5] font-light mb-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                <span>Gestão e revisão estratégica de contratos mercantis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                <span>Auditoria e prevenção de passivos trabalhistas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                <span>Estruturação societária e acordos de sócios</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                <span>Cobrança jurídica e recuperação de créditos</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/servicos/assessoria-juridica-e-empresarial/"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-6 py-3 font-medium hover:bg-[#FFFFFF] transition-colors"
              >
                <span>Ver página dedicada da Assessoria Empresarial</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Serviço 2: Direito Civil, Imobiliário e Contratos */}
          <article className="border border-[#222222] p-8 sm:p-10 bg-[#040404]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-medium block mb-2">
              Frente de Atuação
            </span>
            <h2 className="font-serif text-2xl text-[#FFFFFF] mb-4">
              Direito Civil, Imobiliário e Obrigações
            </h2>
            <p className="text-sm leading-relaxed text-[#CCCCCC] font-light mb-6 max-w-3xl">
              Estruturação e revisão técnica de instrumentos particulares e públicos, análise de riscos em transações e negócios imobiliários, dissoluções patrimoniais e defesa em demandas indenizatórias e de responsabilidade civil.
            </p>
            <ul className="text-xs space-y-2 text-[#BBBBBB] font-light list-disc list-inside mb-8">
              <li>Elaboração, análise e negociação de contratos cíveis e imobiliários;</li>
              <li>Ações para cumprimento de obrigações e recuperação de créditos;</li>
              <li>Consultoria em contingências patrimoniais e de responsabilidade civil.</li>
            </ul>
            <div className="pt-2">
              <Link
                href="/servicos/direito-civil-imobiliario-e-obrigacoes/"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#D4AF37] hover:text-[#FFFFFF] transition-colors"
              >
                <span>Ver página dedicada da Área Cível e Imobiliária</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Serviço 3: Consultoria Jurídica Preventiva */}
          <article className="border border-[#222222] p-8 sm:p-10 bg-[#040404]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-medium block mb-2">
              Frente de Atuação
            </span>
            <h2 className="font-serif text-2xl text-[#FFFFFF] mb-4">
              Consultoria Jurídica Preventiva
            </h2>
            <p className="text-sm leading-relaxed text-[#CCCCCC] font-light mb-6 max-w-3xl">
              Análise antecipada de cenários antes da consolidação de compromissos econômicos ou contratuais, reduzindo significativamente custos decorrentes de litígios posteriores e oferecendo previsibilidade ao cliente.
            </p>
            <ul className="text-xs space-y-2 text-[#BBBBBB] font-light list-disc list-inside mb-8">
              <li>Pareceres jurídicos fundamentados para suporte à decisão;</li>
              <li>Mapeamento prévio de vulnerabilidades operacionais;</li>
              <li>Acompanhamento jurídico em negociações extrajudiciais sensíveis.</li>
            </ul>
            <div className="pt-2">
              <Link
                href="/servicos/consultoria-juridica-preventiva/"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#D4AF37] hover:text-[#FFFFFF] transition-colors"
              >
                <span>Ver página dedicada da Consultoria Preventiva</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Direto */}
      <section className="py-20 text-center bg-[#050505]">
        <div className="max-w-xl mx-auto px-6 space-y-5">
          <h2 className="font-serif text-2xl text-[#FFFFFF]">
            Deseja avaliar uma questão específica?
          </h2>
          <p className="text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed">
            Entre em contato direto pelo WhatsApp institucional do escritório para agendamento de uma consulta inicial.
          </p>
          <div className="pt-2">
            <a
              href={SITE_CONFIG.contact.whatsappUrlWithMessage(
                "Olá, gostaria de conversar sobre os serviços jurídicos do escritório."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-8 py-3.5 font-medium hover:bg-[#FFFFFF] transition-colors"
            >
              Falar pelo WhatsApp (19) 99194-3728
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
