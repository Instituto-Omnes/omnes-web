import Link from 'next/link'

type NavbarProps = {
  active?: 'home' | 'about' | 'contact'
}

export function Navbar({ active }: NavbarProps) {
  return (
    <header className="w-full border-b border-white/10 bg-white/5 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          Omnes
        </h1>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link
            href="/"
            className={
              active === 'home'
                ? 'text-violet-400'
                : 'hover:text-violet-400 transition'
            }
          >
            Início
          </Link>

          <Link
            href="/about"
            className={
              active === 'about'
                ? 'text-violet-400'
                : 'hover:text-violet-400 transition'
            }
          >
            Sobre Nós
          </Link>

          <Link
            href="/contact"
            className={
              active === 'contact'
                ? 'text-violet-400'
                : 'hover:text-violet-400 transition'
            }
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}