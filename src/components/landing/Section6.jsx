import React from 'react'
import img from '../../assets/landing/section6_img.webp'
import shape from "../../assets/landing/shape.svg";

const Section6 = () => {
  return (
    <div className='w-full relative mb-12 md:mb-0'>
      <div className='w-full absolute top-[-1px]'>
        <img src={shape} className='w-full rotate-180' alt="" />
      </div>
      <img src={img} className='w-full' alt="" />
      <div className='w-full absolute bottom-[-1px]'>
        <img src={shape} className='w-full h-full' alt="" />
      </div>
    </div>
  )
}

export default Section6