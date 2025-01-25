import React, {useContext} from 'react'
import { PropertyContext } from '@/contexts/PropertyContext'
import Property from './Property'
import SkeletonGrid from '../SkeletonGrid'

const PropertyList = () => {
  const { filteredProperties, isLoading, error } = useContext(PropertyContext)
  if(error) return <p>Error: {error}</p>

  if(filteredProperties.length === 0 && !isLoading){
    return(
        <div className="h-[80vh]">
            <p className="text-[16px] flex flex-col font-palanquin bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text py-2 text-center">No Properties Found</p>
        </div>
    )
  }

  if(isLoading){
    return <SkeletonGrid itemCount={8} />
  } else {
    return <div>
        <h3 className="text-[14.5px] md:text-[16px] tracking-wide font-semibold flex flex-col bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text pt-4">
            {`${filteredProperties.length === 1 ? filteredProperties.length + " result found ": filteredProperties.length + " results found " } `}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mb-[40px]">
        {filteredProperties.map((property, index) => {
            return(
                <div key={property.id}>
                    <Property property={property}/>
                </div>
            )
        })}
        </div>
        
    </div> }

}

export default PropertyList