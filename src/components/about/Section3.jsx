import React from 'react'
import ProductCard from '../landing/ProductCard';
import collab from '../../assets/about/icons/collaboration.svg'
import transparency from '../../assets/about/icons/transparency.svg'
import trust from '../../assets/about/icons/trust.svg'
import integrity from '../../assets/about/icons/integrity.svg'

const Section3 = () => {

    const section_data = [
        {
            value_id: 0,
            // value_title: 'Collaboration',
            // value_text: 'Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.',
            value_icon: collab,
        },
        {
            value_id: 1,
            // value_title: 'Transparency',
            // value_text: 'Transparency, as used in science is operating in such a way that it is easy for others to see what actions are performed.',
            value_icon: transparency,
        },
        {
            value_id: 2,
            // value_title: 'Trust',
            // value_text: 'Trust will help us foster a positive and productive environment that delivers value to our users and customers.',
            value_icon: trust,
        },
        {
            value_id: 3,
            // value_title: 'Integrity',
            // value_text: 'Integrity is the practice of showing a consistent and uncompromising adherence to strong moral and ethical principles.',
            value_icon: integrity,
        },
    ];

  return (
    <div className="bg-[url('/src/assets/about/section3_img.png')] h-screen bg-cover bg-center py-10 md:py-32 px-5 md:px-0">
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-fit text-center mb-5'>
                <h1 className='font-[700] text-5xl'>Our Values</h1>
                <p className='text-[14px] pt-5 text-[#5A7184]'>We strive to redefine the standard of excellence.</p>
            </div>
            <div className='w-full max-w-[700px] grid grid-cols-2 pt-24 gap-8 md:gap-16'>
                {
                    section_data?.map((data) => (
                        <div key={data?.value_id} className='text-center'>
                            <div className='w-full flex justify-center items-center'>
                                <img src={data?.value_icon} className='w-full' alt="" />
                            </div>
                            <h1 className='font-[700] text-[16px] pt-5'>{data?.value_title}</h1>
                            <p className='text-[13px] pt-4'>{data?.value_text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Section3