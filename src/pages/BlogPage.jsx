import React from "react";
import Section2 from "../components/blogs/Section2";
import Footer from "../components/footer/Footer";
import HeroComponent from "../components/global-components/HeroComponent";
import cover from "../assets/blogs/blog_hero.png";

const BlogPage = () => {
  const heroData = {
    title: "Blogs",
    description:
      "Curabitur gravida arcu ac tortor dignissim convallis aenean et. Rhoncus mattis rhoncus urna neque viverra.",
    imgPath: cover,
  };

  return (
    <div>
      <HeroComponent
        pageTitle={heroData?.title}
        pageDescription={heroData?.description}
        imagePath={heroData?.imgPath}
        linkColor={`white`}
      />
      <Section2 />
      <Footer />
    </div>
  );
};

export default BlogPage;
