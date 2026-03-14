import { ArrowRight, Shield, Users, Zap, Scale, FileText, Lock, Briefcase, ChevronLeft, ChevronRight, Star, ShoppingCart, AlertTriangle, Bell, Globe, Tag, Lightbulb, Code, BookOpen } from 'lucide-react';
import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsToShow(4);
      else if (window.innerWidth >= 768) setItemsToShow(2);
      else setItemsToShow(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      icon: <Tag className="w-12 h-12" />,
      title: 'Registro de Marca',
      description: 'Protecao completa de sua marca com registro, defesa e monitoramento em marketplaces.',
      href: '/registro-marca',
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Registro de Patente',
      description: 'Protecao de invencoes com analise de anterioridade, redacao e defesa de patentes.',
      href: '/registro-patente',
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Registro de Softwares',
      description: 'Protecao legal de softwares e aplicacoes com emissao de certificados oficiais.',
      href: '/registro-software',
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Direito Autoral',
      description: 'Protecao de obras criativas com registro e gestao de obrigacoes acessorias.',
      href: '/direito-autoral',
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Assessoria Juridica',
      description: 'Consultoria especializada em propriedade intelectual e estrategia de protecao de ativos.',
      href: '/assessoria-juridica',
    },
  ];

  const differentials = [
    {
      icon: <Shield className="w-16 h-16" />,
      title: 'Segurança Jurídica',
      description: 'Proteção completa e estratégica para seus ativos intelectuais com expertise reconhecida.',
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: 'Atendimento Humanizado',
      description: 'Equipe dedicada que entende suas necessidades e busca as melhores soluções.',
    },
    {
      icon: <Zap className="w-16 h-16" />,
      title: 'Agilidade e Eficiência',
      description: 'Processos otimizados com tecnologia para atender com rapidez e qualidade.',
    },
  ];

  const testimonials = [
    {
      name: 'Carla Ribeiro',
      role: 'CEO',
      avatar: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=CR',
      text: 'Contar com a PRCS Advogados foi um divisor de águas para minha empresa. Eles não apenas garantiram a segurança jurídica do nosso negócio, como também nos ajudaram a proteger nossa propriedade intelectual com agilidade e eficiência.',
    },
    {
      name: 'Rafael Kawori',
      role: 'Gerente',
      avatar: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=RK',
      text: 'A consultoria jurídica da PRCS é excepcional. Com soluções claras e um atendimento humanizado, conseguimos resolver questões contratuais complexas e focar no crescimento do nosso negócio.',
    },
    {
      name: 'Ana Silva',
      role: 'Diretora de Marca',
      avatar: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=AS',
      text: 'O registro de marca com a PRCS foi rápido e seguro. Sua equipe nos orientou em cada etapa do processo e garantiu que nossa marca estivesse completamente protegida. Recomendo para qualquer empresa que deseja proteger sua identidade.',
    },
    {
      name: 'Márcio Ferreira',
      role: 'Founder',
      avatar: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=MF',
      text: 'Precisava registrar uma patente de uma invenção inovadora e a PRCS fez um trabalho impecável. Desde a análise de anterioridade até a redação final, tudo foi profissional e eficiente.',
    },
    {
      name: 'Juliana Costa',
      role: 'Gerente de PI',
      avatar: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=JC',
      text: 'A PRCS Advogados nos ajudou a proteger toda a nossa cartéra de propriedade intelectual. O monitoramento 24/7 de marcas nos dá tranquilidade e confiabilidade total no mercado.',
    },
  ];

  const registeredBrands = [
    { name: 'TechInova', category: 'Tecnologia', logo: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=TechInova' },
    { name: 'GreenLife', category: 'Sustentabilidade', logo: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=GreenLife' },
    { name: 'ProDental', category: 'Saúde', logo: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=ProDental' },
    { name: 'FashionHub', category: 'Moda', logo: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=FashionHub' },
    { name: 'EcoPackaging', category: 'Embalagem', logo: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=EcoPackaging' },
    { name: 'DigitalMax', category: 'Software', logo: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=DigitalMax' },
    { name: 'NutriBalance', category: 'Alimentos', logo: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=NutriBalance' },
    { name: 'SmartHome', category: 'IoT', logo: 'https://via.placeholder.com/80/0D204A/FFFFFF?text=SmartHome' },
  ];

  const stats = [
    { number: '30+', label: 'Anos de Experiência' },
    { number: '6.800+', label: 'Empresas Atendidas' },
    { number: '11.780+', label: 'Processos de PI' },
    { number: '98%', label: 'Taxa de Satisfação' },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(services[(currentServiceIndex + i) % services.length]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-12 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-bold leading-tight mb-6 text-5xl md:text-6xl">
                Proteja sua Marca contra a Falsificação
              </h1>
              <p className="text-primary-foreground/90 mb-8 leading-relaxed text-lg">
                Monitoramento 24/7, garantindo proteção total de sua propriedade intelectual.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#servicos"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Conhecer Áreas de Atuação <ArrowRight size={20} />
                </a>
                <a
                  href="https://wa.me/5511940229012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Busca Comentada
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center relative overflow-hidden rounded-2xl shadow-2xl h-96 bg-gradient-to-br from-primary/20 to-primary/40">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/ip5fTE90USXueux1AQiGlU/sandbox/TBAmQkaRzN32Vn4zKWXCME-img-1_1772053387000_na1fn_aGVyby1vZmZpY2UtcHJvZmVzc2lvbmFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaXA1ZlRFOTBVU1h1ZXV4MUFRaUdsVS9zYW5kYm94L1RCQW1Ra2FSek4zMlZuNHpLV1hDTUUtaW1nLTFfMTc3MjA1MzM4NzAwMF9uYTFmbl9hR1Z5YnkxdlptWnBZMlV0Y0hKdlptVnpjMmx2Ym1Gcy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gBwvGbs5Ph2u9bNNRolR9kl7GN-NbueHkjBg3GRWHwnjpWdIPsL2p5beWN1QIlA~un6rUJqvxDDxFLEX2ZFmnuzKnzZEbAB8fm7nZq7~Lvvv52cuRcHcLEEUs3bebkLYr1UtNJ74xiou927aSAHOrAlsMIO9F8vNSKefX60TW8cSBN3Q56SVFRP~a-3YyRyiWOjjAThrvmAnqTfegvM95o4SMkYcFNsom6F0Y0DpotYOnYrom2EhMrdqKP5Z4cteJDAJBZw~Z-mi-pF2N6GqzSZGSh6yge5OBlAubgV1LGcF1UxMfPBQ7ToCfe~-200Xylp1U7NH6a6QzZ6tBLWaZw__"
                alt="Escritório PRCS Advogados"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-16">Por Que Escolher a PRCS Advogados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((diff, idx) => (
              <div key={idx} className="card-service">
                <div className="text-primary mb-6 p-4 bg-primary/10 rounded-full w-fit">{diff.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{diff.title}</h3>
                <p className="text-foreground/70">{diff.description}</p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-20 pt-16 border-t border-primary/20">
            <h3 className="text-2xl font-bold text-center text-primary mb-12">A Estratégia de Proteção</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Competitors */}
              <div className="bg-white/50 rounded-lg p-8">
                <h4 className="text-lg font-bold text-red-600 mb-6">O que nossos concorrentes oferecem:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✕</span>
                    <span className="text-foreground/80">Demora no atendimento de demandas jurídicas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✕</span>
                    <span className="text-foreground/80">Cobranças adicionais por serviços básicos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✕</span>
                    <span className="text-foreground/80">Processos lentos, burocráticos e sem tecnologia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✕</span>
                    <span className="text-foreground/80">Atendimento por profissionais não advogados</span>
                  </li>
                </ul>
              </div>

              {/* PRCS Advogados */}
              <div className="bg-primary/10 rounded-lg p-8 border-2 border-primary">
                <h4 className="text-lg font-bold text-primary mb-6">O que a PRCS Advogados oferece:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground/80">Proteção em marcas e patentes 360º</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground/80">Procedimentos acessórios inclusos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground/80">Monitoramento automático 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground/80">Banca jurídica própria</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Carousel */}
      <section id="servicos" className="section-padding relative">
        <div className="container">
          <h2 className="section-title text-center mb-16">Nossos Serviços</h2>
          <div className="relative">
            {/* Left Arrow - Absolute Position */}
            <button
              onClick={prevService}
              className="absolute -left-8 lg:-left-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg"
              aria-label="Serviço anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Services Carousel */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0">
              {getVisibleServices().map((service, idx) => (
                <Link key={idx} href={service.href}>
                  <a className="card-service group cursor-pointer">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-foreground/70 mb-4 text-sm">{service.description}</p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Saiba Mais <ArrowRight size={16} />
                    </div>
                  </a>
                </Link>
              ))}
            </div>

            {/* Right Arrow - Absolute Position */}
            <button
              onClick={nextService}
              className="absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg"
              aria-label="Próximo serviço"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registered Brands Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-16">Marcas Registradas e Empresas Atendidas</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Conheça algumas das marcas e empresas que confiaram na PRCS Advogados para proteger sua propriedade intelectual
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {registeredBrands.map((brand, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow text-center">
                <img src={brand.logo} alt={brand.name} className="w-20 h-20 mx-auto mb-4 rounded-lg" />
                <h3 className="font-bold text-primary text-lg mb-2">{brand.name}</h3>
                <p className="text-foreground/60 text-sm">{brand.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* About Section */}
      <section id="sobre" className="section-padding bg-white relative">
        {/* Floating Certifications */}
        <div className="absolute top-8 right-8 flex flex-col gap-6">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100/0D204A/FFFFFF?text=ABAPI"
              alt="ABAPI - Associação Brasileira de Propriedade Intelectual"
              className="w-24 h-24 mx-auto mb-2 rounded-lg shadow-lg"
            />
            <p className="text-xs text-foreground/70 font-semibold">ABAPI</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/100/0D204A/FFFFFF?text=OAB"
              alt="OAB - Ordem dos Advogados do Brasil"
              className="w-24 h-24 mx-auto mb-2 rounded-lg shadow-lg"
            />
            <p className="text-xs text-foreground/70 font-semibold">OAB</p>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Sobre a PRCS Advogados</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Na PRCS Advogados, somos especialistas em registro de marcas e patentes. Com 30 anos de experiência, protegemos as ideias e invenções que movem seu negócio.
              </p>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Com uma abordagem humanizada e uso de tecnologia, protegemos suas marcas e patentes com agilidade e eficiência, transformando suas invenções em ativos valiosos para o crescimento empresarial.
              </p>
              <div className="bg-secondary p-6 rounded-lg border-l-4 border-primary">
                <p className="text-foreground/70 italic mb-6">
                  "Na PRCS Advogados, transformamos desafios legais em oportunidades para o crescimento empresarial. Nosso compromisso é oferecer suporte jurídico estratégico com total dedicação e profissionalismo."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://via.placeholder.com/80/0D204A/FFFFFF?text=Paulo"
                    alt="Dr. Paulo R C Sousa"
                    className="w-20 h-20 rounded-full border-3 border-primary flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-primary">Paulo R C Sousa</p>
                    <p className="text-foreground/60">Advogado, CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Experiência e Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Equipe jurídica especializada em propriedade intelectual</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Conhecimento jurídico estratégico e atualizado</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Atendimento personalizado e humanizado</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Soluções rápidas e eficientes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Proteger Sua Marca?</h2>
          <p className="text-primary-foreground/90 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Entre em contato conosco hoje mesmo e agende uma consulta gratuita com nossos especialistas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511940229012"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Solicitar Proteção Agora
            </a>
            <a
              href="#sobre"
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              Fale com um Advogado
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
