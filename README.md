# Acessórios Premium (Demo)

Site demo para venda de acessórios premium (relógios, óculos, bolsas e joias)
com foco em conversão via WhatsApp.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS + shadcn/ui
- lucide-react + next/image

## Rotas

- `/` Home
- `/catalogo` Catálogo com filtros
- `/produto/[slug]` Página de produto
- `/contato` Atendimento premium

## Conteúdo e Config

- `src/lib/content.ts` produtos, depoimentos e FAQs
- `src/lib/constants.ts` números de WhatsApp e dados da marca
- `src/lib/whatsapp.ts` helper para gerar links com mensagem

## Assets

- `public/acessorios-premium` placeholders de imagens

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.
## Personalização rápida

1. Atualize `BUSINESS_WHATSAPP` em `src/lib/constants.ts`.
2. Substitua as imagens em `public/acessorios-premium`.
3. Ajuste textos e preços em `src/lib/content.ts`.
