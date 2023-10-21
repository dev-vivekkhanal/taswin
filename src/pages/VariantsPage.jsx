import React, { useEffect, useState } from "react";
import HeroComponent from "../components/global-components/HeroComponent";
import { useParams } from "react-router";
import ProductCard from "../components/landing/ProductCard";
import Footer from "../components/footer/Footer";
import { allProducts } from "../mock/products/allProducts";
import no_img from "../assets/global/no_image.png";
import { Link } from "react-router-dom";
import cover from "../assets/gallery/gallery_hero.png";

const VariantsPage = () => {
  const params = useParams();

  const [variantsData, setVariantsData] = useState([]);

  const [activeVariant, setActiveVariant] = useState(0);

  const heroData = {
    title: "Rice Variants",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nihil error ad doloribus eveniet reiciendis inventore dolores quia, maiores soluta.",
    imgPath: cover,
    linkColor: "white",
  };

  const variantTitles = ['Raw Rice', 'Steam Rice', 'Golden Sella Rice', 'White Sella Rice'];

  useEffect(() => {
    allProducts?.map((data) => {
      if (data?.category_id == params?.categoryId) {
        data?.products?.map((product) => {
          if (product?.product_id == params?.productId) {
            console.log(product);
            setVariantsData(product);
          }
        });
      }
    });
  }, []);

  return (
    <div>
      <HeroComponent
        pageTitle={`${variantsData?.product_name} Variants`}
        pageDescription={heroData?.description}
        imagePath={heroData?.imgPath}
        linkColor={heroData?.linkColor}
      />
      <div className="w-full px-10 md:px-24 py-32">
        <div className="w-full max-w-[1100px] flex flex-col-reverse md:flex-row mx-auto justify-between items-center md:items-start gap-10 md:gap-0">
          <div className="max-w-[400px] relative">
            {variantsData?.product_image?.length ? (
              <img
                src={variantsData?.product_image[0]}
                className="w-full"
                alt=""
              />
            ) : (
              <img
                src={no_img}
                className="w-full rounded-[21px] shadow-md"
                alt=""
              />
            )}
            <div className="absolute w-fit rounded-full px-4 py-2 bottom-[5px] right-[5px] bg-secondary text-primary text-sm font-[700]">
              4 Variants
            </div>
          </div>
          <div className="w-full max-w-[700px]">
            <div className="flex flex-col items-center">
              <h1 className="text-center text-[20px] font-bold leading-none">
                {variantsData?.product_name}
              </h1>
              <div
                className={`h-1 w-full bg-tertiary my-6 max-w-[300px]`}
              ></div>
              <p className="text-[12px] text-center px-10">
                {variantsData?.value_desc}
              </p>
            </div>
          </div>
        </div>
        <div className="h-1 block md:hidden w-full bg-black max-w-[300px] mx-auto my-12"></div>
        <div className=" w-full max-w-[400px] md:max-w-[1100px] mx-auto grid grid-cols-2 justify-items-center md:flex justify-center mt-[130px] md:px-8 gap-3 md:gap-8">
          {
            variantTitles?.map((data, i) => (
              <div onClick={() => setActiveVariant(i)} className={`rounded-[4px] w-fit px-2 md:px-4 flex justify-center items-center max-w-[200px] border py-1 md:py-2 ${activeVariant == i ? 'bg-primary text-white font-[600]' : 'shadow-md font-[700] text-primary border-secondary active:scale-95 transition-all duration-200 ease-out hover:bg-secondary'} cursor-pointer`}>
                <h1 className="text-center text-[15px] leading-none">
                  {data}
                </h1>
              </div>
            ))
          }
        </div>
        <div className="w-full pt-20 gap-4 sm:px-[80px] lg:px-20 xl:px-[200px]">
          {variantsData?.variants?.map((data, i) => {
            if (i == activeVariant) {
              return (
                <div className="w-full flex flex-col sm:flex-row sm:gap-7 items-center cursor-pointer justify-center">
                  <div className={`w-full max-w-[200px] transition-all duration-300 ease-out relative rounded-[21px] shadow-md`}>
                    {
                      data?.v_image ?
                        <div className='w-full relative'>
                          <img
                            src={data?.v_image}
                            className={`w-full rounded-[21px] transition-all duration-300 ease-out`}
                            alt=""
                          />
                        </div>
                        :
                        <img src={no_img} className="w-full rounded-[21px]" alt="" />
                    }
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="px-2 pt-5 text-primary text-[15px] font-bold min-w-[100%] h-[2px] leading-none">{data?.v_title}</h1>
                    <div className={`w-full overflow-hidden transition-all duration-300 ease-out sm:max-w-[400px]`}>
                      <p className='text-[12px] px-2 py-3 mt-2'>{data?.variant_desc}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="w-full pt-20">
        <h1 className="text-center text-[20px] font-bold leading-none">
          Other Rice
        </h1>
      </div>
      <div className="w-full">
        {allProducts?.map((data) => {
          if (data.category_name === "RICE") {
            return (
              <div
                key={data?.category_id}
                className="w-full px-[4rem] md:px-[7rem] lg:px-[10rem] xl:px-[15rem] py-[5rem]"
              >
                <div className="flex flex-col items-center md:grid grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-16 justify-items-center">
                  {data?.products?.map((s_data) => {
                    if (s_data?.product_id !== params?.productId) {
                      return (
                        <Link
                          key={s_data?.id}
                          to={
                            s_data?.variants
                              ? `/categories/${params?.categoryId}/variants/${params?.productId}`
                              : ""
                          }
                          className=""
                        >
                          <ProductCard
                            title={s_data?.product_name}
                            image={s_data?.product_image[0]}
                            image2={s_data?.product_image[1]}
                            variants={s_data?.variants ? true : false}
                          />
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default VariantsPage;
