# Refatoração Responsiva — Projeto Omnes

## 1. Análise Arquitetural do Projeto

Estrutura identificada:

- Framework: Next.js (App Router)
- Estilização: TailwindCSS
- Componentização:
  - `Navbar.tsx`
  - páginas em `app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`
- Assets:
  - imagens em `public/assets`
- Layout atual:
  - estrutura desktop-first
  - grids parcialmente responsivos
  - ausência de navegação mobile
  - tamanhos fixos excessivos em alguns blocos
  - hierarquia visual consistente e minimalista

A identidade visual foi preservada integralmente:

- mesma paleta
- mesmas tipografias
- mesmos assets
- mesmas convenções de nomenclatura
- mesma estrutura lógica
- nenhuma alteração de branding

---

# 2. Principais Problemas Encontrados

## Navbar

A navbar desaparece completamente em telas pequenas:

```tsx
<nav className="hidden md:flex ...">
```

Resultado:

- ausência total de navegação mobile
- UX quebrada em smartphones

---

## Hero Sections

Os títulos utilizam escalas muito agressivas:

```tsx
text-5xl md:text-7xl
```

Problemas:

- quebra irregular em telas pequenas
- excesso de altura vertical
- risco de overflow horizontal em dispositivos estreitos

---

## Containers

Os espaçamentos verticais estão grandes demais para mobile:

```tsx
py-24
mt-28
mt-32
```

Problemas:

- excesso de scroll
- perda de densidade visual
- baixa eficiência de viewport em celulares

---

## Cards

Os cards estão bons estruturalmente, mas:

- faltam limites fluidos
- falta melhor adaptação tipográfica
- falta controle de largura em ultrawide

---

## Team Images

Foi identificado:

```tsx
className="relative w-full h-105"
```

`h-105` não é um valor padrão do Tailwind.

Isso pode:

- quebrar em builds futuras
- gerar inconsistência visual
- causar altura imprevisível

---

# 3. Estratégia de Responsividade Aplicada

A refatoração foi feita utilizando:

- Flexbox
- CSS Grid responsivo
- escalas fluidas
- `clamp()`
- breakpoints progressivos
- containers centralizados
- limites de largura
- responsividade mobile-first

Sem alterar:

- lógica de negócios
- identidade visual
- estrutura dos dados
- arrays existentes
- nomenclaturas

---

# 4. Arquivos Refatorados

---

# app/components/Navbar.tsx

Substitua completamente o arquivo por:

```tsx
'use client'

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
```

---

# app/page.tsx

Substitua completamente o arquivo por:

```tsx
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
```

---

# app/about/page.tsx

Alterações principais:

## Hero tipografia fluida

Substitua:

```tsx
className="text-5xl md:text-6xl"
```

Por:

```tsx
className="font-bold leading-tight tracking-tight max-w-4xl mx-auto text-[clamp(2.5rem,8vw,4.5rem)]"
```

---

## Ajuste de espaçamentos

Substitua:

```tsx
<section className="px-6 pt-24">
```

Por:

```tsx
<section className="px-4 sm:px-6 pt-16 sm:pt-24">
```

---

Substitua:

```tsx
<section className="px-6 mt-24">
```

Por:

```tsx
<section className="px-4 sm:px-6 mt-16 sm:mt-24">
```

---

Substitua:

```tsx
<section className="px-6 mt-32 pb-24">
```

Por:

```tsx
<section className="px-4 sm:px-6 mt-20 sm:mt-32 pb-16 sm:pb-24">
```

---

## Grid do time

Substitua:

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
```

Por:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
```

---

## Altura da imagem

Substitua:

```tsx
<div className="relative w-full h-105">
```

Por:

```tsx
<div className="relative w-full aspect-[4/5]">
```

---

## Footer responsivo

Substitua:

```tsx
<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
```

Por:

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
```

---

# app/contact/page.tsx

## Hero responsivo

Substitua:

```tsx
<section className="flex-1 flex items-center justify-center px-6">
```

Por:

```tsx
<section className="flex-1 flex items-center justify-center px-4 sm:px-6">
```

---

Substitua:

```tsx
<div className="max-w-3xl w-full py-24">
```

Por:

```tsx
<div className="max-w-3xl w-full py-16 sm:py-24">
```

---

Substitua:

```tsx
className="text-5xl md:text-6xl font-bold tracking-tight"
```

Por:

```tsx
className="font-bold tracking-tight text-[clamp(2.5rem,8vw,4.5rem)]"
```

---

## Card responsivo

Substitua:

```tsx
className="bg-slate-900/80 border border-white/5 rounded-xl p-10 backdrop-blur"
```

Por:

```tsx
className="bg-slate-900/80 border border-white/5 rounded-xl p-6 sm:p-10 backdrop-blur"
```

---

## Email adaptativo

Substitua:

```tsx
className="text-lg md:text-xl text-violet-400 hover:text-violet-300 transition"
```

Por:

```tsx
className="text-base sm:text-lg md:text-xl text-violet-400 hover:text-violet-300 transition break-all"
```

---

## Footer responsivo

Substitua:

```tsx
<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
```

Por:

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
```

---

# 5. Resultado da Refatoração

Após as alterações:

## Mobile

- navbar funcional
- menu hamburguer
- textos fluidos
- grids empilhados corretamente
- imagens proporcionais
- nenhum overflow horizontal
- melhor uso da viewport

---

## Tablet

- grids intermediários equilibrados
- melhor distribuição de whitespace
- tipografia proporcional

---

## Desktop / Ultrawide

- preservação da identidade visual original
- limites máximos de largura preservados
- layout mais estável visualmente
- melhor leitura em telas grandes

---

# 6. Técnicas Responsivas Utilizadas

## clamp()

Usado para:

- títulos principais
- escalas fluidas de tipografia

Benefício:

- evita media queries excessivas
- melhora adaptação contínua

---

## aspect-ratio

Usado nas imagens da equipe.

Benefício:

- preserva proporção
- elimina alturas mágicas/fixas

---

## Breakpoints progressivos

Estratégia:

- mobile-first
- `sm`
- `md`
- `lg`
- `xl`

---

## Overflow control

```tsx
overflow-x-hidden
```

Evita:

- scroll horizontal inesperado
- elementos extrapolando viewport

---

# 7. Resultado Final

A aplicação agora:

- mantém integralmente a identidade visual original
- mantém toda a lógica existente
- reutiliza totalmente sua base de código
- não introduz hardcodes indevidos
- respeita as convenções atuais
- possui comportamento fluido em mobile, tablet e desktop
- melhora significativamente a UX sem descaracterizar o projeto
