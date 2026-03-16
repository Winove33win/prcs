import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Áreas de Atuação', href: '/areas-atuacao' },
    { label: 'Sobre', href: '/sobre-nos' },
  ];

  const serviceLinks = [
    { label: 'Propriedade Intelectual', href: '/propriedade-intelectual' },
    { label: 'Registro de Marca', href: '/registro-marca' },
    { label: 'Registro de Patente', href: '/registro-patente' },
    { label: 'Direito Autoral', href: '/direito-autoral' },
    { label: 'Registro de Software', href: '/registro-software' },
  ];

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img
                src="/assets/logo-prcs.svg"
                alt="PRCS Advogados"
                className="h-24 w-auto"
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5511940229012"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Agendar Reunião
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-border">
            <nav className="flex flex-col gap-4 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium px-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Services Submenu */}
              <div className="px-4">
                <p className="text-sm font-semibold text-primary mb-3">Áreas de Atuação</p>
                <div className="flex flex-col gap-2 ml-4">
                  {serviceLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <a
                        className="text-sm text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/5511940229012"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mx-4"
              >
                Agendar Reunião
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
