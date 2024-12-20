import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          AISEOPro
        </Link>
        <div className="space-x-4">
          <Link href="#features" className="text-blue-600 hover:text-blue-800">Features</Link>
          <Link href="#pricing" className="text-blue-600 hover:text-blue-800">Pricing</Link>
          <Link href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}

