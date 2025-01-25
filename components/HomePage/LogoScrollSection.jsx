import acme from '/public/assets/scroll-logos/logo-acme.png'
import apex from '/public/assets/scroll-logos/logo-apex.png'
import echo from '/public/assets/scroll-logos/logo-echo.png'
import pulse from '/public/assets/scroll-logos/logo-pulse.png'
import quantum from '/public/assets/scroll-logos/logo-quantum.png'
import celestial from '/public/assets/scroll-logos/logo-celestial.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

const LogoScrollSection = () => {
  return (
    <section className='pt-2 pb-[5rem] md:pb-[5rem] '>
    <div className='flex justify-center '>
        <div className="flex flex-col md:flex-row justify-start gap-5">
            <div className="">
                <h2 className='flex bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text font-semibold text-[17px]'>
                    Trusted By These Innovative Companies
                </h2>
            </div>
            <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <motion.div 
                    initial= {{ translateX: '-50%' }}
                    animate= {{ translateX: '0' }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear"
                    }}
                className="text-[0.9rem] items-center flex flex-none gap-5 -translate-x-1/2 pr-7 md:gap-7 md:pr-7">
                    {[
                        acme,
                        apex,
                        echo,
                        pulse,
                        quantum,
                        celestial,
                        acme,
                        apex,
                        echo,
                        pulse,
                        quantum,
                        celestial,
                    ].map((logo, index) => (
                        <Image src={logo} key={index} className='h-5 w-auto' alt="logos" />
                    )) }
                </motion.div>
            </div>
        </div>
    </div>

    <div className='mt-10'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, nam? Reiciendis maxime dolor recusandae fugit est tempore facilis accusamus veritatis vel a.</p>
    </div>

    <div className='flex gap-[20px] md:gap-[70px] justify-start pt-[2rem] '>
        <div className="">
            <h1 className='bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text text-[23px] md:text-[27px] flex justify-center'>400+</h1>
            <span className='text-[14px] md:text-[18px] bg-gradient-to-r from-zinc-50/95 to-zinc-50 text-transparent bg-clip-text flex justify-start'>Houses sold</span>
        </div>
        <div className="">
            <h1 className='bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text text-[23px] md:text-[27px] flex justify-center'>200+</h1>
            <span className='text-[14px] md:text-[18px] bg-gradient-to-r from-zinc-50/95 to-zinc-50 text-transparent bg-clip-text flex justify-start'>Happy Clients</span>
        </div>
        <div className="">
            <h1 className='bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text text-[23px] md:text-[27px] flex justify-center'>170+</h1>
            <span className='text-[14px] md:text-[18px] bg-gradient-to-r from-zinc-50/95 to-zinc-50 text-transparent bg-clip-text flex justify-start'>Worldwide</span>
        </div>
        <div className="hidden">
            <h1 className='bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text text-[23px] md:text-[27px] flex justify-start'>400+</h1>
            <span className='text-[14px] md:text-[18px] bg-gradient-to-r from-zinc-50/95 to-zinc-50 text-transparent bg-clip-text flex justify-start'>Properties sold</span>
        </div>
        
        
    </div>
    </section>
  )
}

export default LogoScrollSection