import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/site-data";

export async function GET() {
  const content = `# Rodrigues & Rodrigues Advocacia
> Escritório de advocacia em Indaiatuba - SP, especializado em assessoria jurídica e empresarial.

## Informações Institucionais Oficiais
- Nome: ${SITE_CONFIG.name}
- Cidade: ${SITE_CONFIG.location.city} - ${SITE_CONFIG.location.state}
- Endereço: ${SITE_CONFIG.location.street}, ${SITE_CONFIG.location.neighborhood}, CEP ${SITE_CONFIG.location.postalCode}
- Telefone / WhatsApp: ${SITE_CONFIG.contact.phoneDisplay} (+55 19 99194-3728)
- Website Oficial: ${SITE_CONFIG.siteUrl}

## Principais Áreas e Atuação
- Assessoria Jurídica e Empresarial (Prevenção de passivos, governança societária, auditoria de contratos, recuperação de crédito)
- Direito Civil e Contratos Imobiliários
- Consultoria Jurídica Preventiva para Empresas em Indaiatuba e Região Metropolitana de Campinas

## Páginas Oficiais do Portal
- Início: ${SITE_CONFIG.siteUrl}/
- O Escritório: ${SITE_CONFIG.siteUrl}/sobre/
- Serviços: ${SITE_CONFIG.siteUrl}/servicos/
- Assessoria Empresarial: ${SITE_CONFIG.siteUrl}/servicos/assessoria-juridica-e-empresarial/
- Contato: ${SITE_CONFIG.siteUrl}/contato/
- Política de Privacidade: ${SITE_CONFIG.siteUrl}/politica-de-privacidade/
- Termos de Uso: ${SITE_CONFIG.siteUrl}/termos-de-uso/
- Política de Cookies: ${SITE_CONFIG.siteUrl}/politica-de-cookies/
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
