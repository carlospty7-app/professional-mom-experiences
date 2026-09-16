export const WHATSAPP_NUMBER = "50769800415";

export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WHATSAPP_MESSAGES = {
  general:
    "Hola, me interesa conocer más sobre Professional Mom Experiences para mi empresa. Quisiera información sobre disponibilidad y opciones.",
  essentials:
    "Hola, me interesa Professional Mom Essentials Experience. Quisiera conocer disponibilidad y más información.",
  premium:
    "Hola, me interesa Professional Mom Premium Experience. Quisiera conocer disponibilidad y más información.",
  signature:
    "Hola, me interesa Professional Mom Signature Experience. Quisiera conocer disponibilidad y más información.",
} as const;

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES;

export function getWhatsAppUrl(messageKey: WhatsAppMessageKey = "general") {
  const message = WHATSAPP_MESSAGES[messageKey];
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const VIMEO_VIDEO_ID = "1227493781";
export const VIMEO_VIDEO_HASH = "87c14a1167";
