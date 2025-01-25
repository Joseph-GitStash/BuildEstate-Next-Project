import { RemoveFormatting } from 'lucide-react'
import React, {useContext} from 'react'
import { PropertyContext } from '@/contexts/PropertyContext'

const SearchLink = () => {
  const { handleClearSearch } = useContext(PropertyContext)

  return (
    <div className='mt-3 mb-[3rem] flex justify-between'>
        <button>
           <a href='/' className='bg-gradient-to-l from-white/45 to-white text-transparent bg-clip-text text-[13.7px] md:text-[14.1px] font-semibold hover:text-white ' >Back To Home</a>  
        </button>

        <button className="bg-zinc-50/10 p-2 rounded-full ring-1 ring-zinc-50/45" 
             onClick={() => handleClearSearch()} >
              <RemoveFormatting size={15} />
        </button>
    </div>
  )
}

export default SearchLink