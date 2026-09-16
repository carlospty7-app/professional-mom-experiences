import ImageWithFallback from "./ImageWithFallback";
import WhatsAppButton from "./WhatsAppButton";
import { IconCheck, IconDiamond, IconStar, IconUsers } from "./icons";
import type { WhatsAppMessageKey } from "@/lib/config";

const PLANS: Array<{
  icon: typeof IconUsers;
  name: string;
  subtitle: string;
  bullets: string[];
  cta: string;
  messageKey: WhatsAppMessageKey;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}> = [
  {
    icon: IconUsers,
    name: "ESSENTIALS",
    subtitle: "Conferencia de alto impacto",
    bullets: [
      "Hasta 100 personas",
      "2 a 2.5 horas",
      "Contenido inspirador y práctico",
      "Productividad, autoimagen, IA y bienestar",
      "Pausa activa con Maru Healthy para liberar tensión",
      "Incluye guía digital, certificado y regalos de marcas aliadas",
      "Te llevas una decisión concreta para aplicar de inmediato",
    ],
    cta: "Solicitar Essentials",
    messageKey: "essentials",
    image: "/images/plans-group-photo.jpg",
    imageAlt:
      "Grupo de mujeres profesionales sosteniendo sus certificados de Professional Mom Experiences",
  },
  {
    icon: IconStar,
    name: "PREMIUM",
    subtitle: "Conferencia-taller",
    bullets: [
      "Hasta 40 personas",
      "2.5 horas",
      "Más aplicación y participación",
      "Incluye herramientas para llevar a la acción",
      "Diagnóstico de fugas de tiempo y mapa de delegación",
      "Yoga y respiración consciente con Maru Healthy",
      "Te llevas un Workbook Premium y un Plan de 7 días",
    ],
    cta: "Solicitar Premium",
    messageKey: "premium",
    featured: true,
  },
  {
    icon: IconDiamond,
    name: "SIGNATURE",
    subtitle: "Experiencia boutique",
    bullets: [
      "Hasta 12 personas",
      "Hasta 3 horas",
      "Mayor personalización",
      "Acompañamiento más cercano y profundo",
      "Retroalimentación personal en vivo durante el taller",
      "Yoga, respiración consciente y reconexión corporal",
      "Te llevas una Hoja de Ruta Signature a 90 días",
    ],
    cta: "Solicitar Signature",
    messageKey: "signature",
  },
];

export default function ExperiencePlans() {
  return (
    <section id="planes" className="bg-pme-blue-light px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-pme-magenta-cta sm:text-sm">
            ELIGE LA EXPERIENCIA IDEAL
          </p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-pme-blue-dark sm:text-3xl lg:text-[2.1rem]">
            TRES FORMATOS.
            <br />
            <span className="text-pme-magenta-cta">UN MISMO PROPÓSITO.</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {PLANS.map(
            ({ icon: Icon, name, subtitle, bullets, cta, messageKey, featured, image, imageAlt }) => (
              <article
                key={name}
                className={`flex flex-col rounded-3xl bg-white p-7 shadow-sm transition-shadow duration-200 hover:shadow-xl hover:shadow-pme-blue-dark/10 sm:first:col-span-2 sm:first:mx-auto sm:first:w-full lg:first:col-span-1 lg:first:mx-0 ${
                  featured
                    ? "border-2 border-pme-magenta-cta shadow-lg shadow-pme-magenta-cta/10 lg:-translate-y-2"
                    : "border border-pme-blue-dark/10"
                }`}
              >
                {featured && (
                  <span className="mb-3 w-fit rounded-full bg-pme-magenta-cta px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
                    Más elegido
                  </span>
                )}
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pme-lavender text-pme-magenta">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-xl font-extrabold text-pme-blue-dark">
                  {name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-pme-text/80">{subtitle}</p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-pme-text">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-pme-magenta-cta" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {image && (
                  <div
                    className="relative mt-5 w-full flex-1 overflow-hidden rounded-2xl"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={imageAlt ?? ""}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 360px, 90vw"
                      className="object-cover"
                      style={{ objectPosition: "center 30%" }}
                      fallbackLabel="Agregar foto aquí (grupo con certificados)"
                    />
                  </div>
                )}

                {!image && <div className="flex-1" />}

                <WhatsAppButton
                  messageKey={messageKey}
                  variant={featured ? "primary" : "secondary"}
                  className="mt-6 w-full"
                >
                  {cta}
                </WhatsAppButton>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
