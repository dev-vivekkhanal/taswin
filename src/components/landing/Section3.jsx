import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { allProducts } from "../../mock/products/allProducts";

const Section3 = () => {
  const [activeTab, setActiveTab] = useState("ALL PRODUCTS");

  return (
    <section className="py-10 md:py-32">
      <div className="w-full">
        <div className="flex flex-wrap justify-center gap-5 w-full px-4 md:px-0 lg:w-[50%] mx-auto">
          {allProducts?.map((data, index) => {
            return (
              <button
                key={index}
                className={` px-6 py-2 md:py-3 bg-[#DCE9A7] font-bold min-w-[6rem] md:min-w-[8rem] ${data.category_name === activeTab ? "" : "opacity-50"
                  } `}
                onClick={() => setActiveTab(data.category_name)}
              >
                {data.category_name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-full relative">
        <div className="w-full z-[110] relative">
          {
            allProducts?.map((data) => {
              if (data.category_name === activeTab) {
                return (
                  <div key={data?.category_id} className="w-full px-[4rem] md:px-[7rem] lg:px-[10rem] xl:px-[15rem] py-[5rem]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-16 justify-items-center">
                      {
                        data?.products?.map((s_data) => (
                          <ProductCard key={s_data?.id} title={s_data?.product_name} image={s_data?.product_image} variants={data?.category_name == 'RICE' ? true : false} description={s_data?.value_desc} />
                        ))
                      }
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
        <div className="w-full flex justify-center items-center">
          <Link to={`/categories`} >
            <button className="px-6 py-2  bg-[#DCE9A7] font-bold min-w-[6rem] md:min-w-[8rem] active:scale-95 transition-all duration-200 ease-out">VIEW ALL</button>
          </Link>
        </div>
        {/* <div className="absolute w-full flex items- inset-0 overflow-hidden z-[100]">
          <div className="w-full max-w-[95vw] flex items-center -tanslate-y-[200px] justify-between ">
            <div className="w-full max-w-[1000px] -translate-x-[500px]">
              <img src={food} alt="" className=" animation-spin" />
            </div>
            <div className="w-full max-w-[1000px] translate-x-[500px]">
              <img src={food} alt="" className=" animation-spin" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Section3;
