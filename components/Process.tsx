import React from 'react'
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from '@/components/ui/glowing-stars'
const Process = () => {
  return (
    <>
     <div className="flex flex-col justify-center items-center md:my-24 space-y-4">
                    <h1 className='uppercase text-xl text-orange-500'>PROCESS</h1>
                    <h2 className='text-4xl capitalize font-semibold'> Your Hiring Journey </h2>
                    <div className='flex justify-center items-center gap-6 md:flex-row flex-col'>
                        <GlowingStarsBackgroundCard>
                            <GlowingStarsTitle title="Apply Form" />
                            <GlowingStarsDescription text="Firstly you have to apply form " />
                        </GlowingStarsBackgroundCard>

                        <GlowingStarsBackgroundCard>
                            <GlowingStarsTitle title="Interview" />
                            <GlowingStarsDescription text="Firstly you have to apply form" />
                        </GlowingStarsBackgroundCard>

                        <GlowingStarsBackgroundCard>
                            <GlowingStarsTitle title="Interview - II" />
                            <GlowingStarsDescription text="Firstly you have to apply form" />
                        </GlowingStarsBackgroundCard>

                        <GlowingStarsBackgroundCard>
                            <GlowingStarsTitle title="Grab Your Job" />
                            <GlowingStarsDescription text="Firstly you have to apply form " />
                        </GlowingStarsBackgroundCard>


                    </div>
                </div>
    </>
  )
}

export default Process