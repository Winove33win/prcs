import { Link } from 'wouter';
import { ArrowRight, Lightbulb, FileText, Shield, Globe, AlertCircle, Lock } from 'lucide-react';

export default function RegistroPatente() {
  const subservices = [
    {
      title: 'Registro de Patente de Invenção, Utilidade e Desenho Industrial',
      description: 'Proteção completa de suas invenções, modelos de utilidade e desenhos industriais junto ao INPI.',
      icon: Lightbulb,
    },
    {
      title: 'Recurso, Oposição e Manifestação em Patentes',
      description: 'Defesa de seus direitos em processos de oposição e manifestação junto ao INPI.',
      icon: FileText,
    },
    {
      title: 'Caducidade, Nulidade e Alterações de Endereço',
      description: 'Gestão de questões administrativas e processos de caducidade e nulidade de patentes.',
      icon: Shield,
    },
    {
      title: 'Proteção em Marketplace',
      description: 'Monitoramento e proteção de seus produtos patenteados em plataformas de e-commerce.',
      icon: Globe,
    },
    {
      title: 'Bloqueio e Denúncias de Sites com Produtos Falsos',
      description: 'Identificação, bloqueio e denúncia de sites que vendem produtos falsificados.',
      icon: AlertCircle,
    },
    {
      title: 'Registro Internacional de Patente',
      description: 'Proteção de suas patentes em mais de 192 países via Protocolo de Madri.',
      icon: Lock,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Registro de Patentes</h1>
            <p className="text-xl text-white/90">
              Proteção completa de suas invenções e inovações com serviços especializados em patentes.
            </p>
          </div>
        </div>
      </section>

      {/* Subservices Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subservices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/80 mb-6 text-sm">{service.description}</p>
                  <a
                    href="https://wa.me/5511940229012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
                  >
                    Saiba mais <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Proteja Suas Invenções</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Transforme suas inovações em ativos jurídicos protegidos. Fale com nossos especialistas em patentes.
          </p>
          <a
            href="https://wa.me/5511940229012"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Agendar Consulta
          </a>
        </div>
      </section>
    </div>
  );
}
