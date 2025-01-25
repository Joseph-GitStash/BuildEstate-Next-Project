import { RemoveFormatting } from 'lucide-react'
import React, {useContext} from 'react'
import { PropertyContext } from '@/contexts/PropertyContext'

const SearchClear = () => {
  const { handleClearSearch } = useContext(PropertyContext)
  

  return (
    <div className="mt-3 flex justify-end items-center">
        <button className="bg-zinc-50/10 p-2 rounded-full ring-1 ring-zinc-50/45"
            onClick={() => handleClearSearch()} >
            <RemoveFormatting size={15} />
        </button>
    </div>
  )
}

export default SearchClear