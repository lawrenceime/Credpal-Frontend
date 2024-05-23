import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-[#006DF7] w-full pb-[70px] '>
        <Navbar/>
        <div className='lg:grid lg:grid-cols-2 flex flex-col mt-[127px] pl-[16px] gap-[25px] '>
          <div className='  lg:pl-[116px]   '>
            <p className='text-white font-bold   text-[68px] text-start'>One App, all your Financial Needs</p>
            <p className='text-white  font-[400]  text-[19px] text-start'>Take control of your finances on the go! Make payments, save, invest, and access credit - all with one easy-to-use app.</p>
          </div>  

          <div className='relative  mt-[50px]'>
            <Image src='/assets/iPhone 12 Pro mockup.svg' width={246} height={482} alt='iphone' className='mx-auto'/>
            <Image src='/assets/card-balance.svg' width={338} height={103} alt='card balance' className='absolute lg:top-[-45px] lg:right-10 top-[-45px] right-[-15px]'/>
            <Image src='/assets/total-earnings.svg' width={338} height={103} alt='total earnings' className='absolute lg:top-[35%] lg:left-20 top-[35%] left-[-30px]'/>
            <Image src='/assets/spotify.svg' width={338} height={103} alt='spotify' className='absolute lg:top-[65%] lg:right-10 top-[65%] right-[-15px]'/>
           
          </div>

        </div>
    </div>
  )
}

export default Hero