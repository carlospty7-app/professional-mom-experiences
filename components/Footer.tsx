import { IconLeaf } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-pme-blue-dark px-5 py-10 text-center sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
          <IconLeaf className="h-5 w-5" />
        </span>
        <p className="font-heading text-lg font-bold text-white">
          Professional Mom Experiences
        </p>
        <p className="text-sm text-white/70">Día de la Madre 2026</p>
        <p className="text-sm text-white/70">Business Academy + Tu Imagen Estratégica</p>
        <p className="mt-4 text-xs text-white/50">
          © {new Date().getFullYear()} Professional Mom Experiences. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
