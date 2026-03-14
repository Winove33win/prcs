import { Link } from 'wouter';
import { ArrowRight, Briefcase, Shield, Lightbulb, BookOpen, Code } from 'lucide-react';

export default function AreasAtuacao() {
  const areas = [
    {
      id: 'propriedade-intelectual',
      title: 'Propriedade Intelectual',
      description: 'Gestão completa de ativos intelectuais com proteção estratégica e contencioso especializado.',
      icon: Shield,
      subservices: [
        'Gestão de ativos em propriedade intelectual',
        'Contencioso em propriedade intelectual',
      ],
      href: '/propriedade-intelectual',
    },
    {
      id: 'registro-marca',
      title: 'Registro de Marca',
      description: 'Proteção completa de marcas com registro, defesa e monitoramento em marketplaces.',
      icon: Briefcase,
      subservices: [
        'Registro de marca',
        'Recurso, oposição e manifestação em marcas',
        'Caducidade, nulidade, alterações de endereço',
        'Proteção em marketing place',
        'Bloqueio e denúncias de sites com produtos falsos',
        'Registro internacional de marca',
        'Monitoramento de marcas em tempo real',
      ],
      href: '/registro-marca',
    },
    {
      id: 'registro-patente',
      title: 'Registro de Patentes',
      description: 'Proteção de invenções com análise de anterioridade, redação e defesa de patentes.',
      icon: Lightbulb,
      subservices: [
        'Registro de patente',
        'Recurso, oposição e manifestação em patentes',
        'Caducidade, nulidade, alterações de endereço',
        'Proteção em marketing place',
        'Bloqueio e denúncias de sites com produtos falsos',
        'Registro internacional de patente',
      ],
      href: '/registro-patente',
    },
    {
      id: 'direito-autoral',
      title: 'Direito Autoral',
      description: 'Proteção de obras criativas com registro e gestão de obrigações acessórias.',
      icon: BookOpen,
      subservices: [
        'Registro de obra',
        'Gestão de obrigações acessórias',
      ],
      href: '/direito-autoral',
    },
    {
      id: 'registro-software',
      title: 'Registro de Softwares',
      description: 'Proteção legal de softwares e aplicações com emissão de certificados oficiais.',
      icon: Code,
      subservices: [
        'Registro de software',
        'Emissão de certificado de registro',
      ],
      href: '/registro-software',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Áreas de Atuação</h1>
            <p className="text-xl text-white/90">
              Conheça todas as nossas especialidades em propriedade intelectual, marcas, patentes e direitos autorais.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => {
              const Icon = area.icon;
              return (
                <Link key={area.id} href={area.href}>
                  <a className="group h-full">
                    <div className="bg-white border border-border rounded-lg p-8 hover:shadow-xl transition-all h-full flex flex-col hover:border-primary">
                      {/* Icon */}
                      <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {area.title}
                      </h3>

                      {/* Description */}
                      <p className="text-foreground/80 mb-6 flex-grow">
                        {area.description}
                      </p>

                      {/* Subservices */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-primary mb-3">Inclui:</p>
                        <ul className="space-y-2">
                          {area.subservices.slice(0, 3).map((service, idx) => (
                            <li key={idx} className="text-sm text-foreground/70 flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{service}</span>
                            </li>
                          ))}
                          {area.subservices.length > 3 && (
                            <li className="text-sm text-primary font-semibold">
                              +{area.subservices.length - 3} mais...
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        Saiba mais <ArrowRight size={20} />
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Encontrou o que procura?</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Nossos especialistas estão prontos para ajudar com a proteção de seus ativos intelectuais.
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
