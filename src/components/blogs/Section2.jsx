import React from "react";
import BlogCard from "./BlogCard";
import { blogsData } from "../../mock/blogs/blogsData";

const Section2 = () => {
  return (
    <div className="py-32 px-10 flex justify-center items-center">
      <div className="w-full md:max-w-[80vw] lg:max-w-[55vw] flex flex-col sm:grid grid-cols-2 gap-x-16 gap-y-16">
        {blogsData?.map((data) => (
          <BlogCard
            key={data?.id}
            id={data?.id}
            title={data?.cardTitle}
            image={data?.cardImage}
            desc={data?.cardDesc}
          />
        ))}
      </div>
    </div>
  );
};

export default Section2;
