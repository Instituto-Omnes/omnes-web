import { Navbar } from './components/Navbar'

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
          Sua empresa cresce aqui
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Landing page moderna usando Next.js, Tailwind e deploy na Vercel.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Começar
        </button>
      </section>
    </main>
  )
}