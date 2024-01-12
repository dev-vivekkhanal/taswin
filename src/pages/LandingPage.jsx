import React from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/landing/Hero";
import Section2 from "../components/landing/Section2";
import Section3 from "../components/landing/Section3";
import Section4 from "../components/landing/Section4";
import Section5 from "../components/landing/Section5";
import Section6 from "../components/landing/Section6";
import Section7 from "../components/landing/Section7";

const LandingPage = () => {
  return (
    <div className="relative">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
};

export default LandingPage;
