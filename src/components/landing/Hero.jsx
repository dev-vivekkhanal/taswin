import React from "react";
import Header from "../header/Header";
import shape from "../../assets/landing/shape.svg";
import PrimaryCarousal from "./PrimaryCarousal";
import bg from "../../assets/landing/hero_background.webp";
import image_one from "../../assets/landing/carousal/imageOne.webp";
import image_two from "../../assets/landing/carousal/imageTwo.webp";
import image_three from "../../assets/landing/carousal/imageThree.webp";
import image_four from "../../assets/landing/carousal/imageFour.webp";
import { HashLink, NavHashLink } from 'react-router-hash-link'
import { useNavigate } from "react-router";

const Hero = () => {

  const slides = [
    {
      id: 0,
      image: image_four,
    },
    {
      id: 1,
      image: image_two,
    },
    {
      id: 2,
      image: image_three,
    },
  ];

  const navigate = useNavigate();

  const handleContactButtonClick = () => {
    navigate('/about?scrollToForm=true'); // Navigate to the "about" page with the query parameter
  };

  return (
    <section
      // style={{ backgroundImage: `url(${bg})` }}
      className={`h-screen relative w-full`}
    >
      <Header textColor={`primary`} />
      <PrimaryCarousal carousalData={slides} />
      <div className=" absolute inset-0 flex items-center w-[80%] mx-auto">
        <div className="  max-w-xl text-white space-y-8">
          <h1 className="font-extrabold text-3xl md:text-6xl leading-snug">
            Globally Yours, Organically Ours
          </h1>
          <p className="opacity-80 text-sm md:text-base pb-8">
            Our commitment to excellence is globally yours, and our organic products are organically ours. Join us in a journey of taste, health, and sustainability.
          </p>
          <HashLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to={`/about#contact`}>
            <button className="bg-white px-4 py-2 md:px-8 md:py-4 text-sm font-bold text-primary transition-all active:scale-95" >
              Get Started
            </button>
          </HashLink>
        </div>
      </div>

      {/* shape */}
      <img src={shape} alt="shape" className="absolute bottom-0 w-full translate-y-[.5px]" />
    </section>
  );
};

export default Hero;
