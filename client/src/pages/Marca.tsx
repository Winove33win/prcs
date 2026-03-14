import { ArrowRight, CheckCircle, Clock, Shield, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Marca() {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Proteção Legal Completa',
      description: 'Proteção exclusiva do seu nome, logotipo e identidade visual junto ao INPI.',
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Análise de Disponibilidade',
      description: 'Pesquisa completa para garantir que sua marca está disponível no mercado.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Acompanhamento do Processo',
      description: 'Gestão completa do processo de registro junto ao INPI com atualizações periódicas.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Vigilância de Marca',
      description: 'Monitoramento contínuo para detectar possíveis infrações e proteger seus direitos.',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Consulta Inicial',
      description: 'Análise da sua marca e objetivos comerciais para definir a melhor estratégia.',
    },
    {
      step: '2',
      title: 'Pesquisa de Disponibilidade',
      description: 'Investigação completa de marcas similares no INPI e no mercado.',
    },
    {
      step: '3',
      title: 'Preparação do Processo',
      description: 'Elaboração de toda a documentação necessária para o registro.',
    },
    {
      step: '4',
      title: 'Protocolo no INPI',
      description: 'Submissão do pedido de registro junto ao Instituto Nacional da Propriedade Industrial.',
    },
    {
      step: '5',
      title: 'Acompanhamento',
      description: 'Gestão de todas as etapas do processo até a concessão da marca.',
    },
    {
      step: '6',
      title: 'Certificado de Registro',
      description: 'Recebimento do certificado oficial de propriedade da marca.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container">
          <h1 className="font-bold mb-6 text-5xl md:text-6xl">Registro de Marca</h1>
          <p className="text-primary-foreground/90 max-w-2xl text-lg">
            Proteja sua identidade visual e construa um ativo valioso para seu negócio com nosso serviço completo de registro de marca.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Por Que Registrar Sua Marca?</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Uma marca registrada é um ativo intangível valioso que protege sua identidade no mercado. O registro junto ao INPI (Instituto Nacional da Propriedade Industrial) garante exclusividade de uso e direitos legais contra infrações.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Sem o registro, sua marca fica vulnerável a cópias e uso indevido por concorrentes. Com o registro, você tem proteção legal completa e pode agir contra qualquer violação.
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
              <h3 className="text-2xl font-bold text-primary mb-6">Fatos Importantes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Validade de 10 anos, renovável indefinidamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Proteção em todo o território nacional</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Possibilidade de registro internacional</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Aumenta o valor da empresa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-16">Benefícios do Registro</h2>
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
      <section className="section-padding">
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

      {/* Vigilância Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Vigilância de Marca</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Após o registro, oferecemos serviço contínuo de vigilância para monitorar possíveis infrações e uso indevido de sua marca no mercado.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Monitoramento de registros similares</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Alertas de possíveis infrações</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Ações contra uso indevido</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Proteção de direitos autorais</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Por Que Vigilância é Importante?</h3>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                A vigilância ativa é essencial para manter a exclusividade de sua marca e evitar que concorrentes utilizem marcas similares que possam confundir consumidores.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Detectar infrações rapidamente permite ações legais mais efetivas e protege o valor da sua marca no mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Proteger Sua Marca?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e agende uma consulta gratuita com nossos especialistas em propriedade intelectual.
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
