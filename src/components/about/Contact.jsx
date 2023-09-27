import React from 'react'
import img from '../../assets/about/contact_img.png'

const Contact = () => {
  return (
    <div className="flex justify-end bg-cover bg-center py-0 pb-10 md:pb-0 md:py-24 relative mb-24">
      <img src={img} className='w-[90%] hidden md:block' alt="" />
      <div className='hidden md:block max-w-[700px] rounded-[20px] py-7 bg-[#f5f5f5d3] shadow-lg px-10 md:translate-y-[11rem] absolute left-[20%] z-50'>
        <div className='w-full flex flex-col items-center'>
          <h1 className='font-[700] text-[22px] pb-3'>Contact Us</h1>
          <p className='text-[12px] text-[#67748E] text-center px-3'>For further questions, including partnership opportunities, please email hello@creative-
            tim.com or contact using our contact form.</p>
          <div className='w-full pt-8'>
            <div className='w-full flex gap-8'>
              <div className='w-full'>
                <label className='text-[12px] font-[700] pb-2'>Name</label>
                <input type="text" className='outline-none w-full px-3 text-[13px] py-2 rounded-[5px]' placeholder='Name' />
              </div>
              <div className='w-full'>
                <label className='text-[12px] font-[700] pb-2'>Email</label>
                <input type="text" className='outline-none w-full px-3 text-[13px] py-2 rounded-[5px]' placeholder='hello@creative-tim.com' />
              </div>
            </div>
            <div className='w-full pt-10 pb-3'>
                <label className='text-[12px] font-[700] pb-2'>How can we help you?</label>
                <textarea type="text" rows={7} className='w-full outline-none px-3 text-[13px] py-2 rounded-[5px]' placeholder='hello@creative-tim.com' />
              </div>
          </div>
          <button className='text-[13px] text-white flex justify-center items-center -translate-x-[2px] px-8 py-2 bg-[#07260E] rounded-[5px]'>Join</button>
        </div>
      </div>
      <div className='block md:hidden py-7 bg-[#f5f5f5d3] shadow-lg px-10 md:translate-y-[11rem] left-[20%] z-50'>
        <div className='w-full flex flex-col items-center'>
          <h1 className='font-[700] text-[22px] pb-3'>Contact Us</h1>
          <p className='text-[12px] text-[#67748E] text-center px-3'>For further questions, including partnership opportunities, please email hello@creative-
            tim.com or contact using our contact form.</p>
          <div className='w-full pt-8'>
            <div className='w-full flex flex-col gap-8'>
              <div className='w-full'>
                <label className='text-[12px] font-[700] pb-2'>Name</label>
                <input type="text" className='outline-none w-full px-3 text-[13px] py-2 rounded-[5px]' placeholder='Name' />
              </div>
              <div className='w-full'>
                <label className='text-[12px] font-[700] pb-2'>Email</label>
                <input type="text" className='outline-none w-full px-3 text-[13px] py-2 rounded-[5px]' placeholder='hello@creative-tim.com' />
              </div>
            </div>
            <div className='w-full pt-10 pb-3'>
                <label className='text-[12px] font-[700] pb-2'>How can we help you?</label>
                <textarea type="text" rows={7} className='w-full outline-none px-3 text-[13px] py-2 rounded-[5px]' placeholder='hello@creative-tim.com' />
              </div>
          </div>
          <button className='text-[13px] text-white flex justify-center items-center -translate-x-[2px] px-8 py-2 bg-[#07260E] rounded-[5px]'>Join</button>
        </div>
      </div>
    </div>
  )
}

export default Contact