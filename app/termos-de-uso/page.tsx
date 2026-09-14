import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Termos de Uso | Rodrigues & Rodrigues Advocacia",
  description:
    "Regulamentação aplicável ao acesso e uso do sítio eletrônico institucional da Rodrigues & Rodrigues Advocacia.",
  alternates: {
    canonical: "/termos-de-uso/",
  },
  openGraph: {
    title: "Termos de Uso | Rodrigues & Rodrigues Advocacia",
    description:
      "Normas de acesso ao portal institucional em conformidade com o Provimento 205/2021 da OAB.",
    url: `${SITE_CONFIG.siteUrl}/termos-de-uso/`,
  },
};

export default function TermosUsoPage() {
  return (
    <div className="bg-[#000000] text-[#E5E5E5] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <Breadcrumbs items={[{ label: "Termos de Uso", href: "/termos-de-uso/" }]} />

        <header className="border-b border-[#222222] pb-6 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
            Normas de Acesso
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF]">
            Termos de Uso
          </h1>
          <p className="text-xs text-[#888888] font-light">
            Regulamentação aplicável ao domínio institucional e ao conteúdo informativo.
          </p>
        </header>

        <article className="space-y-6 text-xs sm:text-sm leading-relaxed text-[#CCCCCC] font-light">
          <section className="space-y-2">
            <h2 className="font-serif text-base text-[#FFFFFF]">
              1. Caráter Exclusivamente Informativo
            </h2>
            <p>
              Todo o conteúdo disponibilizado neste sítio possui propósito estritamente institucional e educativo, em estrita consonância com o Provimento nº 205/2021 do Conselho Federal da Ordem dos Advogados do Brasil. As informações veiculadas não configuram consulta jurídica vinculante, parecer formal ou promessa de resultado, e não estabelecem relação mandatária advogado-cliente prévia à assinatura do competente contrato de honorários e procuração.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base text-[#FFFFFF]">
              2. Direitos de Propriedade Intelectual
            </h2>
            <p>
              A denominação &quot;Rodrigues &amp; Rodrigues Advocacia&quot;, elementos visuais, textos institucionais e estrutura de diagramação constituem patrimônio intelectual protegido pela legislação brasileira. É vedada sua reprodução integral ou parcial sem autorização prévia e expressa.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base text-[#FFFFFF]">
              3. Limitação de Responsabilidade Técnica
            </h2>
            <p>
              O escritório emprega padrões contínuos para manter a estabilidade do sítio, não respondendo por eventuais indisponibilidades sistêmicas decorrentes de provedores de conexão, telecomunicações ou fatores alheios ao controle técnico direto.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base text-[#FFFFFF]">
              4. Foro de Eleição
            </h2>
            <p>
              Quaisquer controvérsias eventualmente decorrentes do uso deste portal serão dirimidas no Foro da Comarca de Indaiatuba, Estado de São Paulo, com expressa renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
