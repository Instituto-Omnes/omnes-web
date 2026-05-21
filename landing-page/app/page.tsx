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
    <main className="min-h-screen bg-[#020817] text-white flex flex-col overflow-x-hidden">
      <Navbar active="home" />

      <section className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-5xl w-full py-16 sm:py-24 text-center">
          <h1 className="font-bold leading-tight tracking-tight max-w-4xl mx-auto text-[clamp(2.5rem,8vw,5rem)]">
            Inteligência de Dados para Decisões Críticas.
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-300 leading-7 sm:leading-8 max-w-2xl mx-auto">
            A plataforma definitiva para monitoramento analítico e
            estruturação de informações em cenários complexos.
            Clareza e precisão onde o ruído predomina.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-16 sm:mt-24">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="bg-slate-900/80 border border-white/5 p-6 sm:p-8 rounded-xl text-left h-full"
                >
                  <div className="mb-5 sm:mb-6">
                    <Icon className="w-7 h-7 text-violet-400" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-5">
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 leading-7 sm:leading-8 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
          <h2 className="text-xl font-bold">Omnes</h2>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-slate-400">
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