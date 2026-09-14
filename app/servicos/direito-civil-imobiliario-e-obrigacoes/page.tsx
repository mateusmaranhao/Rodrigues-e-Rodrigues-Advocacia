import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG, getFaqSchema } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Direito Civil, Imobiliário e Obrigações | Rodrigues & Rodrigues",
  description:
    "Atuação técnica na elaboração de contratos, negócios imobiliários, dissoluções patrimoniais e responsabilidade civil em Indaiatuba.",
  alternates: {
    canonical: "/servicos/direito-civil-imobiliario-e-obrigacoes/",
  },
  openGraph: {
    title: "Direito Civil, Imobiliário e Obrigações",
    description: "Estruturação de instrumentos e análise de riscos patrimoniais em Indaiatuba e região.",
    url: `${SITE_CONFIG.siteUrl}/servicos/direito-civil-imobiliario-e-obrigacoes/`,
  },
};

const pageFaqs = [
  {
    question: "O escritório elabora contratos de compra e venda de imóveis?",
    answer: "Sim. Realizamos a elaboração e revisão minuciosa de instrumentos particulares de compra e venda (os 'contratos de gaveta'), promessas de compra e venda, locações, além do acompanhamento em escrituras públicas para garantir a segurança jurídica da transação.",
  },
  {
    question: "Como funciona a análise de riscos em transações imobiliárias?",
    answer: "Trata-se de um levantamento prévio e detalhado (due diligence) sobre a situação do imóvel e dos vendedores, identificando eventuais pendências financeiras, disputas judiciais, ou restrições que possam comprometer o negócio e causar prejuízos futuros.",
  },
  {
    question: "Quais demandas de responsabilidade civil são atendidas?",
    answer: "Atuamos em defesas e proposituras de ações indenizatórias decorrentes de danos morais, materiais e estéticos, inadimplementos contratuais e outras situações que demandem recomposição de prejuízos no âmbito das relações civis.",
  },
  {
    question: "O escritório faz cobrança de dívidas não pagas?",
    answer: "Sim. Estruturamos processos de cobrança extrajudicial e judicial para a recuperação de créditos, execução de títulos executivos (cheques, notas promissórias, contratos assinados) e cumprimento de obrigações assumidas e não honradas.",
  },
];

export default function DireitoCivilPage() {
  return (
    <div className="bg-[#000000] text-[#E5E5E5] min-h-screen">
      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(pageFaqs)) }}
      />

      {/* Header com Breadcrumbs */}
      <section className="py-20 border-b border-[#222222] bg-[#040404]">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Serviços", href: "/servicos/" },
              { label: "Direito Civil e Imobiliário", href: "/servicos/direito-civil-imobiliario-e-obrigacoes/" },
            ]}
          />
          <div className="mt-6 text-left">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-3">
              Frente de Atuação
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight mb-6">
              Direito Civil, Imobiliário e Obrigações
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#CCCCCC] font-light max-w-2xl">
              Estruturação técnica de instrumentos particulares, análise de riscos em transações imobiliárias e atuação estratégica em responsabilidade civil.
            </p>
          </div>
        </div>
      </section>

      {/* O que é / Escopo */}
      <section className="py-20 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#FFFFFF] mb-6">
            O Escopo de Atuação
          </h2>
          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#CCCCCC] font-light">
            <p>
              As relações privadas, sejam elas firmadas entre indivíduos ou empresas, demandam um arcabouço jurídico robusto para mitigar riscos, prevenir prejuízos patrimoniais e garantir que as obrigações assumidas sejam de fato cumpridas.
            </p>
            <p>
              O departamento de Direito Civil e Imobiliário da Rodrigues & Rodrigues Advocacia dedica-se à formatação segura de negócios, oferecendo retaguarda técnica para a consolidação de acordos, compra, venda, locação de propriedades e reestruturações patrimoniais.
            </p>
            <p>
              Atuamos também no âmbito contencioso (judicial), defendendo os interesses de nossos clientes em litígios complexos, ações de indenização, cobranças e dissoluções.
            </p>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 border-b border-[#222222] bg-[#020202]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#FFFFFF] mb-12 text-center">
            Pilares da Área
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <article className="border border-[#222222] p-8 bg-[#050505]">
              <h3 className="font-serif text-xl text-[#FFFFFF] mb-3">Contratos Cíveis e Imobiliários</h3>
              <p className="text-sm leading-relaxed text-[#CCCCCC] font-light">
                Elaboração, análise minuciosa e negociação de contratos de locação comercial e residencial, promessa de compra e venda, prestação de serviços, parcerias e instrumentos atípicos, garantindo a proteção das cláusulas e a segurança das partes.
              </p>
            </article>

            <article className="border border-[#222222] p-8 bg-[#050505]">
              <h3 className="font-serif text-xl text-[#FFFFFF] mb-3">Auditoria Imobiliária</h3>
              <p className="text-sm leading-relaxed text-[#CCCCCC] font-light">
                Levantamento e avaliação de certidões, matrículas e histórico de vendedores para identificar eventuais riscos na aquisição de bens imóveis urbanos ou rurais, estruturando o negócio com a máxima segurança técnica.
              </p>
            </article>

            <article className="border border-[#222222] p-8 bg-[#050505]">
              <h3 className="font-serif text-xl text-[#FFFFFF] mb-3">Obrigações e Recuperação de Crédito</h3>
              <p className="text-sm leading-relaxed text-[#CCCCCC] font-light">
                Medidas administrativas e judiciais para forçar o cumprimento de obrigações firmadas em contratos e a recuperação de créditos inadimplidos, incluindo execuções de títulos extrajudiciais.
              </p>
            </article>

            <article className="border border-[#222222] p-8 bg-[#050505]">
              <h3 className="font-serif text-xl text-[#FFFFFF] mb-3">Responsabilidade Civil</h3>
              <p className="text-sm leading-relaxed text-[#CCCCCC] font-light">
                Atuação em demandas judiciais e extrajudiciais envolvendo pedidos de indenização por danos materiais, morais e estéticos, oriundos de ilícitos civis, falhas na prestação de serviços e acidentes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-[#222222]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#FFFFFF] mb-10 text-center">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {pageFaqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-[#222222] bg-[#050505] [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6">
                  <h3 className="font-medium text-[#E5E5E5] text-sm sm:text-base pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-[#D4AF37] transition duration-300 group-open:-rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-[#CCCCCC] font-light leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Direto */}
      <section className="py-20 text-center bg-[#050505]">
        <div className="max-w-xl mx-auto px-6 space-y-5">
          <h2 className="font-serif text-2xl text-[#FFFFFF]">
            Precisa de auxílio em uma questão civil ou imobiliária?
          </h2>
          <p className="text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed">
            Nossa equipe está preparada para analisar seus contratos e demandas patrimoniais.
          </p>
          <div className="pt-2">
            <a
              href={SITE_CONFIG.contact.whatsappUrlWithMessage(
                "Olá, gostaria de consultar o escritório sobre uma demanda na área Cível/Imobiliária."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-8 py-3.5 font-medium hover:bg-[#FFFFFF] transition-colors"
            >
              Iniciar Conversa no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
