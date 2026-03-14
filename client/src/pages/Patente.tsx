import { ArrowRight, CheckCircle, Lightbulb, Search, TrendingUp, Lock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Patente() {
  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Proteção de Invenções',
      description: 'Proteção legal completa para suas inovações e invenções por até 20 anos.',
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Análise de Anterioridade',
      description: 'Pesquisa detalhada para garantir que sua invenção é realmente inovadora.',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Redação Técnica',
      description: 'Documentação técnica precisa e completa para o pedido de patente.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Aumento de Valor',
      description: 'Patentes aumentam significativamente o valor da empresa e atraem investimentos.',
    },
  ];

  const types = [
    {
      title: 'Patente de Invenção',
      description: 'Para produtos ou processos que representam uma solução técnica inovadora.',
      duration: '20 anos',
    },
    {
      title: 'Modelo de Utilidade',
      description: 'Para melhorias funcionais em produtos existentes com aplicação prática.',
      duration: '15 anos',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Avaliação da Invenção',
      description: 'Análise técnica para determinar se sua invenção é patenteável.',
    },
    {
      step: '2',
      title: 'Pesquisa de Anterioridade',
      description: 'Investigação completa para confirmar a novidade da invenção.',
    },
    {
      step: '3',
      title: 'Redação da Patente',
      description: 'Elaboração técnica e jurídica do pedido de patente.',
    },
    {
      step: '4',
      title: 'Protocolo no INPI',
      description: 'Submissão do pedido junto ao Instituto Nacional da Propriedade Industrial.',
    },
    {
      step: '5',
      title: 'Exame e Acompanhamento',
      description: 'Gestão de todas as etapas do exame até a concessão.',
    },
    {
      step: '6',
      title: 'Concessão da Patente',
      description: 'Recebimento do certificado oficial de propriedade da patente.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container">
          <h1 className="font-bold mb-6 text-5xl md:text-6xl">Registro de Patente</h1>
          <p className="text-primary-foreground/90 max-w-2xl text-lg">
            Proteja suas inovações e invenções com o registro de patente. Transforme suas ideias em ativos valiosos com proteção legal de até 20 anos.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Por Que Patentear Sua Invenção?</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Uma patente é um direito exclusivo que protege sua invenção contra cópia e uso indevido. Com a patente, você tem o monopólio de exploração comercial de sua inovação no mercado.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                As patentes são ativos intangíveis valiosos que aumentam o valor da empresa, atraem investimentos e permitem licenciamento para outras empresas gerarem receita.
              </p>
              <a
                href="https://wa.me/5511940229012"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                Iniciar Registro <ArrowRight size={20} />
              </a>
            </div>
            <div className="bg-secondary rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Informações Importantes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Proteção de até 20 anos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Direito exclusivo de exploração</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Possibilidade de licenciamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Proteção em todo o Brasil</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-16">Tipos de Patentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {types.map((type, idx) => (
              <div key={idx} className="card-service">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">{type.title}</h3>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {type.duration}
                  </span>
                </div>
                <p className="text-foreground/70">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-16">Benefícios da Patente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="card-service">
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-16">Como Funciona o Processo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="card-service">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anterioridade Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Análise de Anterioridade</h3>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Antes de investir no registro de patente, realizamos uma análise completa de anterioridade para garantir que sua invenção é realmente inovadora e não viola direitos de terceiros.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Esta análise é fundamental para aumentar as chances de concessão da patente e evitar problemas legais futuros.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Pesquisa em bancos de dados internacionais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Análise de patentes similares</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Relatório detalhado de viabilidade</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Redação Técnica</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                A redação técnica da patente é crucial para sua aprovação. Nossa equipe especializada elabora documentação precisa e completa que descreve todos os aspectos técnicos da invenção.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Descrição técnica detalhada</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Reivindicações bem estruturadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Desenhos técnicos profissionais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Proteja Sua Inovação Hoje</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma análise gratuita de sua invenção e saiba como protegê-la com uma patente.
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
