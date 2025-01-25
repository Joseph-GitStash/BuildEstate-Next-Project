import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchClear from '../SearchBar/SearchClear'

const Hero = () => {
  return (
    <section className='mt-[3rem] md:mt-[7rem] h-[640px] md:h-[550px] flex flex-col justify-center '> 
        <div>
          <p className='gap-[5px] items-center bg-[#29398a] border-gradient text-[0.77rem] inline-flex py-1 px-3 rounded-full mb-3 '>
            Over 1000 Properties Sold
          </p>
        </div>
        
        <div className='relative flex justify-between'>
          <div>
            <h1 className=' text-[24px] md:text-[30px] lg:text-[47px] flex flex-col font-secondary bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white/35 bg-clip-text tracking-wide'>
                <span className='md:mb-[-2px]'>Building Luxury
                <span className='text-transparent bg-clip-text bg-gradient-to-l from-[#9FA9FF] to-[#4059DB]'>  Ideal </span>  
                    For
                </span>
                <span className='-mt-2'> 
                <span className=''> Living </span> And
                <span className=''> Investing</span> 
                </span>
            </h1>
            <p className='mb-[40px] md:mb-[30px] mt-1 text-[14px] md:text-[16.8px] flex flex-col bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white/25 font-secondary bg-clip-text tracking-wider'>
                <span className='flex gap-1'>We provide luxurious and properly <span className='hidden lg:block '></span></span>
                <span>situated houses for your comfort .</span>
            </p>
          </div>
          
        </div>
        
        <div className='flex md:flex-2 -z-10 blur-[100px] right-20 absolute w-[220px] h-[112px] bg-black'>
          <div className='flex md:flex-2 -z-10 blur-[100px] right-20 absolute w-[320px] h-[112px] bg-black'>

          </div>
        </div>

        <SearchBar/>
        <SearchClear />

    </section>

    
  )
}

export default Hero