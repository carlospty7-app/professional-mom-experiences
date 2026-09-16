import ImageWithFallback from "./ImageWithFallback";
import { IconLeaf } from "./icons";

export default function Experts() {
  return (
    <section id="expertas" className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-2xl font-extrabold leading-tight text-pme-blue-dark sm:text-3xl lg:text-[2.1rem]">
          DOS EXPERTAS. DOS MIRADAS.
          <br />
          <span className="text-pme-magenta-cta">UN MISMO PROPÓSITO.</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="flex flex-col overflow-hidden rounded-3xl border border-pme-blue-dark/10 shadow-sm sm:flex-row">
            <div className="relative h-64 w-full shrink-0 sm:h-auto sm:w-56">
              <ImageWithFallback
                src="/experts/mirelis.png"
                alt="Mirelis Espinosa"
                fill
                loading="lazy"
                sizes="(min-width: 640px) 224px, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 15%" }}
                fallbackLabel="Agregar foto aquí (Mirelis Espinosa)"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 px-6 py-6">
              <div>
                <h3 className="font-heading text-xl font-extrabold text-pme-blue-dark">
                  Mirelis Espinosa
                </h3>
                <p className="mt-1 text-sm font-semibold text-pme-magenta-cta">
                  Productividad, gestión del tiempo, delegación e IA aplicada
                </p>
              </div>
              <p className="text-sm leading-relaxed text-pme-text/90">
                Estratega de ventas, mentora, autora y conferencista con más de 19 años de
                experiencia, presencia en más de 11 países y más de USD 50 millones en
                ventas gestionadas.
              </p>
              <p className="text-sm leading-relaxed text-pme-text/90">
                Fundadora y CEO de Business Academy.
              </p>
              <BrandBadge label="BUSINESS ACADEMY" />
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-3xl border border-pme-blue-dark/10 shadow-sm sm:flex-row">
            <div className="relative h-64 w-full shrink-0 sm:h-auto sm:w-56">
              <ImageWithFallback
                src="/experts/kristela.jpg"
                alt="Kristela Degay"
                fill
                loading="lazy"
                sizes="(min-width: 640px) 224px, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 15%" }}
                fallbackLabel="Agregar foto aquí (Kristela Degay)"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 px-6 py-6">
              <div>
                <h3 className="font-heading text-xl font-extrabold text-pme-blue-dark">
                  Kristela Degay
                </h3>
                <p className="mt-1 text-sm font-semibold text-pme-magenta-cta">
                  Autoimagen, confianza, comunicación y presencia profesional
                </p>
              </div>
              <p className="text-sm leading-relaxed text-pme-text/90">
                Mentor-Coach en Autoimagen Estratégica y consultora certificada AICI CIC,
                con más de 5,000 horas de formación en color.
              </p>
              <p className="text-sm leading-relaxed text-pme-text/90">
                Fundadora y CEO de Tu Imagen Estratégica.
              </p>
              <BrandBadge label="TU IMAGEN ESTRATÉGICA" monogram="TE" />
            </div>
          </article>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 rounded-3xl bg-pme-blue-light px-6 py-6 sm:flex-row sm:gap-6">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
            <ImageWithFallback
              src="/experts/maru.jpg"
              alt="Maru Méndez"
              fill
              loading="lazy"
              sizes="96px"
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
              fallbackLabel="Foto"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-base leading-relaxed text-pme-blue-dark">
              Con la participación de <span className="font-bold">Maru Méndez</span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-pme-text/85">
              Yoga Teacher y Health Coach (Maru Healthy), integrando movimiento,
              respiración consciente y bienestar.
            </p>
          </div>
          <div className="shrink-0">
            <BrandBadge label="MARU HEALTHY" icon />
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandBadge({
  label,
  monogram,
  icon,
}: {
  label: string;
  monogram?: string;
  icon?: boolean;
}) {
  return (
    <div className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-pme-blue-dark/10 bg-white px-4 py-2 shadow-sm">
      {monogram ? (
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-pme-blue-dark text-[0.65rem] font-extrabold text-white">
          {monogram}
        </span>
      ) : icon ? (
        <IconLeaf className="h-4 w-4 text-pme-magenta" />
      ) : (
        <span className="h-2 w-2 rounded-full bg-pme-magenta" />
      )}
      <span className="font-heading text-[0.7rem] font-bold tracking-wide text-pme-blue-dark">
        {label}
      </span>
    </div>
  );
}
