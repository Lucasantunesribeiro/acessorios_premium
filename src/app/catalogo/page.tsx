import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CatalogFilters } from "@/components/catalog-filters";
import { ProductCard } from "@/components/product-card";
import { BUSINESS_WHATSAPP } from "@/lib/constants";
import { categories, products } from "@/lib/content";
import { buildWhatsappUrl } from "@/lib/whatsapp";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Explore o catálogo premium de relógios, óculos, bolsas e joias para comprar via WhatsApp.",
};

type CatalogSearchParams = {
  categoria?: string | string[];
  category?: string | string[];
  preco?: string | string[];
  ordem?: string | string[];
};

const parseRange = (value: string) => {
  const [min, max] = value.split("-").map(Number);
  if (Number.isNaN(min) || Number.isNaN(max)) return null;
  return { min, max };
};

const normalizeFilter = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

export default function Catalogo({
  searchParams,
}: {
  searchParams: CatalogSearchParams;
}) {
  const whatsappUrl = buildWhatsappUrl(
    BUSINESS_WHATSAPP,
    "Olá! Quero ajuda para escolher um acessório premium."
  );
  const categoryValues = categories.map((category) => category.value);
  const categoryParamFromCategoria = Array.isArray(searchParams.categoria)
    ? searchParams.categoria[0]
    : searchParams.categoria;
  const categoryParamFromCategory = Array.isArray(searchParams.category)
    ? searchParams.category[0]
    : searchParams.category;
  const categoryParam = categoryParamFromCategoria ?? categoryParamFromCategory;
  const normalizedCategory = categoryParam
    ? normalizeFilter(categoryParam.toString())
    : null;
  const categoryMatch = normalizedCategory
    ? categoryValues.find(
        (value) => normalizeFilter(value) === normalizedCategory
      )
    : null;
  const priceRange = Array.isArray(searchParams.preco)
    ? searchParams.preco[0]
    : searchParams.preco;
  const order = Array.isArray(searchParams.ordem)
    ? searchParams.ordem[0]
    : searchParams.ordem;

  let filtered = [...products];

  if (categoryMatch) {
    filtered = filtered.filter((product) => product.category === categoryMatch);
  } else if (normalizedCategory) {
    filtered = [];
  }

  if (priceRange) {
    const range = parseRange(priceRange);
    if (range) {
      filtered = filtered.filter(
        (product) => product.price >= range.min && product.price <= range.max
      );
    }
  }

  if (order === "preco-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (order === "preco-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (order === "nome") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filtered.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }

  return (
    <div className="w-full space-y-16 px-6 pb-24 pt-6">
      <section className="relative">
        <div className="relative h-[50vh] min-h-[420px] overflow-hidden border border-foreground/10">
          <Image
            src="/acessorios-premium/hero.jpg"
            alt="Catálogo de acessórios premium"
            fill
            className="object-cover object-right"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          <div className="absolute bottom-8 left-8 max-w-xl space-y-5 md:left-12 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
            <p className="text-eyebrow">Catálogo premium</p>
            <h1 className="font-display text-4xl font-semibold md:text-5xl">
              Seleção completa com entrega imediata
            </h1>
            <p className="text-sm text-muted-foreground">
              Explore as peças por categoria e confirme disponibilidade direto
              com a consultora.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
              <span className="border border-foreground/20 px-3 py-1">
                {filtered.length} peças
              </span>
              <span>Atualizado hoje</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-foreground text-background">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Falar com consultora
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contato">Precisa de ajuda?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <CatalogFilters />
      </section>

      <section className="w-full">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-eyebrow">Curadoria</p>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Escolha sua próxima peça
            </h2>
          </div>
          <Link
            href="/contato"
            className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em]"
          >
            Atendimento direto
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6">
          {filtered.length === 0 ? (
            <div className="border border-dashed border-foreground/20 bg-background/80 p-10 text-center text-sm text-muted-foreground">
              Nenhum produto encontrado com esses filtros. Ajuste a busca para ver
              mais opções.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
