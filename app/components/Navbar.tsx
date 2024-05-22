import React from 'react'
import Image from 'next/image'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='flex items-center  lg:gap-[368px] gap-[150px]'>
      <div className='flex gap-[40px] pt-[40px] items-center justify-center'>
        <div className=' lg:pl-[116px] pl-[16px] '>
            <Image  src='/assets/credpal-icon.svg' width={139} height={32} alt='credpal icon'/>
        </div>
        <div className=' hidden lg:flex gap-[40px]  '>
        <div className='text-[14px] font-[500] text-white'>products</div>
        <div className='text-[14px] font-[500] text-white'>Business</div>
        <div className='text-[14px] font-[500] text-white'>What we do</div>
        </div>
        

      </div>

      <div className='flex items-center justify-center gap-[24px] mt-[38px]'>
        <div className='text-white font-[500]'>FAQ</div>
        <div className='flex items-center justify-center'>
         <Image src='/assets/NG.svg' width={24} height={24} alt='country-flag' />
          <RiArrowDropDownLine style={{
            width:'24px',
            height:'24px',
            color:'white'
          }}/>
        </div>
        <div className='hidden lg:flex '>
        <button type='button' className='bg-white p-[16px] rounded-[90px]'>Download the Credpal app</button>
        </div>
       
        
      </div>
    </div>
  )
}

export default Navbar