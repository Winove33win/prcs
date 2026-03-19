import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: 'Registro de Marca', href: '/marca' },
    { label: 'Registro de Patente', href: '/patente' },
    { label: 'Direito Autoral', href: '/autoral' },
    { label: 'Assessoria Jurídica', href: '/assessoria' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container section-padding">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-primary-foreground/20">
          <h3 className="text-2xl font-bold mb-4">Inscreva-se para Novidades</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-md">
            Receba conteúdos exclusivos sobre soluções jurídicas e tendências do mercado de propriedade intelectual.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Inscrever
            </button>
          </form>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <img
              src="https://prcs.com.br/wp-content/uploads/2025/01/logo-prcs-advogados-e1737015449305.png"
              alt="PRCS Advogados"
              className="h-10 w-auto mb-5 opacity-90"
              onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo-prcs.svg'; }}
            />
            <p className="text-primary-foreground/70 leading-relaxed text-sm">
              Especialistas em propriedade intelectual com 30 anos de experiência protegendo marcas, patentes e ativos intelectuais.
            </p>
            <div className="flex gap-3 mt-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: 'var(--gold)', color: 'var(--primary)' }}>OAB</div>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-bold border" style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}>ABA<br/>PI</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Áreas de Atuação</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+5511940229012"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  (11) 9 4022-9012
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contato@prcs.com.br"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  contato@prcs.com.br
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <address className="text-primary-foreground/80 not-italic">
                  Av. Ordem e Progresso, 157<br />
                  Sala 805, Barra Funda<br />
                  São Paulo/SP - CEP: 01141-030
                </address>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-bold mb-4">Horário</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Segunda a Sexta</p>
              <p className="font-semibold text-primary-foreground">09:00 - 18:00</p>
              <p className="mt-4">Atendimento online via WhatsApp</p>
              <p className="font-semibold text-primary-foreground">24/7</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {currentYear} PRCS Advogados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
