import React from 'react'
import img from '../../assets/landing/section5_img.png'

const Section5 = () => {

    const section_data = [
        {
            id: 0,
            title: 'Saticfied Clients',
            amount: '200+',
        },
        {
            id: 1,
            title: 'Modern Equiepment',
            amount: '100+',
        },
        {
            id: 2,
            title: 'Expert Team Members',
            amount: '50+',
        },
        {
            id: 3,
            title: 'Tons of Harvests',
            amount: '1200+',
        },
    ];

    return (
        <div className='w-full py-28'>
            <div className='w-full text-center flex flex-col items-center justify-center pb-[6rem]'>
                <h2 className='text-[15px] text-[#108824]'>Statistic</h2>
                <div className='w-full max-w-[600px]'>
                    <h1 className='font-[700] text-[40px]'>Helping People To Live Better Than Before</h1>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='w-full max-w-[1000px]'>
                    <img src={img} className='w-full' alt="" />
                </div>
            </div>
            <div className='w-full text-center flex flex-col items-center justify-center py-[6rem]'>
                <h2 className='text-[15px] text-[#108824]'>Statistic</h2>
                <div className='w-full max-w-[600px]'>
                    <h1 className='font-[700] text-[40px]'>Helping People To Live Better Than Before</h1>
                </div>
            </div>
            <div className='w-full flex justify-center items-center py-0 px-20 sm:px-10 md:px-6'>
                <div className='w-full max-w-[800px] lg:max-w-[1200px] bg-[#EDF4D3] py-16 sm:py-8 rounded-[7px] border border-[#84c27c] grid grid-cols-1 sm:grid-cols-2 gap-y-20 sm:gap-y-8 md:gap-y-0 md:flex justify-evenly'>
                    {
                        section_data?.map((data) => (
                            <React.Fragment key={data?.id}>
                                <div className='flex items-center gap-[2rem] lg:gap-[4rem]'>
                                    <div className='w-full flex flex-col items-center'>
                                        <h1 className='font-[700] text-[28px]'>{data?.amount}</h1>
                                        <p className='text-[14px]'>{data?.title}</p>
                                    </div>
                                    {
                                        data?.title === 'Tons of Harvests' ?
                                            null
                                            :
                                            <div className='hidden md:block w-[1px] h-5 bg-[#999999]'></div>
                                    }
                                </div>
                                {
                                    data?.title === 'Tons of Harvests' ?
                                        null
                                        :
                                        <div className='sm:hidden w-[20%] h-[1px] mx-auto bg-[#999999]'></div>
                                }
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Section5