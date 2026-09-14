import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Política de Privacidade | Rodrigues & Rodrigues Advocacia",
  description:
    "Diretrizes de privacidade e proteção de dados pessoais em conformidade com a LGPD e o Código de Ética e Disciplina da OAB.",
  alternates: {
    canonical: "/politica-de-privacidade/",
  },
  openGraph: {
    title: "Política de Privacidade | Rodrigues & Rodrigues Advocacia",
    description:
      "Compromisso com a proteção de dados pessoais e sigilo profissional.",
    url: `${SITE_CONFIG.siteUrl}/politica-de-privacidade/`,
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="bg-[#000000] text-[#E5E5E5] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <Breadcrumbs items={[{ label: "Política de Privacidade", href: "/politica-de-privacidade/" }]} />

        <header className="border-b border-[#222222] pb-6 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
            Transparência e LGPD
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF]">
            Política de Privacidade
          </h1>
          <p className="text-xs text-[#888888] font-light">
            Regulamentação aplicável ao tratamento de dados pessoais conforme a Lei Federal nº 13.709/2018.
          </p>
        </header>

        <article className="space-y-6 text-xs sm:text-sm leading-relaxed text-[#CCCCCC] font-light">
          <section className="space-y-2">
            <h2 className="font-serif text-base text-[#FFFFFF]">
              1. Controlador dos Dados
            </h2>
            <p>
              O escritório <strong>Rodrigues & Rodrigues Advocacia</strong>, estabelecido na Rua Tuiuti, 629, Cidade Nova I, Indaiatuba - SP, CEP 13334-000, atua na qualidade de Controlador dos dados pessoais eventualmente fornecidos por meio deste sítio eletrônico ou de seus canais formais de comunicação.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base text-[#FFFFFF]">
              2. Dados Coletados e Finalidade do Tratamento
            </h2>
            <p>
              Coletamos exclusivamente as informações voluntariamente submetidas pelo usuário por meio do formulário de contato ou via aplicativo WhatsApp (nome completo, telefone/WhatsApp, e-mail e breve resumo da demanda). Tais dados destinam-se estritamente às seguintes finalidades:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#BBBBBB]">
              <li>Retorno do contato e agendamento de consultas jurídicas;</li>
              <li>Identificação preliminar de eventuais conflitos de interesses profissionais;</li>
              <li>Realização de procedimentos prévios à celebração de contrato de honorários advocatícios.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base text-[#FFFFFF]">
              3. Sigilo Profissional e Não Compartilhamento
            </h2>
            <p>
              O escritório <strong>não comercializa, não aluga e não compartilha</strong> dados pessoais com terceiros para propósitos comerciais, publicitários ou de marketing. O tratamento das informações está submetido ao rigoroso dever de sigilo profissional estabelecido pela Lei Federal nº 8.906/1994 (Estatuto da Advocacia) e pelo Código de Ética e Disciplina da OAB (artigo 35 e seguintes).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base text-[#FFFFFF]">
              4. Retenção e Descarte Seguro
            </h2>
            <p>
              Os dados coletados em consultas preliminares que não resultem em contratação formal de serviços serão descartados em prazo razoável, resguardando-se apenas aqueles estritamente indispensáveis ao cumprimento de obrigações legais, éticas ou regulatórias.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base text-[#FFFFFF]">
              5. Direitos do Titular dos Dados
            </h2>
            <p>
              Nos termos do artigo 18 da LGPD, o titular poderá requerer a qualquer momento a confirmação da existência de tratamento, o acesso a seus dados, a correção de dados incompletos ou a revogação de seu consentimento, mediante solicitação encaminhada ao canal institucional de WhatsApp: <strong>(19) 99194-3728</strong> ou diretamente em nossa sede física.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
