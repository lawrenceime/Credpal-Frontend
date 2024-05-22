import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='bg-[#006DF7] '>
        <Navbar/>
        <div className='lg:grid lg:grid-cols-2 flex flex-col mt-[127px] pl-[16px]'>
          <div className='  lg:pl-[116px]    '>
            <p className='text-white font-bold   text-[68px] text-start'>One App, all your Financial Needs</p>
            <p className='text-white  font-[400]  text-[19px] text-start'>Take control of your finances on the go! Make payments, save, invest, and access credit - all with one easy-to-use app.</p>
          </div>  

          <div className=''>
            <p className='text-white font-bold font-poppins  text-[68px] text-start'>One App, all your Financial Needs</p>
            <p className='text-white font-poppins font-[400]  text-[19px] text-start'>Take control of your finances on the go! Make payments, save, invest, and access credit - all with one easy-to-use app.</p>
          </div>

        </div>
    </div>
  )
}

export default Hero