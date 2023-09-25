import React from 'react'
import './contact.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-white flex justify-center items-center p-3" >
        
        <div className="max-w-[800px] mx-auto mt-0 shadow-2xl">
            <div className="relative flex my-[30px] ">
                <div className="flex-1 bg-white px-3  rounded-l-lg">
                    <h2 className='text-center text-[30px] font-semibold text-[#800F2F]  mb-5'>Contact Us</h2>
                    <form action="#" method="post">
                        <input type="text" name="name" placeholder="Enter Your Name" className='bg-slate-50 py-[14px] px-[20px] w-full h-[60px] rounded-full hover:border hover:border-[#800F2F] mb-3'/>
                      
                        <input type="email" name="name" placeholder="Enter Your Email" className='bg-slate-50 py-[14px] px-[20px] w-full h-[60px] rounded-full hover:border hover:border-[#800F2F] mb-3'/>
                        <textarea name="message" placeholder="Your Message" className='rounded-xl outline-none mb-[15px] text-[16px] text-gray-400 py-[14px] px-[20px] w-full inline-block box-border border-none bg-slate-50 transition duration-300 ease-in-out h-[160px] hover:border hover:border-[#800F2F]'></textarea>                   
             <button type="submit" className=" ease-linear rounded-full bg-[#800F2F] text-white text-2xl text-center w-full h-[60px] hover:ease-linear hover:bg-white hover:border-2 hover:border-[#800F2F] hover:text-[#800F2F]">Send </button>
                    </form>
                </div>
                <div className="flex-1 p-10 bg-cover bg-[#f0f4f8] bg-right bg-no-repeat rounded-r-lg items-center grid md:hidden">
                    <img src="/images/contact.png" alt="" className='max-w-full'/>
                </div>
            </div>
        </div>
    </div> 
    <Footer/>
    </>
    
  )
}

export default page