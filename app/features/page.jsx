import { featuresData } from '@/FeaturesData'
import Link from 'next/link'
import React from 'react' 

const FeaturesPage = () => {
  const data = featuresData

  return (
    <section className='layout '>
      <div className='mt-[10rem] flex flex-col justify-center '> 
        <div>
          {/* <p className='gap-[5px] items-center bg-[#29398a] border-gradient text-[0.77rem] inline-flex py-1 px-3 rounded-full mb-3 '>
            Features
          </p> */}
         
        </div>
        
        <div>
          <h1 className='text-[22px] sm:text-[30px] md:text-[30px] lg:text-[47px] flex flex-col font-secondary bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white/35 bg-clip-text tracking-wide'>
            <span className='mb-[-2px]'> Boost Your
              <span className='text-transparent bg-clip-text bg-gradient-to-l from-[#9FA9FF] to-[#4059DB]'> Productivity </span>  
              </span>
              <span className='-mt-2'> 
              <span className=''>Conveniently </span>
            </span>
          </h1>
        </div>

        <div>
          <h1 className="mb-[10px] md:mb-[30px] mt-5 text-[14px] md:text-[16.8px]  bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text tracking-wider">
          <span className=''>
            Manage your realty effortlessly with an all in one productivity website. Please note that this is a demo real estate website, I build and design professional bespoke websites for companies of different niches, interested in a similar build or the full stack complete build of this website, reach out to me by filling the {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-l from-[#9FA9FF] to-[#4059DB]'>
              <Link href='/developer'>
                contact form.
              </Link>
            </span>
          </span>
          </h1>
        </div>

        <p className="mt-[2rem] gap-[5px] items-center bg-[#29398a] border-gradient text-[`7px] inline-flex py-1 px-3 rounded-full mb-3 w-max ">
          Features
        </p>

        <div>
          <div className="flex flex-col md:flex-row justify-start gap-5">
            <div className="">
              <h2 className=' border-b-1 border-white w-max flex  font-semibold text-[17px]'>
                  Easy Property Management System
              </h2>
            </div>
          </div>

          <div className='my-2'>
            <p className='text-[14px] md:text-[16.8px]  bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text tracking-wider'>
            Properties can be added to the real estate web-app through a dashboard after login, here you can then :
            </p>
            <p className='flex gap-2 mt-3 text-[14.7px] md:text-[16.8px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white/25 font-secondary bg-clip-text tracking-wider'>
              Organize and manage tasks effortlessly. 
            </p>
            <p className='flex gap-2 mt-2 text-[14.7px] md:text-[16.8px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white/25 font-secondary bg-clip-text tracking-wider'>
              Easily create, edit, delete properties.
            </p>
          </div>
        </div>        

        <div>
          <div className="mt-[4rem] flex flex-col md:flex-row justify-start gap-5">
            <div className="">
              <h2 className='flex gap-2 bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold text-[17px]'>
                  Blog Management System
              </h2>
            </div>
          </div>

          <div className='my-2'>
            <p className='text-[14px] md:text-[16.8px]  bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text tracking-wider'>
            Properties can be added to the real estate web-app through a dashboard after login, her you can then :
            </p>
            <p className='flex gap-2 mt-3 text-[14.7px] md:text-[16.8px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white/25 font-secondary bg-clip-text tracking-wider'>
              Easy management of blog posts. 
            </p>
            <p className='flex gap-2 mt-2 text-[14.7px] md:text-[16.8px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white/25 font-secondary bg-clip-text tracking-wider'>
              Create, edit and delete blog posts.
            </p>
          </div>

          <div className="mt-[4rem] flex flex-col md:flex-row justify-start gap-5">
            <div className="">
              <h2 className='flex gap-2 bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold text-[17px]'>
                  User Friendly Dashboard
              <p className='gap-[5px] items-center bg-[#29398a] border-gradient text-[0.77rem] inline-flex py-1 px-3 rounded-full  w-max'>New</p>
              </h2>
            </div>
          </div>
        </div>     

        {/* <p className='my-[7rem] text-[14.7px] md:text-[16.8px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white/25 font-secondary bg-clip-text tracking-wider'> Additional features can be discussed</p>    */}

      </div>
      
    </section>
  )
}

export default FeaturesPage