import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Raciocínio", href: "#raciocinio" },
  { label: "Estrutura", href: "#conclusao" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Acessibilidade", href: "#acessibilidade" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl supports-[backdrop-filter]:bg-background/72">
      <div className="container flex h-20 items-center justify-between gap-6">
        <a
          href="#inicio"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/15">
            <span className="text-lg font-semibold">AF</span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-primary/60 uppercase">
              Ateliê Forma
            </p>
            <p className="text-sm text-foreground/72">
              UI/UX para design de móveis
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/78 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a href="#json" className="btn-primary text-sm">
            Ver arquitetura JSON
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(value => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Abrir navegação"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-card text-foreground transition-colors hover:bg-secondary lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border/70 bg-background lg:hidden"
        >
          <div className="container flex flex-col gap-3 py-4">
            {navigation.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavigate}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/82 transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#json"
              onClick={handleNavigate}
              className="btn-primary mt-2 text-center text-sm"
            >
              Ver arquitetura JSON
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
