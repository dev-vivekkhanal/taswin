import React from "react";
import search_icon from "../../assets/global/search_icon.svg";
import { Link } from "react-router-dom";

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
  return (
    <header className="absolute top-0 left-0 right-0 z-[110] bg-gradient-to-b from-[#ffffff48] to-transparent text-[#07260E]">
      <div className="w-[90%] mx-auto flex justify-between items-start py-8">
        <h1 className="flex-1 text-[#07260E] font-semibold text-3xl">Taswin</h1>
        <div className="flex-1  flex-col gap-4 justify-center items-center hidden md:flex">
          {/* search */}
          <div className="w-full flex ">
            <input
              type="text"
              placeholder="Search here"
              className="border border-[#07260E] outline-none bg-[#d8d5cf] text-sm placeholder:text-[#07260E] text-[#07260E] px-5 py-2 flex-1"
            />
            <button className="inline-block bg-[#07260E] p-2">
              <img src={search_icon} alt="search" />
            </button>
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
