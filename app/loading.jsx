import logo from '/public/assets/logo/buildestatelogo.png'
import Image from 'next/image'

const LoadingPage = () => {
  return (
    <section className='layout '>
      <div className='mt-[9rem] h-[420px] items-center flex flex-col justify-center '>
        <Image src={logo} alt="loading..." className='w-[60px] animate-pulse' />
      </div>
    </section>
  )
}

export default LoadingPage