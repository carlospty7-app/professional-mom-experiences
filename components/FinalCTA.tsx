import WhatsAppButton from "./WhatsAppButton";

export default function FinalCTA() {
  return (
    <section id="contacto" className="pme-gradient px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[2.3rem]">
          CONVIERTE LA CELEBRACIÓN
          <br />
          EN UNA EXPERIENCIA QUE DEJA HUELLA
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
          La agenda para noviembre y los primeros días de diciembre es limitada.
          <br className="hidden sm:block" /> Escríbenos por WhatsApp y conversemos sobre
          la opción ideal para tu empresa.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton messageKey="general" variant="outline-light" className="w-full sm:w-auto">
            Quiero llevarlo a mi empresa
          </WhatsAppButton>
        </div>
        <div className="mt-9 border-t border-white/20 pt-6">
          <p className="text-base font-semibold text-white">
            Mirelis Espinosa + Kristela Degay
          </p>
          <p className="mt-1 text-sm text-white/80">
            Business Academy + Tu Imagen Estratégica
          </p>
        </div>
      </div>
    </section>
  );
}
