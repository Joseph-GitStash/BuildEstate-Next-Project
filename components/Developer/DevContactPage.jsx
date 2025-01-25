'use client'
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle } from "lucide-react";

const DevContactPage = () => {
  const [state, handleSubmit] = useForm("xdkaozjb");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [showIcon, setShowIcon] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  useEffect(() => {
    if(state.succeeded){
      setShowIcon(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [state.succeeded])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData)
  }


  return (
        <div className="lg:h-[70vh] gap-8 lg:pl-20 justify-center flex flex-col lg:flex-row">
          <form onSubmit={handleFormSubmit} className="gap-8 flex flex-col">

            <span className='bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold text-[17px]'>What can I do for you ?</span>
            <textarea 
              rows={5} 
              id="message" 
              name='message' 
              value={formData.message}
              placeholder=""
              onChange={handleChange}
              required
              className='bg-transparent border-b-2 border-b-white/45 outline-none resize-none' 
            />
            <ValidationError 
                prefix="Message" 
                field="message" 
                errors={state.errors} 
            />

            <span className='bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold text-[17px]'>Whats your name?</span>
            <input 
              type="text" 
              id="name" 
              name='name' 
              value={formData.name}
              placeholder=""
              onChange={handleChange}
              required
              className='dev-form-input' 
            />

            <span className='bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-white bg-clip-text font-semibold text-[17px]'>Whats your email address</span>
            <input 
              type="text" 
              id="email" 
              name='email' 
              value={formData.email}
              placeholder=""
              onChange={handleChange}
              required
              className='dev-form-input' 
            />
            <ValidationError 
                prefix="Email" 
                field="email" 
                errors={state.errors} 
            />
            
            <button type="submit" disabled={state.submitting} className='text-white/45 ring-1 transition-all ring-white/45 rounded-lg py-[7px] hover:text-white hover:ring-white mt-[2rem] flex text-center items-center justify-center border-none w-[100%]'>
              {
                state.submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <CheckCircle className={`absolute transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-100": " opacity-0" }`} />
                    <span className={`transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-0" : "opacity-100"}`}>Send Message</span>
                  </>
                )
              }
            </button>
          </form>
        </div>
  )
}

export default DevContactPage