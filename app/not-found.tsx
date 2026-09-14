import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-data";

export default function NotFound() {
  return (
    <div className="bg-[#000000] text-[#FFFFFF] min-h-[75vh] flex items-center justify-center py-20">
      <div className="max-w-md mx-auto px-6 text-center space-y-6">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-medium block">
          Erro 404
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#FFFFFF]">
          Página não encontrada
        </h1>
        <p className="text-xs sm:text-sm text-[#CCCCCC] font-light leading-relaxed">
          O endereço solicitado não foi localizado ou foi remanejado. Utilize a navegação principal ou retorne à página inicial do escritório.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-6 py-3 font-medium hover:bg-[#FFFFFF] transition-colors"
          >
            Retornar ao Início
          </Link>
          <a
            href={SITE_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-xs uppercase tracking-[0.16em] border border-[#333333] text-[#FFFFFF] px-6 py-3 hover:border-[#D4AF37] transition-colors"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
