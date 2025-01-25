'use client'
import Hero from '@/components/HomePage/Hero'
import LogoScrollSection from '@/components/HomePage/LogoScrollSection'
import OnDemand from '@/components/HomePage/OnDemand'
import RecentProperties from '@/components/HomePage/RecentProperties'
import PropertyList from '@/components/PropertyList/PropertyList'
import SearchHero from '@/components/SearchBar/SearchHero'
import SearchLink from '@/components/SearchBar/SearchLink'
import { PropertyContext } from '@/contexts/PropertyContext'
import { useContext } from 'react'

const Home = () => {
  const { showPropertyList } = useContext(PropertyContext)
  
  return (
    <>
    <section className='layout '> 
      {showPropertyList ? (
        <div>
          <SearchHero />
          <SearchLink />
          <PropertyList />
        </div>
      ): (
        <div>
          <Hero />
          <LogoScrollSection />
          <RecentProperties />
          <OnDemand />
        </div>
      ) }
    </section>
    </>
  )
}

export default Home