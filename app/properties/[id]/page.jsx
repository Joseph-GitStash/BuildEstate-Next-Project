
import React from 'react'
import { listData } from '@/PropertyData';
import Image from 'next/image';
import { BathIcon, BedDouble, MapPin, StarIcon } from 'lucide-react';
import Link from 'next/link';
import { 
  Carousel,
  CarouselContent, 
  CarouselItem, 
  CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PropertyPage = async ({params}) => {
  const data = listData
  const {id} = await params;

  const postData = data.find((data) => (data.id).toString() === id)



  return (
    <section className='layout '>

      <div className='mt-[9rem] flex flex-col justify-center '>
        <h1 className="md:text-[21px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold text-[17px]">{postData.title} </h1>

        <h1 className='md:text-[21px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold text-[17px] md:hidden flex items-center gap-1'>
          <span className='flex-row gap-2 items-center flex mr-2'>
            <span className='text-[15px] text-white/45 '>
              Going For
            </span>
            <h1 className="text-[18px] ">${postData.price}</h1>
          </span>
        </h1>

        <div className="items-center flex flex-row gap-4">
          <div className="md:text-[21px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text font-semibold text-[17px] mt-[10px] mb-[14px] flex gap-4 items-center">
            <h1 className='text-[14px] items-center flex gap-1'>
              4.5<StarIcon className='w-[16px] text-white/45' />
            </h1>
            <h1 className='items-center text-[13px] flex gap-1'>
              <MapPin className='w-[16px] text-white/45' />{postData.location}
            </h1>
          </div>
        </div>

        <Carousel>
          <CarouselContent>
            {postData.images.map((img, index) => (
              <CarouselItem key={index}>
                <Image src={img} alt='img' className="object-cover h-[340px]" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className='mt-[2rem]'>
        <div className='md:my-3 flex gap-3'>
          <span className='flex gap-1'>
            <Image src={postData.agentImg} alt='img' className="w-[24px] h-[24px] rounded-full" /> 
            <h1 className='bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text font-semibold'>
              {postData.agent}
            </h1>
          </span>
        </div>
      </div>
      
      <div className='pt-[17px] flex gap-4 flex-col md:flex-row'>
        {/* First Part */}
        <div className='flex md:mr-[2rem] md:w-[50%] flex-col first'>
          <div className='bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text font-semibold mb-[2rem] flex gap-3'>
            <h1 className='font-semibold text-[14px] items-center justify-center flex gap-1'>
              <BedDouble className='w-[16px] text-white/45' />2
            </h1>
            <h1 className='font-semibold text-[14px] items-center justify-center flex gap-1'>
              <BathIcon className='w-[16px] text-white/45' />3
            </h1>

            { postData.ondemand === true ? 
              
              <div className='flex items-center gap-1.5 text-[14px] tracking-wide'>
                <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                  <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'>
                  </span>
                </span>
                { postData.type === "Sale" ? 
                    <h1>On Demand</h1>:
                    <h1>Available</h1>
                }
              </div> :
              <div className='flex items-center gap-1.5 text-[14px] tracking-wide'>
                <span className='relative w-2 h-2 rounded-full bg-red-500'>
                  <span className='absolute inset-0 rounded-full bg-red-500 animate-ping'>
                  </span>
                </span>
                { postData.type === "Sale" ? 
                    <h1>Sold</h1>:
                    <h1>2 units available</h1>
                }
              </div>
              }

          </div>

          <div>
            <h1 className='text-[14px] md:text-[16.8px]  bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text tracking-wider'>
              {postData.description}
            </h1>
          </div>

          <div className='pt-[12px] md:hidden flex flex-col'>
            <div>
              <h1 className='md:text-[21px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold  mt-[1.2rem] text-[16px]'>
                Payment Plan
              </h1>
              <p className='text-[14px] md:text-[16.8px]  bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text tracking-wide flex gap-1'>
                Payment can be split up for 11 months
              </p>
            </div>
            <div>
              <h1 className='md:text-[21px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold  mt-[1.2rem] text-[16px]'>
                For More Inquiries
              </h1>
              <p className='text-[14px] md:text-[16.8px]  bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text tracking-wide flex gap-1'>
                Send me a
                <Link href='/developer'>
                  <span className=' hover:text-white cursor-pointer'> Message</span>
                </Link>
              </p>
            </div>
          </div>

        </div>

        {/* Second Part */}
        <div className='hidden md:flex md:w-[40%] flex-col second'>
          <div className='md:px-5 '>
            <h1 className='md:text-[21px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold text-[17px] flex items-center gap-1'>
              <span className='flex-row gap-2 items-center flex mr-2'>
                <span className='text-[15px] text-white/45 '>
                  Going For
                </span>
                <h1 className=" ">${postData.price}</h1>
              </span>
            </h1>

            <div>
              <div>
                <h1 className='md:text-[21px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold  mt-[1.2rem] text-[16px]'>Payment Plan</h1>
                <p className='text-[14px] md:text-[16.8px]  bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text tracking-wide'>Payment can be split up for 11 months</p>
              </div>
              <div>
                <h1 className='md:text-[21px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold  mt-[1.2rem] text-[16px]'>
                  For More Inquiries
                </h1>
                <p className='text-[14px] md:text-[16.8px]  bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text tracking-wide flex gap-1'>
                  Send me a
                  <Link href='/developer'>
                    <span className=' hover:text-white cursor-pointer'> Message</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
    
  )
}

export default PropertyPage