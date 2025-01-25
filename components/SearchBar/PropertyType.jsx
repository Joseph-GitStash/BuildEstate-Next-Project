import React, {useContext} from 'react'
import { PropertyContext } from '@/contexts/PropertyContext'
import { 
    Select, 
    SelectContent, 
    SelectGroup, SelectItem, 
    SelectLabel, 
    SelectTrigger, SelectValue } from '@/components/ui/select'

const PropertyType = () => {
  const { properties, selectedType, setSelectedType } = useContext(PropertyContext)

  const uniqueTypes = [
     ...new Set(properties.map((property) => property.type)),
  ];


  return (
    <div className="md:w-[30%] select-none">
        <Select 
            value={selectedType ?? null }
            onValueChange={(value) => setSelectedType(value) } 
        >
            <SelectTrigger className="h-full bg-gradient-to-l from-white/45 to-white bg-clip-text text-[12.7px] md:text-[14.1px] font-semibold border-none ring-1 ring-zinc-50/5 py-2 px-[10px] outline-none text-transparent  ">
            <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                {uniqueTypes.map((type, index) => {
                return <SelectItem value={type === "All Types" ? null : type} key={index}>{type}</SelectItem>
                } )}
            </SelectGroup>
            </SelectContent>
        </Select>
    </div>
  )
}

export default PropertyType