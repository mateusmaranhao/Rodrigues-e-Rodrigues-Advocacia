"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/site-data";

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="whatsapp-float-container"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      {/* Desktop Tooltip */}
      <div
        id="whatsapp-tooltip"
        role="tooltip"
        className={`hidden md:block bg-[#0A0A0A] text-[#E5E5E5] text-[11px] font-sans tracking-wide py-2 px-3.5 border border-[#333333] shadow-xl pointer-events-none transition-all duration-200 ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-[#FFFFFF] font-medium">Atendimento Direto:</span>
          <span className="text-[#D4AF37]">{SITE_CONFIG.contact.phoneDisplay}</span>
        </div>
      </div>

      {/* Official WhatsApp Button */}
      <a
        id="whatsapp-float-button"
        href={SITE_CONFIG.contact.whatsappUrlWithMessage(
          "Olá, gostaria de agendar uma consulta jurídica institucional."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Rodrigues & Rodrigues Advocacia pelo WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-[#FFFFFF] rounded-full shadow-2xl transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] focus:ring-offset-[#000000]"
      >
        {/* Subtle Luxury Gold Ring Accent */}
        <span
          className="absolute -inset-1 rounded-full border border-[#D4AF37]/50 pointer-events-none group-hover:border-[#D4AF37] transition-colors"
          aria-hidden="true"
        />

        {/* Authentic WhatsApp SVG Logo */}
        <svg
          className="w-7 h-7 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.58 20.15 9.14 19.76 7.89 19.02L7.58 18.84L4.47 19.66L5.3 16.63L5.1 16.31C4.29 15.02 3.86 13.51 3.86 11.92C3.86 7.41 7.54 3.73 12.05 3.73C14.23 3.73 16.29 4.58 17.84 6.13C19.39 7.68 20.24 9.74 20.24 11.92C20.23 16.44 16.56 20.15 12.05 20.15ZM16.54 14.39C16.29 14.27 15.08 13.67 14.85 13.59C14.63 13.51 14.46 13.47 14.3 13.71C14.13 13.96 13.66 14.51 13.51 14.68C13.37 14.85 13.22 14.87 12.98 14.75C12.73 14.63 11.93 14.37 10.99 13.53C10.25 12.87 9.75 12.06 9.61 11.81C9.46 11.57 9.6 11.44 9.72 11.32C9.83 11.21 9.97 11.03 10.09 10.89C10.21 10.74 10.25 10.64 10.33 10.48C10.42 10.31 10.37 10.17 10.31 10.05C10.25 9.93 9.76 8.73 9.56 8.24C9.36 7.76 9.16 7.82 9.01 7.81C8.87 7.81 8.7 7.81 8.54 7.81C8.37 7.81 8.1 7.87 7.87 8.12C7.65 8.37 7.01 8.96 7.01 10.18C7.01 11.39 7.9 12.56 8.02 12.73C8.15 12.89 9.77 15.39 12.25 16.46C12.84 16.72 13.3 16.87 13.66 16.99C14.25 17.18 14.79 17.15 15.22 17.09C15.7 17.02 16.7 16.49 16.91 15.91C17.12 15.33 17.12 14.83 17.05 14.73C16.99 14.63 16.83 14.51 16.54 14.39Z" />
        </svg>
      </a>
    </div>
  );
}
