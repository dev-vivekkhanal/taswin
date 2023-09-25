import React, { useState } from "react";

const Section3 = () => {
  const [activeTab, setActiveTab] = useState("Rice");
  const section_data = [
    "Rice",
    "Grains",
    "Flours",
    "Poultry Feeds",
    "Spices",
    "Iron Ore",
    "Pulses",
    "Vegetables/Fruits",
    "Sugar",
  ];
  return (
    <section className="py-32">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-wrap justify-center gap-5 w-[80%] mx-auto">
          {section_data?.map((data, index) => {
            return (
              <button
                key={index}
                className={` px-6 py-3 bg-[#DCE9A7] font-bold min-w-[8rem] ${
                  data === activeTab ? "" : "opacity-50"
                } `}
                onClick={() => setActiveTab(data)}
              >
                {data}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section3;
