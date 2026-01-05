import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ProductVariantPicker } from "@/components/product-variant-picker";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/formatters";
import { products } from "@/lib/content";

type ProductPageProps = {
  params: { slug: string };
};

export const generateStaticParams = () =>
  products.map((product) => ({ slug: product.slug }));

export const generateMetadata = ({ params }: ProductPageProps): Metadata => {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return {
      title: "Produto não encontrado",
      description: "Não encontramos o produto informado.",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.images[0], width: 1200, height: 900 }],
    },
  };
};

export default function ProdutoPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);
  const highlights = [
    "Envio premium com rastreio em tempo real.",
    "Garantia de 12 meses e troca facilitada.",
    "Fotos reais e confirmação de estoque.",
  ];

  return (
    <div className="w-full space-y-16 px-6 pb-24 pt-6">
      <nav className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
        <Link href="/">Home</Link> • <Link href="/catalogo">Catálogo</Link> •
        <span className="text-foreground"> {product.name}</span>
      </nav>

      <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="border border-foreground/15 bg-background/80 p-4">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {product.images.slice(1).map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="border border-foreground/15 bg-background/80 p-3"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={`${product.name} detalhe ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-3">
            <Badge variant="outline" className="border-foreground/30">
              {product.category.toUpperCase()}
            </Badge>
            <h1 className="font-display text-4xl font-semibold md:text-5xl">
              {product.name}
            </h1>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </div>
          <div className="flex items-center gap-4 border-y border-foreground/10 py-4">
            <span className="text-2xl font-semibold">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice ? (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </span>
            ) : null}
          </div>
          <div className="border border-foreground/15 bg-background/80 p-5">
            <p className="text-caption">Destaques</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <ProductVariantPicker product={product} />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-foreground/15 bg-background/80 p-5">
              <p className="text-caption">Materiais</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {product.materials.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-foreground/15 bg-background/80 p-5">
              <p className="text-caption">Detalhes</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {product.details.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-eyebrow">Produtos semelhantes</p>
            <h2 className="font-display text-2xl font-semibold">
              Itens da mesma categoria
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Sugestões alinhadas ao estilo desta peça.
            </p>
          </div>
          <Link href="/catalogo" className="text-caption">
            Ver catálogo completo
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
