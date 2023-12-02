import React from "react";
import SectionHeader from "./SectionHeader";
import CardArticle6 from "../Cards/CardArticle6";

const SmallCategoryArticles = () => {
  return (
    <div className="pb-section">
      <SectionHeader />

      <div className="md:gap-4 grid grid-cols-12 gap-x-6 gap-y-5">
        {Array.from({ length: 16 }).map((item, i) => (
          <div key={i} className="col-span-3 lg:col-span-6 sm:col-span-12">
            <CardArticle6 />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallCategoryArticles;
