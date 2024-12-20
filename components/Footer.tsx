export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">AISEOPro</h3>
            <p className="text-blue-300">Supercharge your SEO with AI</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300">Terms</a>
            <a href="#" className="hover:text-blue-300">Privacy</a>
            <a href="#" className="hover:text-blue-300">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-blue-300">
          © {new Date().getFullYear()} AISEOPro. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

