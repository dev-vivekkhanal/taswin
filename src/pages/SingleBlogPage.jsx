import React, { useEffect, useState } from "react";
import HeroComponent from "../components/global-components/HeroComponent";
import { blogsData } from "../mock/blogs/blogsData";
import { useParams } from "react-router";
import Footer from "../components/footer/Footer";

const SingleBlogPage = () => {
  const [blogData, setBlogData] = useState({});

  const param = useParams();

  useEffect(() => {
    blogsData?.map((blog) => {
      if (blog.id == param?.id) {
        setBlogData(blog);
      }
    });
  }, []);

  const heroData = {
    title: blogData?.cardTitle,
    description: blogData?.blogDesc,
    imgPath: blogData?.page_cover_img,
    linkColor: "white",
  };

  return (
    <div>
      <HeroComponent
        pageTitle={heroData?.title}
        pageDescription={heroData?.description}
        imagePath={heroData?.imgPath}
        linkColor={heroData?.linkColor}
      />
      <div className="w-full py-32">
        <div className="w-[90%] md:w-[65%] lg:w-[50%] mx-auto">
          {blogData?.contents?.map((content_data, idx) => {
            if (content_data?.type === "h1") {
              return (
                <h1 className="text-[32px] font-[700]  mb-10 text-[#11145A] text-center">
                  {content_data?.data}
                </h1>
              );
            }

            if (content_data?.type === "h2") {
              return (
                <h1 className="text-[24px] font-[700] mb-5 text-[#11145A] text-center">
                  {content_data?.data}
                </h1>
              );
            }
            if (content_data?.type === "p") {
              return <p className="text-[14px] mb-20">{content_data?.data}</p>;
            }

            if (content_data?.type === "img") {
              return (
                <img src={content_data?.data} className="w-full mb-10" alt="" />
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlogPage;
