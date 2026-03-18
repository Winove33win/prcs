import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";

const footerLinks = [
  { label: "Moodboard editorial", href: "#raciocinio" },
  { label: "Mapa de páginas", href: "#conclusao" },
  { label: "Componentes-chave", href: "#funcionalidades" },
  { label: "JSON simplificado", href: "#json" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-[#1a1714] text-white">
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold">
                AF
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/60">
                  Ateliê Forma
                </p>
                <p className="text-lg font-semibold">
                  Guia profissional de UI/UX para design de móveis
                </p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/72">
              Conceito digital pensado para transmitir sofisticação, confiança e
              clareza comercial, com foco em catálogos premium, storytelling
              visual e experiência impecável em mobile.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/72">
              <span className="rounded-full border border-white/12 px-4 py-2">
                Imagem profissional
              </span>
              <span className="rounded-full border border-white/12 px-4 py-2">
                Acessibilidade real
              </span>
              <span className="rounded-full border border-white/12 px-4 py-2">
                Microinterações discretas
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-[0.18em] uppercase text-white/60">
              Navegação sugerida
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-[0.18em] uppercase text-white/60">
              Pontos críticos
            </h3>
            <div className="space-y-4 text-sm text-white/80">
              <p className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4" /> CTAs curtas, contato fácil e
                confiança visual acima da dobra.
              </p>
              <p className="flex items-start gap-3">
                <Smartphone className="mt-0.5 h-4 w-4" /> Layout mobile-first
                com cards empilhados, sticky actions e imagens otimizadas.
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4" /> Contexto espacial do
                mobiliário reforçado por ambientes, medidas e materiais.
              </p>
              <p className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-4 w-4" /> Integração com
                portfólio social, bastidores do processo e prova social visual.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/55">
          © {currentYear} Ateliê Forma — protótipo conceitual para um site de
          design de móveis.
        </div>
      </div>
    </footer>
  );
}
