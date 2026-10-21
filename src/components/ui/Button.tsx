import { cn } from "@/lib/utils";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { whatsappLink, telLink } from "@/lib/siteConfig";
import type { ReactNode } from "react";

type Variant = "gold" | "green" | "whatsapp" | "ghost-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-heading text-sm font-bold transition-all duration-200 active:scale-95 min-h-[48px]";

const styles: Record<Variant, string> = {
  gold: "btn-gold",
  green: "btn-green",
  whatsapp: "btn-whatsapp",
  "ghost-light": "btn-ghost-light",
};

export function Button({
  variant = "gold",
  href,
  icon,
  className,
  children,
  onClick,
  type,
}: {
  variant?: Variant;
  href?: string;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls = cn(base, styles[variant], className);
  const inner = (
    <>
      {children}
      {icon}
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

export function WhatsAppButton({
  message,
  children = "WhatsApp Us",
  className,
  icon = true,
}: {
  message?: string;
  children?: ReactNode;
  className?: string;
  icon?: boolean;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, styles.whatsapp, className)}
    >
      {children}
      {icon && <MessageCircle size={18} />}
    </a>
  );
}

export function CallButton({
  phone,
  children = "Call",
  className,
}: {
  phone: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a href={telLink(phone)} className={cn(base, styles.green, className)}>
      <Phone size={18} />
      {children}
    </a>
  );
}

export function ArrowCta({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 font-heading text-sm font-bold text-blue-500 hover:text-navy-700",
        className
      )}
    >
      {children}
      <ArrowRight
        size={16}
        className="transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}