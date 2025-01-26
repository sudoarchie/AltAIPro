import { Image, Search, BarChart, Trophy } from "lucide-react";

const benefits = [
  {
    title: "Click-Through Rates",
    description: "Alt text can result in a 10% higher organic click through rate (CTR)!",
    icon: BarChart,
    gradient: "from-blue-600 to-blue-800",
    stat: "10%",
    statLabel: "Higher CTR"
  },
  {
    title: "Image Search Visibility",
    description: "Alt text can increase the number of clicks on your images by up to 70%!",
    icon: Search,
    gradient: "from-blue-500 to-blue-700",
    stat: "70%",
    statLabel: "More Clicks"
  },
  {
    title: "Content For Google",
    description: "Demonstrate the helpfulness of your content by adding alt text. Without alt text, Google cannot fully understand your content.",
    icon: Image,
    gradient: "from-blue-400 to-blue-600",
    stat: "100%",
    statLabel: "Content Understanding"
  },
  {
    title: "Beat The Competition",
    description: "Rank higher than your competitors. Over 50% of websites have missing alt text. Don't make the same mistake!",
    icon: Trophy,
    gradient: "from-blue-300 to-blue-500",
    stat: "50%",
    statLabel: "Competitive Edge"
  }
];

export default function SeoBenefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-blue-100/40 bg-[size:20px_20px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            SEO Benefits of Alt Text
          </h2>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Maximize your website's potential with properly optimized alt text
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 
                shadow-lg hover:shadow-2xl transition-all duration-500 
                border border-blue-100 hover:border-blue-200
                transform hover:-translate-y-1"
            >
              {/* Icon with gradient background */}
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-6`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>

              {/* Stat Counter */}
              <div className="absolute top-8 right-8">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {benefit.stat}
                </div>
                <div className="text-sm text-blue-600">
                  {benefit.statLabel}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-blue-600/90 leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative gradient blob */}
              <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-gradient-to-br 
                from-blue-100/50 to-transparent rounded-full blur-2xl 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white 
            rounded-full font-semibold shadow-lg hover:shadow-xl 
            transform hover:scale-105 transition-all duration-300">
            Start Optimizing Your Alt Text
          </button>
        </div>
      </div>
    </section>
  );
}
