import React, { useEffect, useState } from "react";
import ProductCard from "../landing/ProductCard";
import truck from '../../assets/global/truck.webp'
import { Link } from "react-router-dom";
import { allProducts } from "../../mock/products/allProducts";
import { useRecoilState } from "recoil";
import searchCategoryAtom from "../../recoil/searchCategoryAtom";

const Section2 = () => {
  const [activeTab, setActiveTab] = useState("ALL PRODUCTS");

  const [searchCategory, setSearchCategory] = useRecoilState(searchCategoryAtom);

  useEffect(() => {
    if (searchCategory !== null) {
      setActiveTab(searchCategory);
    }
    return () => {
      setSearchCategory(null);
    };
  }, []);

  return (
    <section className="py-10 md:py-32">
      <div className="w-full" id="products">
        <div className="flex flex-wrap justify-center gap-5 px-4 w-full md:w-[80%] lg:w-[60%] xl:w-[50%]] mx-auto">
          {allProducts?.map((data, index) => {
            return (
              <button
                key={index}
                className={` px-6 py-2 md:py-3 text-primary bg-secondary font-bold min-w-[6rem] lg:text-lg md:min-w-[8rem] ${data.category_name === activeTab ? "" : "opacity-50"
                  } `}
                onClick={() => setActiveTab(data.category_name)}
              >
                {data.category_name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-full" id="products">
        {
          allProducts?.map((data) => {
            if (data.category_name === activeTab && data?.products?.length > 0) {
              return (
                <div key={data?.category_id} className="w-full px-[4rem] md:px-[7rem] xl:px-[15rem] py-[5rem]">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-16 justify-items-center">
                    {
                      data?.products?.map((s_data) => (
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
    </section>
  );
};

export default Section2;
