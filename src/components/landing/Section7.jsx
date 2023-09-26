import React from 'react'
import img from '../../assets/landing/section7_img.png'
import img_mobile from '../../assets/landing/section7_img_mobile.png'   
import facebook from '../../assets/landing/social/facebook.svg'
import instagram from '../../assets/landing/social/instagram.svg'
import twitter from '../../assets/landing/social/twitter.svg'
import google from '../../assets/landing/social/google.svg'

const Section7 = () => {
    return (
        <div className='w-full pb-32'>
            <div className='w-full hidden md:block'>
                <div className='w-[65%] lg:w-[60%] mx-auto rounded-[30px] py-20 px-2 bg-[#f5f5f5d3] shadow-lg relative p-5 md:translate-y-[11rem] z-50'>
                    <div className='w-full max-w-[420px] ml-8 mr-2 lg:ml-20 xl:ml-32'>
                        <h1 className='font-[700] text-[28px]'>Join our newsletter now!</h1>
                        <p className='text-[14px]'>Register now and get our latest updates and promos.</p>
                        <div className='w-full pt-10'>
                            <div className='w-full flex'>
                                <input type="text" className='w-full px-3 pl-8 text-[14px] py-2 rounded-l-[5px]' placeholder='Enter your email' />
                                <button className='shadow-md transition-all active:scale-95 text-[13px] text-white flex justify-center items-center -translate-x-[2px] px-8 py-2 bg-[#07260E] rounded-[5px]'>Join</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-[65%] mx-auto md:translate-x-12'>
                    <img src={img} className='hidden md:block w-full z-10' alt="" />
                    <img src={img_mobile} className='block md:hidden w-full z-10' alt="" />
                </div>
            </div>
            <div className='block md:hidden'>
                <div className=' md:translate-x-12 relative'>
                    <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='w-[80%] sm:w-[70%] rounded-[30px] py-20 bg-[#f5f5f5d3] shadow-lg p-5 md:translate-y-[11rem] relative z-50'>
                        <div className='w-full max-w-[420px] flex flex-col items-center'>
                            <h1 className='font-[700] text-[28px]'>Join our newsletter now!</h1>
                            <p className='text-[14px]'>Register now and get our latest updates and promos.</p>
                            <div className='w-full pt-10'>
                                <div className='w-full flex'>
                                    <input type="text" className='w-full px-3 pl-4 md:pl-8 text-[14px] py-2 rounded-l-[5px]' placeholder='Enter your email' />
                                    <button className='text-[13px] text-white flex justify-center items-center -translate-x-[2px] px-8 py-2 bg-[#07260E] rounded-[5px]'>Join</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <img src={img_mobile} className='block md:hidden w-full z-10' alt="" />
                </div>
            </div>
            <div className='w-full text-center pt-32 lg:pt-24'>
                <div className='w-[80%] lg:w-[60%] xl:w-[50%] mx-auto flex flex-col items-center gap-8'>
                    <h1 className='text-[28px] font-[700]'>Progress on the farm requires a steady stream of human ingenuity.</h1>
                    <p className='text-[13px]'>This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, biotechnology, crop protection, and data science, allowing us to deliver tailored solutions to farmers faster than ever before. We’re using the resources at our fingertips to discover the science that’s yet to come.</p>
                    <button className='shadow-md transition-all active:scale-95 text-[13px] text-white flex justify-center items-center px-8 mt-16 py-2.5 bg-[#07260E] rounded-[5px]'>ABOUT US</button>
                    <div className='w-full max-w-[400px] pt-10'>
                        <p className='text-[12px]'>Find us on</p>
                        <div className='w-full flex justify-evenly pt-6'>
                            <img src={facebook} className='w-[20px]' alt="" />
                            <img src={twitter} className='w-[20px]' alt="" />
                            <img src={instagram} className='w-[20px]' alt="" />
                            <img src={google} className='w-[20px]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section7