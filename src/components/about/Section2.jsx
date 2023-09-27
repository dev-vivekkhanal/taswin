import React from 'react'
import img from '../../assets/about/section2_img.png'

const Section2 = () => {

    const section_data = [
        {
            id: 0,
            title: 'Our Mission',
        },
        {
            id: 1,
            title: 'Our Vission',
        },
        {
            id: 2,
            title: 'About Farmer',
        },
        {
            id: 3,
            title: 'Awards',
        },
    ];

    return (
        <section className='py-32'>
            <div className='w-full px-[1rem] md:px-[2rem] xl:px-[10rem] flex flex-col lg:flex-row gap-24 lg:gap-10'>
                <div className='lg:w-[50%] flex flex-col justify-center px-4'>
                    <h1 className='font-[700] text-[40px] w-[90%] xl:w-[50%] pb-10'>We’re Best Agriculture & Organic Firms</h1>
                    <div className=' border-l-[6px] border-l-[#108824] px-5 py-2'>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                    <div className='w-full py-8'>
                        <div className='w-full bg-[#EDF4D3] py-10 sm:py-8 border grid grid-cols-1 sm:grid-cols-2 gap-y-14 sm:gap-y-8 md:gap-y-0 md:flex justify-evenly'>
                            {
                                section_data?.map((data) => (
                                    <React.Fragment key={data?.id}>
                                        <div className='flex items-center'>
                                            <div className='w-full flex flex-col items-center'>
                                                <p className='text-[14px]'>{data?.title}</p>
                                            </div>
                                        </div>
                                            {
                                                data?.title === 'Awards' ?
                                                    null
                                                    :
                                                    <div className='hidden md:block w-[1px] h-5 bg-[#999999]'></div>
                                            }
                                        {
                                            data?.title === 'Awards' ?
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
                        <p className='text-sm'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
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