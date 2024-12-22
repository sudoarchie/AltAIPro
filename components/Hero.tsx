import Image from "next/image";
import img from "@/public/hero.svg";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffect } from "./ui/typewriter-effect";
export default function Hero() {
  const wordsfortype = [
    {
      text: "Supercharge",
      className:
        "text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent",
    },
    {
      text: "your",
      className:
        "text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6",
    },
    {
      text: "SEO",
      className:
        "text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6",
    },
    {
      text: "with",
      className:
        "text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6",
    },
    {
      text: "AI.",
      className:
        "text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6",
    },
  ];
  const words =
    "Generate alt text, keywords, and analyze app reviews automatically.";
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 h-screen w-screen flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <TypewriterEffect words={wordsfortype} />
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6"></h1>
        <div className="text-2xl text-blue-700 mb-8">
          <TextGenerateEffect duration={6} filter={false} words={words} />
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-110 transition-transform duration-300">
          Try It Free
        </button>
      </div>
    </section>
  );
}
