"use client";

import { useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BUSINESS_WHATSAPP } from "@/lib/constants";
import { Product } from "@/lib/content";
import { buildWhatsappUrl } from "@/lib/whatsapp";

type ProductVariantPickerProps = {
  product: Product;
};

export const ProductVariantPicker = ({
  product,
}: ProductVariantPickerProps) => {
  const [color, setColor] = useState(product.variants.colors[0]);
  const [size, setSize] = useState(product.variants.sizes[0]);

  const message = useMemo(() => {
    return `Olá! Tenho interesse no ${product.name} (cor ${color}, tamanho ${size}). Pode confirmar disponibilidade?`;
  }, [product.name, color, size]);

  const whatsappUrl = buildWhatsappUrl(BUSINESS_WHATSAPP, message);

  return (
    <div className="space-y-4 border border-foreground/15 bg-background/80 p-6">
      <div className="space-y-2">
        <p className="text-caption">Variações disponíveis</p>
        <p className="text-sm text-muted-foreground">
          Cor selecionada: <span className="font-semibold text-foreground">{color}</span>
          {" • "}
          Tamanho: <span className="font-semibold text-foreground">{size}</span>
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Select value={color} onValueChange={setColor}>
          <SelectTrigger
            aria-label="Selecionar cor"
            className="rounded-none border-foreground/20 bg-background/60 text-[0.7rem] uppercase tracking-[0.22em]"
          >
            <SelectValue placeholder="Cor" />
          </SelectTrigger>
          <SelectContent>
            {product.variants.colors.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={size} onValueChange={setSize}>
          <SelectTrigger
            aria-label="Selecionar tamanho"
            className="rounded-none border-foreground/20 bg-background/60 text-[0.7rem] uppercase tracking-[0.22em]"
          >
            <SelectValue placeholder="Tamanho" />
          </SelectTrigger>
          <SelectContent>
            {product.variants.sizes.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        asChild
        size="lg"
        className="w-full bg-foreground text-background hover:bg-foreground/90"
      >
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Comprar no WhatsApp
        </a>
      </Button>
      <p className="text-xs text-muted-foreground">
        Você será direcionado para o WhatsApp com a mensagem pronta.
      </p>
    </div>
  );
};
