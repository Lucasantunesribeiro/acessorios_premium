import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BUSINESS_CITY,
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_WHATSAPP,
  LUCAS_WHATSAPP,
} from "@/lib/constants";
import { buildWhatsappUrl } from "@/lib/whatsapp";

export const SiteFooter = () => {
  const whatsappUrl = buildWhatsappUrl(
    BUSINESS_WHATSAPP,
    "Olá! Quero tirar dúvidas sobre o catálogo premium."
  );
  const lucasUrl = buildWhatsappUrl(
    LUCAS_WHATSAPP,
    "Olá, quero um site igual ao demo Acessórios Premium."
  );

  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="w-full px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div className="space-y-5">
            <div>
              <p className="font-display text-2xl font-semibold">{BUSINESS_NAME}</p>
              <p className="text-caption mt-2">Atelier de acessórios</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Curadoria autoral com peças de impacto e atendimento dedicado do
              início ao fim. Receba recomendações personalizadas e fotos reais
              pelo WhatsApp.
            </p>
            <Button asChild size="lg" className="bg-foreground text-background">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Falar com concierge
              </a>
            </Button>
          </div>
          <div className="text-sm">
            <p className="text-caption">Coleções</p>
            <div className="mt-4 flex flex-col gap-3 text-foreground">
              <Link href="/catalogo?categoria=relogios">Relógios</Link>
              <Link href="/catalogo?categoria=oculos">Óculos</Link>
              <Link href="/catalogo?categoria=bolsas">Bolsas</Link>
              <Link href="/catalogo?categoria=joias">Joias</Link>
              <Link href="/catalogo">Catálogo completo</Link>
            </div>
          </div>
          <div className="text-sm">
            <p className="text-caption">Contato</p>
            <div className="mt-4 space-y-3 text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden /> {BUSINESS_CITY}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden /> {BUSINESS_EMAIL}
              </p>
            </div>
            <div className="mt-6 border border-foreground/15 bg-background/80 p-4">
              <p className="text-caption">WhatsApp direto</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Respostas rápidas e confirmação de estoque em tempo real.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-foreground/10">
        <div className="flex w-full flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground md:flex-row">
          <p>© 2025 Acessórios Premium. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-caption">Portfólio</span>
            <Button asChild variant="outline">
              <a href={lucasUrl} target="_blank" rel="noreferrer">
                Quero um igual
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
