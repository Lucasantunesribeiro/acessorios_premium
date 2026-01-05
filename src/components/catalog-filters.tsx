"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/content";

const priceRanges = [
  { value: "todos", label: "Todas as faixas" },
  { value: "0-800", label: "Até R$ 800" },
  { value: "800-1500", label: "R$ 800 - R$ 1.500" },
  { value: "1500-2200", label: "R$ 1.500 - R$ 2.200" },
  { value: "2200-99999", label: "Acima de R$ 2.200" },
];

const sortOptions = [
  { value: "destaque", label: "Destaques" },
  { value: "preco-asc", label: "Menor preço" },
  { value: "preco-desc", label: "Maior preço" },
  { value: "nome", label: "Nome" },
];

export const CatalogFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "todos" || value === "destaque") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const activeFilters = [
    searchParams.get("categoria"),
    searchParams.get("preco"),
    searchParams.get("ordem") && searchParams.get("ordem") !== "destaque"
      ? searchParams.get("ordem")
      : null,
  ].filter(Boolean).length;

  return (
    <div className="border border-foreground/15 bg-background/80 p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 text-caption">
        <span>Refinar catálogo</span>
        <span>{activeFilters} ativo(s)</span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <Select
          value={searchParams.get("categoria") ?? "todos"}
          onValueChange={(value) => updateParam("categoria", value)}
        >
          <SelectTrigger
            aria-label="Filtrar por categoria"
            className="rounded-none border-foreground/20 bg-background/60 text-[0.7rem] uppercase tracking-[0.22em]"
          >
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todas as categorias</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={searchParams.get("preco") ?? "todos"}
          onValueChange={(value) => updateParam("preco", value)}
        >
          <SelectTrigger
            aria-label="Filtrar por faixa de preço"
            className="rounded-none border-foreground/20 bg-background/60 text-[0.7rem] uppercase tracking-[0.22em]"
          >
            <SelectValue placeholder="Faixa de preço" />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={searchParams.get("ordem") ?? "destaque"}
          onValueChange={(value) => updateParam("ordem", value)}
        >
          <SelectTrigger
            aria-label="Ordenar por"
            className="rounded-none border-foreground/20 bg-background/60 text-[0.7rem] uppercase tracking-[0.22em]"
          >
            <SelectValue placeholder="Ordenar" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
