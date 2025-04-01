"use client";

import { Upload, Image as ImageIcon, CreditCard, Download } from "lucide-react";
import { GlowingStarsBackgroundCard, GlowingStarsTitle } from '@/components/ui/glowing-stars';

const Process = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Follow these simple steps to start selling your digital assets
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        <GlowingStarsBackgroundCard>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-6 h-6 text-red-500" />
            </div>
            <GlowingStarsTitle title="Upload Image" />
          </div>
        </GlowingStarsBackgroundCard>

        <GlowingStarsBackgroundCard>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
              <ImageIcon className="w-6 h-6 text-red-500" />
            </div>
            <GlowingStarsTitle title="Choose Formats" />
          </div>
        </GlowingStarsBackgroundCard>

        <GlowingStarsBackgroundCard>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6 text-red-500" />
            </div>
            <GlowingStarsTitle title="Set Pricing" />
          </div>
        </GlowingStarsBackgroundCard>

        <GlowingStarsBackgroundCard>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-red-500" />
            </div>
            <GlowingStarsTitle title="Start Selling" />
          </div>
        </GlowingStarsBackgroundCard>
      </div>
    </div>
  );
};

export default Process;