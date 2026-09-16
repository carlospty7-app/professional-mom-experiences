import { getWhatsAppUrl } from "@/lib/config";
import { IconWhatsApp } from "./icons";

export default function WhatsAppFloating() {
  return (
    <a
      href={getWhatsAppUrl("general")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <IconWhatsApp className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
