import { ImageIcon, KeyIcon, StarIcon } from "lucide-react";

const features = [
  {
    name: "Alt Text",
    description:
      "Automatically generate descriptive alt text for your images to improve accessibility and SEO.",
    icon: ImageIcon,
  },
  {
    name: "Hierarchical Keyword Generation",
    description:
      "Create SEO-optimized keyword hierarchies to structure your content effectively.",
    icon: KeyIcon,
  },
  {
    name: "App Store Review Analysis",
    description:
      "Gain insights from your app reviews using AI-powered sentiment analysis and feedback categorization.",
    icon: StarIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-blue-50 rounded-lg p-6 shadow-md"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {feature.name}
              </h3>
              <p className="text-blue-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
