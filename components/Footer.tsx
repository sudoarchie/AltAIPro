export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-blue-900 to-blue-950 text-white py-16 overflow-hidden">
      {/* Decorative blur effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-600/20 to-transparent rounded-full blur-2xl transform rotate-12 opacity-20" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-400/20 to-transparent rounded-full blur-2xl transform -rotate-12 opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent mb-2">
              AISEOPro
            </h3>
            <p className="text-blue-300/90">
              Supercharge your SEO with AI
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <a 
              href="#" 
              className="group relative text-sm font-medium text-blue-100 hover:text-white transition-colors duration-300"
            >
              <span>Terms</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a 
              href="#" 
              className="group relative text-sm font-medium text-blue-100 hover:text-white transition-colors duration-300"
            >
              <span>Privacy</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </a>
            <a 
              href="#" 
              className="group relative text-sm font-medium text-blue-100 hover:text-white transition-colors duration-300"
            >
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="my-8 border-t border-blue-800/50" /> */}

        {/* Copyright */}
        <div className="text-center text-sm text-blue-300/80 flex flex-col md:flex-row justify-between items-center gap-4 mt-4 mb-4">
          <span>
            © {new Date().getFullYear()} AISEOPro. All rights reserved.
          </span>
          <div className="flex items-center gap-2 text-blue-400/60">
            <span className="w-2 h-2 rounded-full bg-blue-400/60" />
            <span>Made with ❤️ for SEO professionals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
