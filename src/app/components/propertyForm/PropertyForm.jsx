'use client'
import React from 'react'
import './style.css'
import { useState } from 'react'



const PropertyForm = () => {
  const[formType, setFormType] = useState('Buy');
  return (
    <div className='w-screen h-max pt-5 px-12 pb-12 border sm:px-6'>
    <div className="w-full h-full flex flex-col">
            <div className="h-[80px] w-[250px] border  flex justify-center gap-7 items-center rounded-t-2xl md:w-full">

              <button onClick={()=>{setFormType('Buy')}} className={formType === 'Buy' ? 'text-lg w-16 h-10 bg-[#800F2F] text-center text-white rounded-lg' : 'text-lg  w-16 h-10 rounded-lg ease-in-out transition'}>Buy</button>
              <button onClick={()=>{setFormType('Rent')}} className={formType === 'Rent' ? 'text-lg w-16 h-10 bg-[#800F2F] text-center text-white rounded-lg' : 'text-lg  w-16 h-10 rounded-lg ease-in-out transition'} >Rent</button>

            </div>

            <form action="" className="w-full rounded-b-2xl h-max py-6 border shadow-xl flex flex-col">

                <div className='flex justify-center items-center md:flex-col'>


              <div className="h-[100px] w-full flex flex-col justify-start gap-4 items-center  px-3">
                <label for="category" className="">Select Categories:</label>

                <select name="category" id="category" className="h-[40px] w-full outline-none border rounded-sm">

                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="offices">Offices</option>
                  <option value="townhome">Townhome</option>

                </select>
              </div>

              <div className="h-[100px] w-full flex flex-col justify-start gap-4 items-center px-3">
                <label for="category" className="">Min Price:</label>

                <select name="category" id="category" className="h-[40px] w-full outline-none border rounded-sm">

                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="offices">Offices</option>
                  <option value="townhome">Townhome</option>

                </select>
              </div>

              <div className="h-[100px] w-full flex flex-col justify-start gap-4 items-center px-3">
                <label for="category" className="">Max Price:</label>

                <select name="category" id="category" className="h-[40px] w-full outline-none border  rounded-sm">

                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="offices">Offices</option>
                  <option value="townhome">Townhome</option>

                </select>
              </div>

              <div className="h-[100px] w-full flex flex-col justify-start gap-4 items-center px-3">
                <label for="category" className="">Location:</label>

                <select name="category" id="category" className="h-[40px] w-full outline-none border rounded-sm">

                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="offices">Offices</option>
                  <option value="townhome">Townhome</option>

                </select>
              </div>

              

              </div>

              <button type="submit" className="btn w-[180px] ml-3">Search now</button>

            </form>
          </div>
          </div>
  )
}

export default PropertyForm