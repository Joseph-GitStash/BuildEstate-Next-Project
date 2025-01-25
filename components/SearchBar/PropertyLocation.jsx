import React, {useContext} from 'react'
import { PropertyContext } from '@/contexts/PropertyContext'
import { 
  Select, 
  SelectContent, 
  SelectGroup, SelectItem, 
  SelectLabel, 
  SelectTrigger, SelectValue } from '@/components/ui/select'

const PropertyLocation = () => {
  const { properties, selectedLocation, setSelectedLocation } = useContext(PropertyContext)

  const uniqueLocations = [
    "All locations", ...new Set(properties.filter((property) => {
        const propertyDate = new Date(property.date);
        const currentDate = new Date();

        if(propertyDate > currentDate) return true;

        if(propertyDate.toDateString() === currentDate.toDateString()){
            const propertyTime = propertyDate.getTime();
            const currentTime = currentDate.getTime();
            return propertyTime > currentTime;
        }

        return false
    }).map((property) =>  property.location)
    ),
  ];

  return (
    <div className="md:w-[40%]">
      <Select 
        value={selectedLocation}
        onValueChange={(value) => setSelectedLocation(value) } 
      >
        <SelectTrigger className="h-full bg-gradient-to-l from-white/45 to-white bg-clip-text text-[12.7px] md:text-[14.1px] font-semibold border-none ring-1 ring-zinc-50/5 py-2 px-[10px] outline-none text-transparent  ">
          <SelectValue placeholder="Property Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Location</SelectLabel>
            {uniqueLocations.map((location, index) => {
              return <SelectItem value={location === "All locations" ? null : location} key={index}>{location}</SelectItem>
            } )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default PropertyLocation