import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG, getFaqSchema } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Assessoria Jurídica e Empresarial em Indaiatuba | Rodrigues & Rodrigues",
  description:
    "Assessoria jurídica e empresarial em Indaiatuba para empresas que buscam orientação estratégica, prevenção e mais segurança na tomada de decisões.",
  alternates: {
    canonical: "/servicos/assessoria-juridica-e-empresarial/",
  },
  openGraph: {
    title: "Assessoria Jurídica e Empresarial em Indaiatuba | Rodrigues & Rodrigues",
    description:
      "Consultoria jurídica preventiva e suporte contratual estratégico para empresas em Indaiatuba/SP.",
    url: `${SITE_CONFIG.siteUrl}/servicos/assessoria-juridica-e-empresarial/`,
  },
};

export default function AssessoriaEmpresarialPage() {
  const empresarialFaqs = [
    {
      question: "O que é assessoria jurídica empresarial?",
      answer:
        "É um serviço contínuo de consultoria legal focado em orientar a administração da empresa em suas decisões cotidianas, prevenindo litígios, revisando instrumentos contratuais e assegurando conformidade com a legislação vigente.",
    },
    {
      question: "Quando uma empresa deve procurar orientação jurídica?",
      answer:
        "O momento ideal é antes da ocorrência do litígio: na fase de negociação com fornecedores, na contratação de colaboradores, na elaboração de acordos societários ou antes de decisões comerciais de alto impacto.",
    },
    {
      question: "A assessoria jurídica ajuda na prevenção de problemas?",
      answer:
        "Sim. A prática preventiva reduz expressivamente o surgimento de passivos ocultos, contingências trabalhistas evitáveis e cláusulas contratuais desfavoráveis, conferindo previsibilidade ao fluxo de caixa.",
    },
    {
      question: "Empresas pequenas também podem buscar assessoria jurídica?",
      answer:
        "Certamente. Micro, pequenas e médias empresas são frequentemente as mais beneficiadas, pois necessitam de segurança operacional e proteção patrimonial sem a onerosidade de manter um departamento jurídico interno.",
    },
    {
      question: "Como funciona o primeiro contato com o escritório?",
      answer:
        "O gestor apresenta as principais características de sua operação e suas prioridades imediatas. A partir desse diagnóstico preliminar, são delineadas as frentes de suporte mais adequadas sob sigilo profissional.",
    },
    {
      question: "A Rodrigues & Rodrigues Advocacia atende empresas em Indaiatuba?",
      answer:
        "Sim. Nosso escritório possui sede própria na Comarca de Indaiatuba (Rua Tuiuti, 629, Cidade Nova I) e presta assessoria a sociedades sediadas na cidade e em toda a Região Metropolitana de Campinas.",
    },
    {
      question: "Como posso entrar em contato?",
      answer:
        "Diretamente pelo WhatsApp institucional (19) 99194-3728 ou mediante agendamento prévio para reunião presencial em nossa sede.",
    },
  ];

  const faqSchema = getFaqSchema(empresarialFaqs);

  return (
    <div className="bg-[#000000] text-[#E5E5E5] min-h-screen">
      {/* FAQ Schema Específico para esta página */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Dedicado com Breadcrumbs */}
      <section className="py-24 border-b border-[#222222] bg-[#030303]">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Serviços", href: "/servicos/" },
              {
                label: "Assessoria Jurídica e Empresarial",
                href: "/servicos/assessoria-juridica-e-empresarial/",
              },
            ]}
          />

          <div className="mt-8 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium block">
              Serviço Estratégico em Indaiatuba
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight leading-[1.12]">
              Assessoria Jurídica e Empresarial em Indaiatuba
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#CCCCCC] font-light max-w-2xl">
              Orientação jurídica estratégica para empresas que precisam tomar decisões com mais segurança, clareza e responsabilidade.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_CONFIG.contact.whatsappUrlWithMessage(
                  "Olá, gostaria de agendar uma reunião corporativa sobre Assessoria Jurídica e Empresarial em Indaiatuba."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-8 py-4 font-medium hover:bg-[#FFFFFF] transition-colors"
              >
                Fale com o escritório
              </a>
              <Link
                href="/contato/"
                className="text-center text-xs uppercase tracking-[0.16em] border border-[#333333] text-[#FFFFFF] px-8 py-4 hover:border-[#D4AF37] transition-colors"
              >
                Agendar Reunião na Sede
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção — O Que É */}
      <section className="py-20 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
            Conceito e Finalidade
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF]">
            O que é assessoria jurídica e empresarial?
          </h2>
          <div className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed font-light space-y-4">
            <p>
              A assessoria jurídica e empresarial consiste no suporte técnico permanente aos administradores e gestores de uma sociedade, visando a salvaguarda de seus interesses comerciais e patrimoniais. Em vez de acionar a advocacia apenas no momento em que um processo judicial já se encontra em andamento, o modelo de assessoria privilegia a prevenção.
            </p>
            <p>
              Trata-se de uma parceria analítica que compreende as particularidades de cada operação empresarial, antecipando riscos em contratos, orientando sobre rotinas internas e assegurando que as transações mercantis possuam amparo normativo sólido e exequível.
            </p>
          </div>
        </div>
      </section>

      {/* Seção — Para Quem É */}
      <section className="py-20 border-b border-[#222222] bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
            Diagnóstico de Aplicação
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF]">
            Para quem a assessoria jurídica empresarial pode ser importante?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#CCCCCC] font-light">
            <div className="border border-[#222222] p-6 bg-[#000000] space-y-2">
              <h3 className="font-serif text-base text-[#FFFFFF]">Tomada de Decisões Estratégicas</h3>
              <p className="leading-relaxed">
                Empresas em fase de expansão, celebração de novas parcerias comerciais ou mudanças em linhas de produtos e serviços.
              </p>
            </div>
            <div className="border border-[#222222] p-6 bg-[#000000] space-y-2">
              <h3 className="font-serif text-base text-[#FFFFFF]">Revisão e Gestão de Contratos</h3>
              <p className="leading-relaxed">
                Negócios que operam com fornecedores, distribuidores ou terceirizados e necessitam de cláusulas claras de garantia e foro.
              </p>
            </div>
            <div className="border border-[#222222] p-6 bg-[#000000] space-y-2">
              <h3 className="font-serif text-base text-[#FFFFFF]">Prevenção de Passivos</h3>
              <p className="leading-relaxed">
                Organizações que buscam mitigar vulnerabilidades em rotinas de trabalho e relações de consumo antes do surgimento de disputas judiciais.
              </p>
            </div>
            <div className="border border-[#222222] p-6 bg-[#000000] space-y-2">
              <h3 className="font-serif text-base text-[#FFFFFF]">Alinhamento Societário</h3>
              <p className="leading-relaxed">
                Sociedades que pretendem formalizar ou revisar seus contratos sociais e regras de deliberação para evitar conflitos internos entre sócios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção — Benefícios Conceituais */}
      <section className="py-20 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
            Vantagens Práticas
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF]">
            Por que buscar orientação jurídica antes de um problema acontecer?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-t border-[#333333] pt-5 space-y-2">
              <h3 className="font-serif text-base text-[#FFFFFF]">Prevenção Ativa</h3>
              <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                Evita o surgimento de litígios onerosos por meio de cláusulas adequadamente redigidas e validadas previamente.
              </p>
            </div>
            <div className="border-t border-[#333333] pt-5 space-y-2">
              <h3 className="font-serif text-base text-[#FFFFFF]">Maior Clareza</h3>
              <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                Compreensão transparente dos direitos, deveres e limites de responsabilidade estabelecidos em cada relação negocial.
              </p>
            </div>
            <div className="border-t border-[#333333] pt-5 space-y-2">
              <h3 className="font-serif text-base text-[#FFFFFF]">Redução de Riscos</h3>
              <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                Mapeamento antecipado de contingências fiscais, contratuais e trabalhistas passíveis de correção preventiva.
              </p>
            </div>
            <div className="border-t border-[#333333] pt-5 space-y-2">
              <h3 className="font-serif text-base text-[#FFFFFF]">Apoio à Decisão</h3>
              <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                Respaldo técnico aos gestores com pareceres objetivos para fundamentar decisões comerciais importantes.
              </p>
            </div>
            <div className="border-t border-[#333333] pt-5 space-y-2">
              <h3 className="font-serif text-base text-[#FFFFFF]">Organização Interna</h3>
              <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                Padronização de minutas e procedimentos contratuais que asseguram eficiência operacional nas rotinas da empresa.
              </p>
            </div>
            <div className="border-t border-[#333333] pt-5 space-y-2">
              <h3 className="font-serif text-base text-[#FFFFFF]">Segurança Jurídica</h3>
              <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                Tranquilidade aos sócios e administradores para concentrarem esforços no desenvolvimento de suas atividades-fim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção — Pilares da Assessoria */}
      <section className="py-20 border-b border-[#222222] bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
            Frentes de Atuação Corporativa
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF]">
            Pilares da Assessoria Jurídica e Empresarial
          </h2>

          <div className="space-y-6">
            <div className="border-l-2 border-[#D4AF37] pl-6 py-2 space-y-2">
              <h3 className="font-serif text-lg text-[#FFFFFF]">1. Gestão Contratual Estratégica</h3>
              <p className="text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed">
                Elaboração e revisão minuciosa de instrumentos com clientes, fornecedores e parceiros, assegurando garantias claras, foro seguro e delimitação precisa de responsabilidades.
              </p>
            </div>

            <div className="border-l-2 border-[#D4AF37] pl-6 py-2 space-y-2">
              <h3 className="font-serif text-lg text-[#FFFFFF]">2. Prevenção de Passivos Trabalhistas</h3>
              <p className="text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed">
                Auditoria de rotinas de admissão, controle de jornada e modelos de contratação em estrita conformidade com a legislação e jurisprudência dos tribunais regionais.
              </p>
            </div>

            <div className="border-l-2 border-[#D4AF37] pl-6 py-2 space-y-2">
              <h3 className="font-serif text-lg text-[#FFFFFF]">3. Estruturação Societária e Governança</h3>
              <p className="text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed">
                Exame de contratos sociais, acordos de sócios e regras de transmissão de quotas, resguardando a continuidade das atividades empresariais.
              </p>
            </div>

            <div className="border-l-2 border-[#D4AF37] pl-6 py-2 space-y-2">
              <h3 className="font-serif text-lg text-[#FFFFFF]">4. Cobrança e Recuperação de Créditos</h3>
              <p className="text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed">
                Atuação extrajudicial amigável e judicial célere na execução de títulos vencidos, recompondo o fluxo financeiro da sociedade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção — Como Funciona */}
      <section className="py-20 border-b border-[#222222]">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
            Jornada de Atendimento
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF]">
            Como funciona o atendimento jurídico
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border border-[#222222] bg-[#050505] space-y-2">
              <span className="font-mono text-sm text-[#D4AF37]">Passo 01</span>
              <h3 className="font-serif text-base text-[#FFFFFF]">Primeiro contato</h3>
              <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                O cliente apresenta brevemente sua necessidade via WhatsApp ou canal de atendimento formal.
              </p>
            </div>
            <div className="p-6 border border-[#222222] bg-[#050505] space-y-2">
              <span className="font-mono text-sm text-[#D4AF37]">Passo 02</span>
              <h3 className="font-serif text-base text-[#FFFFFF]">Compreensão do contexto</h3>
              <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                A situação é analisada considerando as informações fáticas e documentos preliminares fornecidos.
              </p>
            </div>
            <div className="p-6 border border-[#222222] bg-[#050505] space-y-2">
              <span className="font-mono text-sm text-[#D4AF37]">Passo 03</span>
              <h3 className="font-serif text-base text-[#FFFFFF]">Orientação</h3>
              <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                São discutidos os caminhos jurídicos possíveis para o caso, seus riscos e desdobramentos previsíveis.
              </p>
            </div>
            <div className="p-6 border border-[#222222] bg-[#050505] space-y-2">
              <span className="font-mono text-sm text-[#D4AF37]">Passo 04</span>
              <h3 className="font-serif text-base text-[#FFFFFF]">Próximos passos</h3>
              <p className="text-xs text-[#CCCCCC] font-light leading-relaxed">
                O cliente recebe direcionamento fundamentado sobre como prosseguir com a medida ou acompanhamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção — FAQ Dedicada */}
      <section className="py-20 border-b border-[#222222] bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
              Dúvidas Comuns
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#FFFFFF]">
              Perguntas Frequentes sobre Assessoria Empresarial
            </h2>
          </div>

          <div className="space-y-4 pt-4">
            {empresarialFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-[#222222] bg-[#000000] p-6 open:bg-[#080808] transition-colors"
              >
                <summary className="flex justify-between items-center cursor-pointer font-serif text-base text-[#FFFFFF] focus:outline-none focus:text-[#D4AF37] list-none">
                  <span>{faq.question}</span>
                  <span className="text-[#D4AF37] text-lg font-mono transition-transform duration-200 group-open:rotate-45 ml-4">
                    +
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-[#1C1C1C] text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center bg-[#000000]">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
            Atendimento para Empresas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF]">
            Estruture a segurança jurídica de sua empresa
          </h2>
          <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed font-light">
            Agende um diagnóstico preliminar diretamente com o escritório Rodrigues & Rodrigues Advocacia em Indaiatuba.
          </p>
          <div className="pt-2">
            <a
              href={SITE_CONFIG.contact.whatsappUrlWithMessage(
                "Olá, gostaria de agendar uma consulta sobre assessoria jurídica para minha empresa em Indaiatuba."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-8 py-4 font-medium hover:bg-[#FFFFFF] transition-colors"
            >
              Falar pelo WhatsApp (19) 99194-3728
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
