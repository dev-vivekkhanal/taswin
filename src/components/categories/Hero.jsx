import React from "react";
import Header from "../header/Header";
import bg from "../../assets/landing/hero_background.png";
import shape from "../../assets/landing/shape.svg";

const Hero = () => {
  return (
    <section
      // style={{ backgroundImage: `url(${bg})` }}
      className={`min-h-[70vh] bg-cover md:bg-top relative w-full bg-[url('/src/assets/categories/categories_landing.png')] bg-bottom`}
    >
      <Header />

      <div className=" absolute inset-0 flex items-center pb-24 w-[80%] mx-auto z-[100]">
        <div className="  max-w-xl text-white space-y-8">
          <h1 className="text-md text-black font-[600] mb-8 cursor-pointer"><span className="text-[#57AC49]">Home</span> | About Us</h1>
          <h1 className="font-extrabold text-2xl md:text-6xl leading-snug">
            Categories
          </h1>
          <p className="opacity-80 text-sm md:text-base">
          Curabitur gravida arcu ac tortor dignissim convallis aenean et. Rhoncus mattis rhoncus urna neque viverra.
          </p>
          {/* <button className="bg-white px-4 py-2 md:px-8 md:py-4 text-sm font-bold text-[#07260E] transition-all active:scale-95">
            Get Started
          </button> */}
        </div>
      </div>

      {/* shape */}
      <div className="absolute inset-0 bg-black opacity-30">

      </div>
      <img src={shape} alt="shape" className="absolute bottom-0 w-full translate-y-[1px]" />
    </section>
  );
};

export default Hero;
