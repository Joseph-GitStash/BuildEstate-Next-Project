'use client'
import { useContext, useState, useEffect } from 'react'
import { PropertyContext } from '@/contexts/PropertyContext'

import Property from '../PropertyList/Property'
import SkeletonGrid from '../SkeletonGrid'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const OnDemand = () => {
  const { properties } = useContext(PropertyContext);

  const filterOnDemandProperties = properties.filter((property) => property.ondemand === true );
  
  return (
    <div className="mb-[90px]">
        <div className="mb-4 md:mb-0">
            <h3 className='bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text font-semibold text-[16.5px] mt-[18px] md:mb-3 flex items-center'>
            On-Demand Properties
            </h3>
            {/* <p>
                Interested in one or two? reach out to one of our agents for more inquiries.
            </p> */}
        </div>
         {filterOnDemandProperties.length > 0 ? (
            <Swiper slidesPerView={1} 
                    spaceBetween={20}
                    navigation={{
                        prevEl: '.prevOn',
                        nextEl: '.nextOn',
                      }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024:{ slidesPerView: 4 },
                        1310:{ slidesPerView: 4 },
                    }} 
                    modules={[Navigation]}
                    className="h-[330px]"
                    >
            {filterOnDemandProperties.map((property, index) => (
                <SwiperSlide key={index}>
                    <Property property={property} />
                </SwiperSlide>
            ))}
            </Swiper>
            ) : (
               <SkeletonGrid itemCount={4} ></SkeletonGrid>
        )}

        <div className="flex justify-end gap-7">

            <ArrowLeft className="prevOn text-white/45 border rounded-full flex items-center justify-center w-[40px] h-[40px] text-[7rem] px-2 py-2 hover:text-white cursor-pointer transition-colors" />

            <ArrowRight size={34} className="nextOn text-white/45 border rounded-full flex items-center justify-center w-[40px] h-[40px] text-[7rem] px-2 py-2 hover:text-white cursor-pointer transition-colors" />
        </div>
    </div>
  )
}

export default OnDemand 