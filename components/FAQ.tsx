"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What image formats are supported?",
    answer: "We support all major image formats including JPG, PNG, WebP, and more. Each format is optimized for different use cases and quality requirements."
  },
  {
    question: "How does the licensing system work?",
    answer: "We offer two types of licenses: Personal and Commercial. Personal licenses are for individual use, while Commercial licenses allow for business and commercial use of the images."
  },
  {
    question: "How do I get paid for my images?",
    answer: "Payments are processed securely through our platform. You can withdraw your earnings through various payment methods including bank transfer and popular digital wallets."
  },
  {
    question: "What happens if someone uses my image without permission?",
    answer: "We provide watermark protection and actively monitor for unauthorized use. If you find your image being used without permission, our legal team will help you take appropriate action."
  },
  {
    question: "Can I change my pricing after uploading?",
    answer: "Yes, you can update your pricing at any time. Changes will be reflected immediately for new purchases."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive support through email, live chat, and documentation. Pro and Enterprise users get priority support with faster response times."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="card bg-white dark:bg-gray-800 shadow-lg"
            >
              <div 
                className="card-body cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="card-title text-lg">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-red-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-red-500" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 