'use client'
import { navLinks } from "@/PropertyLinksStats"
import DesktopMenu from "./DesktopMenu"
import Image from "next/image"
import logo from '/public/assets/logo/buildestatelogo.png'
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileMenu from "./MobileMenu"

 
const Header = () => {
  const path = usePathname()
  return (
    <div>
      <div className="z-10 w-[100%] fixed top-0 left-0 right-0 ">
        <div className="2xl:max-w-screen-xl py-4 lg:bg-transparent lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] max-w-[1024px] ml-auto mr-auto pl-[20px] pr-[20px] ">
          <nav className='border-none bg-gradient-to-b from-zinc-900/0 to-zinc-900/0 h-12 px-4 ring-1 ring-zinc-50/5 backdrop-blur rounded-md'>
            <div className="left">
              <Link href='/' className='logo'>
                <Image src={ logo } alt="logo" className='w-[39px] '/>
                <span className='hidden text-[17px] font-semibold sm:block bg-gradient-to-l from-[#9fa9ff] to-[#4059db] text-transparent bg-clip-text font-semi-bold'>BuildEstate</span>
              </Link>
              <div className='middle navbar'>
                {navLinks.map((link) => (
                <DesktopMenu link={link} key={link.label}/>
                ))}
                
              </div>
            </div>
            
            <div className="flex gap-5 flex-[1] items-center justify-end ">
              <Link href="/developer" className={`${path === "/developer" ? "bg-gradient-to-l from-[#9fa9ff] to-[#4059db] text-transparent bg-clip-text" : "text-white/85"} devBtn `}>
                Developer
              </Link>
              <div className='md:hidden z-[1000]'>  
                <MobileMenu Links={navLinks} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header