import {
  ArrowRight, Shield, Users, Zap, Tag, Lightbulb, Code, BookOpen,
  Briefcase, ChevronRight, Quote, Check, X as XIcon, Phone, MessageCircle,
} from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ──────────────────────────── Scales SVG ──────────────────────────── */
function ScalesOfJustice() {
  return (
    <svg viewBox="0 0 360 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Outer decorative rings */}
      <circle cx="180" cy="190" r="160" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.25" />
      <circle cx="180" cy="190" r="130" fill="none" stroke="#C9A84C" strokeWidth="0.4" opacity="0.35" />
      <circle cx="180" cy="190" r="100" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.2" />

      {/* Vertical pillar */}
      <line x1="180" y1="55" x2="180" y2="355" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" />

      {/* Top finial */}
      <polygon points="180,42 188,58 172,58" fill="#C9A84C" />
      <circle cx="180" cy="42" r="4" fill="#C9A84C" opacity="0.6" />

      {/* Cross beam */}
      <line x1="70" y1="118" x2="290" y2="118" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
      {/* Beam ends decoration */}
      <circle cx="70" cy="118" r="4" fill="#C9A84C" />
      <circle cx="290" cy="118" r="4" fill="#C9A84C" />

      {/* Left pan cords */}
      <line x1="82" y1="122" x2="55" y2="198" stroke="#C9A84C" strokeWidth="1.2" opacity="0.8" />
      <line x1="58" y1="122" x2="85" y2="198" stroke="#C9A84C" strokeWidth="1.2" opacity="0.8" />

      {/* Right pan cords */}
      <line x1="278" y1="122" x2="305" y2="198" stroke="#C9A84C" strokeWidth="1.2" opacity="0.8" />
      <line x1="302" y1="122" x2="275" y2="198" stroke="#C9A84C" strokeWidth="1.2" opacity="0.8" />

      {/* Left pan */}
      <ellipse cx="70" cy="205" rx="52" ry="11" fill="none" stroke="#C9A84C" strokeWidth="1.8" />
      <path d="M 18 205 Q 70 228 122 205" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" />

      {/* Right pan */}
      <ellipse cx="290" cy="205" rx="52" ry="11" fill="none" stroke="#C9A84C" strokeWidth="1.8" />
      <path d="M 238 205 Q 290 228 342 205" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" />

      {/* Left pan content – book */}
      <rect x="44" y="192" width="36" height="11" rx="1.5" fill="#C9A84C" opacity="0.25" />
      <rect x="62" y="192" width="1.5" height="11" fill="#C9A84C" opacity="0.5" />

      {/* Right pan content – coin */}
      <circle cx="284" cy="197" r="7" fill="none" stroke="#C9A84C" strokeWidth="1.2" opacity="0.6" />
      <circle cx="296" cy="196" r="5" fill="none" stroke="#C9A84C" strokeWidth="1.2" opacity="0.4" />

      {/* Base column */}
      <rect x="168" y="352" width="24" height="6" rx="3" fill="#C9A84C" />
      <rect x="154" y="358" width="52" height="5" rx="2.5" fill="#C9A84C" opacity="0.6" />
      <rect x="140" y="363" width="80" height="4" rx="2" fill="#C9A84C" opacity="0.3" />

      {/* Decorative dots */}
      <circle cx="110" cy="82" r="2" fill="#C9A84C" opacity="0.4" />
      <circle cx="250" cy="82" r="2" fill="#C9A84C" opacity="0.4" />
      <circle cx="130" cy="310" r="1.5" fill="#C9A84C" opacity="0.3" />
      <circle cx="230" cy="310" r="1.5" fill="#C9A84C" opacity="0.3" />

      {/* Small star accents */}
      <text x="92" y="72" fontSize="11" fill="#C9A84C" opacity="0.5" fontFamily="serif">✦</text>
      <text x="255" y="72" fontSize="11" fill="#C9A84C" opacity="0.5" fontFamily="serif">✦</text>
    </svg>
  );
}

/* ──────────────────────────── Data ──────────────────────────── */
const services = [
  {
    icon: <Tag className="w-7 h-7" />,
    title: 'Registro de Marca',
    description: 'Proteção completa de sua marca com registro, defesa e monitoramento em marketplaces.',
    href: '/registro-marca',
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: 'Registro de Patente',
    description: 'Proteção de invenções com análise de anterioridade, redação e defesa de patentes.',
    href: '/registro-patente',
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: 'Registro de Softwares',
    description: 'Proteção legal de softwares e aplicações com emissão de certificados oficiais.',
    href: '/registro-software',
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: 'Direito Autoral',
    description: 'Proteção de obras criativas com registro e gestão de obrigações acessórias.',
    href: '/direito-autoral',
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: 'Assessoria Jurídica',
    description: 'Consultoria especializada em propriedade intelectual e estratégia de proteção.',
    href: '/assessoria-juridica',
  },
];

const stats = [
  { number: '30+', label: 'Anos de Experiência' },
  { number: '6.800+', label: 'Empresas Atendidas' },
  { number: '11.780+', label: 'Processos de PI' },
  { number: '98%', label: 'Satisfação dos Clientes' },
];

const differentials = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Segurança Jurídica 360°',
    description: 'Proteção completa e estratégica para seus ativos intelectuais com expertise reconhecida no mercado.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Atendimento Humanizado',
    description: 'Equipe dedicada que entende suas necessidades e busca as melhores soluções personalizadas.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Agilidade e Tecnologia',
    description: 'Processos otimizados com tecnologia e monitoramento 24/7 para atender com rapidez e qualidade.',
  },
];

const testimonials = [
  {
    name: 'Carla Ribeiro',
    role: 'CEO',
    initials: 'CR',
    text: 'Contar com a PRCS Advogados foi um divisor de águas para minha empresa. Eles garantiram a segurança jurídica do nosso negócio e protegeram nossa propriedade intelectual com agilidade e eficiência.',
  },
  {
    name: 'Rafael Kawori',
    role: 'Gerente de Operações',
    initials: 'RK',
    text: 'A consultoria jurídica da PRCS é excepcional. Com soluções claras e atendimento humanizado, conseguimos resolver questões contratuais complexas e focar no crescimento do nosso negócio.',
  },
  {
    name: 'Ana Silva',
    role: 'Diretora de Marca',
    initials: 'AS',
    text: 'O registro de marca com a PRCS foi rápido e seguro. Sua equipe nos orientou em cada etapa e garantiu que nossa marca estivesse completamente protegida. Recomendo a qualquer empresa.',
  },
];

const registeredBrands = [
  { name: 'TechInova', category: 'Tecnologia', initial: 'T' },
  { name: 'GreenLife', category: 'Sustentabilidade', initial: 'G' },
  { name: 'ProDental', category: 'Saúde', initial: 'P' },
  { name: 'FashionHub', category: 'Moda', initial: 'F' },
  { name: 'EcoPackaging', category: 'Embalagem', initial: 'E' },
  { name: 'DigitalMax', category: 'Software', initial: 'D' },
  { name: 'NutriBalance', category: 'Alimentos', initial: 'N' },
  { name: 'SmartHome', category: 'IoT', initial: 'S' },
];

/* ──────────────────────────── Component ──────────────────────────── */
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative bg-primary overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 hero-pattern opacity-100" />

        {/* Decorative diagonal */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-10"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.3) 100%)',
          }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">

            {/* Left — text */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-semibold tracking-widest uppercase">
                  Escritório Especializado
                </span>
              </div>

              <h1 className="text-white font-bold leading-tight mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)' }}>
                Proteja o Que é Seu.{' '}
                <span style={{ color: 'var(--gold)' }}>Crescer é Seguro</span>{' '}
                com a PRCS.
              </h1>

              <p className="text-white/75 mb-10 leading-relaxed text-lg max-w-lg">
                Há mais de 30 anos protegendo marcas, patentes e propriedade intelectual das empresas que movem o Brasil.
                Atendimento humanizado, tecnologia de ponta e banca jurídica própria.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5511940229012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 text-base"
                >
                  <MessageCircle size={18} />
                  Fale com um Especialista
                </a>
                <a
                  href="#servicos"
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-base"
                >
                  Ver Áreas de Atuação
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
                <div className="text-center">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest">OAB</p>
                  <p className="text-white/50 text-xs mt-0.5">Registro Ativo</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest">ABAPI</p>
                  <p className="text-white/50 text-xs mt-0.5">Associado</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest">30+</p>
                  <p className="text-white/50 text-xs mt-0.5">Anos no mercado</p>
                </div>
              </div>
            </div>

            {/* Right — Courthouse illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                {/* Decorative frame */}
                <div className="absolute -inset-3 rounded-2xl opacity-20" style={{ border: '1px solid var(--gold)' }} />
                <div className="absolute -inset-6 rounded-2xl opacity-10" style={{ border: '1px solid var(--gold)' }} />
                <img
                  src="/assets/courthouse.svg"
                  alt="Tribunal clássico — PRCS Advogados"
                  className="w-full rounded-2xl"
                  style={{ boxShadow: '0 0 60px rgba(201,168,76,0.12)' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 border-t border-white/10">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center py-7 px-4">
                  <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--gold)' }}>
                    {stat.number}
                  </div>
                  <p className="text-white/55 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section id="servicos" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">O que fazemos</span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="section-title">Nossas Áreas de Atuação</h2>
            <p className="text-foreground/60 max-w-xl mx-auto leading-relaxed">
              Soluções jurídicas completas em propriedade intelectual para proteger e valorizar seus ativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {services.map((service, i) => (
              <Link key={i} href={service.href}>
                <a className="group block card-service text-center hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(201,168,76,0.12)', color: 'var(--gold)' }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-primary text-base mb-3 leading-tight">{service.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div
                    className="flex items-center justify-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                    style={{ color: 'var(--gold)' }}
                  >
                    Saiba mais <ChevronRight size={15} />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ DIFFERENTIALS ═══════════════ */}
      <section className="section-padding" style={{ background: '#f4f6fb' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — differentials */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-semibold tracking-widest uppercase">Nossos Diferenciais</span>
              </div>
              <h2 className="section-title mb-3">Por que escolher a PRCS Advogados?</h2>
              <p className="text-foreground/60 mb-10 leading-relaxed">
                Mais de 30 anos de experiência, tecnologia de ponta e uma equipe apaixonada por resultados.
              </p>

              <div className="space-y-6">
                {differentials.map((d, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(13,32,74,0.07)', color: 'var(--primary)' }}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-1.5">{d.title}</h3>
                      <p className="text-foreground/65 leading-relaxed">{d.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — comparison table */}
            <div>
              <div className="grid grid-cols-1 gap-4">
                {/* PRCS */}
                <div className="bg-primary rounded-2xl p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                    style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-white font-bold text-lg">PRCS Advogados</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Proteção em marcas e patentes 360°',
                      'Procedimentos acessórios inclusos',
                      'Monitoramento automático 24/7',
                      'Banca jurídica própria',
                      'Atendimento por advogados especializados',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/85">
                        <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Competitors */}
                <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                      <XIcon className="w-5 h-5 text-red-500" />
                    </div>
                    <h4 className="text-foreground/80 font-bold text-lg">O que a concorrência oferece</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Demora no atendimento jurídico',
                      'Cobranças adicionais por serviços básicos',
                      'Processos lentos e burocráticos',
                      'Atendimento por não-advogados',
                      'Sem monitoramento ou proteção contínua',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/60">
                        <XIcon className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="sobre" className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left visual */}
            <div className="relative">
              {/* Background card with law library image */}
              <div
                className="rounded-2xl relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0D204A 0%, #1a3060 100%)' }}
              >
                {/* Library background image */}
                <img
                  src="/assets/law-library.svg"
                  alt="Biblioteca jurídica"
                  className="w-full h-56 object-cover object-center opacity-70"
                />
                {/* Gradient fade into content below */}
                <div className="absolute top-0 inset-x-0 h-56 bg-gradient-to-b from-transparent to-primary/90" />

                <div className="relative z-10 p-8">
                  {/* Quote */}
                  <div className="border-t border-white/20 pt-7">
                    <Quote className="w-8 h-8 mb-4 opacity-60" style={{ color: 'var(--gold)' }} />
                    <p className="text-white/80 italic leading-relaxed text-sm mb-6">
                      "Transformamos desafios legais em oportunidades de crescimento empresarial. Nosso compromisso é oferecer suporte jurídico estratégico com total dedicação e profissionalismo."
                    </p>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                        style={{ background: 'var(--gold)', color: 'var(--primary)' }}
                      >
                        PR
                      </div>
                      <div>
                        <p className="text-white font-bold">Paulo R. C. Sousa</p>
                        <p className="text-white/55 text-sm">Advogado & CEO — OAB/SP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating certification badges */}
              <div className="absolute -right-5 top-8 flex flex-col gap-3">
                <div
                  className="w-20 h-20 rounded-xl flex flex-col items-center justify-center shadow-xl text-center p-2"
                  style={{ background: 'var(--gold)' }}
                >
                  <p className="text-primary font-black text-xs leading-tight">ABAPI</p>
                  <p className="text-primary/70 text-[9px] mt-0.5 leading-tight">Associado</p>
                </div>
                <div
                  className="w-20 h-20 rounded-xl flex flex-col items-center justify-center shadow-xl text-center p-2"
                  style={{ background: '#0D204A', border: '2px solid var(--gold)' }}
                >
                  <p style={{ color: 'var(--gold)' }} className="font-black text-xs leading-tight">OAB</p>
                  <p className="text-white/60 text-[9px] mt-0.5 leading-tight">Ativo</p>
                </div>
              </div>
            </div>

            {/* Right text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-semibold tracking-widest uppercase">Quem somos</span>
              </div>
              <h2 className="section-title mb-6">
                30 anos protegendo o que importa para o seu negócio
              </h2>
              <p className="text-foreground/65 mb-5 leading-relaxed">
                Na PRCS Advogados, somos especialistas em registro de marcas, patentes e propriedade intelectual.
                Com três décadas de atuação, construímos uma reputação sólida baseada em resultados reais
                e relacionamentos duradouros.
              </p>
              <p className="text-foreground/65 mb-10 leading-relaxed">
                Nossa abordagem combina profundo conhecimento jurídico com tecnologia de ponta,
                garantindo que cada cliente receba proteção completa e personalizada para seus ativos intelectuais.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Equipe jurídica especializada em propriedade intelectual',
                  'Conhecimento jurídico estratégico e atualizado',
                  'Monitoramento 24/7 de marcas e patentes',
                  'Atendimento personalizado e humanizado',
                  'Procedimentos administrativos inclusos sem custo extra',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'var(--gold)' }}
                    >
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/sobre-nos"
                className="inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:gap-3"
                style={{ color: 'var(--gold)' }}
              >
                Conheça nossa história completa
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CLIENTS ═══════════════ */}
      <section id="clientes" className="section-padding bg-primary">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">Nossos Clientes</span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="text-white font-bold mb-4" style={{ fontFamily: 'Lora, serif', fontSize: '36px' }}>
              Marcas que Confiaram na PRCS
            </h2>
            <p className="text-white/55 max-w-xl mx-auto">
              Empresas de diferentes segmentos escolheram a PRCS para proteger sua propriedade intelectual.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {registeredBrands.map((brand, i) => (
              <div
                key={i}
                className="rounded-xl p-6 text-center border transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
                style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-xl"
                  style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)' }}
                >
                  {brand.initial}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{brand.name}</h3>
                <p className="text-white/40 text-xs">{brand.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="section-padding" style={{ background: '#f4f6fb' }}>
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">Depoimentos</span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="section-title">O que nossos clientes dizem</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Active testimonial */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-border mb-8 relative">
              <Quote className="w-10 h-10 absolute top-8 right-8 opacity-10 text-primary" />
              <p className="text-foreground/75 leading-relaxed text-lg italic mb-8">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                  style={{ background: 'var(--primary)', color: 'white' }}
                >
                  {testimonials[activeTestimonial].initials}
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonials[activeTestimonial].name}</p>
                  <p className="text-foreground/50 text-sm">{testimonials[activeTestimonial].role}</p>
                </div>
                {/* Gold stars */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: 'var(--gold)' }}>★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: i === activeTestimonial ? '28px' : '8px',
                    height: '8px',
                    background: i === activeTestimonial ? 'var(--gold)' : '#cbd5e1',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-100" />
        <div className="container relative z-10 text-center py-20 lg:py-24">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Próximo Passo</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="text-white font-bold mb-6 max-w-3xl mx-auto" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.3 }}>
            Pronto para Proteger Sua Marca e Seus Ativos?
          </h2>
          <p className="text-white/65 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Agende uma consulta gratuita com nossos especialistas e descubra como podemos transformar seus ativos intelectuais em vantagens competitivas reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511940229012"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 text-base"
            >
              <MessageCircle size={18} />
              Solicitar Consulta Gratuita
            </a>
            <a
              href="tel:+5511940229012"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-base"
            >
              <Phone size={18} />
              (11) 9 4022-9012
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
