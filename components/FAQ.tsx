"use client";

import { useState } from "react";
import ImageWithFallback from "./ImageWithFallback";
import { IconPlus } from "./icons";

const FAQS = [
  {
    question: "¿A quién va dirigida esta experiencia?",
    answer:
      "A madres profesionales que forman parte de tu organización y que desean herramientas prácticas para gestionar mejor su tiempo, energía, imagen y bienestar.",
  },
  {
    question: "¿Se puede adaptar al tamaño de mi empresa?",
    answer:
      "Sí. Contamos con tres formatos diseñados para diferentes tamaños de grupo y objetivos.",
  },
  {
    question: "¿Las experiencias pueden ser presenciales?",
    answer: "Sí. La experiencia puede adaptarse según las necesidades de la organización.",
  },
  {
    question: "¿Cómo solicito disponibilidad?",
    answer:
      "Escríbenos directamente por WhatsApp y te orientaremos sobre la opción más adecuada.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-pme-magenta-cta sm:text-sm">
            ¿AÚN TIENES DUDAS?
          </p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-pme-blue-dark sm:text-3xl">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-pme-text/85">
            Resolvemos las dudas más comunes para ayudarte a evaluar si esta experiencia
            es para tu organización.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <div className="flex flex-col gap-3">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-pme-blue-dark/10 bg-pme-blue-light/40"
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-base font-semibold text-pme-blue-dark">
                        {item.question}
                      </span>
                      <IconPlus
                        className={`h-5 w-5 shrink-0 text-pme-magenta-cta transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-200 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-pme-text/90">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="relative hidden w-full overflow-hidden rounded-3xl shadow-lg shadow-pme-blue-dark/10 lg:block"
            style={{ aspectRatio: "4 / 5" }}
          >
            <ImageWithFallback
              src="/images/faq-workspace.jpg"
              alt=""
              fill
              loading="lazy"
              sizes="40vw"
              className="object-cover"
              fallbackLabel="Agregar foto aquí"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
