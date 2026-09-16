import { VIMEO_VIDEO_ID, VIMEO_VIDEO_HASH } from "@/lib/config";
import WhatsAppButton from "./WhatsAppButton";
import { IconCheck } from "./icons";

const BULLETS = [
  "Productividad y gestión del tiempo",
  "Autoimagen, comunicación y presencia",
  "Bienestar, respiración y reconexión",
];

export default function VideoSection() {
  return (
    <section id="video" className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-2xl font-extrabold leading-tight text-pme-blue-dark sm:text-3xl lg:text-[2.1rem]">
          TE INVITAMOS AL{" "}
          <span className="text-pme-magenta-cta">PROFESSIONAL MOM EXPERIENCES</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-pme-text sm:text-lg">
          Aquí irás más allá de un reconocimiento. Te mostramos cómo esta experiencia
          transforma, inspira y brinda herramientas reales para la vida profesional y
          personal.
        </p>

        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl shadow-xl shadow-pme-blue-dark/15">
          <iframe
            src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?h=${VIMEO_VIDEO_HASH}`}
            title="Video: Professional Mom Experiences"
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <ul className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
          {BULLETS.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-pme-text">
              <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-pme-magenta-cta" />
              <span className="text-base font-medium">{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton messageKey="general" className="w-full sm:w-auto">
            Ver disponibilidad
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
