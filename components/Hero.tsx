import { WobbleCardDemo } from '@/components/common/WoobleCard';
import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import GradualSpacing from '@/components/ui/gradual-spacing'
import ShimmerButton from '@/components/ui/shimmer-button'
import React from 'react'

const Hero = () => {
  return (
    <> 
      <div className="py-24 mb-4 flex flex-col justify-center items-center gap-6 w-full">
        <AnimatedGradientText text={'🎉A small marketting line or a good starting line'} className={' text-center text-black dark:text-white'} />

        <GradualSpacing text="Help Business to Grow rapidaly without " className="md:text-5xl text-sm text-black dark:text-white text-wrap" />
        <GradualSpacing text="having an redudnacy of communication gap" className="md:text-5xl text-sm text-black dark:text-white text-wrap" />

        <ShimmerButton shimmerColor="#f76716" text="See All Opening" className='text-white dark:text-white' />
      </div>
      <WobbleCardDemo />
    </>
  )
}

export default Hero