"use client";

import { 
  Image as ImageIcon, 
  Shield, 
  Zap, 
  Palette, 
  Lock, 
  BarChart 
} from "lucide-react";

const features = [
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: "High-Quality Images",
    description: "Support for high-resolution images with professional-grade quality"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Transactions",
    description: "Safe and secure payment processing with industry-standard encryption"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Processing",
    description: "Lightning-fast image processing and format conversion"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Multiple Formats",
    description: "Support for various image formats including JPG, PNG, and WebP"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Watermark Protection",
    description: "Optional watermarking to protect your images from unauthorized use"
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Analytics Dashboard",
    description: "Track your sales and performance with detailed analytics"
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Platform Features
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage and sell your digital assets effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="card-body">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
                  <div className="text-red-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="card-title text-xl">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 