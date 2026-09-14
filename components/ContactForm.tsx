"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    assunto: "Assessoria Jurídica e Empresarial",
    mensagem: "",
    lgpdConsent: false,
    // Honeypot field (hidden from screen readers & visual users)
    website_hp: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [redirectWhatsappUrl, setRedirectWhatsappUrl] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.nome.trim()) {
      errs.nome = "Por favor, informe seu nome completo.";
    }
    if (!formData.telefone.trim() || formData.telefone.trim().length < 8) {
      errs.telefone = "Por favor, informe um telefone ou WhatsApp para retorno.";
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      errs.email = "Por favor, informe um endereço de e-mail válido.";
    }
    if (!formData.mensagem.trim()) {
      errs.mensagem = "Por favor, descreva sucintamente sua demanda.";
    }
    if (!formData.lgpdConsent) {
      errs.lgpdConsent =
        "É necessária a confirmação de consentimento para o contato.";
    }
    // Spam check
    if (formData.website_hp) {
      errs.spam = "Detecção de submissão automatizada.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Format message for direct WhatsApp connection
    const textMsg = `Olá, Rodrigues & Rodrigues Advocacia.\n\n` +
      `*Solicitação de Atendimento Institucional*\n` +
      `• Nome: ${formData.nome}\n` +
      `• Telefone: ${formData.telefone}\n` +
      `• E-mail: ${formData.email}\n` +
      `• Assunto: ${formData.assunto}\n\n` +
      `*Resumo da Demanda:*\n${formData.mensagem}`;

    const waUrl = SITE_CONFIG.contact.whatsappUrlWithMessage(textMsg);
    setRedirectWhatsappUrl(waUrl);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      assunto: "Assessoria Jurídica e Empresarial",
      mensagem: "",
      lgpdConsent: false,
      website_hp: "",
    });
    setErrors({});
  };

  return (
    <div
      id="contact-form-wrapper"
      className="border border-[#2A2A2A] bg-[#050505] p-6 sm:p-10 shadow-2xl relative"
    >
      {submitted ? (
        <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
          <div className="w-12 h-12 mx-auto rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl text-[#FFFFFF]">
              Solicitação Registrada
            </h3>
            <p className="text-xs sm:text-sm text-[#CCCCCC] font-light max-w-md mx-auto leading-relaxed">
              Obrigado, <strong className="text-[#FFFFFF]">{formData.nome}</strong>. Para garantir agilidade e sigilo profissional, você pode iniciar o contato direto com nosso escritório agora mesmo via WhatsApp.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="submit-whatsapp-redirect"
              href={redirectWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] bg-[#D4AF37] text-[#000000] px-8 py-3.5 font-medium hover:bg-[#FFFFFF] transition-colors"
            >
              <span>Abrir WhatsApp com sua Mensagem</span>
              <span>→</span>
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="text-xs uppercase tracking-[0.14em] text-[#AAAAAA] hover:text-[#FFFFFF] py-2 transition-colors underline decoration-[#444444]"
            >
              Enviar outro formulário
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot anti-spam */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_hp">Não preencha este campo:</label>
            <input
              type="text"
              id="website_hp"
              name="website_hp"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website_hp}
              onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
            />
          </div>

          {errors.spam && (
            <div className="p-3 bg-red-950/40 border border-red-800 text-red-200 text-xs">
              {errors.spam}
            </div>
          )}

          {/* Nome */}
          <div>
            <label
              htmlFor="form-nome"
              className="block text-[11px] uppercase tracking-[0.14em] text-[#E5E5E5] mb-1.5 font-medium"
            >
              Nome Completo <span className="text-[#D4AF37]">*</span>
            </label>
            <input
              type="text"
              id="form-nome"
              name="nome"
              required
              aria-required="true"
              aria-invalid={!!errors.nome}
              aria-describedby={errors.nome ? "form-nome-error" : undefined}
              value={formData.nome}
              onChange={(e) => {
                setFormData({ ...formData, nome: e.target.value });
                if (errors.nome) setErrors({ ...errors, nome: "" });
              }}
              placeholder="Ex.: Dr. Roberto Marinho ou Maria Oliveira"
              className="w-full bg-[#000000] border border-[#333333] px-3.5 py-3 text-xs text-[#FFFFFF] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            {errors.nome && (
              <p id="form-nome-error" className="mt-1 text-[11px] text-[#f87171]">
                {errors.nome}
              </p>
            )}
          </div>

          {/* Telefone e E-mail em Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="form-telefone"
                className="block text-[11px] uppercase tracking-[0.14em] text-[#E5E5E5] mb-1.5 font-medium"
              >
                Telefone / WhatsApp <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="tel"
                id="form-telefone"
                name="telefone"
                required
                aria-required="true"
                aria-invalid={!!errors.telefone}
                aria-describedby={errors.telefone ? "form-telefone-error" : undefined}
                value={formData.telefone}
                onChange={(e) => {
                  setFormData({ ...formData, telefone: e.target.value });
                  if (errors.telefone) setErrors({ ...errors, telefone: "" });
                }}
                placeholder="(19) 99999-9999"
                className="w-full bg-[#000000] border border-[#333333] px-3.5 py-3 text-xs text-[#FFFFFF] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              {errors.telefone && (
                <p id="form-telefone-error" className="mt-1 text-[11px] text-[#f87171]">
                  {errors.telefone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="form-email"
                className="block text-[11px] uppercase tracking-[0.14em] text-[#E5E5E5] mb-1.5 font-medium"
              >
                E-mail Profissional <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="email"
                id="form-email"
                name="email"
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "form-email-error" : undefined}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                placeholder="seu.nome@empresa.com.br"
                className="w-full bg-[#000000] border border-[#333333] px-3.5 py-3 text-xs text-[#FFFFFF] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              {errors.email && (
                <p id="form-email-error" className="mt-1 text-[11px] text-[#f87171]">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Assunto */}
          <div>
            <label
              htmlFor="form-assunto"
              className="block text-[11px] uppercase tracking-[0.14em] text-[#E5E5E5] mb-1.5 font-medium"
            >
              Assunto da Consulta <span className="text-[#D4AF37]">*</span>
            </label>
            <select
              id="form-assunto"
              name="assunto"
              value={formData.assunto}
              onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
              className="w-full bg-[#000000] border border-[#333333] px-3.5 py-3 text-xs text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] transition-colors"
            >
              <option value="Assessoria Jurídica e Empresarial">
                Assessoria Jurídica e Empresarial
              </option>
              <option value="Direito Civil e Contratos">Direito Civil e Contratos</option>
              <option value="Consultoria Preventiva e Compliance">
                Consultoria Preventiva e Compliance
              </option>
              <option value="Outra Demanda Pontual">Outra Demanda Pontual</option>
            </select>
          </div>

          {/* Mensagem */}
          <div>
            <label
              htmlFor="form-mensagem"
              className="block text-[11px] uppercase tracking-[0.14em] text-[#E5E5E5] mb-1.5 font-medium"
            >
              Resumo da Demanda ou Situação <span className="text-[#D4AF37]">*</span>
            </label>
            <textarea
              id="form-mensagem"
              name="mensagem"
              rows={4}
              required
              aria-required="true"
              aria-invalid={!!errors.mensagem}
              aria-describedby={errors.mensagem ? "form-mensagem-error" : undefined}
              value={formData.mensagem}
              onChange={(e) => {
                setFormData({ ...formData, mensagem: e.target.value });
                if (errors.mensagem) setErrors({ ...errors, mensagem: "" });
              }}
              placeholder="Descreva de maneira sucinta a questão para direcionamento da consulta..."
              className="w-full bg-[#000000] border border-[#333333] px-3.5 py-3 text-xs text-[#FFFFFF] placeholder-[#666666] focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            {errors.mensagem && (
              <p id="form-mensagem-error" className="mt-1 text-[11px] text-[#f87171]">
                {errors.mensagem}
              </p>
            )}
          </div>

          {/* Consentimento LGPD */}
          <div className="pt-2">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="form-lgpd"
                name="lgpdConsent"
                required
                aria-required="true"
                checked={formData.lgpdConsent}
                onChange={(e) => {
                  setFormData({ ...formData, lgpdConsent: e.target.checked });
                  if (errors.lgpdConsent) setErrors({ ...errors, lgpdConsent: "" });
                }}
                className="mt-1 w-4 h-4 accent-[#D4AF37] bg-[#000000] border-[#333333] rounded focus:ring-[#D4AF37]"
              />
              <label htmlFor="form-lgpd" className="text-[11px] text-[#A0A0A0] leading-relaxed">
                Declaro que li e concordo com a{" "}
                <Link
                  href="/politica-de-privacidade/"
                  className="text-[#D4AF37] underline hover:text-[#FFFFFF]"
                  target="_blank"
                >
                  Política de Privacidade
                </Link>
                , autorizando o tratamento destes dados estritamente para retorno profissional deste contato.
              </label>
            </div>
            {errors.lgpdConsent && (
              <p className="mt-1.5 text-[11px] text-[#f87171] pl-7">
                {errors.lgpdConsent}
              </p>
            )}
          </div>

          {/* Botão de Envio */}
          <div className="pt-4">
            <button
              type="submit"
              id="form-submit-btn"
              className="w-full text-xs uppercase tracking-[0.16em] bg-[#FFFFFF] text-[#000000] py-3.5 font-medium hover:bg-[#D4AF37] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              Enviar Mensagem
            </button>
            <p className="text-[10px] text-[#777777] text-center mt-3 uppercase tracking-wider">
              Sigilo profissional resguardado nos termos do Estatuto da Advocacia
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
