import React from "react";
import HeroComponent from '../components/global-components/HeroComponent'
import Section2 from "../components/about/Section2";
import Section3 from "../components/about/Section3";
import Contact from "../components/about/Contact";
import Footer from "../components/footer/Footer";

const AboutPage = () => {

  const heroData = {
    title: 'About Us',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nihil error ad doloribus eveniet reiciendis inventore dolores quia, maiores soluta.',
    imgPath: 'about/about_hero.png'
};

  return (
    <div>
      <HeroComponent pageTitle={heroData?.title} pageDescription={heroData?.description} imagePath={heroData?.imgPath} />
      <Section2 />
      <Section3 />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutPage;
