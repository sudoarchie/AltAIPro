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
    popular: true,
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-blue-600">
            Choose the plan that's right for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white/70 backdrop-blur rounded-xl p-8 
                shadow-lg hover:shadow-xl transition-all duration-300 
                border border-blue-100 flex flex-col
                ${tier.popular ? 'scale-105 border-blue-200' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white 
                    px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline mb-2">
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
                    bg-clip-text text-transparent">
                    {typeof tier.price === "number" ? `$${tier.price}` : tier.price}
                  </p>
                  {typeof tier.price === "number" && (
                    <span className="text-lg text-blue-600 ml-1">/month</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="bg-blue-50 rounded-full p-1">
                      <Check className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-blue-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full px-6 py-3 rounded-full font-semibold 
                  transition duration-300 transform hover:scale-[1.02]
                  ${tier.popular
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
              >
                {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
