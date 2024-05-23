import React from 'react'
import DM_Sans from "next/font/google"

interface ContentProps {
  text : string
  content : string
}

const Content: React.FC<ContentProps> = ({text , content}) => {
  return (
    <div className='lg:w-[40%]  p-8'>
        <p className='font-[700] text-[48px] text-[#00164A] '>{text}</p>
        <p className='text-[16px] font-[400]'>{content}</p>
        <button type='button' className='bg-[#3772FF] py-[16px] px-[24px] text-white mt-[32px]'>Download App</button>
    </div>
  )
}

export default Content