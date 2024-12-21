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
    <section id="pricing" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Pricing Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-white rounded-lg p-8 shadow-md flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                {tier.name}
              </h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">
                {typeof tier.price === "number" ? `$${tier.price}` : tier.price}
                {typeof tier.price === "number" && (
                  <span className="text-lg font-normal">/mo</span>
                )}
              </p>
              <ul className="mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-blue-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
