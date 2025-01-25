'use client'
import { useContext, useState, useEffect } from 'react'
import { PropertyContext } from '@/contexts/PropertyContext'

import Property from '../PropertyList/Property'
import SkeletonGrid from '../SkeletonGrid'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'

const OnDemand = () => {
  const { properties } = useContext(PropertyContext);

  const filterOnDemandProperties = properties.filter((property) => property.ondemand === true );
  
  return (
    <div className="mb-[90px]">
        <div className="mb-4 md:mb-0">
            <h3 className='bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text font-semibold text-[16.5px] mt-[18px] md:mb-3 flex items-center'>
            On-Demand Properties
            </h3>
            <p>
                Interested in one or two? reach out to one of our agents for more inquiries.
            </p>
        </div>
         {filterOnDemandProperties.length > 0 ? (
            <Swiper slidesPerView={1} 
                    spaceBetween={20}
                    pagination={{clickable: true}}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024:{ slidesPerView: 4 },
                        1310:{ slidesPerView: 4 },
                    }} 
                    modules={[Pagination]}
                    className="h-[400px]"
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
    </div>
  )
}

export default OnDemand 