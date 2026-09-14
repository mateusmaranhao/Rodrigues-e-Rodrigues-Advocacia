import React from "react";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/site-data";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems = [{ label: "Início", href: "/" }, ...items];
  const schema = getBreadcrumbSchema(
    fullItems.map((item) => ({ name: item.label, url: item.href }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Navegação Estrutural (Breadcrumb)"
        className="py-3 text-[11px] uppercase tracking-[0.14em] text-[#888888]"
      >
        <ol className="flex flex-wrap items-center space-x-2" role="list">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={item.href} className="flex items-center space-x-2">
                {index > 0 && <span className="text-[#444444]" aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="text-[#D4AF37] font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[#AAAAAA] hover:text-[#FFFFFF] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
