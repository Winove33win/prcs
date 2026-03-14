import { ArrowRight, CheckCircle, BookOpen, Music, Palette, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Autoral() {
  const protections = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Obras Literárias',
      description: 'Proteção para livros, artigos, poesias, scripts e outros textos originais.',
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Obras Musicais',
      description: 'Proteção para composições, letras de músicas e arranjos musicais.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Obras Artísticas',
      description: 'Proteção para pinturas, desenhos, esculturas, fotografias e artes visuais.',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Obras Científicas',
      description: 'Proteção para pesquisas, monografias, dissertações e trabalhos acadêmicos.',
    },
  ];

  const benefits = [
    {
      title: 'Proteção Automática',
      description: 'A proteção de direitos autorais é automática desde o momento da criação da obra.',
    },
    {
      title: 'Registro Oficial',
      description: 'Registro na Biblioteca Nacional ou órgãos competentes para maior segurança jurídica.',
    },
    {
      title: 'Direitos Exclusivos',
      description: 'Direito exclusivo de reprodução, distribuição, exibição e modificação da obra.',
    },
    {
      title: 'Licenciamento',
      description: 'Possibilidade de licenciar sua obra para terceiros e gerar receita.',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Avaliação da Obra',
      description: 'Análise da obra para determinar sua elegibilidade para proteção autoral.',
    },
    {
      step: '2',
      title: 'Documentação',
      description: 'Preparação de toda a documentação necessária para o registro.',
    },
    {
      step: '3',
      title: 'Registro Oficial',
      description: 'Submissão do registro na Biblioteca Nacional ou órgão competente.',
    },
    {
      step: '4',
      title: 'Certificado',
      description: 'Recebimento do certificado oficial de registro de direitos autorais.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container">
          <h1 className="font-bold mb-6 text-5xl md:text-6xl">Direito Autoral</h1>
          <p className="text-primary-foreground/90 max-w-2xl text-lg">
            Proteja suas obras criativas com registro de direitos autorais. Garanta exclusividade e direitos legais sobre suas criações intelectuais.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">O Que É Direito Autoral?</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Direito autoral é o conjunto de direitos que protegem as criações intelectuais originais. Inclui obras literárias, artísticas, musicais, científicas e outras manifestações criativas.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                O direito autoral garante ao criador o direito exclusivo de usar, reproduzir, distribuir e modificar sua obra, além de receber remuneração pelo seu uso.
              </p>
              <a
                href="https://wa.me/5511940229012"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                Registrar Obra <ArrowRight size={20} />
              </a>
            </div>
            <div className="bg-secondary rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Fatos Importantes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Proteção automática desde a criação</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Validade durante toda a vida do autor + 70 anos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Registro aumenta segurança jurídica</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Possibilidade de ações contra infrações</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-16">Tipos de Obras Protegidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {protections.map((protection, idx) => (
              <div key={idx} className="card-service">
                <div className="text-primary mb-4">{protection.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{protection.title}</h3>
                <p className="text-foreground/70">{protection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-16">Benefícios do Registro</h2>
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

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-16">Como Funciona o Registro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Licenciamento Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-secondary rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Licenciamento de Obras</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Após registrar sua obra, você pode licenciá-la para terceiros, gerando receita através de royalties e direitos autorais.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Contratos de licenciamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Gestão de royalties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Proteção contra uso indevido</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Ações contra infrações</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Proteção Contra Infrações</h3>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Com o registro de direitos autorais, você tem base legal sólida para agir contra qualquer uso indevido de sua obra.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Oferecemos suporte completo em ações contra infrações, incluindo notificações, negociações e ações judiciais quando necessário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Proteja Sua Criação Intelectual</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para registrar seus direitos autorais e garantir proteção legal para suas obras criativas.
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
