import { Link } from 'wouter';
import { ArrowRight, Shield, Briefcase, AlertCircle, Globe } from 'lucide-react';

export default function PropriedadeIntelectual() {
  const subservices = [
    {
      title: 'Gestão de Ativos em Propriedade Intelectual',
      description: 'Planejamento estratégico e gestão completa de seus ativos intelectuais, garantindo máxima proteção e valorização.',
      icon: Shield,
    },
    {
      title: 'Contencioso em Propriedade Intelectual',
      description: 'Representação jurídica especializada em litígios de propriedade intelectual, defendendo seus direitos em juízo.',
      icon: Briefcase,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Propriedade Intelectual</h1>
            <p className="text-xl text-white/90">
              Proteção completa e estratégica de seus ativos intelectuais com expertise jurídica reconhecida.
            </p>
          </div>
        </div>
      </section>

      {/* Subservices Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {subservices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-foreground/80 mb-6">{service.description}</p>
                  <a
                    href="https://wa.me/5511940229012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Saiba mais <ArrowRight size={20} />
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
          <h2 className="text-3xl font-bold mb-4">Pronto para Proteger Seus Ativos?</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Nossa equipe de especialistas está pronta para ajudar você a proteger e gerenciar sua propriedade intelectual.
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
