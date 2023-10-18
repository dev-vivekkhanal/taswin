import React from 'react'
import Section2 from '../components/blogs/Section2'
import Footer from '../components/footer/Footer'
import HeroComponent from '../components/global-components/HeroComponent'

const BlogPage = () => {

  const heroData = {
    title: 'Blogs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nihil error ad doloribus eveniet reiciendis inventore dolores quia, maiores soluta.',
    imgPath: 'blogs/blog_hero.png'
  };

  return (
    <div>
      <HeroComponent pageTitle={heroData?.title} pageDescription={heroData?.description} imagePath={heroData?.imgPath} linkColor={`white`} />
      <Section2 />
      <Footer />
    </div>
  )
}

export default BlogPage