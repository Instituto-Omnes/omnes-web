import Link from 'next/link'
import { BarChart3, Search } from 'lucide-react'
import { Navbar } from './components/Navbar'

const features = [
  {
    title: 'Monitoramento',
    icon: BarChart3,
    description:
      'Acompanhamento em tempo real de métricas e fluxos de dados essenciais, garantindo visibilidade total e ininterrupta sobre as variáveis críticas operacionais.',
  },
  {
    title: 'Pesquisa',
    icon: Search,
    description:
      'Investigação estruturada e cruzamento avançado de bases de dados complexas para extração de inteligência competitiva, estratégica e acionável.',
  },
]

const footerLinks = [
  { label: 'Privacidade', href: '/' },
  { label: 'Termos de Uso', href: '/' },
  { label: 'Contato', href: '/contact' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white flex flex-col">
      {/* HEADER (centralizado no Navbar) */}
      <Navbar active="home" />

      {/* HERO */}
      <section className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-5xl w-full py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            Inteligência de Dados para Decisões Críticas.
          </h1>

          <p className="mt-8 text-lg text-slate-300 leading-8 max-w-2xl mx-auto">
            A plataforma definitiva para monitoramento analítico e
            estruturação de informações em cenários complexos.
            Clareza e precisão onde o ruído predomina.
          </p>

          {/*<div className="mt-10">
            <button className="bg-violet-700 hover:bg-violet-600 transition px-8 py-4 rounded-md font-medium">
              Acessar Plataforma
            </button>
          </div>*/}

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-28">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="bg-slate-900/80 border border-white/5 p-8 rounded-xl text-left"
                >
                  <div className="mb-6">
                    <Icon className="w-7 h-7 text-violet-400" />
                  </div>

                  <h3 className="text-3xl font-semibold mb-5">
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 leading-8">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-xl font-bold">Omnes</h2>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-violet-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-slate-500">
            © 2026 Omnes. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}