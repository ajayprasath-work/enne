import React from 'react'
import Image from 'next/image'
function Herobanner() {
  return (
<section className='w-full h-screen relative overflow-hidden'>
 <div className='absolute top-[25%] lg:top-20 left-3'>
 <Image
            src={"/assets/images/angle_bg.webp"}
            alt="banner"
            width={800}
            height={900}
            className="lg:w-[50rem] md:w-[40rem] md:h-[40rem] w-[25rem] h-[25rem] lg:h-[50rem]"
          />

 </div>
 <div className='flex justify-center items-center w-full h-screen relative z-50'>
        <div className='w-11/12 mx-auto'>
           <div className='flex flex-col'>
            <div className='text-Testsecondary lg:text-left text-center text-3xl lg:text-xxl font-bold tracking-wider'>
            Hi, Mugundhan Krishnamurthy
            </div>
            <div className='mt-3 lg:mt-10 lg:mx-0 mx-auto'>
                <a href="http://localhost:3004/en/register" target='_blank' title='take test' className='py-5 px-7 text-xl font-bold bg-Testprimary text-white inline-block rounded-6xl'>Take the Test Now</a>
            </div>
           </div>
        </div>
    </div>
</section>
  )
}

export default Herobanner