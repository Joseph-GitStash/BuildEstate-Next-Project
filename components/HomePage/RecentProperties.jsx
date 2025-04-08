'use client'
import { useContext, useState, useEffect } from 'react'
import { PropertyContext } from '@/contexts/PropertyContext'

import Property from '../PropertyList/Property'
import SkeletonGrid from '../SkeletonGrid'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const RecentProperties = () => {
  const { properties } = useContext(PropertyContext);
  const [propertyValue, setPropertyValue] = useState("All")
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const filterProperties = () => {
        if(propertyValue === "All"){
            setFilteredProperties(properties);
        }
        else{
            const result = properties.filter((property) => property.type === propertyValue);
            setFilteredProperties(result)
        };
    };
    
    filterProperties();
  }, [propertyValue, properties]);

  return (
    <section className=" mb-[90px]">
        <div className="mb-4 md:mb-0">
            <h3 className='bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text font-semibold text-[16.5px] mt-[18px] md:mb-3 flex items-center'>
            Recent Properties
            </h3>
            {/* <Link href="" className="mb-4 md:hidden font-secondary tracking-wide text-sm">
                See all properties
            </Link> */}
        </div>
        <div className="flex items-center justify-between">
            <Tabs value={propertyValue} onValueChange={setPropertyValue} >
                <TabsList className="">
                    <TabsTrigger value="All">All</TabsTrigger>
                    <TabsTrigger value="Sale">Sale</TabsTrigger>
                    <TabsTrigger value="Rent">Rent</TabsTrigger>
                </TabsList>
            </Tabs>
            <Link href="/properties" className="hidden sm:block font-secondary tracking-wide text-sm">
                See all properties
            </Link>
        </div>
        {filteredProperties.length > 0 ? (
            <Swiper slidesPerView={1} 
                    spaceBetween={20}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
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
            {filteredProperties.map((property, index) => (
                <SwiperSlide key={index}>
                    <Property property={property} />
                </SwiperSlide>
            ))}
            </Swiper>
            ) : (
               <SkeletonGrid itemCount={4} ></SkeletonGrid>
        )}

        <div className="flex justify-end gap-7">

            <ArrowLeft className="prev text-white/45 border rounded-full flex items-center justify-center w-[40px] h-[40px] text-[7rem] px-2 py-2 hover:text-white cursor-pointer transition-colors" />

            <ArrowRight size={34} className="next text-white/45 border rounded-full flex items-center justify-center w-[40px] h-[40px] text-[7rem] px-2 py-2 hover:text-white cursor-pointer transition-colors" />
        </div>
    </section>
    
  )
}

export default RecentProperties