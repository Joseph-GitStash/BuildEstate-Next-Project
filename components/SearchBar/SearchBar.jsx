import { ArrowRight, RemoveFormatting } from 'lucide-react'
import React, {useContext} from 'react'
import { PropertyContext } from '@/contexts/PropertyContext'
import PropertyLocation from './PropertyLocation'
import PropertyType from './PropertyType'

const SearchBar = () => {
  const { searchTerm, setSearchTerm, handleSubmit, handleClearSearch } = useContext(PropertyContext)
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} >
            <input type="text" 
                   value={searchTerm}
                   placeholder='Property title' 
                   onChange={(e) => setSearchTerm(e.target.value)}
                   className="form-input"
            />
            <PropertyLocation />
            <PropertyType />
            
            <button onClick={handleSubmit} className='form-button w-[100%] md:w-[40%] flex gap-1'>
                Search <ArrowRight className='w-[20px] -rotate-[30deg]'/>
            </button>
        </form>


        
    </div>
  )
}

export default SearchBar