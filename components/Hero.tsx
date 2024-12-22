import Image from "next/image";
import img from "@/public/hero.png";
import { TextGenerateEffect } from "./ui/text-generate-effect";
export default function Hero() {
  const words =
    "Generate alt text, keywords, and analyze app reviews automatically.";
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Supercharge Your SEO with AI
          </h1>
          <div className="text-xl text-blue-700 mb-6">
            <TextGenerateEffect duration={2} filter={false} words={words} />
            {/* Generate alt text, keywords, and analyze app reviews automatically. */}
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:scale-105 transition duration-300">
            Try It Free
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src={img}
            alt="AI SEO Tool Dashboard"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
