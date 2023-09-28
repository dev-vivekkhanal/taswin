import React from 'react'
import blog1 from '../../assets/blogs/blog1.png'
import blog2 from '../../assets/blogs/blog2.png'
import blog3 from '../../assets/blogs/blog3.png'
import blog4 from '../../assets/blogs/blog4.png'
import BlogCard from './BlogCard'

const Section2 = () => {

    const section_data = [
        {
            id: 0,
            image: blog1,
            title: 'Best Multi-Step Skin Care Treatment',
            date: 'June 08, 2021',
            desc: 'Dui nunc mattis enim ut tellus elementum sagittis vitae. Ac orci phasellus egestas tellus rutrum.',
        },
        {
            id: 1,
            image: blog2,
            title: '35 Herbal Cosmetic Ingredients',
            date: 'June 08, 2021',
            desc: 'Ultricies integer quis auctor elit sed vulputate mi sit. Commodo quis imperdiet massa tincidunt nunc.',
        },
        {
            id: 2,
            image: blog3,
            title: 'Best Multi-Step Skin Care Treatment',
            date: 'June 08, 2021',
            desc: 'Ultricies integer quis auctor elit sed vulputate mi sit. Commodo quis imperdiet massa tincidunt nunc.',
        },
        {
            id: 3,
            image: blog4,
            title: 'Morning Beauty Routine: Main Rules',
            date: 'June 08, 2021',
            desc: 'Duis ultricies lacus sed turpis tincidunt. Aliquet porttitor lacus luctus accumsan tortor. Sagittis nisl rhoncus mattis rhoncus urna.',
        },
    ];

    return (
        <div className='py-32 px-10 flex justify-center items-center'>
            <div className='w-full md:max-w-[80vw] lg:max-w-[55vw] flex flex-col sm:grid grid-cols-2 gap-x-16 gap-y-16'>
            {
                section_data?.map((data) => (
                    <BlogCard key={data?.id} title={data?.title} image={data?.image} desc={data?.desc} date={data?.date} />
                ))
            }
            </div>
        </div>
    )
}

export default Section2