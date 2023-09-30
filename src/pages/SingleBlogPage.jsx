import React, { useEffect, useState } from 'react'
import HeroComponent from '../components/global-components/HeroComponent'
import { singleBlogData } from '../mock/blogs/blogsData';

const SingleBlogPage = () => {

  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    setBlogData(singleBlogData);
  }, []);

  const heroData = {
    title: blogData?.blogName,
    description: blogData?.blogDesc,
    imgPath: 'blogs/singleBlog/single_blog_hero.png',
    linkColor: 'white'
  };

  return (
    <div>
      <HeroComponent pageTitle={heroData?.title} pageDescription={heroData?.description} imagePath={heroData?.imgPath} linkColor={heroData?.linkColor} />
      <div className='w-full py-32'>
        <div className='w-[90%] md:w-[65%] lg:w-[50%] mx-auto'>
          <div className='w-full mx-auto text-center'>
            <div className='px-5 md:px-24 pb-14'><h1 className='text-[24px] font-[700]'>{blogData?.title1}</h1></div>
            <p className='text-[14px]'>{blogData?.desc1}</p>
          </div>
          <div className='w-full mx-auto text-center mt-16'>
            <div className='px-5 md:px-24 pb-14'><h1 className='text-[24px] font-[700]'>{blogData?.title2}</h1></div>
            <p className='text-[14px]'>{blogData?.desc2}</p>
          </div>
          <div className='w-full mx-auto text-center mt-16'>
            <img src={blogData?.img1} className='w-full' alt="" />
          </div>
          <div className='w-full mx-auto text-center mt-16'>
            <div className='px-5 md:px-24 pb-14'><h1 className='text-[24px] font-[700]'>{blogData?.title3}</h1></div>
            <p className='text-[14px]'>{blogData?.desc3}</p>
          </div>
          <div className='w-full mx-auto text-center mt-16'>
            <img src={blogData?.img2} className='w-full' alt="" />
          </div>
          <div className='w-full mx-auto text-center mt-16'>
            <div className='px-5 md:px-24 pb-14'><h1 className='text-[24px] font-[700]'>{blogData?.title4}</h1></div>
            <p className='text-[14px]'>{blogData?.desc4}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlogPage