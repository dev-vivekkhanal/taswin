import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { allProducts } from "../../mock/products/allProducts";
import truck from '../../assets/global/truck.gif'

const Section3 = () => {
  const [activeTab, setActiveTab] = useState("ALL PRODUCTS");

  return (
    <section className="py-10 md:py-32">
      <div className="w-full">
        <div className="flex flex-wrap justify-center gap-5 px-4 md:px-0 w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto">
          {allProducts?.map((data, index) => {
            return (
              <button
                key={index}
                className={` px-6 py-2 md:py-3 bg-secondary font-bold min-w-[6rem] md:min-w-[8rem] lg:text-lg text-primary ${data.category_name === activeTab ? "" : "opacity-50"
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
              if (data.category_name === activeTab && data?.products?.length > 1) {
                return (
                  <div key={data?.category_id} className="w-full px-[4rem] md:px-[7rem] lg:px-[10rem] xl:px-[15rem] py-[5rem]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-16 justify-items-center">
                      {
                        data?.products?.filter((_filterValue, i) => i < 8).map((s_data) => (
                          <Link key={s_data?.id} to={s_data?.variants ? `/categories/${data?.category_id}/variants/${s_data?.product_id}` : ''} className="">
                            <ProductCard title={s_data?.product_name} image={s_data?.product_image?.length ? s_data?.product_image[0]: null} image2={s_data?.product_image?.length ? s_data?.product_image[1]: null} variants={s_data?.variants ? true : false} description={s_data?.value_desc} />
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
        <div className="w-full">
          {
            allProducts?.map((data) => {
              if (data.category_name === activeTab && data?.products?.length < 1) {
                return (
                  <div key={data?.category_id} className="w-full px-[4rem] md:px-[7rem] xl:px-[15rem] py-[5rem]">
                    <div className="w-full h-[380px] flex flex-col gap-3 justify-center items-center">
                      <h1 className="text-[20px]">Products comming soon...</h1>
                      <img src={truck} className="w-[80px]" alt="" />
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
        <div className="w-full flex justify-center items-center">
          <Link to={`/categories`} >
            <button className="px-6 py-2  bg-primary text-white font-bold min-w-[6rem] md:min-w-[8rem] active:scale-95 transition-all duration-200 ease-out">VIEW ALL</button>
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
