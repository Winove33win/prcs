import { ArrowRight, CheckCircle, Briefcase, Shield, TrendingUp, FileCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Assessoria() {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Consultoria Empresarial',
      description: 'Apoio jurídico completo para empresas, desde contratos até regularizações e estratégias legais.',
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Gestão de Contratos',
      description: 'Elaboração, revisão e gestão de contratos empresariais com segurança e clareza.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliance e Conformidade',
      description: 'Implementação de políticas de compliance para garantir conformidade regulatória.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Gestão de Ativos Intangíveis',
      description: 'Proteção e valorização de ativos intelectuais e imateriais da empresa.',
    },
  ];

  const areas = [
    {
      title: 'Direito Contratual',
      items: [
        'Elaboração de contratos comerciais',
        'Revisão de cláusulas contratuais',
        'Negociação de termos e condições',
        'Gestão de relacionamento com fornecedores',
      ],
    },
    {
      title: 'Direito Societário',
      items: [
        'Constituição de empresas',
        'Alteração de contratos sociais',
        'Fusões e aquisições',
        'Planejamento sucessório',
      ],
    },
    {
      title: 'Propriedade Intelectual',
      items: [
        'Gestão de portfólio de PI',
        'Estratégia de proteção de ativos',
        'Licenciamento de tecnologia',
        'Conformidade com direitos de terceiros',
      ],
    },
    {
      title: 'Direito Trabalhista',
      items: [
        'Elaboração de políticas trabalhistas',
        'Gestão de conflitos laborais',
        'Conformidade com legislação trabalhista',
        'Rescisão de contratos de trabalho',
      ],
    },
  ];

  const benefits = [
    {
      title: 'Prevenção de Riscos',
      description: 'Identificação e mitigação de riscos legais antes que se tornem problemas.',
    },
    {
      title: 'Economia de Custos',
      description: 'Redução de custos legais através de consultoria preventiva estratégica.',
    },
    {
      title: 'Conformidade Regulatória',
      description: 'Garantia de conformidade com todas as leis e regulamentações aplicáveis.',
    },
    {
      title: 'Segurança Jurídica',
      description: 'Proteção completa dos interesses e patrimônio da empresa.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container">
          <h1 className="font-bold mb-6 text-5xl md:text-6xl">Assessoria Jurídica</h1>
          <p className="text-primary-foreground/90 max-w-2xl text-lg">
            Consultoria jurídica estratégica e personalizada para empresas. Proteção completa dos seus interesses legais e patrimoniais.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Por Que Contratar Assessoria Jurídica?</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Assessoria jurídica preventiva é essencial para empresas que desejam proteger seus interesses, evitar riscos legais e tomar decisões estratégicas com segurança.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Nossa equipe oferece consultoria estratégica em diversas áreas do direito, ajudando sua empresa a crescer com segurança jurídica e conformidade regulatória.
              </p>
              <a
                href="https://wa.me/5511940229012"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                Solicitar Consultoria <ArrowRight size={20} />
              </a>
            </div>
            <div className="bg-secondary rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Nosso Diferencial</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Abordagem preventiva e estratégica</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Equipe multidisciplinar especializada</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Atendimento personalizado e humanizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Tecnologia e agilidade no atendimento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-16">Serviços de Assessoria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="card-service">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-16">Áreas de Atuação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, idx) => (
              <div key={idx} className="card-service">
                <h3 className="text-xl font-bold text-primary mb-4">{area.title}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-16">Benefícios da Assessoria Jurídica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="card-service">
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gestão de Ativos Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Gestão de Ativos Intangíveis</h3>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Os ativos intangíveis (marcas, patentes, direitos autorais, know-how) são frequentemente os bens mais valiosos de uma empresa. Oferecemos gestão estratégica desses ativos para maximizar seu valor.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Desde a proteção inicial até o licenciamento e monetização, nossa equipe garante que seus ativos intelectuais trabalhem para o crescimento da empresa.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Inventário de ativos intangíveis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Estratégia de proteção integrada</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Valorização e monetização</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Consultoria Preventiva</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Nossa abordagem preventiva identifica riscos legais antes que se tornem problemas custosos, economizando tempo e dinheiro para sua empresa.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Análise de riscos legais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Implementação de políticas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Treinamento de equipes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Acompanhamento contínuo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforme Desafios em Oportunidades</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma consultoria estratégica personalizada e descubra como proteger e valorizar os ativos da sua empresa.
          </p>
          <a
            href="https://wa.me/5511940229012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Agendar Consulta <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
