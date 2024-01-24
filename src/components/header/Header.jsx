import React from "react";
import logo from "../../assets/global/taswin_logo.svg";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

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
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-[110] bg-gradient-to-b from-[#ffffff48] to-transparent text-[#07260E]">
      <div className="w-[90%] mx-auto flex justify-between items-start py-8">
        <h1 className="flex-1 text-primary font-semibold text-3xl">
          <img src={logo} className="w-[150px]" alt="taswin logo" />
        </h1>
        <div className="flex-1  flex-col gap-4 justify-center items-center hidden md:flex">
          {/* search */}
          <SearchBar />
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
