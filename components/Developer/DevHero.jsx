import React from 'react'
import DevContactPage from './DevContactPage'

const DevHero = () => { 
  return (
    <section className=' mt-[10rem] mb-[4rem] flex flex-col   '>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col lg:flex-row">
          <div className='lg:w-1/2 lg:pr-[12px] lg:h-[70vh] justify-center items-center flex flex-col bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold text-[14px]'>
            <h1 className=' flex flex-col md:text-[19px] '>
                <span className="text-[17px] md:text-[19px]">Hi I'm Joseph ✌</span>
                <span className='tracking-wider lg:tracking-normal bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text '>a professional full stack web developer with a knack for building highly functional and visually stunning websites. I can transform your vision into something that excels both in appearance and performance.</span>
                
                <p className='tracking-wider lg:tracking-normal pt-[1rem] pb-[2rem] text-[14px] md:text-[19px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text'>You are currently viewing a real estate demo website designed and built by me. Have a project in mind ?</p>
                <p className='tracking-wider lg:tracking-normal pt-[1rem] pb-[2rem] text-[14px] md:text-[19px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text'>Email me lets discuss your next project.</p>
            </h1>
          </div>
          <div className=' lg:w-1/2'>
            <DevContactPage />
          </div>
        </div>
    </div>

    
  </section>
  )
}

export default DevHero