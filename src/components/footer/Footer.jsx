import React from "react";
import instagram from '../../assets/footer/instagram.svg'
import twitter from '../../assets/footer/twitter.svg'
import facebook from '../../assets/footer/facebook.svg'
import { footer_data } from "../../mock/footer/footer_data";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const social = [
    {
      id: 0,
      title: 'Instagram',
      icon: instagram,
    },{
      id: 1,
      title: 'Twitter',
      icon: twitter,
    },{
      id: 2,
      title: 'Facebook',
      icon: facebook,
    },
  ];
  return (
    <footer className="bg-secondary">
      <div className="flex flex-col md:flex-row gap-10 py-20 w-[90%] mx-auto">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-5 text-primary">
            {footer_data?.basic_info?.brand_name}
          </h1>
          <p className="text-primary text-sm max-w-[400px]">{footer_data?.basic_info?.desc}</p>
          <div className="w-full flex gap-4 mt-10">
            {
              social?.map((social) => (
                <img key={social?.id} src={social?.icon} className="w-full max-w-[40px] cursor-pointer" alt="" />
              ))
            }
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-5 flex-wrap ">
          {footer_data?.footer_links?.map((f_data, f_index) => {
            return (
              <div key={f_index}>
                <h2 className="text-xl font-bold mb-5 text-primary">
                  {f_data?.heading}
                </h2>

                <div>
                  {f_data?.all_links?.map((l_data, l_index) => {
                    return (
                      <div key={l_index} className="mb-2">
                        <Link
                          to={l_data?.link_address}
                          // rel="noopener noreferrer"
                          className="text-primary"
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

      <p className="text-xs pb-10 w-[90%] mx-auto text-primary">
        Copyright © {date?.getFullYear()} Taswin. All Right Reseved
      </p>
    </footer>
  );
};

export default Footer;
