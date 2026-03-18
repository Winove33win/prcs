import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Check,
  Compass,
  Gauge,
  Hand,
  Layers3,
  LayoutGrid,
  MonitorSmartphone,
  MoveRight,
  Palette,
  ScanSearch,
  Sparkles,
  SwatchBook,
  WandSparkles,
} from "lucide-react";

const reasoningItems = [
  {
    step: "01",
    icon: Compass,
    title: "Navegação intuitiva e orientada por intenção",
    description:
      "Em um site de móveis, o usuário procura inspiração, confiança e velocidade. Por isso, a navegação precisa separar claramente ambientes, coleções, materiais e atendimento personalizado.",
    bullets: [
      "Menu curto com âncoras e jornadas previsíveis.",
      "CTA principal acima da dobra para orçamento ou catálogo.",
      "Arquitetura de informação focada em ambiente, estilo e necessidade.",
    ],
  },
  {
    step: "02",
    icon: LayoutGrid,
    title: "Hierarquia visual que valoriza o produto",
    description:
      "Móveis são escolhidos muito pelo impacto visual. A hierarquia deve criar foco imediato nas peças hero, depois conduzir para detalhes, acabamentos, diferenciais e prova social.",
    bullets: [
      "Blocos com respiro, grid modular e contraste entre títulos e descrições.",
      "Destaque para preço, medidas, materiais e prazo sem poluir a interface.",
      "Uso de cards premium para separar inspiração, catálogo e especificações.",
    ],
  },
  {
    step: "03",
    icon: Palette,
    title: "Paleta sofisticada e alinhada ao universo do mobiliário",
    description:
      "Cores terrosas, neutras e acentos escuros transmitem sofisticação, aconchego e precisão. Isso reforça a percepção de acabamento de alto padrão e favorece fotos de madeira, metal e tecido.",
    bullets: [
      "Base clara para destacar imagens e texturas.",
      "Acentos em café, terracota e verde musgo para assinatura visual.",
      "Contraste suficiente para leitura e acessibilidade.",
    ],
  },
  {
    step: "04",
    icon: ScanSearch,
    title: "Imagens de alta qualidade e contexto espacial",
    description:
      "No setor moveleiro, a imagem não mostra apenas o produto: ela comunica proporção, acabamento e atmosfera. O ideal é combinar fotos editoriais, close de materiais e cenas ambientadas.",
    bullets: [
      "Hero image com ambientação aspiracional.",
      "Galerias com zoom, ângulos e textura de materiais.",
      "Imagens otimizadas para manter performance e percepção premium.",
    ],
  },
  {
    step: "05",
    icon: MonitorSmartphone,
    title: "Responsividade real e experiência mobile-first",
    description:
      "Boa parte da descoberta acontece no celular. O layout precisa preservar impacto visual sem sacrificar legibilidade, velocidade de toque e clareza de navegação.",
    bullets: [
      "Cards empilhados com leitura rápida e CTAs visíveis.",
      "Filtros fáceis de usar em touch e menus colapsáveis.",
      "Espaçamento generoso e tipografia adaptativa.",
    ],
  },
  {
    step: "06",
    icon: WandSparkles,
    title: "Microinterações que reforçam acabamento premium",
    description:
      "Microinterações discretas melhoram percepção de qualidade: hover em materiais, feedback em filtros, transições suaves e animações curtas ajudam o site a parecer tão refinado quanto o produto.",
    bullets: [
      "Hover delicado em cards e botões.",
      "Tabs para trocar ambientes sem recarregar conteúdo.",
      "Accordion para reduzir densidade de informação sem esconder conteúdo importante.",
    ],
  },
];

const roomExperiences = {
  living: {
    name: "Living premium",
    headline: "Layouts respiráveis e foco em peças de assinatura.",
    description:
      "A home deve abrir com cena aspiracional, coleção em destaque e uma combinação de texto curto, materiais e CTA. Isso reduz carga cognitiva e acelera o encantamento.",
    highlights: [
      "Hero editorial",
      "Coleções em evidência",
      "Prova social visual",
    ],
  },
  dining: {
    name: "Sala de jantar",
    headline: "Comparação de acabamentos sem perder sofisticação.",
    description:
      "Na jornada de escolha, o usuário precisa comparar madeira, tecido, medidas e composição. O uso de tabs e cards de material facilita a decisão sem parecer técnico demais.",
    highlights: [
      "Tabs de material",
      "Tabela de medidas",
      "Combinações de cadeira e mesa",
    ],
  },
  office: {
    name: "Home office autoral",
    headline: "Clareza funcional com narrativa de ergonomia e estilo.",
    description:
      "Para móveis corporativos ou home office, a informação precisa unir desempenho e estética. Blocos de benefícios, ergonomia e configuração criam confiança para conversão.",
    highlights: [
      "Argumento ergonômico",
      "Visual clean",
      "CTA para projeto consultivo",
    ],
  },
} as const;

const structureSections = [
  {
    title: "Header / Navegação global",
    description:
      "Logo, menu curto, acesso a coleções, filtros rápidos, CTA de orçamento e indicadores de confiança como frete, prazo ou atendimento personalizado.",
  },
  {
    title: "Home / Hero e storytelling",
    description:
      "Imagem editorial de alta qualidade, proposta de valor objetiva, links para ambientes e destaques de coleções ou projetos personalizados.",
  },
  {
    title: "Catálogo / Coleções",
    description:
      "Grid filtrável por ambiente, material, estilo, tamanho e faixa de preço, com feedback instantâneo e cards consistentes.",
  },
  {
    title: "Produto / Projeto",
    description:
      "Galeria rica, especificações, medidas, acabamentos, combinações sugeridas, depoimentos, CTA de orçamento ou compra e blocos de confiança.",
  },
  {
    title: "Estúdio / Sobre",
    description:
      "História da marca, processo criativo, equipe, diferenciais de fabricação, bastidores e posicionamento premium.",
  },
  {
    title: "Contato / Atendimento",
    description:
      "Formulário enxuto, integração com WhatsApp, agenda de consultoria, mapa e canais sociais para fortalecer o relacionamento.",
  },
];

const features = [
  "Busca com autocompletar por material, coleção e ambiente.",
  "Comparador de acabamentos com feedback visual imediato.",
  "Wishlist ou seleção de favoritos para orçamento consultivo.",
  "Carrossel de inspirações conectado ao Instagram/Pinterest.",
  "Simulação de composição por ambiente com medidas-base.",
  "FAQ e política de entrega apresentados em accordion acessível.",
];

const accessibilityPoints = [
  {
    title: "Acessibilidade",
    description:
      "Garantir contraste adequado, estados de foco visíveis, navegação por teclado, textos alternativos descritivos e estrutura semântica clara nas seções do catálogo e do produto.",
  },
  {
    title: "Mobile",
    description:
      "Tratar o mobile como principal ponto de descoberta: thumb-friendly actions, imagens otimizadas, filtros simples, sticky CTA e carregamento progressivo para evitar abandono.",
  },
  {
    title: "Imagem profissional",
    description:
      "A percepção premium depende de consistência visual: direção de arte refinada, tipografia elegante, cópia objetiva, materiais bem contextualizados e microinterações discretas.",
  },
];

const jsonExample = `{
  "pages": [
    {
      "name": "Home",
      "components": [
        "Header",
        "HeroEditorial",
        "ColecoesDestaque",
        "ReasoningUIUX",
        "AmbientesTabs",
        "CTAOrcamento"
      ]
    },
    {
      "name": "Catalogo",
      "components": [
        "FiltrosAvancados",
        "GridProdutos",
        "QuickView",
        "Wishlist"
      ]
    },
    {
      "name": "Produto",
      "components": [
        "GaleriaZoom",
        "Especificacoes",
        "MateriaisSwatches",
        "ProdutosRelacionados",
        "CTAConsultoria"
      ]
    },
    {
      "name": "Estudio",
      "components": [
        "Manifesto",
        "ProcessoCriativo",
        "Equipe",
        "Depoimentos"
      ]
    },
    {
      "name": "Contato",
      "components": [
        "Formulario",
        "AgendaVisita",
        "Mapa",
        "LinksSociais"
      ]
    }
  ],
  "features": [
    "Responsivo",
    "Acessivel",
    "Microinteracoes",
    "ComparadorDeMateriais",
    "Wishlist",
    "BuscaInteligente"
  ]
}`;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section
          id="inicio"
          className="relative overflow-hidden border-b border-border/60 bg-[radial-gradient(circle_at_top_left,_rgba(217,193,162,0.24),_transparent_32%),linear-gradient(180deg,#fcf8f3_0%,#f7f2eb_48%,#ffffff_100%)]"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(34,29,24,0.08),transparent)]" />
          <div className="container section-padding relative">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/12 bg-white/72 px-4 py-2 text-sm text-foreground/72 shadow-sm backdrop-blur">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Conceito digital premium para design de móveis
                </div>
                <div className="space-y-5">
                  <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[#211c18] md:text-6xl lg:text-7xl">
                    Um site profissional que vende{" "}
                    <span className="gradient-text">sofisticação</span>,
                    contexto e confiança.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-foreground/72 md:text-xl">
                    A proposta abaixo combina reasoning estratégico e conclusão
                    prática para um site focado em design de móveis, priorizando
                    experiência premium, clareza comercial, acessibilidade e
                    performance em qualquer tela.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#raciocinio"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    Ver raciocínio UI/UX
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#conclusao"
                    className="btn-secondary inline-flex items-center justify-center gap-2"
                  >
                    Ir para a conclusão
                    <MoveRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    [
                      "Visual premium",
                      "tipografia elegante + ritmo de whitespace",
                    ],
                    ["Conversão", "CTA consultivo e prova social distribuída"],
                    [
                      "Mobile-first",
                      "navegação simples e filtros touch-friendly",
                    ],
                  ].map(([title, copy]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_14px_40px_-28px_rgba(64,42,24,0.6)] backdrop-blur-sm"
                    >
                      <p className="text-sm font-semibold text-[#211c18]">
                        {title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground/66">
                        {copy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-[#d9c1a2]/60 blur-3xl lg:block" />
                <div className="absolute -bottom-6 -right-4 hidden h-28 w-28 rounded-full bg-[#9cab88]/35 blur-3xl lg:block" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_24px_80px_-30px_rgba(63,44,28,0.45)] backdrop-blur-xl">
                  <img
                    src="/assets/furniture-hero.svg"
                    alt="Ilustração editorial de um ambiente com sofá e luminária, usada para representar um site premium de design de móveis"
                    className="h-full w-full rounded-[1.5rem] object-cover"
                  />
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Paleta", value: "neutros + terracota" },
                      { label: "Tom visual", value: "editorial e acolhedor" },
                      { label: "Interação", value: "suave e responsiva" },
                    ].map(item => (
                      <div
                        key={item.label}
                        className="rounded-2xl bg-[#f6efe7] px-4 py-3"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/48">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#211c18]">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="raciocinio" className="section-padding bg-background">
          <div className="container space-y-6">
            <div className="max-w-3xl">
              <p className="section-kicker">Raciocínio (Reasoning)</p>
              <h2 className="section-title max-w-3xl">
                Principais elementos e técnicas de UI/UX aplicados ao contexto
                de design de móveis.
              </h2>
              <p className="section-subtitle max-w-3xl">
                Antes da estrutura final, o foco precisa estar em como o usuário
                percebe valor, encontra inspiração, compara acabamentos e se
                sente seguro para pedir orçamento ou comprar.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {reasoningItems.map(item => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.step}
                    className="panel-card flex h-full flex-col gap-6"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-sm font-semibold tracking-[0.24em] text-primary/45 uppercase">
                          Etapa {item.step}
                        </p>
                        <h3 className="mt-3 text-2xl text-[#211c18]">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/15">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <p className="text-base leading-8 text-foreground/72">
                      {item.description}
                    </p>
                    <ul className="space-y-3 text-sm leading-7 text-foreground/70">
                      {item.bullets.map(bullet => (
                        <li key={bullet} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 text-[#8c5e3d]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="section-padding bg-[#f6efe7]"
          aria-labelledby="aplicacao-pratica-title"
        >
          <div className="container grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="space-y-5">
              <p className="section-kicker">Aplicação prática</p>
              <h2 id="aplicacao-pratica-title" className="section-title">
                Como essas escolhas aparecem em um layout real.
              </h2>
              <p className="section-subtitle mb-0">
                O ideal é transformar o site em uma jornada consultiva:
                inspiração primeiro, depois comparação e, por fim, ação. Tabs e
                painéis ajudam a alternar cenários sem sobrecarregar a
                interface.
              </p>
              <div className="rounded-[1.75rem] border border-white/70 bg-white/70 p-6 shadow-[0_18px_60px_-35px_rgba(63,44,28,0.5)]">
                <div className="flex items-center gap-3 text-sm font-medium text-foreground/68">
                  <SwatchBook className="h-4 w-4 text-primary" />
                  Direção de arte recomendada
                </div>
                <div className="mt-5 grid grid-cols-4 gap-3">
                  {["#F7F2EB", "#D9C1A2", "#B78458", "#4A6E5F"].map(color => (
                    <div key={color} className="space-y-2">
                      <div
                        className="h-16 rounded-2xl border border-black/5"
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-xs font-medium text-foreground/58">
                        {color}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Tabs defaultValue="living" className="gap-6">
              <TabsList className="grid h-auto grid-cols-3 rounded-2xl bg-white/75 p-2 shadow-sm">
                <TabsTrigger value="living" className="rounded-xl py-3">
                  Living
                </TabsTrigger>
                <TabsTrigger value="dining" className="rounded-xl py-3">
                  Jantar
                </TabsTrigger>
                <TabsTrigger value="office" className="rounded-xl py-3">
                  Office
                </TabsTrigger>
              </TabsList>

              {(
                Object.entries(roomExperiences) as Array<
                  [
                    keyof typeof roomExperiences,
                    (typeof roomExperiences)[keyof typeof roomExperiences],
                  ]
                >
              ).map(([key, experience]) => (
                <TabsContent key={key} value={key}>
                  <div className="panel-card overflow-hidden p-0">
                    <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="bg-[linear-gradient(180deg,#211c18_0%,#3b3028_100%)] p-8 text-white lg:p-10">
                        <p className="text-sm font-semibold tracking-[0.24em] uppercase text-white/50">
                          {experience.name}
                        </p>
                        <h3 className="mt-4 text-3xl text-white">
                          {experience.headline}
                        </h3>
                        <p className="mt-5 text-sm leading-7 text-white/74">
                          {experience.description}
                        </p>
                        <div className="mt-8 space-y-3">
                          {experience.highlights.map(highlight => (
                            <div
                              key={highlight}
                              className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/6 px-4 py-3"
                            >
                              <Check className="h-4 w-4" />
                              <span className="text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid content-between gap-6 p-8 lg:p-10">
                        <div className="grid gap-4 sm:grid-cols-2">
                          {[
                            {
                              title: "Hero + CTA",
                              copy: "Área nobre com imagem forte, título curto e argumento claro.",
                            },
                            {
                              title: "Catálogo inteligente",
                              copy: "Cards bem espaçados, filtros e leitura rápida de materiais.",
                            },
                            {
                              title: "Prova social",
                              copy: "Projetos entregues, reviews e bastidores de produção.",
                            },
                            {
                              title: "Contato consultivo",
                              copy: "Botão fixo para orçamento e formulário enxuto.",
                            },
                          ].map(card => (
                            <div
                              key={card.title}
                              className="rounded-3xl border border-border/70 bg-[#fbf7f2] p-5"
                            >
                              <p className="text-sm font-semibold text-[#211c18]">
                                {card.title}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-foreground/66">
                                {card.copy}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="rounded-3xl border border-[#d8c8b5] bg-[#f5ebe0] p-6">
                          <p className="flex items-center gap-2 text-sm font-semibold text-[#6f4a2f]">
                            <Gauge className="h-4 w-4" />
                            Insight de UX
                          </p>
                          <p className="mt-3 text-sm leading-7 text-foreground/72">
                            Quanto maior o valor percebido do móvel, mais
                            importante é reduzir ansiedade na decisão. Por isso,
                            medidas, textura, prazo, personalização e
                            atendimento consultivo devem aparecer antes da
                            última CTA.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section id="conclusao" className="section-padding bg-background">
          <div className="container">
            <div className="max-w-3xl">
              <p className="section-kicker">Conclusão</p>
              <h2 className="section-title">
                Estrutura detalhada do site, com layout, seções e
                funcionalidades recomendadas.
              </h2>
              <p className="section-subtitle">
                Com base no reasoning acima, o site ideal para design de móveis
                deve equilibrar impacto visual, clareza de informação e
                experiência consultiva para aumentar confiança e conversão.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {structureSections.map(section => (
                <article key={section.title} className="panel-card gap-4">
                  <h3 className="text-xl text-[#211c18]">{section.title}</h3>
                  <p className="text-sm leading-7 text-foreground/72">
                    {section.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="section-padding bg-[#f9f6f2]">
          <div className="container grid gap-10 lg:grid-cols-[1fr_0.92fr]">
            <div>
              <p className="section-kicker">Funcionalidades interativas</p>
              <h2 className="section-title">
                Recursos que elevam a experiência e reforçam o valor do design.
              </h2>
              <div className="mt-8 grid gap-4">
                {features.map(feature => (
                  <div
                    key={feature}
                    className="flex items-start gap-4 rounded-3xl border border-border/70 bg-white px-5 py-5 shadow-[0_12px_36px_-30px_rgba(63,44,28,0.45)]"
                  >
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Hand className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-foreground/74">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-card self-start">
              <p className="section-kicker">Orientações visuais</p>
              <h3 className="text-2xl text-[#211c18]">
                Checklist estético para manter imagem profissional.
              </h3>
              <Accordion
                type="single"
                collapsible
                className="mt-6 divide-y divide-border/70"
              >
                <AccordionItem value="tipografia">
                  <AccordionTrigger className="text-base font-semibold hover:no-underline">
                    Tipografia e ritmo visual
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-foreground/70">
                    Misture uma fonte de personalidade para títulos com
                    sans-serif limpa para leitura contínua. Use escalas
                    consistentes, linhas curtas e espaçamento generoso para
                    transmitir sofisticação.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fotos">
                  <AccordionTrigger className="text-base font-semibold hover:no-underline">
                    Fotografia e direção de arte
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-foreground/70">
                    Priorize fotos com luz natural, enquadramento amplo e close
                    de textura. O produto deve aparecer em contexto real para
                    comunicar proporção, uso e acabamento.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="microinteracoes">
                  <AccordionTrigger className="text-base font-semibold hover:no-underline">
                    Microinterações e feedbacks
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-foreground/70">
                    Animações rápidas, hover com leve elevação, indicadores de
                    filtro ativo e resposta visual ao toque criam refinamento
                    sem distrair o usuário do catálogo.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="conteudo">
                  <AccordionTrigger className="text-base font-semibold hover:no-underline">
                    Conteúdo comercial e prova social
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-foreground/70">
                    Depoimentos, projetos entregues, prazos e políticas claras
                    reduzem insegurança. O conteúdo deve ser objetivo, elegante
                    e alinhado ao posicionamento da marca.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="acessibilidade" className="section-padding bg-background">
          <div className="container">
            <div className="max-w-3xl">
              <p className="section-kicker">Pontos críticos</p>
              <h2 className="section-title">
                Acessibilidade, adaptação mobile e imagem profissional não são
                opcionais.
              </h2>
              <p className="section-subtitle">
                Esses três pilares sustentam a percepção de qualidade do site e
                ampliam o alcance da marca sem comprometer a experiência
                estética.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {accessibilityPoints.map(item => (
                <article key={item.title} className="panel-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5ebe0] text-[#6f4a2f]">
                    <Layers3 className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl text-[#211c18]">{item.title}</h3>
                  <p className="text-sm leading-7 text-foreground/72">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="json" className="section-padding bg-[#211c18] text-white">
          <div className="container grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="section-kicker text-white/55">
                Exemplo simplificado
              </p>
              <h2 className="section-title text-white">
                Estrutura em JSON de páginas e componentes principais.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                Em implementação prática, esse JSON pode evoluir para schema de
                CMS, mapeamento de rotas, definição de blocos renderizáveis e
                documentação entre design e desenvolvimento.
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20 shadow-2xl">
              <pre className="overflow-x-auto p-6 text-sm leading-7 text-white/88">
                <code>{jsonExample}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
