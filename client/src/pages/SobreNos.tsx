import { useState } from 'react';
import { Clock, Users, Briefcase, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SobreNos() {
  const [activeTab, setActiveTab] = useState('historia');

  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      number: '30+',
      label: 'Anos de Experiência',
      description: 'Três décadas protegendo propriedade intelectual'
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: '6.800+',
      label: 'Empresas Atendidas',
      description: 'Desde startups até grandes corporações'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      number: '11.780+',
      label: 'Processos de PI',
      description: 'Marcas, patentes e direitos autorais'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '98%',
      label: 'Taxa de Satisfação',
      description: 'Compromisso com excelência'
    }
  ];

  const tabContent = {
    historia: {
      title: 'Nossa História',
      content: 'A PRCS Advogados nasceu com uma missão clara: simplificar e democratizar o acesso à proteção de propriedade intelectual no Brasil. Fundada por especialistas em direito de propriedade intelectual com mais de 30 anos de experiência, nossa empresa rapidamente se destacou pela abordagem inovadora e centrada no cliente.\n\nAo longo das décadas, expandimos nossa atuação para incluir soluções completas em registro de marcas, patentes, direitos autorais e softwares. Reconhecendo a crescente necessidade de proteção digital e monitoramento 24/7, integramos tecnologia de ponta em nossos serviços.\n\nHoje, atendemos mais de 6.800 empresas em todo o Brasil, desde startups até grandes corporações, sempre mantendo nosso compromisso com a excelência, inovação e humanização no atendimento.'
    },
    missao: {
      title: 'Missão e Visão',
      content: 'Missão: Proteger os ativos intelectuais das empresas brasileiras através de soluções jurídicas inovadoras, acessíveis e humanizadas, transformando desafios legais em oportunidades de crescimento.\n\nVisão: Ser a empresa líder em propriedade intelectual no Brasil, reconhecida pela excelência, inovação tecnológica e pelo impacto positivo na proteção de ideias e invenções que movem a economia brasileira.\n\nNosso compromisso é oferecer segurança jurídica estratégica com total dedicação e profissionalismo, permitindo que nossos clientes se concentrem no que fazem de melhor: inovar e crescer.'
    },
    valores: {
      title: 'Nossos Valores',
      content: 'Excelência: Buscamos sempre oferecer o melhor serviço jurídico com atenção aos detalhes e qualidade superior.\n\nIntegridade: Agimos com transparência, honestidade e ética em todas as nossas relações.\n\nInovação: Utilizamos tecnologia de ponta para oferecer soluções modernas e eficientes.\n\nHumanização: Entendemos que cada cliente é único e merece atendimento personalizado e empático.\n\nAgilidade: Respondemos rapidamente às demandas do mercado e dos nossos clientes.\n\nCompromisso Social: Acreditamos na importância de proteger a criatividade e a inovação brasileira.'
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Protegendo o que importa: sua propriedade intelectual
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Há mais de 30 anos, a PRCS Advogados tem sido referência em soluções integradas de proteção de propriedade intelectual, ajudando empresas brasileiras a proteger seus ativos mais valiosos.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-12 border-b border-border">
            {Object.keys(tabContent).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`pb-4 px-4 font-semibold transition-colors ${
                  activeTab === key
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {key === 'historia' && 'Nossa História'}
                {key === 'missao' && 'Missão e Visão'}
                {key === 'valores' && 'Nossos Valores'}
              </button>
            ))}
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {tabContent[activeTab as keyof typeof tabContent].title}
            </h2>
            <div className="text-lg text-foreground/80 leading-relaxed whitespace-pre-wrap">
              {tabContent[activeTab as keyof typeof tabContent].content}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            PRCS Advogados em Números
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Nosso compromisso com a excelência e a satisfação do cliente se reflete em nossos resultados.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-8 text-center border border-border hover:border-primary transition-colors"
              >
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-foreground/70">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            O Que Nos Diferencia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground">Expertise Reconhecida</h3>
              <p className="text-foreground/80">
                Equipe jurídica especializada em propriedade intelectual com conhecimento estratégico atualizado e experiência comprovada em centenas de casos.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground">Tecnologia Avançada</h3>
              <p className="text-foreground/80">
                Monitoramento 24/7 automático, alertas em tempo real e plataforma integrada para gerenciar toda sua propriedade intelectual em um único lugar.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground">Atendimento Humanizado</h3>
              <p className="text-foreground/80">
                Cada cliente é único. Oferecemos consultoria personalizada, entendendo suas necessidades específicas e buscando as melhores soluções.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold mb-4 text-foreground">Agilidade e Eficiência</h3>
              <p className="text-foreground/80">
                Processos otimizados com tecnologia para atender com rapidez e qualidade, reduzindo prazos e custos sem comprometer a excelência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para proteger sua propriedade intelectual?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a crescer com segurança jurídica e inovação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511940229012"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold"
            >
              Fale Conosco
            </a>
            <a
              href="/#servicos"
              className="btn-outline inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
