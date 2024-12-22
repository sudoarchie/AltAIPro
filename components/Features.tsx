import { ArrowRight, ImageIcon, KeyIcon, StarIcon } from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Alt Text",
    description:
      "Automatically generate descriptive alt text for your images to improve accessibility and SEO.",
    icon: ImageIcon,
    url: "/alttext",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    name: "Hierarchical Keyword Generation",
    description:
      "Create SEO-optimized keyword hierarchies to structure your content effectively.",
    icon: KeyIcon,
    url: "/hierarchical",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "Review Analysis",
    description:
      "Gain insights from your app reviews using AI-powered sentiment analysis and feedback categorization.",
    icon: StarIcon,
    url: "/review",
    gradient: "from-blue-400 to-blue-600",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-blue-100/40 bg-[size:20px_20px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Powerful tools to enhance your SEO and content optimization workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 
                shadow-lg hover:shadow-2xl transition-all duration-500 
                border border-blue-100 hover:border-blue-200
                transform hover:-translate-y-1 hover:scale-[1.02]`}
            >
              {/* Feature icon with gradient background */}
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {feature.name}
              </h3>
              
              <p className="text-blue-600/90 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <Link
                href={feature.url}
                className="inline-flex items-center text-blue-600 font-medium
                  group/link hover:text-blue-700 transition-all duration-300"
              >
                <span className="mr-2">Try it now</span>
                <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>

              {/* Decorative gradient blob */}
              <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-gradient-to-br 
                from-blue-100/50 to-transparent rounded-full blur-2xl 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
