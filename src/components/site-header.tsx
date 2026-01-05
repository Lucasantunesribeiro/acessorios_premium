import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_NAME, BUSINESS_WHATSAPP } from "@/lib/constants";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contato", label: "Contato" },
];

export const SiteHeader = () => {
  const whatsappUrl = buildWhatsappUrl(
    BUSINESS_WHATSAPP,
    "Olá! Quero atendimento premium para escolher um acessório."
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/95 backdrop-blur">
      <div className="border-b border-foreground/10">
        <div className="flex w-full flex-wrap items-center justify-between gap-2 px-6 py-2 text-[0.6rem] uppercase tracking-[0.45em] text-muted-foreground">
          <span>Entrega expressa</span>
          <span className="hidden sm:inline">Curadoria autoral</span>
          <span>Atendimento WhatsApp</span>
        </div>
      </div>
      <div className="flex w-full items-center justify-between px-6 py-5">
        <nav className="hidden items-center gap-8 text-[0.62rem] uppercase tracking-[0.35em] text-muted-foreground lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="text-center">
          <span className="font-display text-3xl font-semibold leading-none">
            {BUSINESS_NAME}
          </span>
          <span className="mt-1 block text-[0.55rem] uppercase tracking-[0.6em] text-muted-foreground">
            Joias & Acessórios
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden lg:inline-flex"
          >
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Concierge
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="lg:hidden">
            <a href={whatsappUrl} aria-label="Falar no WhatsApp">
              <Phone className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
