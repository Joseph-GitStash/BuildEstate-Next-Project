import SearchBar from "./SearchBar"
import SearchClear from "./SearchClear"

const SearchHero = () => {

  return (
    <section className='mt-[10rem] flex flex-col justify-end '>
      <div>
        <div className="flex flex-col md:flex-row justify-start gap-5">
          <div className="">
            <h2 className='flex bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold text-[17px] md:text-[21px]'>
                Discover Our New Properties
            </h2>
          </div>
        </div>
      </div>

      <div className='my-4'>
        <p className='text-[14px] md:text-[16.8px] bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent font-semibold bg-clip-text tracking-wider'>Search through our vibrant properties and reach out to buy or rent.</p>
      </div> 

    <SearchBar />
    </section>
  )
}

export default SearchHero