import React, { useState } from 'react'
import img from '../../assets/about/section2_img.webp'

const Section2 = () => {

    const section_data = [
        {
            id: 0,
            title: 'Who are we ?',
            content: `We are a dedicated and passionate team with a common goal: to lead the way on the global stage in the field of food trading. Our unwavering belief lies in India's celebrated culinary heritage, rich with aromatic spices, as a driving force for our nation's advancement.`,
        },
        {
            id: 1,
            title: 'What we do ?',
            content: `Our primary dedication is to the export of Indian spices and an enticing array of culinary treasures. Within our ranks, you will find perceptive analysts and researchers equipped with a constantly evolving wealth of insights from the global food market, ready to support and enhance your culinary pursuits.`,
        },
    ];

    const [dataTabIndex, setDataTabIndex] = useState(0);

    return (
        <section className='py-32'>
            <div className='w-full px-[1rem] md:px-[2rem] xl:px-[10rem] flex flex-col lg:flex-row gap-24 lg:gap-10'>
                <div className='lg:w-[50%] flex flex-col justify-center px-4'>
                    <h1 className='font-[700] text-[40px] w-[90%] xl:w-[50%] pb-10'>We’re Best Agriculture & Organic Firms</h1>
                    <div className=' border-l-[6px] border-l-primary px-5 py-2'>
                        <p className='text-sm'>Tashwin Trading Private Limited is dedicated to redefining the culinary experience. With a rich heritage in the food industry, we proudly stand as a beacon of excellence, exporting a tantalizing array of Indian spices, pulses, grains, fruits, and vegetables, etc  among other gastronomic treasures to destinations worldwide. Our extensive network of global partnerships has firmly established us as the quintessential choice for food exports from the heart of India.</p>
                    </div>
                    <div className='w-full py-8'>
                        <div className='w-full bg-secondary py-10 sm:py-8 border border-tertiary grid grid-cols-1 sm:grid-cols-2 gap-y-14 sm:gap-y-8 md:gap-y-0 md:flex justify-evenly'>
                            {
                                section_data?.map((data, i) => (
                                    <React.Fragment key={data?.id}>
                                        <div className='flex items-center'>
                                            <div className='w-full flex flex-col items-center cursor-pointer group transition-all duration-300 ease-out'>
                                                <p className={`text-[14px] hover:text-[16px] text-primary hover:font-[700] ${dataTabIndex == i ? 'text-[16px] font-[700]' : ''}`} onClick={() => setDataTabIndex(i)}>{data?.title}</p>
                                                <div className={`h-[2px] min-w-0 group-hover:min-w-[94%] bg-primary`}></div>
                                            </div>
                                        </div>
                                        {
                                            data?.id === 1 ?
                                                null
                                                :
                                                <div className='hidden md:block w-[1px] h-5 bg-[#999999]'></div>
                                        }
                                        {
                                            data?.id === 1 ?
                                                null
                                                :
                                                <div className='sm:hidden w-[10%] h-[1px] mx-auto bg-[#999999]'></div>
                                        }
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full'>
                        <span className='text-sm'>
                            {section_data[dataTabIndex]?.content}
                        </span>
                    </div>
                </div>
                <div className='lg:w-[50%] flex justify-center lg:justify-end items-center'>
                    <img src={img} className='w-full max-w-[650px]' alt="" />
                </div>
            </div>
        </section>
    )
}

export default Section2