import WhatsAppButton from "./WhatsAppButton";
import { IconAudience, IconBattery, IconBuilding, IconTarget, IconLeaf } from "./icons";

const POINTS = [
  {
    icon: IconAudience,
    text: "Las madres de tu organización sostienen múltiples roles y responsabilidades.",
  },
  {
    icon: IconBattery,
    text: "La sobrecarga impacta su energía, enfoque y bienestar.",
  },
  {
    icon: IconTarget,
    text: "Quieren herramientas reales, no solo inspiración momentánea.",
  },
  {
    icon: IconBuilding,
    text: "Buscas una experiencia útil, memorable y alineada con tu cultura.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-pme-lavender px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <IconLeaf
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-8 h-28 w-28 -rotate-12 text-pme-violet/15 sm:h-36 sm:w-36"
      />
      <span
        aria-hidden="true"
        className="pme-script pointer-events-none absolute right-6 top-6 hidden rotate-3 text-xl text-pme-magenta/70 sm:block sm:text-2xl"
      >
        Personas más felices
        <br />
        Empresas más humanas ♥
      </span>

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-2xl font-extrabold leading-tight text-pme-blue-dark sm:text-3xl">
          TAL VEZ ESTO TE SUENE FAMILIAR
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
          {POINTS.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-4 rounded-2xl bg-white px-5 py-5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pme-lavender text-pme-magenta">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-base leading-relaxed text-pme-text">{text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg font-semibold leading-relaxed text-pme-blue-dark">
          Si esto resuena con tu empresa,
          <br className="hidden sm:block" /> esta experiencia fue diseñada para ustedes.
        </p>

        <div className="mt-6">
          <WhatsAppButton messageKey="general" className="w-full sm:w-auto">
            Hablar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
