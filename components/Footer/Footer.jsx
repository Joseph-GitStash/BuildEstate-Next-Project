import Image from "next/image"
import logo from '/public/assets/logo/buildestatelogo.png'
import Link from "next/link"


const Footer = () => {
  return (
    <div>
      <div className="w-[100%] ">
        <div className="items-center 2xl:max-w-screen-xl py-14 lg:bg-transparent lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] max-w-[1024px] ml-auto mr-auto pl-[20px] pr-[20px] ">
          <nav className='flex bg-gradient-to-b from-zinc-900/0 to-zinc-900/0 h-12 px-4 ring-1 ring-zinc-50/5 backdrop-blur rounded-md'>
              <a href='/' className='logo'>
                <Image src={ logo } alt="logo" className='w-[39px] '/>
                <span className='hidden text-[17px] font-semibold sm:block bg-gradient-to-l from-[#9fa9ff] to-[#4059db] text-transparent bg-clip-text font-semi-bold'>BuildEstate</span>
              </a>
              <a href="/features" className='text-[13px]  tracking-wide text-zinc-50/85 hover:text-[white] transition-colors'>Copyright &copy; 2025 All Rights Reserved</a>
          </nav>
        </div>
      </div>
    </div>
          
  )
}

export default Footer