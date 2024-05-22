import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='bg-[#006DF7] h-[756px] '>
        <Navbar/>
        <div className='grid grid-cols-2'>
          <div className=''>
            <p className='text-white font-bold   text-[68px] text-start'>One App, all your Financial Needs</p>
            <p className='text-white  font-[400]  text-[19px] text-start'>One App, all your Financial Needs</p>
          </div>

          <div className=''>
            <p className='text-white font-bold font-poppins  text-[68px] text-start'>One App, all your Financial Needs</p>
            <p className='text-white font-poppins font-[400]  text-[19px] text-start'>One App, all your Financial Needs</p>
          </div>

        </div>
    </div>
  )
}

export default Hero