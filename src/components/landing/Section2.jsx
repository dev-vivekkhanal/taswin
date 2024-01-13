import React from "react";
import rice from "../../assets/landing/rice_icon.svg";
import wheat from "../../assets/landing/wheat_group.svg";
import fruits from "../../assets/landing/fruits_group.svg";
import oil from "../../assets/landing/oil_group.svg";
import FoodCircle from "../global-components/FoodCircle";

const Section2 = () => {
  return (
    <section className="py-32 relative">
      <div className="w-[70%] mx-auto space-y-10 relative z-[100]">
        <img src={rice} alt="rice icon" />
        <div className="flex flex-col md:flex-row justify-center gap-32">
          <h1 className="font-bold text-4xl flex-1 text-primary">
            To forget how to dig the earth and to tend the soil is to forget
            ourselves
          </h1>

          <p className="flex-1">
            Celebrate nature's purity in our organic oasis, where the earth
            thrives naturally, untouched by harmful chemicals. Our nutrient-rich
            produce speaks volumes about our dedication to quality and
            sustainability. Immerse yourself in the richness of our
            chemical-free, nutritious harvests and relish the unparalleled
            flavors of nature's bounty, all while contributing to a healthier,
            greener planet.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center  gap-32">
          <p className="flex-1">
            As a company, we bridge the gap from farmers' fields to your table,
            delivering pure organic goodness.
          </p>
          <div className="flex-1 flex gap-5 justify-center items-center">
            <div className="flex-1 bg-secondary rounded-[7px]">
              <img src={wheat} alt="wheat" className="w-full" />
            </div>

            <div className="flex-1 bg-secondary rounded-[7px]">
              <img src={fruits} alt="fruits" className="w-full" />
            </div>

            <div className="flex-1 bg-secondary rounded-[7px]">
              <img src={oil} alt="oil" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <FoodCircle />
    </section>
  );
};

export default Section2;
