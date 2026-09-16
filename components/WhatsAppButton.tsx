import { getWhatsAppUrl, type WhatsAppMessageKey } from "@/lib/config";
import { IconWhatsApp } from "./icons";

type Variant = "primary" | "secondary" | "outline-light" | "dark";

type WhatsAppButtonProps = {
  messageKey?: WhatsAppMessageKey;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  showIcon?: boolean;
  ariaLabel?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-pme-magenta-cta text-white shadow-lg shadow-pme-magenta-cta/30 hover:bg-[#b8099b] focus-visible:outline-pme-magenta-cta",
  secondary:
    "bg-white text-pme-blue-dark border-2 border-pme-blue-dark/15 hover:border-pme-magenta-cta hover:text-pme-magenta-cta focus-visible:outline-pme-blue-dark",
  "outline-light":
    "bg-white/95 text-pme-blue-dark hover:bg-white focus-visible:outline-white",
  dark: "bg-pme-blue-dark text-white hover:bg-pme-blue focus-visible:outline-pme-blue-dark",
};

export default function WhatsAppButton({
  messageKey = "general",
  children,
  variant = "primary",
  className = "",
  showIcon = true,
  ariaLabel,
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(messageKey)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer ${variantClasses[variant]} ${className}`}
    >
      {showIcon && <IconWhatsApp className="h-4 w-4 shrink-0" />}
      <span>{children}</span>
    </a>
  );
}
