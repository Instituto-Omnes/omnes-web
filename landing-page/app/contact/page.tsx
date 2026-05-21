import { Navbar } from '../components/Navbar'
import { Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white flex flex-col">
      <Navbar active="contact" />

      {/* HERO */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-3xl w-full py-16 sm:py-24">
          <div className="text-center">
            <h1 className="font-bold tracking-tight text-[clamp(2.5rem,8vw,4.5rem)]">
              Contato
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-8 max-w-xl mx-auto">
              Entre em contato com a equipe da Omnes para dúvidas,
              parcerias ou informações institucionais.
            </p>
          </div>

          {/* CONTACT CARD */}
          <div className="mt-16">
            <div className="bg-slate-900/80 border border-white/5 rounded-xl p-6 sm:p-10 backdrop-blur">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-lg bg-[#0B1220] flex items-center justify-center border border-white/5 mb-6">
                  <Mail className="w-7 h-7 text-violet-400" />
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Email Institucional
                </h2>

                <a
                  href="mailto:institutoomnes@gmail.com"
                  className="text-base sm:text-lg md:text-xl text-violet-400 hover:text-violet-300 transition break-all"
                >
                  institutoomnes@gmail.com
                </a>

                <p className="mt-6 text-slate-400 max-w-lg leading-7">
                  Respondemos solicitações, dúvidas e propostas de colaboração
                  através do canal oficial da plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
          <h2 className="text-xl font-bold">Omnes</h2>

          <p className="text-sm text-slate-500 text-center">
            © 2026 Omnes. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}