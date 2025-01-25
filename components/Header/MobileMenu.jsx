'use client'
import { Menu, X } from 'lucide-react';
import { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useDragControls, useMotionValue, useAnimate } from 'framer-motion';
import useMeasure from 'react-use-measure';

const MobileMenu = ({Links}) => {
  const path = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="grid w-[100%]  place-content-center">
      <button>
        <Menu size={20} onClick={() => setIsOpen(true)} className=" text-zinc-50/85 hover:text-[white] transition-colors"/> 
      </button>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        {Links.map((link, index) => (
            <Link key={index} href={link.href} 
               onClick={() => setIsOpen((prev) => !prev)}
               className={` ${path === link.href ? "bg-white/5" : "bg-none"} mb-1 text-sm flex h-9 px-4 items-center justify-center font-medium tracking-wide text-zinc-50/85 hover:text-[white] transition-colors rounded-xl`} >
                   {link.label}
            </Link>
        ))}
      </Drawer>
    </div>
  )
}

const Drawer = ({isOpen, setIsOpen, children}) => {
    const controls = useDragControls();
    const y = useMotionValue(0);
    const [scope, animate] = useAnimate() ;
    const [drawerRef, {height}] = useMeasure()

    const handleClose = async() => {
        animate(scope.current, {
            opacity: [1, 0]
        })

        const yStart = typeof y.get() === "number" ? y.get() : 0

        await animate("#drawer", {
            y: [yStart, height]
        })
        setIsOpen(false)
    }

    return<>
    {isOpen && <motion.div
        className="fixed h-screen w-[100%] inset-0 z-50 bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={scope}
        onClick={handleClose}
        >
            <motion.div
            className="absolute bottom-0 h-[45vh] w-full overflow-hidden rounded-t-3xl bg-black ring-1 ring-zinc-50/10"
            ref= {drawerRef}
            id="drawer"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            style={{ y }}
            transition={{
                ease: "easeInOut",
            }}
            onDragEnd={() => {
                if(y.get() >= 100){
                    handleClose()
                }
            }}
            drag="y"
            dragControls={controls}
            dragListener={false}
            dragConstraints={{
                top: 0,
                bottom: 0,
            }}
            dragElastic={{
                top: 0,
                bottom: 0.5,
            }}
            >
                <div className="absolute left-0 right-0 top-0 z-10 flex justify-center p-4 ">
                    <button 
                    onPointerDown={(e) => {
                        controls.start(e)
                    }}
                    className="h-2 w-14 cursor-grab touch-none bg-neutral-500 rounded-full active:cursor-grabbing">
                    </button>
                </div>
                <div className="relative z-0 h-full p-4 pt-12  ">
                    {children}
                </div>
            </motion.div>    
        </motion.div>}
     </>
  }

export default MobileMenu