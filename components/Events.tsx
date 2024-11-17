import { Circle, Eventangle, Exploreangle } from '@/public/assets/icon/Icon'
import { useScopedI18n } from '@/locales/client';
import React from 'react'

function Events() {
  const tIndex = useScopedI18n("IndexPage");
  return (
    <section className='bg-paragraph relative overflow-hidden'>
           <div className='absolute left-0'>
              <Eventangle width={936} height={250} color='#F9FAFB' className='opacity-[20%]'/>
        </div>
           <div className='absolute right-0'>
              <Exploreangle width={812} height={250} color='#F9FAFB' className='opacity-[20%]'/>
        </div>
        <div className='w-10/12 mx-auto py-16 relative z-10'>
     
          <div className='flex flex-wrap gap-6 md:gap-10 justify-center md:justify-between items-center w-full'>
                <div className='flex flex-col'>
                     <div className='flex items-center gap-2 md:gap-5 justify-center md:justify-start'>
                        <div className='cursor-pointer'>
                            <Circle width={24} height={24}/>
                        </div>
                        <div className='text-lg font-bold tracking-4xl text-gray-170'>
                        {tIndex("Pre-test Instruction Video.Events")}
                        </div>
                     </div>
                   
                </div>
                <div className='h-fit py-5'>
                    <a href="https://relationshipstudio.sg/workshops/" target='_blank' title='explore button' className='w-fit text-xl md:text-lg font-bold text-paragraph py-5 px-10 tracking-4xl bg-secondary rounded-5xl transition-all duration-500 hover:shadow-xxl'>
                    {tIndex("Pre-test Instruction Video.Explore More")}
                    </a>
                </div>
          </div>
        </div>
    </section>
  )
}

export default Events