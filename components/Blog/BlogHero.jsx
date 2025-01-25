import React from 'react'

const BlogHero = () => {
  return (
    <section className=' mt-[10rem] flex flex-col justify-end '>
      <div className="flex flex-col md:flex-row justify-start gap-5">
        <div className="">
          <h2 className='flex flex-col bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold text-[17px]'>
            <span className='md:text-[21px] '>Discover The Current Happenings</span>
            <span className='md:text-[21px] '>In The Booming World Of Real Estate</span>
          </h2>
        </div>
    </div>

    <div className='my-4'>
      <p className='text-[14px] md:text-[16.8px]  bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text tracking-wider'>All the contents of this site have been updated, and you will get only the most current news about global real estate.</p>
    </div>

    <div className="mt-[3rem]">
        <h1 className='text-[17px] md:text-[21px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold tracking-wide bg-clip-text '></h1>
    </div>
  </section>
  )
}

export default BlogHero