"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function LgpdConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [acknowledged, setAcknowledged] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      const saved = localStorage.getItem("rr_lgpd_ack_v1");
      if (!saved) {
        setAcknowledged(false);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("rr_lgpd_ack_v1", "true");
    setAcknowledged(true);
  };

  if (!mounted || acknowledged) return null;

  return (
    <div
      id="lgpd-consent-banner"
      role="region"
      aria-label="Aviso de Privacidade e Cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#000000] border-t border-[#D4AF37]/60 p-4 sm:p-5 shadow-2xl text-[#E5E5E5] text-xs transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1 max-w-4xl">
          <p className="text-[#FFFFFF] font-serif text-sm">
            Privacidade e Conformidade LGPD
          </p>
          <p className="text-[11px] leading-relaxed text-[#CCCCCC] font-light">
            Este portal institucional utiliza tecnologias de armazenamento técnico estritamente essenciais ao seu regular funcionamento, sem uso de cookies invasivos de terceiros para publicidade ou rastreamento comportamental, em estrita observância à Lei Geral de Proteção de Dados (Lei 13.709/2018). Conheça nossa{" "}
            <Link
              href="/politica-de-privacidade/"
              className="text-[#D4AF37] underline hover:text-[#FFFFFF]"
            >
              Política de Privacidade
            </Link>{" "}
            e nossa{" "}
            <Link
              href="/politica-de-cookies/"
              className="text-[#D4AF37] underline hover:text-[#FFFFFF]"
            >
              Declaração de Cookies
            </Link>.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button
            id="lgpd-accept-btn"
            type="button"
            onClick={handleAccept}
            className="w-full md:w-auto text-[10px] uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-6 py-2.5 font-medium hover:bg-[#FFFFFF] transition-colors focus:outline-none focus:ring-1 focus:ring-[#FFFFFF] whitespace-nowrap"
          >
            Ciente e Concordo
          </button>
        </div>
      </div>
    </div>
  );
}
