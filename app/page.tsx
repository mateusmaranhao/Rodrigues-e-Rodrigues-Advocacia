import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, getFaqSchema } from "@/lib/site-data";

export default function HomePage() {
  const homeFaqs = [
    {
      question: "Como entrar em contato com a Rodrigues & Rodrigues Advocacia?",
      answer:
        "O contato pode ser realizado diretamente através do WhatsApp institucional (19) 99194-3728 ou mediante agendamento para atendimento presencial em nossa sede.",
    },
    {
      question: "Onde fica o escritório?",
      answer:
        "O escritório está localizado na Rua Tuiuti, 629, no bairro Cidade Nova I, em Indaiatuba - SP, CEP 13334-000.",
    },
    {
      question: "A Rodrigues & Rodrigues Advocacia atende em Indaiatuba?",
      answer:
        "Sim. A atuação tem como base a Comarca de Indaiatuba, estendendo-se à Região Metropolitana de Campinas e comarcas correlatas do Estado de São Paulo.",
    },
    {
      question: "O escritório oferece assessoria jurídica empresarial?",
      answer:
        "Sim. A assessoria jurídica e empresarial é um serviço central do escritório, voltado à blindagem contratual, prevenção de litígios e suporte estratégico a decisões corporativas.",
    },
    {
      question: "Como funciona o primeiro contato?",
      answer:
        "O cliente apresenta brevemente o contexto de sua necessidade, possibilitando uma avaliação preliminar e o alinhamento dos passos adequados sob sigilo profissional.",
    },
  ];

  const homeFaqSchema = getFaqSchema(homeFaqs);

  return (
    <div>
      {/* FAQ Schema for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-[90dvh] flex items-center bg-[#000000] border-b border-[#222222] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 z-10">
            {/* Semantic Single H1 for Local SEO */}
            <h1 className="text-xs sm:text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium block mb-5">
              Escritório de Advocacia em Indaiatuba - SP
            </h1>

            {/* Main Visual Headline H2 */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight leading-[1.12] mb-6 font-normal">
              Segurança jurídica para tomar decisões com mais confiança.
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#E5E5E5] leading-relaxed max-w-[56ch] mb-10 font-light">
              A Rodrigues & Rodrigues Advocacia oferece assessoria jurídica e empresarial em Indaiatuba para quem busca orientação estratégica, segurança e clareza para lidar com decisões e desafios jurídicos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-cta-primary"
                href={SITE_CONFIG.contact.whatsappUrlWithMessage(
                  "Olá, gostaria de falar com o escritório sobre uma demanda jurídica em Indaiatuba."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-8 py-4 font-medium hover:bg-[#FFFFFF] transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]"
              >
                Fale com o escritório
              </a>
              <Link
                id="hero-cta-secondary"
                href="/servicos/"
                className="text-center text-xs uppercase tracking-[0.16em] border border-[#444444] text-[#FFFFFF] px-8 py-4 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              >
                Conheça nossos serviços
              </Link>
            </div>

            {/* Microcopy Under Hero */}
            <div className="mt-8 pt-6 border-t border-[#1C1C1C] flex flex-wrap items-center gap-6 text-[11px] text-[#888888] uppercase tracking-wider font-sans">
              <span>Atendimento em Indaiatuba - SP</span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
              <span>Conformidade Ética OAB</span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
              <span>Sigilo Profissional</span>
            </div>
          </div>

          {/* Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="border border-[#222222] p-2 bg-[#080808] shadow-2xl relative">
              <div className="relative w-full h-[440px] sm:h-[480px] overflow-hidden bg-[#111111]">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Estrutura arquitetônica representativa de solidez patrimonial e segurança jurídica"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-4 border-t border-[#1C1C1C] bg-[#000000] flex justify-between items-center text-[10px] tracking-[0.16em] uppercase">
                <span className="text-[#888888]">Comarca de Indaiatuba</span>
                <span className="text-[#D4AF37]">R. Tuiuti, 629</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE AUTORIDADE / POSICIONAMENTO */}
      <section
        id="posicionamento-section"
        className="py-24 bg-[#050505] border-b border-[#222222]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-3">
                Atuação Jurídica
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FFFFFF] font-normal leading-snug">
                Direito com estratégia, clareza e responsabilidade.
              </h2>
            </div>
            <div className="lg:col-span-7 text-[#E5E5E5] space-y-6 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Questões jurídicas exigem mais do que respostas rápidas. Exigem compreensão do contexto, análise cuidadosa e orientação capaz de oferecer segurança para cada decisão.
              </p>
              <p className="opacity-85 text-sm">
                No Rodrigues & Rodrigues Advocacia, as demandas são tratadas de modo singular. Afastamos modelos pasteurizados para conduzir uma avaliação técnica precisa sobre os cenários, contingências e direitos aplicáveis ao constituinte.
              </p>
              <div className="pt-2">
                <Link
                  href="/sobre/"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#D4AF37] hover:text-[#FFFFFF] transition-colors"
                >
                  <span>Conheça os fundamentos de nossa prática</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO SOBRE PREVIEW */}
      <section id="sobre-preview" className="py-24 bg-[#000000] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-[#222222] p-8 sm:p-14 bg-[#060606] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
                O Escritório
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF]">
                Uma advocacia pensada para oferecer segurança nas decisões.
              </h2>
              <p className="text-sm sm:text-base text-[#E5E5E5] leading-relaxed font-light">
                A Rodrigues & Rodrigues Advocacia atua com foco em orientação jurídica e empresarial, buscando compreender cada situação de forma individualizada e apresentar caminhos claros para questões que exigem atenção, estratégia e responsabilidade.
              </p>
              <div>
                <Link
                  href="/sobre/"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-6 py-3 font-medium hover:bg-[#FFFFFF] transition-colors"
                >
                  <span>Conheça o escritório</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 border-l-0 lg:border-l border-[#222222] pl-0 lg:pl-8 pt-6 lg:pt-0 space-y-4 text-xs font-light">
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#D4AF37] font-medium">
                Atendimento Personalizado
              </div>
              <p className="text-[#CCCCCC] leading-relaxed">
                Reuniões realizadas na sede em Indaiatuba ou por canais digitais seguros, garantindo sigilo profissional estrito.
              </p>
              <div className="pt-2 font-mono text-[#FFFFFF]">
                (19) 99194-3728
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE DIFERENCIAIS */}
      <section
        id="diferenciais-section"
        className="py-24 bg-[#050505] border-b border-[#222222]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-3">
              Princípios de Conduta
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FFFFFF]">
              Por que contar com orientação jurídica especializada?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Clareza */}
            <div className="border-t border-[#333333] pt-6 space-y-3">
              <span className="text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-medium block">
                01. Clareza
              </span>
              <h3 className="font-serif text-xl text-[#FFFFFF]">Compreensão Objetiva</h3>
              <p className="text-xs leading-relaxed text-[#E5E5E5] font-light opacity-85">
                Informações jurídicas apresentadas de forma objetiva para facilitar a compreensão e a tomada de decisão consciente pelo constituinte.
              </p>
            </div>

            {/* 2. Estratégia */}
            <div className="border-t border-[#333333] pt-6 space-y-3">
              <span className="text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-medium block">
                02. Estratégia
              </span>
              <h3 className="font-serif text-xl text-[#FFFFFF]">Análise Contextual</h3>
              <p className="text-xs leading-relaxed text-[#E5E5E5] font-light opacity-85">
                Análise cuidadosa de cada situação para buscar caminhos jurídicos coerentes com o contexto fático e documental apresentado.
              </p>
            </div>

            {/* 3. Segurança */}
            <div className="border-t border-[#333333] pt-6 space-y-3">
              <span className="text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-medium block">
                03. Segurança
              </span>
              <h3 className="font-serif text-xl text-[#FFFFFF]">Mitigação de Riscos</h3>
              <p className="text-xs leading-relaxed text-[#E5E5E5] font-light opacity-85">
                Orientação responsável para reduzir incertezas e proporcionar maior segurança jurídica diante de decisões civis e empresariais.
              </p>
            </div>

            {/* 4. Proximidade */}
            <div className="border-t border-[#333333] pt-6 space-y-3">
              <span className="text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-medium block">
                04. Proximidade
              </span>
              <h3 className="font-serif text-xl text-[#FFFFFF]">Comunicação Direta</h3>
              <p className="text-xs leading-relaxed text-[#E5E5E5] font-light opacity-85">
                Atendimento pautado pela compreensão das necessidades de cada cliente, assegurando diálogo transparente do início ao encerramento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE SERVIÇOS */}
      <section id="servicos-section" className="py-24 bg-[#000000] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-3">
              Como Podemos Ajudar
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF] mb-4">
              Assessoria jurídica para diferentes momentos e decisões.
            </h2>
            <p className="text-sm text-[#CCCCCC] font-light leading-relaxed">
              Conheça a atuação jurídica disponível e encontre a orientação mais adequada para a sua necessidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card Destaque: Assessoria Jurídica e Empresarial */}
            <div className="lg:col-span-2 border border-[#D4AF37]/80 bg-[#080808] p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#D4AF37] transition-all duration-300">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] font-medium block">
                  Serviço Central Confirmado
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FFFFFF]">
                  Assessoria Jurídica e Empresarial
                </h3>
                <p className="text-sm text-[#E5E5E5] leading-relaxed font-light max-w-xl">
                  Orientação jurídica estratégica para empresas e decisões que envolvem questões legais, contratuais e empresariais em Indaiatuba e região. Atuação preventiva voltada à sustentabilidade das atividades econômicas.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-[#A0A0A0] font-mono">
                  <span className="bg-[#141414] px-3 py-1 border border-[#222222]">Gestão de Contratos</span>
                  <span className="bg-[#141414] px-3 py-1 border border-[#222222]">Rotinas Trabalhistas</span>
                  <span className="bg-[#141414] px-3 py-1 border border-[#222222]">Estrutura Societária</span>
                  <span className="bg-[#141414] px-3 py-1 border border-[#222222]">Recuperação de Crédito</span>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/servicos/assessoria-juridica-e-empresarial/"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-6 py-3 font-medium hover:bg-[#FFFFFF] transition-colors"
                >
                  <span>Conhecer serviço completo</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Consultoria Preventiva & Civil */}
            <div className="border border-[#222222] bg-[#050505] p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-medium block">
                  Frente Complementar
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FFFFFF]">
                  Direito Civil e Consultoria Preventiva
                </h3>
                <p className="text-xs text-[#E5E5E5] leading-relaxed font-light opacity-85">
                  Exame de instrumentos particulares, negócios jurídicos, responsabilidade civil e orientação prévia à formalização de compromissos patrimoniais.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C1C1C]">
                <Link
                  href="/servicos/"
                  className="text-xs uppercase tracking-[0.16em] text-[#D4AF37] hover:text-[#FFFFFF] inline-flex items-center gap-2 transition-colors"
                >
                  <span>Ver todas as frentes</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section
        id="como-funciona-section"
        className="py-24 bg-[#050505] border-b border-[#222222]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-3">
              Metodologia de Atendimento
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF]">
              Como funciona o atendimento jurídico
            </h2>
            <p className="text-xs text-[#888888] mt-2 font-light">
              Uma jornada transparente e estruturada para conduzir sua consulta com serenidade e sigilo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-[#222222] bg-[#000000] space-y-3">
              <div className="text-lg font-mono text-[#D4AF37]">01</div>
              <h3 className="font-serif text-base text-[#FFFFFF]">Primeiro contato</h3>
              <p className="text-xs text-[#E5E5E5] leading-relaxed font-light opacity-85">
                O cliente apresenta brevemente sua necessidade através dos canais oficiais de comunicação.
              </p>
            </div>

            <div className="p-6 border border-[#222222] bg-[#000000] space-y-3">
              <div className="text-lg font-mono text-[#D4AF37]">02</div>
              <h3 className="font-serif text-base text-[#FFFFFF]">Compreensão do contexto</h3>
              <p className="text-xs text-[#E5E5E5] leading-relaxed font-light opacity-85">
                A situação é analisada considerando as informações fáticas e documentos apresentados pelo interessado.
              </p>
            </div>

            <div className="p-6 border border-[#222222] bg-[#000000] space-y-3">
              <div className="text-lg font-mono text-[#D4AF37]">03</div>
              <h3 className="font-serif text-base text-[#FFFFFF]">Orientação</h3>
              <p className="text-xs text-[#E5E5E5] leading-relaxed font-light opacity-85">
                São discutidos os caminhos jurídicos possíveis para o caso, ponderando riscos, viabilidades e custos.
              </p>
            </div>

            <div className="p-6 border border-[#222222] bg-[#000000] space-y-3">
              <div className="text-lg font-mono text-[#D4AF37]">04</div>
              <h3 className="font-serif text-base text-[#FFFFFF]">Próximos passos</h3>
              <p className="text-xs text-[#E5E5E5] leading-relaxed font-light opacity-85">
                O cliente recebe direcionamento sobre como prosseguir com o acompanhamento contratado ou recomendação cabível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ DA HOME */}
      <section id="faq-section" className="py-24 bg-[#000000] border-b border-[#222222]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block mb-3">
              Esclarecimentos Frequentes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF]">
              Perguntas Frequentes sobre a Atuação
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-[#222222] bg-[#050505] p-6 open:bg-[#0A0A0A] transition-colors"
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

      {/* 8. SEÇÃO DE LOCALIZAÇÃO */}
      <section id="localizacao-section" className="py-24 bg-[#050505] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
              Sede em Indaiatuba
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF]">
              Atendimento Presencial na Cidade Nova I
            </h2>
            <p className="text-sm text-[#E5E5E5] leading-relaxed font-light">
              O escritório possui sede estruturada em ponto acessível de Indaiatuba/SP, dispondo de instalações confortáveis e reservadas para reuniões com total sigilo profissional.
            </p>

            <div className="border border-[#222222] p-5 bg-[#000000] space-y-2 text-xs font-mono">
              <p className="text-[#FFFFFF] font-medium">Rodrigues & Rodrigues Advocacia</p>
              <p className="text-[#CCCCCC]">R. Tuiuti, 629 - Cidade Nova I</p>
              <p className="text-[#CCCCCC]">Indaiatuba - SP, CEP 13334-000</p>
              <p className="text-[#D4AF37] pt-1">Telefone: (19) 99194-3728</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={SITE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.16em] bg-transparent border border-[#D4AF37] text-[#D4AF37] px-6 py-3 hover:bg-[#D4AF37] hover:text-[#000000] transition-colors inline-flex items-center gap-2"
              >
                <span>Abrir Rota no Google Maps</span>
                <span aria-hidden="true">↗</span>
              </a>
              <Link
                href="/contato/"
                className="text-xs uppercase tracking-[0.16em] text-[#FFFFFF] hover:text-[#D4AF37] px-4 py-3 underline decoration-[#444444] transition-colors"
              >
                Informações de Contato
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#222222] p-2 bg-[#080808]">
              <div className="relative w-full h-80 overflow-hidden bg-[#141414]">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                  alt="Espaço corporativo e sala de reuniões reservada para atendimento jurídico"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover filter grayscale contrast-115"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 bg-[#000000] text-center border-t border-[#1C1C1C]">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888]">
                  Ambiente Reservado • Cidade Nova I • Indaiatuba/SP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section id="cta-final" className="py-24 bg-[#000000] text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
            Atendimento Institucional
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFFFF]">
            Precisa de orientação jurídica?
          </h2>
          <p className="text-sm text-[#CCCCCC] leading-relaxed font-light">
            Entre em contato com a Rodrigues & Rodrigues Advocacia e apresente sua necessidade diretamente ao advogado responsável.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={SITE_CONFIG.contact.whatsappUrlWithMessage(
                "Olá, gostaria de apresentar uma situação jurídica para consulta com o escritório."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-8 py-4 font-medium hover:bg-[#FFFFFF] transition-colors"
            >
              Falar pelo WhatsApp {SITE_CONFIG.contact.phoneDisplay}
            </a>
            <Link
              href="/contato/"
              className="w-full sm:w-auto text-xs uppercase tracking-[0.16em] border border-[#333333] text-[#FFFFFF] px-8 py-4 hover:border-[#D4AF37] transition-colors"
            >
              Canais de Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
