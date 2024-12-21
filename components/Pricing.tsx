import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: 29,
    features: [
      "100 AI-generated alt texts",
      "Basic keyword hierarchy",
      "Limited app review analysis",
    ],
  },
  {
    name: "Pro",
    price: 79,
    features: [
      "Unlimited AI-generated alt texts",
      "Advanced keyword hierarchy",
      "Full app review analysis",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom solutions", "Dedicated support", "API access"],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-16">
          Pricing Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-white/70 backdrop-blur rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                {tier.name}
              </h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
                {typeof tier.price === "number" ? `$${tier.price}` : tier.price}
                {typeof tier.price === "number" && (
                  <span className="text-lg font-normal">/mo</span>
                )}
              </p>
              <ul className="mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="text-blue-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition duration-300 w-full">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
