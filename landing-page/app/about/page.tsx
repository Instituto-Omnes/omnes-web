import Image from 'next/image'
import Link from 'next/link'
import { Flag, Eye, Gem } from 'lucide-react'

import { Navbar } from '../components/Navbar'

const values = [
  {
    title: 'Missão',
    icon: Flag,
    description:
      'Fornecer a infraestrutura analítica definitiva para campanhas e mandatos, eliminando o achismo e instaurando o rigor científico na tomada de decisão estratégica.',
  },
  {
    title: 'Visão',
    icon: Eye,
    description:
      'Ser o padrão ouro em inteligência eleitoral na América Latina, reconhecidos não apenas pela acurácia dos dados, mas pela clareza cristalina com que os apresentamos.',
  },
  {
    title: 'Valores',
    icon: Gem,
    description:
      'Obsessão por precisão. Foco em performance. Design minimalista para redução de ruído cognitivo. Segurança inegociável da informação.',
  },
]

const team = [
  {
    name: 'Luara Gagliardi',
    role: 'Fundadora e Cientista de Dados',
    image: '/assets/luara.png',
  },
  {
    name: 'Victoria Ferro',
    role: 'Co-fundadora e Cientista de Dados',
    image: '/assets/victoria.png',
  },
  {
    name: 'Pedro Morais',
    role: 'Co-fundador e Cientista de Dados',
    image: '/assets/pedro.png',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white flex flex-col">
      {/* NAVBAR */}
      <Navbar active="about" />

      {/* HERO */}
      <section className="px-4 sm:px-6 pt-16 sm:pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-bold leading-tight tracking-tight max-w-4xl mx-auto text-[clamp(2.5rem,8vw,4.5rem)]">
            Inteligência de dados para decisões críticas.
          </h1>

          <p className="mt-10 text-lg text-slate-300 leading-8 max-w-3xl mx-auto">
            Nós transformamos dados de redes sociais complexos em
            estratégias claras, previsíveis e acionáveis. Nosso
            ecossistema de inteligência foi desenhado para líderes que
            exigem precisão em ambientes de alta volatilidade.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 sm:px-6 mt-16 sm:mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="bg-slate-900/80 border border-white/5 rounded-xl p-8"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0B1220] flex items-center justify-center border border-white/5 mb-6">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>

                <h2 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h2>

                <p className="text-slate-300 leading-7">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* TEAM */}
      <section className="px-4 sm:px-6 mt-20 sm:mt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Nossa Equipe</h2>

            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Especialistas forjados na interseção entre ciência de
              dados e estratégia política.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-slate-900/80 border border-white/5 rounded-xl overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative w-full aspect-4/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale"
                  />
                </div>

                {/* INFO */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold">
                    {member.name}
                  </h3>

                  <p className="text-violet-400 mt-2">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
          <h2 className="text-xl font-bold">Omnes</h2>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-violet-400 transition">
              Privacidade
            </Link>
            <Link href="/" className="hover:text-violet-400 transition">
              Termos de Uso
            </Link>
            <Link href="/" className="hover:text-violet-400 transition">
              Segurança
            </Link>
            <Link href="/" className="hover:text-violet-400 transition">
              LGPD
            </Link>
          </div>

          <p className="text-sm text-slate-500 text-center">
            © 2026 Omnes. Inteligência de Dados e Precisão Estratégica.
          </p>
        </div>
      </footer>
    </main>
  )
}