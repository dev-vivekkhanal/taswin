import React from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/landing/Hero";
import Section2 from "../components/landing/Section2";
import Section3 from "../components/landing/Section3";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default LandingPage;
