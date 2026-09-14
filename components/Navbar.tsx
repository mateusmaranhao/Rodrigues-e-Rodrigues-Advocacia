"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/site-data";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu upon route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const navLinks = [
    { label: "Início", href: "/" },
    { label: "O Escritório", href: "/sobre/" },
  ];

  const serviceSublinks = [
    { label: "Todos os Serviços", href: "/servicos/" },
    {
      label: "Assessoria Jurídica e Empresarial",
      href: "/servicos/assessoria-juridica-e-empresarial/",
    },
    {
      label: "Direito Civil e Imobiliário",
      href: "/servicos/direito-civil-imobiliario-e-obrigacoes/",
    },
    {
      label: "Consultoria Preventiva",
      href: "/servicos/consultoria-juridica-preventiva/",
    },
  ];

  const isServicesActive =
    pathname === "/servicos/" ||
    pathname.startsWith("/servicos/assessoria-juridica-e-empresarial");

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#000000] border-b border-[#222222] shadow-2xl py-3.5"
          : "bg-[#000000]/95 backdrop-blur-md border-b border-[#181818] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          id="nav-logo"
          className="group block text-left focus:outline-none focus:ring-1 focus:ring-[#D4AF37] pr-4 py-1"
          aria-label="Rodrigues e Rodrigues Advocacia - Página Inicial"
        >
          <span className="block font-serif text-lg sm:text-xl tracking-wider text-[#FFFFFF] font-normal uppercase transition-colors group-hover:text-[#D4AF37]">
            Rodrigues <span className="text-[#D4AF37] font-light">&</span> Rodrigues
          </span>
          <span className="block text-[9px] uppercase tracking-[0.26em] text-[#E5E5E5] opacity-80 mt-0.5 font-sans">
            {SITE_CONFIG.tagline} • Indaiatuba/SP
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          id="desktop-nav"
          className="hidden lg:flex items-center space-x-8"
          aria-label="Navegação Principal"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.14em] transition-colors duration-200 py-1 border-b ${
                  isActive
                    ? "text-[#D4AF37] border-[#D4AF37]"
                    : "text-[#E5E5E5] border-transparent hover:text-[#FFFFFF]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Real Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="services-dropdown-btn"
              type="button"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={servicesDropdownOpen}
              className={`inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] transition-colors duration-200 py-1 border-b focus:outline-none focus:ring-1 focus:ring-[#D4AF37] ${
                isServicesActive
                  ? "text-[#D4AF37] border-[#D4AF37]"
                  : "text-[#E5E5E5] border-transparent hover:text-[#FFFFFF]"
              }`}
            >
              <span>Serviços</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-[#D4AF37]" : "text-[#E5E5E5]"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu Container */}
            {servicesDropdownOpen && (
              <div
                id="services-dropdown-menu"
                role="menu"
                aria-label="Menu de Serviços"
                className="absolute left-0 mt-2 w-72 bg-[#0A0A0A] border border-[#2A2A2A] shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <div className="px-4 py-2 border-b border-[#1A1A1A]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium block">
                    Áreas de Atuação
                  </span>
                </div>
                {serviceSublinks.map((sublink) => {
                  const isSubActive = pathname === sublink.href;
                  return (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      role="menuitem"
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`block px-4 py-3 text-xs transition-colors ${
                        isSubActive
                          ? "bg-[#141414] text-[#D4AF37] font-medium border-l-2 border-[#D4AF37]"
                          : "text-[#E5E5E5] hover:bg-[#141414] hover:text-[#FFFFFF]"
                      }`}
                    >
                      {sublink.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/contato/"
            className={`text-xs uppercase tracking-[0.14em] transition-colors duration-200 py-1 border-b ${
              pathname === "/contato/"
                ? "text-[#D4AF37] border-[#D4AF37]"
                : "text-[#E5E5E5] border-transparent hover:text-[#FFFFFF]"
            }`}
          >
            Contato
          </Link>
        </nav>

        {/* Action Button Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            id="nav-cta-whatsapp"
            href={SITE_CONFIG.contact.whatsappUrlWithMessage(
              "Olá, gostaria de agendar uma consulta institucional com o escritório."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs uppercase tracking-[0.15em] bg-transparent text-[#D4AF37] border border-[#D4AF37] px-5 py-2.5 hover:bg-[#D4AF37] hover:text-[#000000] transition-all duration-200"
          >
            Fale com o escritório
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#E5E5E5] p-2 hover:text-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            aria-label={mobileMenuOpen ? "Fechar Menu de Navegação" : "Abrir Menu de Navegação"}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-[#0A0A0A] border-b border-[#222222] px-6 py-6 space-y-4 animate-in fade-in duration-200"
        >
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-[0.15em] py-2 text-[#E5E5E5] hover:text-[#D4AF37]"
          >
            Início
          </Link>
          <Link
            href="/sobre/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-[0.15em] py-2 text-[#E5E5E5] hover:text-[#D4AF37]"
          >
            O Escritório
          </Link>

          {/* Mobile Services Accordion */}
          <div className="pt-2 border-t border-[#1A1A1A]">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-2">
              Serviços
            </span>
            <div className="pl-3 space-y-2.5">
              {serviceSublinks.map((sublink) => (
                <Link
                  key={sublink.href}
                  href={sublink.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs py-1 text-[#E5E5E5] hover:text-[#D4AF37]"
                >
                  {sublink.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contato/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-[0.15em] py-2 text-[#E5E5E5] hover:text-[#D4AF37] border-t border-[#1A1A1A]"
          >
            Contato
          </Link>

          <div className="pt-4 border-t border-[#222222]">
            <a
              href={SITE_CONFIG.contact.whatsappUrlWithMessage(
                "Olá, gostaria de falar com a equipe jurídica da Rodrigues & Rodrigues Advocacia."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-4 py-3 font-medium hover:bg-[#FFFFFF] transition-colors"
            >
              Falar pelo WhatsApp {SITE_CONFIG.contact.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
