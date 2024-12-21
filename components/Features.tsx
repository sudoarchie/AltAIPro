import { ArrowRight, ImageIcon, KeyIcon, StarIcon } from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Alt Text",
    description:
      "Automatically generate descriptive alt text for your images to improve accessibility and SEO.",
    icon: ImageIcon,
    url: "/alttext",
  },
  {
    name: "Hierarchical Keyword Generation",
    description:
      "Create SEO-optimized keyword hierarchies to structure your content effectively.",
    icon: KeyIcon,
    url: "/hierarchical",
  },
  {
    name: "Review Analysis",
    description:
      "Gain insights from your app reviews using AI-powered sentiment analysis and feedback categorization.",
    icon: StarIcon,
    url: "/review",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-16">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white/70 backdrop-blur rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {feature.name}
              </h3>
              <p className="text-blue-700 mb-6">{feature.description}</p>
              <Link
                href={feature.url}
                className="text-blue-600 flex items-center gap-2 hover:gap-3 transition-all duration-300"
              >
                Try it
                <ArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
