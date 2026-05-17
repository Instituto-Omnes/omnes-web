import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 border-b">
      <h1 className="text-2xl font-bold">Omnes</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}