import Image from "next/image";
import type { Metadata } from "next";
import { Clock, Mail, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_EMAIL, BUSINESS_WHATSAPP } from "@/lib/constants";
import { buildWhatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com nosso time e receba atendimento premium para comprar acessórios via WhatsApp.",
};

export default function ContatoPage() {
  const whatsappUrl = buildWhatsappUrl(
    BUSINESS_WHATSAPP,
    "Olá! Quero atendimento premium para comprar acessórios."
  );

  return (
    <div className="w-full space-y-16 px-6 pb-24 pt-6">
      <section className="relative">
        <div className="relative h-[45vh] min-h-[380px] overflow-hidden border border-foreground/10">
          <Image
            src="/acessorios-premium/oculos-aurora.jpg"
            alt="Atendimento premium"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          <div className="absolute bottom-8 left-8 max-w-xl space-y-5 md:left-12 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
            <p className="text-eyebrow">Atendimento premium</p>
            <h1 className="font-display text-4xl font-semibold md:text-5xl">
              Atendimento direto, rápido e humano
            </h1>
            <p className="text-sm text-muted-foreground">
              Nossa equipe responde em minutos pelo WhatsApp para ajudar na escolha
              da peça ideal e confirmar detalhes do pedido.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-foreground text-background">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`mailto:${BUSINESS_EMAIL}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar e-mail
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid w-full gap-6 md:grid-cols-3">
        {[
          {
            title: "WhatsApp Premium",
            description: "Respostas em até 10 minutos durante o horário comercial.",
            icon: PhoneCall,
          },
          {
            title: "E-mail dedicado",
            description: "Retorno completo com detalhes e fotos adicionais.",
            icon: Mail,
          },
          {
            title: "Horário de atendimento",
            description: "Segunda a sábado, 9h às 20h.",
            icon: Clock,
          },
        ].map((item) => (
          <div
            key={item.title}
            className="border border-foreground/15 bg-background/80 p-5"
          >
            <div className="flex h-11 w-11 items-center justify-center border border-foreground/20">
              <item.icon className="h-5 w-5" aria-hidden />
            </div>
            <div className="mt-4 space-y-2">
              <h2 className="font-display text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-8 border border-foreground/15 bg-background/80 p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <p className="text-eyebrow">Como comprar</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Três passos simples para garantir sua peça
          </h2>
          <p className="text-sm text-muted-foreground">
            Processo ágil, com consultoria humana e confirmação de estoque antes
            do pagamento.
          </p>
        </div>
        <div className="space-y-4 text-sm">
          {[
            "Envie o nome do produto ou print do catálogo.",
            "Receba fotos reais e confirmação de disponibilidade.",
            "Finalize o pagamento e aguarde a entrega premium.",
          ].map((step, index) => (
            <div key={step} className="flex gap-4">
              <span className="text-[0.7rem] uppercase tracking-[0.4em] text-muted-foreground">
                0{index + 1}
              </span>
              <p className="text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
