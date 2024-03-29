import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({ image, title, desc, id }) => {

    const navigate = useNavigate();

    function getRandomDate() {
        const startDate = new Date('2022-01-01');
        const endDate = new Date();
        const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
        
        const randomDate = new Date(randomTime);
        return randomDate.toDateString();
      }

    return (
        <div className='w-full transition-all duration-200 ease-out' onClick={() => navigate(`/blogs/${id}`)}>
            <div className='w-full mb-2'>
                <img src={image} className='w-full' alt="" />
            </div>
            <p className='py-2 text-[12px] text-[#7FC0E9]'>{getRandomDate()}</p>
            <h1 className='font-[600] text-[25px] leading-[28px] cursor-pointer hover:underline transition-all duration-300 ease-out'>{title}</h1>
            <p className='text-[13px]'>{desc}</p>
        </div>
    )
}

export default BlogCard