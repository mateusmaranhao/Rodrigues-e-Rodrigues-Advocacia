import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sobre a Rodrigues & Rodrigues Advocacia | Indaiatuba - SP",
  description:
    "Conheça a Rodrigues & Rodrigues Advocacia, escritório de advocacia em Indaiatuba - SP, com atuação voltada à orientação jurídica e empresarial.",
  alternates: {
    canonical: "/sobre/",
  },
  openGraph: {
    title: "Sobre a Rodrigues & Rodrigues Advocacia | Indaiatuba - SP",
    description:
      "Atuação jurídica e empresarial pautada pela retidão técnica, discrição e segurança negocial.",
    url: `${SITE_CONFIG.siteUrl}/sobre/`,
  },
};

export default function SobrePage() {
  return (
    <div className="bg-[#000000] text-[#E5E5E5] min-h-screen">
      {/* Header Institucional com Breadcrumbs */}
      <section className="py-20 border-b border-[#222222] bg-[#040404]">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "O Escritório", href: "/sobre/" }]} />
          <div className="mt-6 text-left">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-3">
              Identidade Institucional
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight mb-6">
              Rodrigues & Rodrigues Advocacia
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#CCCCCC] font-light max-w-2xl">
              A advocacia como instrumento de segurança jurídica, equilíbrio patrimonial e defesa intransigente dos interesses legítimos do constituinte.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Editorial */}
      <section className="py-20 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* 1. Filosofia de Atuação */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF]">
              Filosofia de Atuação
            </h2>
            <div className="text-sm sm:text-base text-[#D0D0D0] leading-relaxed font-light space-y-4">
              <p>
                O Rodrigues & Rodrigues Advocacia fundamenta sua prática na premissa de que a segurança jurídica se constrói na atenção meticulosa aos fatos e na aplicação sóbria do ordenamento legal. Cada consulta é examinada a partir de uma abordagem individualizada, descartando teses genéricas em proveito da precisão analítica.
              </p>
              <p>
                Nossa atuação equilibra a serenidade da advocacia preventiva com a combatividade técnica necessária nas esferas litigiosas, sempre guiada pelos deveres éticos da transparência, independência funcional e confidencialidade irrestrita.
              </p>
            </div>
          </div>

          {/* 2. Nossa Forma de Atuar: Compreender, Analisar, Orientar, Acompanhar */}
          <div className="border-t border-[#222222] pt-12 space-y-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
              Metodologia de Trabalho
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF]">
              Nossa forma de atuar
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border border-[#222222] p-6 bg-[#050505] space-y-2">
                <span className="text-xs uppercase tracking-[0.16em] text-[#D4AF37] font-mono">01. Compreender</span>
                <h3 className="font-serif text-lg text-[#FFFFFF]">Escuta Ativa do Contexto</h3>
                <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                  Dedicação ao detalhamento factual e exame circunstanciado da realidade operacional ou pessoal do cliente, identificando as reais variáveis envolvidas.
                </p>
              </div>

              <div className="border border-[#222222] p-6 bg-[#050505] space-y-2">
                <span className="text-xs uppercase tracking-[0.16em] text-[#D4AF37] font-mono">02. Analisar</span>
                <h3 className="font-serif text-lg text-[#FFFFFF]">Avaliação Jurídica e de Riscos</h3>
                <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                  Estudo dogmático e jurisprudencial da matéria, mapeando pontos fortes, contingências, impactos financeiros e cenários prováveis.
                </p>
              </div>

              <div className="border border-[#222222] p-6 bg-[#050505] space-y-2">
                <span className="text-xs uppercase tracking-[0.16em] text-[#D4AF37] font-mono">03. Orientar</span>
                <h3 className="font-serif text-lg text-[#FFFFFF]">Direcionamento Estratégico</h3>
                <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                  Apresentação de pareceres e propostas de ação claras, viáveis e desprovidas de jargões desnecessários para viabilizar decisões seguras.
                </p>
              </div>

              <div className="border border-[#222222] p-6 bg-[#050505] space-y-2">
                <span className="text-xs uppercase tracking-[0.16em] text-[#D4AF37] font-mono">04. Acompanhar</span>
                <h3 className="font-serif text-lg text-[#FFFFFF]">Vigilância e Reporte Contínuo</h3>
                <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                  Condução meticulosa dos atos processuais ou negociais com comunicação periódica e direta entre o advogado e o constituinte.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Composição Visual / Fotografia do Advogado */}
          <div className="border border-[#222222] p-3 bg-[#080808]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-72 sm:h-80 overflow-hidden bg-[#141414]">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Estrutura arquitetônica institucional em Indaiatuba"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover filter grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-7 p-4 sm:p-6 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
                  Compromisso com o Constituinte
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FFFFFF]">
                  Atendimento Pessoal e Responsabilidade Direta
                </h3>
                <p className="text-xs leading-relaxed text-[#CCCCCC] font-light">
                  Acreditamos na proximidade como fator determinante para a qualidade da prestação jurídica. No escritório, cada caso é conduzido diretamente com a devida gravidade técnica e sem delegações impessoais.
                </p>
                <div className="pt-2 text-xs font-mono text-[#D4AF37]">
                  Cidade Nova I • Indaiatuba/SP
                </div>
              </div>
            </div>
          </div>

          {/* 4. Compromisso Ético e Sede em Indaiatuba */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#222222] pt-12">
            <div className="space-y-3">
              <h3 className="font-serif text-xl text-[#FFFFFF]">Compromisso Ético e Regimental</h3>
              <p className="text-xs leading-relaxed text-[#CCCCCC] font-light">
                Cumprimento estrito dos ditames da Ordem dos Advogados do Brasil (OAB) e do Provimento 205/2021 sobre publicidade séria e informativa, zelando pelo sigilo profissional incondicional (art. 35 do Código de Ética e Disciplina).
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-xl text-[#FFFFFF]">Integração Local e Regional</h3>
              <p className="text-xs leading-relaxed text-[#CCCCCC] font-light">
                Sediado na Rua Tuiuti, 629, em Indaiatuba, o escritório mantém contato permanente com a realidade empresarial e imobiliária local e das comarcas vizinhas da Região Metropolitana de Campinas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center bg-[#050505]">
        <div className="max-w-xl mx-auto px-6 space-y-5">
          <h2 className="font-serif text-2xl text-[#FFFFFF]">
            Necessita de orientação jurídica pontual?
          </h2>
          <p className="text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed">
            Entre em contato para apresentar sua demanda diretamente ao escritório.
          </p>
          <div className="pt-2">
            <a
              href={SITE_CONFIG.contact.whatsappUrlWithMessage(
                "Olá, gostaria de agendar uma consulta com a Rodrigues & Rodrigues Advocacia."
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
