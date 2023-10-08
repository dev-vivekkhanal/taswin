import React from "react";
import Header from "../header/Header";
import shape from "../../assets/landing/shape.svg";
import PrimaryCarousal from "./PrimaryCarousal";
import bg from "../../assets/landing/hero_background.png";
import image_one from "../../assets/landing/carousal/imageOne.png";
import image_two from "../../assets/landing/carousal/imageTwo.png";
import image_three from "../../assets/landing/carousal/imageThree.png";
import { HashLink, NavHashLink } from 'react-router-hash-link'
import { useNavigate } from "react-router";

const Hero = () => {

  const slides = [
    {
      id: 0,
      image: image_one,
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
      className={`h-screen relative w-full bg-green-200`}
    >
      <Header />
      <PrimaryCarousal carousalData={slides} />
      <div className=" absolute inset-0 flex items-center w-[80%] mx-auto">
        <div className="  max-w-xl text-white space-y-8">
          <h1 className="font-extrabold text-3xl md:text-6xl leading-snug">
            Better Devices for Better Life
          </h1>
          <p className="opacity-80 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Ultricies pellentesque
            ridiculus nisi non laoreet nunc porta interdum nunc. Nunc nunc
            adipiscing molestie sit massa ornare pretium.
          </p>
          <HashLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to={`/about#contact`}>
            <button className="bg-white px-4 py-2 md:px-8 md:py-4 text-sm font-bold text-[#07260E] transition-all active:scale-95" >
              Get Started
            </button>
          </HashLink>
        </div>
      </div>

      {/* shape */}
      <img src={shape} alt="shape" className="absolute bottom-0 w-full" />
    </section>
  );
};

export default Hero;
