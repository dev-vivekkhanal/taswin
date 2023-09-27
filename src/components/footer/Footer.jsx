import React from "react";
import { footer_data } from "../../mock/footer/footer_data";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-[#F6F4EC] ">
      <div className="flex flex-col md:flex-row gap-10 py-20 w-[90%] mx-auto">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-5 text-[#07260E]">
            {footer_data?.basic_info?.brand_name}
          </h1>

          <p className="text-[#07260E]">{footer_data?.basic_info?.desc}</p>
        </div>
        <div className="flex flex-1 justify-between gap-5 flex-wrap ">
          {footer_data?.footer_links?.map((f_data, f_index) => {
            return (
              <div key={f_index}>
                <h2 className="text-xl font-bold mb-5 text-[#07260E]">
                  {f_data?.heading}
                </h2>

                <div>
                  {f_data?.all_links?.map((l_data, l_index) => {
                    return (
                      <div key={l_index} className="mb-2">
                        <Link
                          href={l_data?.link_address}
                          rel="noopener noreferrer"
                          className="text-[#07260E]"
                        >
                          {l_data?.link_name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs pb-10 w-[90%] mx-auto">
        Copyright © {date?.getFullYear()} Taswin. All Right Reseved
      </p>
    </footer>
  );
};

export default Footer;
