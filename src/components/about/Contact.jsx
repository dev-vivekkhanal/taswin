import React from 'react'
import img from '../../assets/about/contact_img.png'
import PrimaryButton from '../global-components/PrimaryButton'

const Contact = () => {
  return (
    <div className="flex justify-end bg-cover bg-center py-0 pb-10 md:pb-0 md:py-24 relative mb-24">
      <img src={img} className='w-[90%] hidden md:block' alt="" />
      <div className='hidden md:block max-w-[700px] rounded-[20px] py-7 glass-morphism shadow-lg px-10 md:translate-y-[11rem] absolute left-[20%] z-50'>
        <div className='w-full flex flex-col items-center'>
          <h1 className='font-[700] text-[22px] pb-3' id='contact'>Contact Us</h1>
          <p className='text-[12px] text-[#67748E] text-center px-3'>For further questions, including partnership opportunities, please email hello@creative-
            tim.com or contact using our contact form.</p>
          <div className='w-full pt-8'>
            <div className='w-full flex gap-8'>
              <div className='w-full'>
                <label className='text-[12px] font-[700] pb-2'>Name</label>
                <input type="text" className='outline-none border border-[#D2D6DA] w-full px-3 text-[13px] py-2 rounded-[5px]' placeholder='Name' />
              </div>
              <div className='w-full'>
                <label className='text-[12px] font-[700] pb-2'>Email</label>
                <input type="text" className='outline-none border border-[#D2D6DA] w-full px-3 text-[13px] py-2 rounded-[5px]' placeholder='hello@creative-tim.com' />
              </div>
            </div>
            <div className='w-full pt-10 pb-3'>
              <label className='text-[12px] font-[700] pb-2'>How can we help you?</label>
              <textarea type="text" rows={7} className='w-full border border-[#D2D6DA] outline-none px-3 text-[13px] py-2 rounded-[5px]' placeholder='hello@creative-tim.com' />
            </div>
          </div>
          <PrimaryButton buttonText={`SEND MESSAGE`} />
        </div>
      </div>
      <div className='block md:hidden py-7 glass-morphism shadow-lg px-10 md:translate-y-[11rem] left-[20%] z-50'>
        <div className='w-full flex flex-col items-center'>
          <h1 className='font-[700] text-[22px] pb-3' id='contact'>Contact Us</h1>
          <p className='text-[12px] text-[#67748E] text-center px-3'>For further questions, including partnership opportunities, please email hello@creative-
            tim.com or contact using our contact form.</p>
          <div className='w-full pt-8'>
            <div className='w-full flex flex-col gap-8'>
              <div className='w-full'>
                <label className='text-[12px] font-[700] pb-2'>Name</label>
                <input type="text" className='outline-none border border-[#D2D6DA] w-full px-3 text-[13px] py-2 rounded-[5px]' placeholder='Name' />
              </div>
              <div className='w-full'>
                <label className='text-[12px] font-[700] pb-2'>Email</label>
                <input type="text" className='outline-none border border-[#D2D6DA] w-full px-3 text-[13px] py-2 rounded-[5px]' placeholder='hello@creative-tim.com' />
              </div>
            </div>
            <div className='w-full pt-10 pb-3'>
              <label className='text-[12px] font-[700] pb-2'>How can we help you?</label>
              <textarea type="text" rows={7} className='w-full border border-[#D2D6DA] outline-none px-3 text-[13px] py-2 rounded-[5px]' placeholder='hello@creative-tim.com' />
            </div>
          </div>
          <PrimaryButton buttonText={`SEND MESSAGE`} />
        </div>
      </div>
    </div>
  )
}

export default Contact