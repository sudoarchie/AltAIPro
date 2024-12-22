import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-blue-100">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
        >
          AISEOPro
        </Link>
        <div className="space-x-6">
          <Link href="#features" className="text-blue-600 hover:text-blue-800">
            Features
          </Link>
          <Link href="#pricing" className="text-blue-600 hover:text-blue-800">
            Pricing
          </Link>
          <Link
            href="#"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
