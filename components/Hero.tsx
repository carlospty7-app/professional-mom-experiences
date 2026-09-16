import ImageWithFallback from "./ImageWithFallback";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[560px] items-center overflow-hidden sm:min-h-[600px] lg:min-h-[660px]"
    >
      <ImageWithFallback
        src="/images/hero-mom-daughter.png"
        alt="Madre profesional trabajando abrazada por su hija"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 22%" }}
        fallbackLabel="Agregar foto aquí (madre e hija)"
      />

      {/* Mobile / tablet scrim: light wash from top so headline stays legible, fading out by mid-image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(238,243,255,0.96) 0%, rgba(238,243,255,0.9) 38%, rgba(238,243,255,0.55) 60%, rgba(238,243,255,0.15) 78%, rgba(238,243,255,0) 100%)",
        }}
      />

      {/* Desktop scrim: light wash from the left so text sits over it, photo stays clear on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(238,243,255,0.95) 0%, rgba(238,243,255,0.88) 32%, rgba(238,243,255,0.45) 55%, rgba(238,243,255,0) 78%)",
        }}
      />

      <span
        aria-hidden="true"
        className="pme-script absolute right-5 top-5 hidden -rotate-3 text-xl text-pme-violet drop-shadow-sm sm:right-8 sm:top-8 sm:block sm:text-2xl"
      >
        Mujeres que impulsan el cambio ♥
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-bold tracking-[0.2em] text-pme-magenta-cta sm:text-sm">
            EXPERIENCIA CORPORATIVA · DÍA DE LA MADRE
          </p>
          <h1 className="mt-4 font-heading text-[2.1rem] font-extrabold leading-[1.12] text-pme-blue-dark sm:text-5xl lg:text-[3.2rem]">
            RECONOCE A LA{" "}
            <span className="text-pme-magenta-cta">MUJER COMPLETA</span>{" "}
            DETRÁS DE LA PROFESIONAL
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-pme-text sm:text-lg">
            Una experiencia corporativa que integra productividad, gestión del tiempo,
            inteligencia artificial, autoimagen y bienestar para ayudar a las madres de
            tu organización a recuperar tiempo, energía y confianza.
          </p>
          <div className="mt-8">
            <WhatsAppButton messageKey="general" className="w-full sm:w-auto">
              Solicitar disponibilidad por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
