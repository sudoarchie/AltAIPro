import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Supercharge Your SEO with AI
          </h1>
          <p className="text-xl text-blue-700 mb-6">
            Generate alt text, keywords, and analyze app reviews automatically.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Try It Free
          </button>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/placeholder.svg" 
            alt="AI SEO Tool Dashboard" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

