import React from 'react'
import bg from '../../assets/landing/section4_bg.png'
import shape from '../../assets/landing/shape.svg'

const Section4 = () => {
  return (
    <div className='h-screen relative'>
      <div className='w-full absolute top-[-1px]'>
        <img src={shape} className='w-full rotate-180' alt="" />
      </div>
      <img src={bg} className='w-full h-full' alt="" />
      <div className='absolute inset-0 flex justify-center items-center'>
        <div className='text-white w-full max-w-[1000px] text-center'>
          <h1 className='font-[700] text-[35px] md:text-[44px]'>To forget how to dig the earth and to tend the soil is to forget ourselves</h1>
          <div className='px-4 md:px-[12rem] pt-5'>
            <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur. Ultricies pellentesque ridiculus nisi non laoreet nunc porta interdum nunc.</p>
          </div>
        </div>
      </div>
      <div className='w-full absolute bottom-[-1px]'>
        <img src={shape} className='w-full' alt="" />
      </div>
    </div>
  )
}

export default Section4
// style={{ backgroundImage: `url(${bg})` }}