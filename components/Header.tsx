"use client";

import { useEffect, useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import { IconLeaf } from "./icons";

const NAV_LINKS = [
  { label: "Experiencias", href: "#video" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Expertas", href: "#expertas" },
  { label: "Planes", href: "#planes" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur transition-shadow duration-200 ${
        scrolled ? "shadow-md shadow-pme-blue-dark/5" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pme-lavender text-pme-magenta">
            <IconLeaf className="h-5 w-5" />
          </span>
          <span className="font-heading text-[0.95rem] font-bold leading-tight text-pme-blue-dark">
            Professional
            <br />
            <span className="text-pme-magenta">Mom Experiences</span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-pme-text transition-colors hover:text-pme-magenta-cta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsAppButton
          messageKey="general"
          className="shrink-0 px-3.5 py-2.5 text-xs whitespace-nowrap sm:px-5 sm:py-3"
          ariaLabel="Solicitar por WhatsApp"
        >
          <span className="hidden sm:inline">Solicitar por WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </WhatsAppButton>
      </div>
    </header>
  );
}
