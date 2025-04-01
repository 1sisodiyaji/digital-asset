"use client";

import { Upload, Image as ImageIcon, Shield } from "lucide-react";
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import GradualSpacing from '@/components/ui/gradual-spacing';
import ShimmerButton from '@/components/ui/shimmer-button';
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] max-w-7xl mx-auto flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <AnimatedGradientText 
          text="Transform Your Images Into Digital Assets" 
          className="text-xl md:text-2xl font-medium"
        />

        <div className="space-y-4">
          <GradualSpacing 
            text="Upload, Transform, and Sell Your Images" 
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-200"
          />
          <GradualSpacing 
            text="With Professional Quality and Multiple Formats" 
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-200"
          />
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Upload your images and transform them into various formats. Sell them with different licenses and make money from your digital assets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <ShimmerButton 
            text="Get Started" 
            onClick={() => router.push('/register')}
            className="bg-red-500 hover:bg-red-600 text-white"
          />
          <ShimmerButton 
            text="View Gallery" 
            onClick={() => router.push('/login')}
            className="bg-gray-800 hover:bg-gray-700 text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto w-full px-4">
        <div className="card bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
          <div className="card-body items-center text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="card-title text-lg">Easy Upload</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Upload your images with just a few clicks and transform them instantly
            </p>
          </div>
        </div>

        <div className="card bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
          <div className="card-body items-center text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
              <ImageIcon className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="card-title text-lg">Multiple Formats</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get your images in various sizes and formats for different use cases
            </p>
          </div>
        </div>

        <div className="card bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
          <div className="card-body items-center text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="card-title text-lg">Secure Licensing</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Choose between personal and commercial licenses for your images
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;