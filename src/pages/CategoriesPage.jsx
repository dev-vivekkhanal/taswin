import React from "react";
import Section2 from "../components/categories/Section2";
import Footer from "../components/footer/Footer";
import HeroComponent from "../components/global-components/HeroComponent";
import cover from "../assets/categories/categoriesCover.png";

const CategoriesPage = () => {
  const heroData = {
    title: "Category",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nihil error ad doloribus eveniet reiciendis inventore dolores quia, maiores soluta.",
    imgPath: cover,
  };

  return (
    <div>
      <HeroComponent
        pageTitle={heroData?.title}
        pageDescription={heroData?.description}
        imagePath={heroData?.imgPath}
        linkColor={`primary`}
      />
      <Section2 />
      <Footer />
    </div>
  );
};

export default CategoriesPage;
