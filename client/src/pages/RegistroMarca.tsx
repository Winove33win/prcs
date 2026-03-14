import { Link } from 'wouter';
import { ArrowRight, Tag, FileText, Shield, Globe, AlertCircle, Zap, Lock, ShoppingCart, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RegistroMarca() {
  const subservices = [
    {
      title: 'Registro de Marca',
      description: 'Proteção completa de sua marca junto ao INPI, garantindo exclusividade de uso no Brasil.',
      icon: Tag,
    },
    {
      title: 'Recurso, Oposição e Manifestação em Marcas',
      description: 'Defesa de seus direitos em processos de oposição e manifestação junto ao INPI.',
      icon: FileText,
    },
    {
      title: 'Caducidade, Nulidade e Alterações de Endereço',
      description: 'Gestão de questões administrativas e processos de caducidade e nulidade de marcas.',
      icon: Shield,
    },
    {
      title: 'Proteção em Marketplace',
      description: 'Monitoramento e proteção de sua marca em plataformas de e-commerce como Mercado Livre e Amazon.',
      icon: Globe,
    },
    {
      title: 'Bloqueio e Denúncias de Sites ou Anúncios Falsos',
      description: 'Identificação, bloqueio e denúncia de sites e anúncios que usam sua marca indevidamente.',
      icon: AlertCircle,
    },
    {
      title: 'Notificação e Avisos sobre Produtos ou Serviços Fake',
      description: 'Sistema de monitoramento 24/7 com notificações automáticas sobre falsificações.',
      icon: Zap,
    },
    {
      title: 'Registro Internacional de Marca',
      description: 'Proteção de sua marca em mais de 192 países via Protocolo de Madri, com pagamento em reais.',
      icon: Lock,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Registro de Marca</h1>
            <p className="text-xl text-white/90">
              Proteção completa de sua marca com serviços especializados em registro, defesa e monitoramento.
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

      {/* Marketplace Protection Section */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center mb-12">Proteção de Marca em Marketplaces</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-3xl mx-auto text-lg">
            Sua marca está sendo vendida ilegalmente em lojas virtuais? Proteja-se contra falsificações e vendedores não autorizados em plataformas como Mercado Livre, Amazon, Americanas e outros marketplaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Problems */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">O Problema</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground/80">Produtos falsificados vendidos em seu nome</span>
                </li>
                <li className="flex items-start gap-4">
                  <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground/80">Perda de receita para vendedores não autorizados</span>
                </li>
                <li className="flex items-start gap-4">
                  <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground/80">Danos à reputação e confiança do cliente</span>
                </li>
                <li className="flex items-start gap-4">
                  <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground/80">Chargebacks e reclamações de clientes enganados</span>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">Nossa Solução</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground/80">Monitoramento 24/7 em todos os marketplaces</span>
                </li>
                <li className="flex items-start gap-4">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground/80">Remoção automática de anúncios fraudulentos</span>
                </li>
                <li className="flex items-start gap-4">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground/80">Processos de takedown ágeis e eficientes</span>
                </li>
                <li className="flex items-start gap-4">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground/80">Relatórios detalhados de violações detectadas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Monitored Platforms */}
          <div className="mt-16 pt-12 border-t border-primary/20">
            <h3 className="text-2xl font-bold text-center text-primary mb-12">Plataformas Monitoradas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'Mercado Livre', icon: ShoppingCart },
                { name: 'Amazon', icon: ShoppingCart },
                { name: 'Americanas', icon: ShoppingCart },
                { name: 'Magazine Luíza', icon: ShoppingCart },
                { name: 'Google Shopping', icon: Globe },
              ].map((platform, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 text-center border border-border hover:shadow-lg transition-shadow">
                  <platform.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="font-semibold text-foreground">{platform.name}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-foreground/60 mt-8">
              + Redes Sociais, Mecanismos de Busca e Plataformas de Anúncios
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Proteja Sua Marca Agora</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Não deixe sua marca desprotegida. Nossa equipe especializada está pronta para orientá-lo em todo o processo.
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

      <Footer />
    </div>
  );
}
