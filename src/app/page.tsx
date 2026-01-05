import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BUSINESS_WHATSAPP } from "@/lib/constants";
import { faqs, products, testimonials } from "@/lib/content";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const categorySpotlight = [
  {
    title: "Relógios",
    href: "/catalogo?categoria=relogios",
    description: "Precisão com acabamento artesanal.",
    image: "/acessorios-premium/relogio-aurum.jpg",
  },
  {
    title: "Óculos",
    href: "/catalogo?categoria=oculos",
    description: "Assinatura moderna com proteção absoluta.",
    image: "/acessorios-premium/oculos-noir.jpg",
  },
  {
    title: "Bolsas",
    href: "/catalogo?categoria=bolsas",
    description: "Couro, textura e presença impecável.",
    image: "/acessorios-premium/bolsa-velluto.jpg",
  },
  {
    title: "Joias",
    href: "/catalogo?categoria=joias",
    description: "Brilho sutil para ocasiões memoráveis.",
    image: "/acessorios-premium/joia-aurora.jpg",
  },
];

const categoryLayout = ["md:row-span-2", "", "", ""];

export default function Home() {
  const whatsappUrl = buildWhatsappUrl(
    BUSINESS_WHATSAPP,
    "Olá! Quero comprar um acessório premium pelo WhatsApp."
  );
  const newArrivals = products.slice(0, 4);
  const bestSellers = products.filter((product) => product.featured).slice(0, 4);
  const [highlight, ...rest] = testimonials;

  return (
    <div className="w-full space-y-24 px-6 pb-24 pt-6">
      <section className="relative">
        <div className="relative h-[70vh] min-h-[520px] overflow-hidden border border-foreground/10">
          <Image
            src="/acessorios-premium/hero.jpg"
            alt="Coleção premium de acessórios"
            fill
            priority
            className="object-cover object-right"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          <div className="absolute bottom-10 left-8 max-w-xl space-y-6 md:left-12 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
            <p className="text-eyebrow">Coleção 2025</p>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Acessórios com o refinamento de uma maison.
            </h1>
            <p className="text-sm text-muted-foreground md:text-base">
              Relógios, óculos, bolsas e joias escolhidos com olhar editorial e
              atendimento concierge para compras rápidas pelo WhatsApp.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Comprar pelo WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/catalogo">Ver catálogo</Link>
              </Button>
            </div>
          </div>
          <div className="absolute right-8 top-8 hidden border border-foreground/20 bg-background/80 px-4 py-2 text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground md:block">
            Frete express
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-eyebrow">Acabou de chegar</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Novidades com estoque imediato
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Peças recém-selecionadas com envio rápido e embalagem premium.
            </p>
          </div>
          <Link
            href="/catalogo"
            className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em]"
          >
            Ver tudo
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product, index) => (
            <div
              key={product.id}
              className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-eyebrow">Coleções</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Explore por categoria
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A seleção completa para acompanhar seu estilo com sofisticação.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/catalogo">Catálogo completo</Link>
          </Button>
        </div>
        <div className="grid auto-rows-[220px] gap-6 md:grid-cols-2">
          {categorySpotlight.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "group relative overflow-hidden border border-foreground/15 bg-background/70 animate-in fade-in-0 slide-in-from-bottom-4 duration-700",
                categoryLayout[index]
              )}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 space-y-2">
                <p className="text-caption">{item.description}</p>
                <p className="font-display text-3xl font-semibold">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          <p className="text-eyebrow">Atelier</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Uma curadoria pensada como editorial de moda
          </h2>
          <p className="text-sm text-muted-foreground">
            Montamos combinações personalizadas para ocasiões importantes. Receba
            sugestões com fotos reais, ajuste de tamanho e detalhes de entrega em
            minutos pelo WhatsApp.
          </p>
          <div className="grid gap-4 border-y border-foreground/10 py-6 text-sm">
            {[
              "Consultoria humana para escolhas certeiras.",
              "Fotos reais e confirmação de estoque antes do pagamento.",
              "Entrega expressa com embalagem premium.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
                  —
                </span>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Quero consultoria
            </a>
          </Button>
        </div>
        <div className="border border-foreground/15 bg-background/80 p-4">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/acessorios-premium/bolsa-siena.jpg"
              alt="Curadoria premium"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
            <span>Lookbook</span>
            <span>Edição 01</span>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-eyebrow">Mais desejados</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Peças favoritas da curadoria
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em]"
          >
            Ver catálogo
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product, index) => (
            <div
              key={product.id}
              className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-foreground/15 bg-background/80 p-8">
          <p className="text-eyebrow">Depoimentos</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Clientes que escolhem presença e confiança
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            “{highlight.text}”
          </p>
          <div className="mt-5 text-sm">
            <p className="font-semibold">{highlight.name}</p>
            <p className="text-caption">
              {highlight.city} • {highlight.product}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {rest.map((item) => (
            <div key={item.name} className="border border-foreground/15 bg-background/80 p-5">
              <p className="text-sm text-muted-foreground">“{item.text}”</p>
              <div className="mt-3 text-sm">
                <p className="font-semibold">{item.name}</p>
                <p className="text-caption">
                  {item.city} • {item.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border border-foreground/15 bg-background/80 p-8 md:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-eyebrow">FAQ</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Dúvidas comuns sobre compra premium
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Trocas, prazos e pagamentos explicados de forma objetiva.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="relative overflow-hidden border border-foreground/20 bg-foreground px-8 py-12 text-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-caption text-background/70">Atendimento direto</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Fale com nosso time e finalize sua compra hoje.
            </h2>
            <p className="mt-3 text-sm text-background/80">
              Receba uma seleção personalizada em minutos pelo WhatsApp.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button asChild size="lg" className="bg-background text-foreground">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Comprar pelo WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background/40 text-background hover:border-background/70"
            >
              <Link href="/catalogo">Ver catálogo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
