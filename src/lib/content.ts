export type Category = "relogios" | "oculos" | "bolsas" | "joias";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  materials: string[];
  details: string[];
  variants: {
    colors: string[];
    sizes: string[];
  };
  featured?: boolean;
};

export const categories = [
  { value: "relogios", label: "Relógios" },
  { value: "oculos", label: "Óculos" },
  { value: "bolsas", label: "Bolsas" },
  { value: "joias", label: "Joias" },
] as const;

export const products: Product[] = [
  {
    id: "rel-aurum",
    slug: "relogio-aurum-imperial",
    name: "Relógio Aurum Imperial",
    category: "relogios",
    price: 1890,
    oldPrice: 2190,
    shortDescription: "Caixa em aço polido e mostrador champagne com brilho sutil.",
    description:
      "Relógio premium com acabamento espelhado, pulseira ajustável e detalhes dourados para elevar qualquer look.",
    images: [
      "/acessorios-premium/relogio-aurum.jpg",
      "/acessorios-premium/relogio-aurum.jpg",
      "/acessorios-premium/relogio-aurum.jpg",
    ],
    materials: ["Aço inox", "Vidro mineral", "Fecho borboleta"],
    details: [
      "Resistência à água 5 ATM",
      "Garantia premium de 12 meses",
      "Ajuste fino de pulseira",
    ],
    variants: {
      colors: ["Champagne", "Dourado acetinado"],
      sizes: ["38mm", "42mm"],
    },
    featured: true,
  },
  {
    id: "rel-noir",
    slug: "relogio-noir-legacy",
    name: "Relógio Noir Legacy",
    category: "relogios",
    price: 1490,
    shortDescription: "Minimalismo preto com textura escovada e presença marcante.",
    description:
      "Design urbano com caixa slim, detalhes foscos e pulseira confortável para uso diário sofisticado.",
    images: [
      "/acessorios-premium/relogio-noir.jpg",
      "/acessorios-premium/relogio-noir.jpg",
      "/acessorios-premium/relogio-noir.jpg",
    ],
    materials: ["Aço inox", "Couro premium", "Vidro safira"],
    details: ["Pulseira ergonômica", "Calendário embutido", "Display anti-reflexo"],
    variants: {
      colors: ["Preto fosco", "Grafite"],
      sizes: ["40mm"],
    },
    featured: true,
  },
  {
    id: "rel-elysium",
    slug: "relogio-elysium-chronos",
    name: "Relógio Elysium Chronos",
    category: "relogios",
    price: 2390,
    shortDescription: "Chronograph elegante para ocasiões especiais e rotina premium.",
    description:
      "Peça com mostrador multifunção, acabamento acetinado e detalhes em ouro velho.",
    images: [
      "/acessorios-premium/relogio-elysium.jpg",
      "/acessorios-premium/relogio-elysium.jpg",
      "/acessorios-premium/relogio-elysium.jpg",
    ],
    materials: ["Aço inox", "Pulseira couro", "Vidro mineral"],
    details: ["Cronógrafo funcional", "Fivela premium", "Exclusivo por tempo limitado"],
    variants: {
      colors: ["Cacau", "Bronze"],
      sizes: ["41mm"],
    },
    featured: true,
  },
  {
    id: "ocu-noir",
    slug: "oculos-noir-aviator",
    name: "Óculos Noir Aviator",
    category: "oculos",
    price: 690,
    shortDescription: "Lentes degradê e armação leve com ajuste confortável.",
    description:
      "Óculos aviador com acabamento metálico escuro e proteção UV premium para o dia a dia.",
    images: [
      "/acessorios-premium/oculos-noir.jpg",
      "/acessorios-premium/oculos-noir.jpg",
      "/acessorios-premium/oculos-noir.jpg",
    ],
    materials: ["Metal leve", "Hastes acetinadas", "Lentes UV400"],
    details: ["Acompanha case rígido", "Lentes anti-risco", "Design unissex"],
    variants: {
      colors: ["Preto", "Grafite"],
      sizes: ["Tamanho único"],
    },
    featured: true,
  },
  {
    id: "ocu-aurora",
    slug: "oculos-aurora-cateye",
    name: "Óculos Aurora Cat-eye",
    category: "oculos",
    price: 760,
    shortDescription: "Linha sofisticada com formato cat-eye e brilho dourado.",
    description:
      "Armação delicada, lentes fumê e acabamento dourado para um visual glamouroso.",
    images: [
      "/acessorios-premium/oculos-aurora.jpg",
      "/acessorios-premium/oculos-aurora.jpg",
      "/acessorios-premium/oculos-aurora.jpg",
    ],
    materials: ["Acetato premium", "Detalhes dourados", "Lentes UV400"],
    details: ["Leve e confortável", "Ajuste anatômico", "Case elegante"],
    variants: {
      colors: ["Mel", "Tartaruga"],
      sizes: ["Tamanho único"],
    },
    featured: true,
  },
  {
    id: "bol-siena",
    slug: "bolsa-siena-classic",
    name: "Bolsa Siena Classic",
    category: "bolsas",
    price: 1280,
    shortDescription: "Couro macio, alça ajustável e espaço inteligente.",
    description:
      "Bolsa estruturada para rotinas elegantes, com compartimentos internos e acabamento premium.",
    images: [
      "/acessorios-premium/bolsa-siena.jpg",
      "/acessorios-premium/bolsa-siena.jpg",
      "/acessorios-premium/bolsa-siena.jpg",
    ],
    materials: ["Couro legítimo", "Forro acetinado", "Ferragens douradas"],
    details: ["Bolso interno com zíper", "Alça dupla", "Base reforçada"],
    variants: {
      colors: ["Caramelo", "Marrom escuro"],
      sizes: ["M"],
    },
    featured: true,
  },
  {
    id: "bol-velluto",
    slug: "bolsa-velluto-royal",
    name: "Bolsa Velluto Royal",
    category: "bolsas",
    price: 1650,
    shortDescription: "Textura aveludada com acabamento sofisticado.",
    description:
      "Bolsa premium com design contemporâneo, corrente metálica e interior forrado.",
    images: [
      "/acessorios-premium/bolsa-velluto.jpg",
      "/acessorios-premium/bolsa-velluto.jpg",
      "/acessorios-premium/bolsa-velluto.jpg",
    ],
    materials: ["Couro aveludado", "Forro suede", "Corrente dourada"],
    details: ["Fecho magnético", "Alça removível", "Acabamento artesanal"],
    variants: {
      colors: ["Vinho", "Preto"],
      sizes: ["M"],
    },
    featured: true,
  },
  {
    id: "bol-lumina",
    slug: "bolsa-lumina-cross",
    name: "Bolsa Lumina Cross",
    category: "bolsas",
    price: 1120,
    shortDescription: "Modelo crossbody compacto com brilho sutil.",
    description:
      "Bolsa prática para eventos e viagens, com espaço para itens essenciais e acabamento perolado.",
    images: [
      "/acessorios-premium/bolsa-lumina.jpg",
      "/acessorios-premium/bolsa-lumina.jpg",
      "/acessorios-premium/bolsa-lumina.jpg",
    ],
    materials: ["Couro texturizado", "Ferragens prata", "Forro premium"],
    details: ["Alça ajustável", "Fecho seguro", "Modelo leve"],
    variants: {
      colors: ["Off-white", "Amêndoa"],
      sizes: ["P"],
    },
  },
  {
    id: "joi-constelacao",
    slug: "joia-constelacao-delicata",
    name: "Joia Constelação Delicata",
    category: "joias",
    price: 980,
    shortDescription: "Colar minimalista com pingente estrelado.",
    description:
      "Peça versátil com banho premium e brilho suave para compor combinações refinadas.",
    images: [
      "/acessorios-premium/joia-constelacao.jpg",
      "/acessorios-premium/joia-constelacao.jpg",
      "/acessorios-premium/joia-constelacao.jpg",
    ],
    materials: ["Banho ouro 18k", "Zircônias", "Fecho reforçado"],
    details: ["Altura ajustável", "Brilho delicado", "Acabamento hipoalergênico"],
    variants: {
      colors: ["Dourado", "Rosé"],
      sizes: ["40-45cm"],
    },
    featured: true,
  },
  {
    id: "joi-aurora",
    slug: "joia-aurora-brill",
    name: "Joia Aurora Brill",
    category: "joias",
    price: 1250,
    shortDescription: "Pulseira elegante com fileira de brilho contínuo.",
    description:
      "Pulseira com acabamento luxuoso e design fluido para elevar produções noturnas.",
    images: [
      "/acessorios-premium/joia-aurora.jpg",
      "/acessorios-premium/joia-aurora.jpg",
      "/acessorios-premium/joia-aurora.jpg",
    ],
    materials: ["Banho ouro 18k", "Zircônias premium", "Fecho invisível"],
    details: ["Brilho intenso", "Conforto no pulso", "Elegância imediata"],
    variants: {
      colors: ["Dourado", "Prata"],
      sizes: ["16cm", "18cm"],
    },
    featured: true,
  },
  {
    id: "joi-solar",
    slug: "joia-solar-luce",
    name: "Joia Solar Luce",
    category: "joias",
    price: 890,
    shortDescription: "Brincos leves com brilho dourado intenso.",
    description:
      "Brincos que destacam o rosto com elegância e acabamento refinado.",
    images: [
      "/acessorios-premium/joia-solar.jpg",
      "/acessorios-premium/joia-solar.jpg",
      "/acessorios-premium/joia-solar.jpg",
    ],
    materials: ["Banho ouro 18k", "Cristais", "Fecho seguro"],
    details: ["Leves para uso diário", "Acabamento polido", "Design exclusivo"],
    variants: {
      colors: ["Dourado", "Champagne"],
      sizes: ["Único"],
    },
  },
];

export const testimonials = [
  {
    name: "Mariana Lopes",
    city: "Rio de Janeiro",
    product: "Relógio Aurum Imperial",
    text: "Atendimento rápido e o relógio chegou impecável. Embalagem premium e acabamento perfeito.",
  },
  {
    name: "Felipe Andrade",
    city: "Niterói",
    product: "Óculos Noir Aviator",
    text: "Confortável e sofisticado. A lente protege bem do sol e o visual ficou outro nível.",
  },
  {
    name: "Carla Souza",
    city: "São Paulo",
    product: "Bolsa Velluto Royal",
    text: "A bolsa é linda ao vivo e o couro é super macio. Já quero outra cor.",
  },
  {
    name: "Renata Lima",
    city: "Belo Horizonte",
    product: "Joia Constelação Delicata",
    text: "Brilho discreto e muito elegante. Chegou dentro do prazo e super bem embalada.",
  },
];

export const faqs = [
  {
    question: "Como funciona a troca?",
    answer:
      "Você pode solicitar troca em até 7 dias após o recebimento. Nosso time orienta todo o processo pelo WhatsApp.",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer:
      "O prazo varia conforme a região. Em média, entregamos entre 2 e 7 dias úteis após a confirmação.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Pix, cartão de crédito e débito. Também avaliamos condições especiais para combos premium.",
  },
];
