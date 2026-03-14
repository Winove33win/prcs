import { Link } from 'wouter';
import { ArrowRight, Code, FileText } from 'lucide-react';

export default function RegistroSoftware() {
  const subservices = [
    {
      title: 'Registro de Software',
      description: 'Proteção legal de seus softwares e aplicações junto ao INPI, garantindo direitos autorais e exclusividade.',
      icon: Code,
    },
    {
      title: 'Emissão de Certificado de Registro',
      description: 'Emissão de certificado oficial de registro de software reconhecido legalmente.',
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Registro de Softwares</h1>
            <p className="text-xl text-white/90">
              Proteção legal de seus softwares e aplicações com serviços especializados.
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
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
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
          <h2 className="text-3xl font-bold mb-4">Proteja Seu Software</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Garanta a proteção legal de seu desenvolvimento. Registre seu software conosco.
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
