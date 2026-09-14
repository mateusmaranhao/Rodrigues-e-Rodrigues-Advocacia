import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer
      id="main-footer"
      className="bg-[#000000] border-t border-[#222222] text-[#E5E5E5] pt-16 pb-12 transition-colors"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Rodapé Institucional
      </h2>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Identidade */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block font-serif text-xl tracking-wider text-[#FFFFFF] font-normal uppercase hover:text-[#D4AF37] transition-colors"
            >
              Rodrigues <span className="text-[#D4AF37]">&</span> Rodrigues
            </Link>
            <p className="text-xs leading-relaxed text-[#E5E5E5] opacity-80 max-w-xs font-light">
              Sociedade jurídica e assessoria empresarial orientada pela retidão técnica, discrição e segurança negocial na Comarca de Indaiatuba e região.
            </p>
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#888888] block mb-1">
                Presença Conectada
              </span>
              <a
                href={SITE_CONFIG.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Página institucional do Facebook (abrir em nova guia)"
                className="text-xs uppercase tracking-wider text-[#D4AF37] hover:text-[#FFFFFF] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Facebook Institucional</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Atendimento Local */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#FFFFFF] font-medium mb-4 pb-1 border-b border-[#222222]">
              Sede Presencial
            </h3>
            <address className="not-italic text-xs leading-relaxed opacity-85 space-y-1 font-light">
              <p className="text-[#FFFFFF] font-medium">{SITE_CONFIG.location.street}</p>
              <p>{SITE_CONFIG.location.neighborhood}</p>
              <p>
                {SITE_CONFIG.location.city} - {SITE_CONFIG.location.state}, CEP {SITE_CONFIG.location.postalCode}
              </p>
              <p className="pt-2 text-[#D4AF37]">
                Atendimento: {SITE_CONFIG.contact.phoneDisplay}
              </p>
            </address>
            <div className="mt-3">
              <a
                href={SITE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.14em] text-[#E5E5E5] hover:text-[#D4AF37] underline decoration-[#444444] transition-colors"
              >
                Como chegar (Google Maps) →
              </a>
            </div>
          </div>

          {/* Coluna 3: Navegação */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#FFFFFF] font-medium mb-4 pb-1 border-b border-[#222222]">
              Estrutura Institucional
            </h3>
            <ul className="text-xs space-y-2.5 font-light" role="list">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre/" className="hover:text-[#D4AF37] transition-colors">
                  O Escritório e Filosofia
                </Link>
              </li>
              <li>
                <Link href="/servicos/" className="hover:text-[#D4AF37] transition-colors">
                  Áreas de Atuação Jurídica
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/assessoria-juridica-e-empresarial/"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Assessoria Jurídica e Empresarial
                </Link>
              </li>
              <li>
                <Link href="/contato/" className="hover:text-[#D4AF37] transition-colors">
                  Canais de Atendimento
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Conformidade Jurídica */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-[#FFFFFF] font-medium mb-4 pb-1 border-b border-[#222222]">
              Privacidade e Ética
            </h3>
            <p className="text-xs leading-relaxed opacity-75 mb-4 font-light">
              Atuação em estrita conformidade com o Provimento nº 205/2021 do Conselho Federal da OAB e a Lei Geral de Proteção de Dados (LGPD).
            </p>
            <ul className="text-xs space-y-2 opacity-85 font-light" role="list">
              <li>
                <Link
                  href="/politica-de-privacidade/"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso/" className="hover:text-[#D4AF37] transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-cookies/"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Declaração de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center text-[11px] text-[#888888] gap-3">
          <p>
            © 2026 Rodrigues & Rodrigues Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-[11px] tracking-wide text-[#777777]">
            Indaiatuba, São Paulo, Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}
