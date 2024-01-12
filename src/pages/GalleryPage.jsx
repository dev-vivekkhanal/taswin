import React from "react";
import HeroComponent from "../components/global-components/HeroComponent";
import square from "../assets/gallery/square.png";
import rectangle from "../assets/gallery/rectangle.png";
import play from "../assets/gallery/playButton.svg";
import Footer from "../components/footer/Footer";
import cover from "../assets/gallery/gallery_hero.webp";
import { galleryData } from "../mock/gallery/galleryData";

const GalleryPage = () => {
  const heroData = {
    title: "Gallery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nihil error ad doloribus eveniet reiciendis inventore dolores quia, maiores soluta.",
    imgPath: cover,
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
      <div className="w-full px-5 sm:px-10 md:px-[80px] lg:px-[100px] xl:px-[200px] py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-5">
          {galleryData?.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex-auto  ${
                  data?.type === "wide" ? "col-span-2 row-span-2" : ""
                } ${
                  index == galleryData?.length - 1 ? "hidden md:block" : ""
                } `}
              >
                <img
                  src={data?.img}
                  alt={"img" + index}
                  className=" h-full object-cover  w-full"
                />
              </div>
            );
          })}
        </div>
        <div className={`w-full relative hidden`}>
          <img src={rectangle} alt={"video"} className="w-full max-h-[500px]" />
          <div className="absolute inset-0 flex justify-center items-center">
            <img src={play} className="w-full max-w-[60px]" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
