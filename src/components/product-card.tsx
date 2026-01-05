import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { categories, Product } from "@/lib/content";
import { formatPrice } from "@/lib/formatters";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const categoryLabel =
    categories.find((category) => category.value === product.category)?.label ??
    "Premium";

  return (
    <Card className="group overflow-hidden border-foreground/15 bg-background/80 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(18,14,10,0.25)]">
      <CardContent className="p-0">
        <Link href={`/produto/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
            />
          </div>
        </Link>
        <div className="space-y-3 border-t border-foreground/10 px-5 py-4">
          <p className="text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
            {categoryLabel}
          </p>
          <div>
            <h3 className="font-display text-xl font-semibold leading-tight">
              <Link href={`/produto/${product.slug}`}>{product.name}</Link>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {product.shortDescription}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-base font-semibold">
                {formatPrice(product.price)}
              </span>
              {product.oldPrice ? (
                <span className="text-xs text-muted-foreground line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              ) : null}
            </div>
            <Link
              href={`/produto/${product.slug}`}
              className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.35em] text-foreground"
            >
              Ver peça
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
