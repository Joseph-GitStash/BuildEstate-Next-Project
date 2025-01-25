'use client'

import PropertyList from "@/components/PropertyList/PropertyList"
import SearchClear from "@/components/SearchBar/SearchClear"
import SearchHero from "@/components/SearchBar/SearchHero"

const Properties = () => {
  return (
    <section className='layout flex  '> 
        <SearchHero />
        <SearchClear />
        <PropertyList />
    </section>
  )
}

export default Properties