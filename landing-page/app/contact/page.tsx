import { Navbar } from '../components/Navbar'

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-2xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold mb-8">
          Contato
        </h1>
        <p className='text-2xl font-medium'>
            institutoomnes@gmail.com
        </p> 
      </section>
    </main>
  )
}