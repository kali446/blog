import React from "react";
import CardArticle4 from "../Cards/CardArticle4";
import SectionHeader from "./SectionHeader";

const CategoryArticles = () => {
  return (
    <div className="pb-section">
      <SectionHeader />

      <div className="grid grid-cols-12 items-start gap-[2rem] lg:gap-3">
        <div className="col-span-6 lg:col-span-12">
          <CardArticle4 heightFixed={false} />
        </div>

        <div className="col-span-3 lg:col-span-6 md:col-span-12">
          <CardArticle4 small={true} heightFixed={false} />
        </div>
        <div className="col-span-3 lg:col-span-6 md:col-span-12">
          <CardArticle4 small={true} heightFixed={false} />
        </div>
      </div>
    </div>
  );
};

export default CategoryArticles;
