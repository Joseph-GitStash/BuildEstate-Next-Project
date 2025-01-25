import React from 'react'
import Image from 'next/image';
import { blogList } from '@/BlogData';
import { Calendar, Flame } from 'lucide-react';

const page = async({params}) => {
  const data = blogList
  const {id} = await params

  const blogData = data.find((data) => (data.id).toString() === id)


  return (
    <section className='layout  '>
        <div className='mt-[9rem] items-center flex flex-col justify-center '>
            
          <div className="pb-[7px] flex gap-[3px] flex-row justify-center items-center ">
            <Image src={blogData.authorImg} 
                className='transition-transform group-hover:scale-105 duration-200 object-cover rounded-full w-[25px] h-[25px]
                '
                alt="article thumbnail"
                quality={100}
            />
            <span className="text-[15px] font-semibold tracking-wider "> {blogData.author} </span>
          </div>

          <h1 className="bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text font-semibold text-[18px] md:text-[21px]">
             {blogData.title} 
          </h1>
        </div>

        <div className='pt-[2rem] md:px-7'>
          <Image src={blogData.postImg} 
              className='transition-transform group-hover:scale-105 duration-200 object-cover rounded-lg w-[100%] h-[340px]
              '
              alt="article thumbnail"
              quality={100}
          />
        </div>

    </section>
  )
}

export default page