import React from 'react'
import Image from 'next/image'
import { Calendar, EyeIcon, FlameIcon,  } from 'lucide-react'
import Link from 'next/link'

const BlogCard = ({article}) => {
  return (
    <>
    <div className='rounded-lg mt-[15px] relative h-[240px] overflow-hidden w-[100%] shadow-lg group'>
      <Link className='w-full' href={`/blog/${article.id}`}>
      <Image src={article.postImg} 
             className='transition-transform group-hover:scale-105 duration-200 object-cover w-[100%] h-[100%]
             '
             alt="article thumbnail"
             quality={100}
      />
      <div className='absolute w-[100%] inset-0 flex items-end bg-[linear-gradient(180deg,_rgba(29,_30,_32,_0.20)_0%,_rgba(29,_30,_32,_0.21)_11.79%,_rgba(29,_30,_32,_0.22)_21.38%,_rgba(29,_30,_32,_0.25)_29.12%,_rgba(29,_30,_32,_0.28)_35.34%,_rgba(29,_30,_32,_0.33)_40.37%,_rgba(29,_30,_32,_0.38)_44.56%,_rgba(29,_30,_32,_0.43)_48.24%,_rgba(29,_30,_32,_0.49)_51.76%,_rgba(29,_30,_32,_0.55)_55.44%,_rgba(29,_30,_32,_0.61)_59.63%,_rgba(29,_30,_32,_0.67)_64.66%,_rgba(29,_30,_32,_0.73)_70.88%,_rgba(29,_30,_32,_0.79)_78.62%,_rgba(29,_30,_32,_0.85)_88.21%,_rgba(29,_30,_32,_0.90)_100%)]'>
        <div className='relative flex flex-col mt-[4rem] h-[95%] justify-end  w-[100%] m-2 bg-transparent backdrop-blur-[2px] p-1 text-zinc-300'>

          <p className={` ${article.trending === true ? " bg-white absolute top-0 right-0 flex items-center justify-center text-[14px] py-1 px-1 rounded-full font-semibold ":"hidden"} `}>
            <FlameIcon  className="fill-yellow-400 text-red-500"/>
          </p>

          <div className='flex justify-center h-[40px] '>
            <div className='pl-[2px] pr-[10px] bg-white rounded-full flex gap-1 items-center'>
              <Image src={article.authorImg} 
                className='flex justify-center rounded-full border object-cover w-[40px] py-[1px] h-full
                '
                alt="article thumbnail"
                quality={100}
              />
              <p className=' text-[15px] font-medium text-slate-800 font-secondary'>
                {`${(article.author)}`}
              </p>
            </div>  
          </div>

        </div>
      </div>

      </Link>

    </div>

    <div className="pt-3">
      <h1 className="bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold text-[18px]">
        {`${(article.title).slice(0, 40)}...`}
      </h1>

      <p className="pt-2 text-white/45 text-[13.5px] ">
        {`${(article.description).slice(0, 80)}...`}
      </p>

      <div className="pt-[1rem] flex gap-[3rem]">
        <div className="flex items-center gap-1">
          <Calendar className="w-[14px] " />
          <span className="text-[13.5px] font-semibold ">{article.date}</span>
        </div>

        <div className="flex items-center gap-1">
          <EyeIcon className="w-[15px] " />
          <span className="text-[13.5px] font-semibold">{article.views}K {" "} Views </span>
        </div>
      </div>

      <Link className=' w-full' href={`/blog/${article.id}`}>
        <button className='text-white/45 ring-1 transition-all ring-zinc-50/10 py-[7px] hover:text-white hover:ring-white mt-[2rem] border-none w-[100%]'>
          Read More
        </button>
      </Link>
    </div>
    </>
  )
}

export default BlogCard