import React, { useEffect, useState } from "react";
import search_icon from "../../assets/global/search_icon.svg";
import logo from "../../assets/global/taswin_logo.svg";
import { Link } from "react-router-dom";
import no_img from '../../assets/global/no_image.png';
import { allProducts } from "../../mock/products/allProducts";

const Header = ({ textColor }) => {
  const header_links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Product",
      path: "/categories",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "About",
      path: "/about",
    },
    // {
    //   name: "Contact",
    //   path: "/",
    // },
  ];

  const [products, setProducts] = useState();

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    allProducts?.map((data) => {
      if (data?.category_id == 'cat-all') {
        setProducts(data);
      }
    })
  }, [])

  return (
    <header className="absolute top-0 left-0 right-0 z-[110] bg-gradient-to-b from-[#ffffff48] to-transparent text-[#07260E]">
      <div className="w-[90%] mx-auto flex justify-between items-start py-8">
        <h1 className="flex-1 text-primary font-semibold text-3xl">
          <img src={logo} alt="taswin logo" />
        </h1>
        <div className="flex-1  flex-col gap-4 justify-center items-center hidden md:flex">
          {/* search */}
          <div className="w-full flex relative">
            <input
              type="text"
              placeholder="Search here"
              onChange={(e) => setSearchText(e?.target?.value)}
              value={searchText}
              className="border border-primary outline-none bg-white bg-opacity-70 text-sm placeholder:text-primary text-primary px-5 py-2 flex-1"
            />
            <button className="inline-block bg-primary p-2">
              <img src={search_icon} alt="search" />
            </button>
            <div className="w-full absolute top-[100%] ">
              <div className={`w-full bg-white ${searchText == '' ? 'h-0 border-none' : 'max-h-[500px]'} border-primary border overflow-y-scroll flex flex-col`}>
                {

                  products?.products?.filter((filterValue) => {
                    if (searchText === '') {
                      return filterValue
                    } else if (filterValue?.product_name?.toLowerCase()?.includes(searchText?.toLowerCase())) {
                      return filterValue
                    }
                  })?.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className={` p-4 w-full flex gap-4 border-b`}
                      >
                        <div className="w-full max-w-[80px] border-secondary border rounded-[6px]">
                          <img src={data?.product_image?.length > 0 ? data?.product_image[0] : no_img} alt="" className=" rounded-[6px]" />
                        </div>
                        <div className="w-full flex flex-col justify-start">
                          <h1 className="text-[16px] font-[500]">{data.product_name}</h1>
                          <h1 className="text-[13px] leading-[18px]">{data.value_desc}</h1>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
          <ul className="flex justify-center gap-5">
            {header_links?.map((link_data, link_index) => {
              return (
                <li key={link_index}>
                  <Link
                    to={link_data?.path}
                    className={`transition-all text-${textColor}`}
                  >
                    {link_data?.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex-1"></div>
      </div>
    </header>
  );
};

export default Header;
