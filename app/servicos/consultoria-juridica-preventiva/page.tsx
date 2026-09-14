import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG, getFaqSchema } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Consultoria Jurídica Preventiva | Rodrigues & Rodrigues",
  description:
    "Análise antecipada de cenários e mitigação de riscos para empresários e investidores. Consultoria preventiva em Indaiatuba.",
  alternates: {
    canonical: "/servicos/consultoria-juridica-preventiva/",
  },
  openGraph: {
    title: "Consultoria Jurídica Preventiva",
    description: "Redução de passivos judiciais através de orientações e pareceres fundamentados.",
    url: `${SITE_CONFIG.siteUrl}/servicos/consultoria-juridica-preventiva/`,
  },
};

const pageFaqs = [
  {
    question: "O que é, exatamente, a consultoria preventiva?",
    answer: "A consultoria preventiva é a atuação do advogado antes que o problema se torne um processo judicial ou um prejuízo financeiro. Envolve a análise de contratos antes da assinatura, a orientação sobre demissões complexas e a emissão de pareceres sobre a legalidade de um novo modelo de negócios.",
  },
  {
    question: "É mais caro investir em prevenção ou pagar para resolver um processo judicial?",
    answer: "Estatisticamente e economicamente, o litígio (processo) sempre será mais custoso que a prevenção. Um erro contratual ou trabalhista pode gerar condenações que inviabilizam a operação de uma empresa, enquanto a análise prévia costuma representar uma fração mínima do valor envolvido no negócio.",
  },
  {
    question: "A consultoria pode ser contratada para uma demanda isolada?",
    answer: "Sim. Oferecemos tanto modelos de assessoria contínua (com mensalidade) quanto consultorias pontuais para projetos específicos, como a análise de um contrato importante ou o acompanhamento de uma negociação de compra e venda.",
  },
  {
    question: "Os pareceres do escritório têm validade legal?",
    answer: "Os pareceres são documentos técnicos fundamentados na legislação, na doutrina e na jurisprudência atualizada (decisões dos tribunais), servindo como base sólida para amparar a tomada de decisão da sua empresa ou de seus negócios pessoais.",
  },
];

export default function ConsultoriaPreventivaPage() {
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
              { label: "Consultoria Preventiva", href: "/servicos/consultoria-juridica-preventiva/" },
            ]}
          />
          <div className="mt-6 text-left">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-3">
              Frente de Atuação
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight mb-6">
              Consultoria Jurídica Preventiva
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#CCCCCC] font-light max-w-2xl">
              Análise estratégica e antecipação de cenários para garantir segurança e redução drástica de passivos antes da consolidação de qualquer negócio.
            </p>
          </div>
        </div>
      </section>

      {/* O que é / Benefícios */}
      <section className="py-20 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#FFFFFF] mb-6">
            A Inteligência Preventiva
          </h2>
          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#CCCCCC] font-light">
            <p>
              A velha máxima de que "é melhor prevenir do que remediar" encontra no Direito a sua mais pura expressão econômica. Aguardar a citação em um processo judicial para acionar um advogado é uma postura reativa, que delega a um juiz o futuro do seu patrimônio e submete sua empresa a custos não provisionados.
            </p>
            <p>
              A <strong>Consultoria Jurídica Preventiva</strong> inverte essa lógica. Inserindo a análise técnica no momento da estruturação do negócio, na negociação com o fornecedor ou antes da dispensa de um executivo, blindamos as operações contra contingências futuras.
            </p>
            <p>
              Nosso objetivo é fornecer previsibilidade jurídica, permitindo que líderes empresariais e investidores tomem decisões baseadas em fatos, riscos calculados e amparo contratual robusto.
            </p>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 border-b border-[#222222] bg-[#020202]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-[#FFFFFF] mb-12 text-center">
            Como Atuamos na Prevenção
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <article className="border border-[#222222] p-8 bg-[#050505]">
              <h3 className="font-serif text-xl text-[#FFFFFF] mb-3">Pareceres Estratégicos</h3>
              <p className="text-sm leading-relaxed text-[#CCCCCC] font-light">
                Elaboração de documentos técnicos que analisam a legalidade, os riscos e as alternativas para projetos corporativos, arranjos societários e planejamentos tributários ou patrimoniais, orientando a execução.
              </p>
            </article>

            <article className="border border-[#222222] p-8 bg-[#050505]">
              <h3 className="font-serif text-xl text-[#FFFFFF] mb-3">Participação em Negociações</h3>
              <p className="text-sm leading-relaxed text-[#CCCCCC] font-light">
                Acompanhamento direto em reuniões com fornecedores de grande porte, eventuais sócios ou terceiros, assegurando que as tratativas verbais se traduzam adequadamente nos instrumentos escritos.
              </p>
            </article>

            <article className="border border-[#222222] p-8 bg-[#050505]">
              <h3 className="font-serif text-xl text-[#FFFFFF] mb-3">Auditoria Prévia</h3>
              <p className="text-sm leading-relaxed text-[#CCCCCC] font-light">
                Levantamento e saneamento de passivos trabalhistas, fiscais e contratuais dentro da própria operação do cliente antes que se tornem demandas judiciais ou multas governamentais.
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
            Proteja suas decisões de negócios
          </h2>
          <p className="text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed">
            Consulte nossos especialistas antes de assumir compromissos e evite surpresas.
          </p>
          <div className="pt-2">
            <a
              href={SITE_CONFIG.contact.whatsappUrlWithMessage(
                "Olá, tenho interesse em entender como a Consultoria Jurídica Preventiva pode ajudar meus negócios."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-8 py-3.5 font-medium hover:bg-[#FFFFFF] transition-colors"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
