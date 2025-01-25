import React from 'react'
import Image from 'next/image'
import { Bath, Bed, MapPin, Ruler } from 'lucide-react'
import Link from 'next/link'


const Property = ({property}) => {
  return (
    <div className='mt-[15px] relative h-[300px] overflow-hidden w-[100%] shadow-lg group'>
      <Link className='w-full' href={`/properties/${property.id}`}>
      <Image src={property.images[0]} 
             className='transition-transform group-hover:scale-105 duration-200 object-cover w-[100%] h-[100%]
             '
             alt="property thumbnail"
             quality={100}
      />
      <div className='absolute w-[100%] inset-0 flex items-end bg-[linear-gradient(180deg,_rgba(29,_30,_32,_0.20)_0%,_rgba(29,_30,_32,_0.21)_11.79%,_rgba(29,_30,_32,_0.22)_21.38%,_rgba(29,_30,_32,_0.25)_29.12%,_rgba(29,_30,_32,_0.28)_35.34%,_rgba(29,_30,_32,_0.33)_40.37%,_rgba(29,_30,_32,_0.38)_44.56%,_rgba(29,_30,_32,_0.43)_48.24%,_rgba(29,_30,_32,_0.49)_51.76%,_rgba(29,_30,_32,_0.55)_55.44%,_rgba(29,_30,_32,_0.61)_59.63%,_rgba(29,_30,_32,_0.67)_64.66%,_rgba(29,_30,_32,_0.73)_70.88%,_rgba(29,_30,_32,_0.79)_78.62%,_rgba(29,_30,_32,_0.85)_88.21%,_rgba(29,_30,_32,_0.90)_100%)]'>
        <div className=' w-[100%] m-2 bg-transparent backdrop-blur-[2px] p-1 text-zinc-300'>

          <p className={` ${property.type === "Sale" ? "bg-red-600":"bg-purple-900"} text-white rounded-lg flex items-center justify-center text-[14px] w-[55px] mb-2 px-2 font-semibold `}>
            {property.type}
          </p>

          <h1 className='text-white text-[15px]'>{property.title}</h1>

          <div className='text-[12px] items-center flex gap-2'>
            <p className='text-[13px] font-semibold'>{property.type}</p>
            <p>AED {property.price}</p>
          </div>

          <p className='items-center gap-1 text-[11px] flex'>
            <MapPin className='w-[16px]'/>
            <span className='text-[13px]'>{property.location}</span> &nbsp; 
          </p>

          <div className="flex mt-2 gap-3">

            <p className='flex items-center gap-1 text-[12px]'>
              <Ruler className='w-[16px]'/>
              <span >500</span>
            </p>
            <p className='flex items-center gap-1 text-[12px]'>
              <Bath className='w-[16px]'/><span>{property.bathroom}</span>                
            </p>
            <p className='flex items-center gap-1 text-[12px]'>
              <Bed className='w-[16px]'/><span>{property.bedroom}</span>
            </p>
              
          </div>
        </div>

      </div>
      </Link>
    </div>
  )
}

export default Property