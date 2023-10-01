import React, { useState } from "react";
import rice_1 from '../../assets/landing/products/1121_basmati_rice.png'
import rice_2 from '../../assets/landing/products/pussa_basmati_rice.png'
import rice_3 from '../../assets/landing/products/1509_basmati_rice.png'
import rice_4 from '../../assets/landing/products/sharbati_rice.png'
import rice_5 from '../../assets/landing/products/ir_and_other_rice.png'
import rice_6 from '../../assets/landing/products/sigandha_rice.png'
import ProductCard from "../landing/ProductCard";

const Section2 = () => {
  const [activeTab, setActiveTab] = useState("Rice");

  const section_data = [
    {
      category_id: 0,
      category_name: 'Rice',
      products: [
        {
          product_id: 0,
          product_name: '1121 Basmati Rice',
          product_image: rice_1,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 1,
          product_name: 'Pussa Basmati Rice',
          product_image: rice_2,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 2,
          product_name: '1509 Basmati Rice',
          product_image: rice_3,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 3,
          product_name: 'Sharbati Rice',
          product_image: rice_4,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 4,
          product_name: 'IR and Other Types',
          product_image: rice_5,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 5,
          product_name: 'Sigandha Rices',
          product_image: rice_6,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
      ],
    },
    {
      category_id: 1,
      category_name: 'Grains',
      products: [
        {
          product_id: 3,
          product_name: 'Sharbati Rice',
          product_image: rice_4,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 2,
          product_name: '1509 Basmati Rice',
          product_image: rice_3,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 4,
          product_name: 'IR and Other Types',
          product_image: rice_5,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 1,
          product_name: 'Pussa Basmati Rice',
          product_image: rice_2,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 0,
          product_name: '1121 Basmati Rice',
          product_image: rice_1,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 5,
          product_name: 'Sigandha Rices',
          product_image: rice_6,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
      ],
    },
    {
      category_id: 2,
      category_name: 'Flours',
      products: [
        {
          product_id: 0,
          product_name: '1121 Basmati Rice',
          product_image: rice_1,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 4,
          product_name: 'IR and Other Types',
          product_image: rice_5,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 2,
          product_name: '1509 Basmati Rice',
          product_image: rice_3,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 1,
          product_name: 'Pussa Basmati Rice',
          product_image: rice_2,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 3,
          product_name: 'Sharbati Rice',
          product_image: rice_4,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 5,
          product_name: 'Sigandha Rices',
          product_image: rice_6,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
      ],
    },
    {
      category_id: 3,
      category_name: 'Poultry Feeds',
      products: [
        {
          product_id: 0,
          product_name: '1121 Basmati Rice',
          product_image: rice_1,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 5,
          product_name: 'Sigandha Rices',
          product_image: rice_6,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 2,
          product_name: '1509 Basmati Rice',
          product_image: rice_3,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 3,
          product_name: 'Sharbati Rice',
          product_image: rice_4,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 1,
          product_name: 'Pussa Basmati Rice',
          product_image: rice_2,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 4,
          product_name: 'IR and Other Types',
          product_image: rice_5,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
      ],
    },
    {
      category_id: 4,
      category_name: 'Spices',
      products: [
        {
          product_id: 5,
          product_name: 'Sigandha Rices',
          product_image: rice_6,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 0,
          product_name: '1121 Basmati Rice',
          product_image: rice_1,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 2,
          product_name: '1509 Basmati Rice',
          product_image: rice_3,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 1,
          product_name: 'Pussa Basmati Rice',
          product_image: rice_2,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 4,
          product_name: 'IR and Other Types',
          product_image: rice_5,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 3,
          product_name: 'Sharbati Rice',
          product_image: rice_4,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
      ],
    },
    {
      category_id: 5,
      category_name: 'Iron Ore',
      products: [
        {
          product_id: 0,
          product_name: '1121 Basmati Rice',
          product_image: rice_1,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 5,
          product_name: 'Sigandha Rices',
          product_image: rice_6,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 1,
          product_name: 'Pussa Basmati Rice',
          product_image: rice_2,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 2,
          product_name: '1509 Basmati Rice',
          product_image: rice_3,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 4,
          product_name: 'IR and Other Types',
          product_image: rice_5,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 3,
          product_name: 'Sharbati Rice',
          product_image: rice_4,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
      ],
    },
    {
      category_id: 6,
      category_name: 'Pulses',
      products: [
        {
          product_id: 4,
          product_name: 'IR and Other Types',
          product_image: rice_5,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 2,
          product_name: '1509 Basmati Rice',
          product_image: rice_3,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 1,
          product_name: 'Pussa Basmati Rice',
          product_image: rice_2,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 0,
          product_name: '1121 Basmati Rice',
          product_image: rice_1,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 3,
          product_name: 'Sharbati Rice',
          product_image: rice_4,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 5,
          product_name: 'Sigandha Rices',
          product_image: rice_6,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
      ],
    },
    {
      category_id: 7,
      category_name: 'Vegetables/Fruits',
      products: [
        {
          product_id: 0,
          product_name: '1121 Basmati Rice',
          product_image: rice_1,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 1,
          product_name: 'Pussa Basmati Rice',
          product_image: rice_2,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 2,
          product_name: '1509 Basmati Rice',
          product_image: rice_3,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 3,
          product_name: 'Sharbati Rice',
          product_image: rice_4,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 4,
          product_name: 'IR and Other Types',
          product_image: rice_5,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 5,
          product_name: 'Sigandha Rices',
          product_image: rice_6,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
      ],
    },
    {
      category_id: 8,
      category_name: 'Sugar',
      products: [
        {
          product_id: 0,
          product_name: '1121 Basmati Rice',
          product_image: rice_1,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 4,
          product_name: 'IR and Other Types',
          product_image: rice_5,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 2,
          product_name: '1509 Basmati Rice',
          product_image: rice_3,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 1,
          product_name: 'Pussa Basmati Rice',
          product_image: rice_2,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 3,
          product_name: 'Sharbati Rice',
          product_image: rice_4,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
        {
          product_id: 5,
          product_name: 'Sigandha Rices',
          product_image: rice_6,
          value_desc: 'This requires innovation and new ideas. Not only to grow enough but to grow better for our planet and its people. At Bayer, we’re driving research in biology, ',
        },
      ],
    },
  ];
  return (
    <section className="py-10 md:py-32">
      <div className="w-full">
        <div className="flex flex-wrap justify-center gap-5 w-full px-4 md:px-0 lg:w-[50%] mx-auto">
          {section_data?.map((data, index) => {
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
      <div className="w-full">
        {
          section_data?.map((data) => {
            if (data.category_name === activeTab) {
              return (
                <div key={data?.category_id} className="w-full px-[4rem] md:px-[7rem] lg:px-[15rem] xl:px-[24rem] py-[5rem]">
                  <div className="flex flex-col items-center justify-center md:grid grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
                    {
                      data?.products?.map((s_data) => (
                        <ProductCard key={s_data?.id} title={s_data?.product_name} image={s_data?.product_image} description={s_data?.value_desc} />
                      ))
                    }
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
