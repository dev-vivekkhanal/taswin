import React from 'react'
import blog1 from '../../assets/blogs/blog1.png'
import blog2 from '../../assets/blogs/blog2.png'
import blog3 from '../../assets/blogs/blog3.png'
import blog4 from '../../assets/blogs/blog4.png'
import BlogCard from './BlogCard'
import { blogsData } from '../../mock/blogs/blogsData'

const Section2 = () => {

    return (
        <div className='py-32 px-10 flex justify-center items-center'>
            <div className='w-full md:max-w-[80vw] lg:max-w-[55vw] flex flex-col sm:grid grid-cols-2 gap-x-16 gap-y-16'>
            {
                blogsData?.map((data) => (
                    <BlogCard key={data?.id} id={data?.id} title={data?.cardTitle} image={data?.cardImage} desc={data?.cardDesc} date={data?.date} />
                ))
            }
            </div>
        </div>
    )
}

export default Section2