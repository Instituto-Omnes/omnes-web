"use client"
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

type NavbarProps = {
  active?: 'home' | 'about' | 'contact'
}

export function Navbar({ active }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      label: 'Início',
      href: '/',
      key: 'home',
    },
    {
      label: 'Sobre Nós',
      href: '/about',
      key: 'about',
    },
    {
      label: 'Contato',
      href: '/contact',
      key: 'contact',
    },
  ] as const

  return (
    <header className="w-full border-b border-white/10 bg-white/5 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
          Omnes
        </h1>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={
                active === item.key
                  ? 'text-violet-400'
                  : 'hover:text-violet-400 transition'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-[#0B1220]"
          aria-label="Abrir menu"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#020817]">
          <nav className="flex flex-col px-4 py-4 gap-4 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={
                  active === item.key
                    ? 'text-violet-400'
                    : 'hover:text-violet-400 transition'
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}