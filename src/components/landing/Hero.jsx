import React from "react";
import Header from "../header/Header";
import bg from "../../assets/landing/hero_background.png";
import shape from "../../assets/landing/shape.svg";

const Hero = () => {
  return (
    <section
      // style={{ backgroundImage: `url(${bg})` }}
      className={`min-h-screen bg-cover bg-right md:bg-top relative w-full  bg-[url('/src/assets/landing/mobile_hero.png')] sm:bg-[url('/src/assets/landing/hero_background.png')] `}
    >
      <Header />

      <div className=" absolute inset-0 flex items-center w-[80%] mx-auto">
        <div className="  max-w-xl text-white space-y-8">
          <h1 className="font-extrabold text-3xl md:text-6xl leading-snug">
            Better Devices for Better Life
          </h1>
          <p className="opacity-80 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Ultricies pellentesque
            ridiculus nisi non laoreet nunc porta interdum nunc. Nunc nunc
            adipiscing molestie sit massa ornare pretium neque.
          </p>
          <button className="bg-white px-4 py-2 md:px-8 md:py-4 text-sm font-bold text-[#07260E] transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </div>

      {/* shape */}
      <img src={shape} alt="shape" className="absolute bottom-0 w-full" />
    </section>
  );
};

export default Hero;
