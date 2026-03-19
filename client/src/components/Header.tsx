import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { label: 'Registro de Marca', href: '/registro-marca' },
    { label: 'Registro de Patente', href: '/registro-patente' },
    { label: 'Direito Autoral', href: '/direito-autoral' },
    { label: 'Registro de Software', href: '/registro-software' },
    { label: 'Propriedade Intelectual', href: '/propriedade-intelectual' },
    { label: 'Assessoria Jurídica', href: '/assessoria-juridica' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-2xl' : 'bg-primary'
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-white/10 hidden lg:block">
        <div className="container flex justify-end items-center py-2 gap-6">
          <a
            href="tel:+5511940229012"
            className="flex items-center gap-1.5 text-white/60 hover:text-gold text-xs transition-colors"
          >
            <Phone size={12} />
            (11) 9 4022-9012
          </a>
          <a
            href="mailto:contato@prcs.com.br"
            className="text-white/60 hover:text-gold text-xs transition-colors"
          >
            contato@prcs.com.br
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/">
            <a className="flex items-center hover:opacity-90 transition-opacity flex-shrink-0">
              <img
                src="https://prcs.com.br/wp-content/uploads/2025/01/logo-prcs-advogados-e1737015449305.png"
                alt="PRCS Advogados"
                className="h-11 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/logo-prcs.svg';
                }}
              />
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/">
              <a className="text-white/80 hover:text-gold transition-colors font-medium text-sm tracking-wide">
                Início
              </a>
            </Link>
            <Link href="/sobre-nos">
              <a className="text-white/80 hover:text-gold transition-colors font-medium text-sm tracking-wide">
                Quem Somos
              </a>
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/80 hover:text-gold transition-colors font-medium text-sm tracking-wide">
                Áreas de Atuação
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-60 bg-white rounded-xl shadow-2xl border border-border overflow-hidden py-1 z-50">
                  <div className="h-1 bg-gold w-full absolute top-0 left-0" />
                  <div className="pt-2">
                    {serviceLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <a className="block px-5 py-2.5 text-sm text-foreground hover:text-primary hover:bg-secondary transition-colors font-medium">
                          {link.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#clientes"
              className="text-white/80 hover:text-gold transition-colors font-medium text-sm tracking-wide"
            >
              Clientes
            </a>
            <a
              href="#contato"
              className="text-white/80 hover:text-gold transition-colors font-medium text-sm tracking-wide"
            >
              Contato
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/5511940229012"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gold text-primary rounded-lg font-semibold text-sm hover:bg-gold-light transition-all duration-200 shadow-lg"
            >
              <MessageCircle size={16} />
              Fale com um Advogado
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-gold rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-white/10 mt-0">
            <nav className="flex flex-col pt-4">
              <Link href="/">
                <a
                  className="px-2 py-3 text-white hover:text-gold transition-colors font-medium border-b border-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  Início
                </a>
              </Link>
              <Link href="/sobre-nos">
                <a
                  className="px-2 py-3 text-white hover:text-gold transition-colors font-medium border-b border-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  Quem Somos
                </a>
              </Link>
              <div className="border-b border-white/10">
                <p className="px-2 py-3 text-gold text-xs font-semibold uppercase tracking-widest">
                  Áreas de Atuação
                </p>
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className="block px-4 py-2 text-white/70 hover:text-gold transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
              </div>
              <a
                href="#clientes"
                className="px-2 py-3 text-white hover:text-gold transition-colors font-medium border-b border-white/10"
                onClick={() => setIsOpen(false)}
              >
                Clientes
              </a>
              <a
                href="https://wa.me/5511940229012"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-0 mt-5 flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-primary rounded-lg font-semibold"
              >
                <MessageCircle size={18} />
                Fale com um Advogado
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
