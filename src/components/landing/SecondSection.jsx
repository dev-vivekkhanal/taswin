import React from "react";
import rice from "../../assets/landing/rice_icon.svg";
import wheat from "../../assets/landing/wheat_group.svg";
import fruits from "../../assets/landing/fruits_group.svg";
import oil from "../../assets/landing/oil_group.svg";

const SecondSection = () => {
  return (
    <section className="py-32">
      <div className="w-[80%] mx-auto space-y-10">
        <img src={rice} alt="rice icon" />
        <div className="flex justify-center  gap-32">
          <h1 className="font-bold text-4xl flex-1">
            To forget how to dig the earth and to tend the soil is to forget
            ourselves
          </h1>

          <p className="flex-1">
            SPIC GYPSUM is a by-product from SPIC's phosphoric acid
            manufacturing plant. It's in White crystalline powder and contains
            23% Calcium and 18% Sulphur. It is an ideal fertilizer for supplying
            Calcium and Sulphur and the best soil amendment for the reclamation
            of alkaline soil.
          </p>
        </div>

        <div className="flex justify-center  gap-32">
          <p className="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            adipisci odio, recusandae quod maiores eos? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ratione, amet.
          </p>
          <div className="flex-1 flex gap-5 justify-center items-center">
            <img src={wheat} alt="wheat" className="flex-1" />
            <img src={fruits} alt="fruits" className="flex-1" />
            <img src={oil} alt="oil" className="flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
