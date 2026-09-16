import ImageWithFallback from "./ImageWithFallback";
import { IconAI, IconClock, IconHeart, IconMirror } from "./icons";

const BENEFITS = [
  {
    icon: IconClock,
    title: "PRODUCTIVIDAD\nCON PROPÓSITO",
    text: "Define prioridades, gestiona tu tiempo y logra más con menos estrés.",
    image: "/images/benefit-productividad.png",
  },
  {
    icon: IconMirror,
    title: "AUTOIMAGEN\nESTRATÉGICA",
    text: "Fortalece tu confianza, proyecta tu esencia y potencia tu presencia profesional.",
    image: "/images/benefit-autoimagen.png",
  },
  {
    icon: IconAI,
    title: "IA APLICADA",
    text: "Descubre cómo la inteligencia artificial puede simplificar tus tareas y optimizar tu día a día.",
    image: "/images/benefit-ia.png",
  },
  {
    icon: IconHeart,
    title: "BIENESTAR Y\nRECONEXIÓN",
    text: "Herramientas prácticas para más energía, equilibrio y una vida más plena.",
    image: "/images/benefit-bienestar.png",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, text, image }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-2xl border border-pme-blue-dark/10 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg hover:shadow-pme-blue-dark/10"
            >
              <div className="relative h-44 w-full sm:h-48">
                <ImageWithFallback
                  src={image}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  fallbackLabel="Agregar foto aquí"
                />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-pme-magenta shadow-md">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 px-5 py-5">
                <h3 className="whitespace-pre-line font-heading text-base font-extrabold leading-snug text-pme-blue-dark">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-pme-text/85">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
