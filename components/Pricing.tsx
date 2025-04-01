"use client";

import { Check } from "lucide-react";
import ShimmerButton from '@/components/ui/shimmer-button';
import { useRouter } from "next/navigation";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started",
    features: [
      "Upload up to 10 images",
      "Basic image formats",
      "Personal license only",
      "Standard support",
      "Basic analytics"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For professional creators",
    features: [
      "Unlimited image uploads",
      "All image formats",
      "Personal & Commercial licenses",
      "Priority support",
      "Advanced analytics",
      "Watermark protection",
      "Custom pricing"
    ],
    cta: "Start Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Custom branding",
      "API access",
      "Dedicated support",
      "Custom integrations",
      "Team management",
      "Advanced security"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`card bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all relative ${
                plan.popular ? 'border-2 border-red-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="card-body">
                <h3 className="card-title text-2xl">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{plan.description}</p>

                <div className="divider"></div>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-red-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="card-actions justify-center mt-8">
                  <ShimmerButton 
                    text={plan.cta}
                    onClick={() => router.push('/register')}
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-gray-800 hover:bg-gray-700 text-white'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 