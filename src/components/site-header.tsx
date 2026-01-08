"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { Menu, X, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BUSINESS_NAME, BUSINESS_WHATSAPP } from "@/lib/constants";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contato", label: "Contato" },
];

export const SiteHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const whatsappUrl = useMemo(() => {
    return buildWhatsappUrl(
      BUSINESS_WHATSAPP,
      "Olá! Quero atendimento premium para escolher um acessório."
    );
  }, []);

  useEffect(() => setMounted(true), []);

  // Fecha menu ao navegar
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Fecha com ESC
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Trava scroll do body quando menu estiver aberto
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/95 backdrop-blur">
      {/* Top strip */}
      <div className="border-b border-foreground/10">
        <div className="flex w-full flex-wrap items-center justify-between gap-2 px-6 py-2 text-[0.6rem] uppercase tracking-[0.45em] text-muted-foreground">
          <span>Entrega expressa</span>
          <span className="hidden sm:inline">Curadoria autoral</span>
          <span>Atendimento WhatsApp</span>
        </div>
      </div>

      {/* Main bar */}
      <div className="flex w-full items-center justify-between px-6 py-5">
        {/* Left: desktop nav / mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-[0.62rem] uppercase tracking-[0.35em] text-muted-foreground lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition hover:text-foreground",
                  isActive(item.href) && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center logo */}
        <Link href="/" className="text-center">
          <span className="font-display text-3xl font-semibold leading-none">
            {BUSINESS_NAME}
          </span>
          <span className="mt-1 block text-[0.55rem] uppercase tracking-[0.6em] text-muted-foreground">
            Joias &amp; Acessórios
          </span>
        </Link>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          {/* Desktop */}
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

          {/* Mobile icon */}
          <Button asChild variant="outline" size="icon" className="lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Falar no WhatsApp"
            >
              <Phone className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Mobile Drawer (Portal para não quebrar z-index/overflow do layout) */}
      {mounted &&
        open &&
        createPortal(
          <div className="lg:hidden">
            {/* Backdrop (clicar fora fecha) */}
            <button
              type="button"
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <aside
              role="dialog"
              aria-modal="true"
              className={cn(
                "fixed inset-y-0 left-0 z-[110] w-[86vw] max-w-[420px]",
                "bg-background border-r border-foreground/10 shadow-2xl",
                "animate-in slide-in-from-left duration-200"
              )}
            >
              {/* Header drawer */}
              <div className="px-6 pt-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-2xl font-semibold leading-none">
                        {BUSINESS_NAME}
                      </span>
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                      Joias &amp; Acessórios
                    </p>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Fechar menu"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Highlights */}
                
              </div>

              {/* Content */}
              <div className="mt-6 h-[calc(100dvh-190px)] overflow-y-auto px-3 pb-6">
                <nav className="space-y-1">
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group relative flex items-center justify-between rounded-2xl px-4 py-4",
                          "transition-colors hover:bg-muted/60",
                          active && "bg-muted/70"
                        )}
                      >
                        <span
                          className={cn(
                            "text-sm font-semibold uppercase tracking-[0.25em]",
                            active ? "text-foreground" : "text-muted-foreground"
                          )}
                        >
                          {item.label}
                        </span>

                        {/* Indicador */}
                        <span
                          className={cn(
                            "h-2 w-2 rounded-full border border-foreground/15 transition-opacity",
                            active
                              ? "bg-foreground opacity-100"
                              : "opacity-0 group-hover:opacity-60"
                          )}
                          aria-hidden="true"
                        />
                      </Link>
                    );
                  })}
                </nav>

                {/* CTA */}
                <div className="mt-6 px-3">
                  <Button
                    asChild
                    className={cn(
                      "w-full",
                      // MAIS ESPAÇO INTERNO (não fica colado nas bordas)
                      "px-10 py-3 min-h-[52px]", 
                      // Tipografia consistente
                      "text-[0.65rem] uppercase tracking-[0.22em] leading-none"
                    )}
                  >
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      <span className="inline-flex items-center justify-center gap-4">
                        <Phone className="h-4 w-4" />
                        Atendimento no WhatsApp
                      </span>
                    </a>
                  </Button>

                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Resposta rápida • Curadoria personalizada
                  </p>
                </div>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
};
