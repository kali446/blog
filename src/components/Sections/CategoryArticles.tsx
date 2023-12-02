import React from "react";
import CardArticle4 from "../Cards/CardArticle4";
import SectionHeader from "./SectionHeader";

const CategoryArticles = () => {
  return (
    <div className="pb-section">
      <SectionHeader />

      <div className="flex items-center gap-[2rem]">
        <div className="md:w-12/12 lg:w-6/12">
          <CardArticle4 heightFixed={true} />
        </div>

        <div className="sm:w-12/12 md:w-6/12 lg:w-3/12">
          <CardArticle4 small={true} heightFixed={true} />
        </div>
        <div className="sm:w-12/12 md:w-6/12 lg:w-3/12">
          <CardArticle4 small={true} heightFixed={true} />
        </div>
      </div>
    </div>
  );
};

export default CategoryArticles;
