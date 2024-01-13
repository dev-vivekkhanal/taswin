import React from "react";
import food from "../../assets/landing/foodcircle.webp";

const FoodCircle = () => {
  return (
    <div className="absolute w-full inset-0 overflow-hidden z-[10] hidden lg:flex">
      <div className="w-full  flex items-center justify-between overflow-hidden ">
        <div className="w-full max-w-[30%] -translate-x-[60%]">
          <img src={food} alt="" className=" animation-spin" />
        </div>
        <div className="w-full max-w-[30%] translate-x-[60%]">
          <img src={food} alt="" className=" animation-spin" />
        </div>
      </div>
    </div>
  );
};

export default FoodCircle;
