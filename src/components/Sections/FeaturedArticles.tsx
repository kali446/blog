import React from "react";
import CardArticle4 from "../Cards/CardArticle4";
import CardArticle7 from "../Cards/CardArticle7";

const FeaturedArticles = () => {
  return (
    <div className="grid min-h-[75vh] cursor-pointer grid-cols-12 grid-rows-4 gap-5 pb-section">
      <div className="col-span-7 row-span-4 sm:col-span-12">
        <CardArticle7 />
      </div>
      <div className="col-span-5 row-span-2 sm:col-span-12">
        <CardArticle4 small={true} showExcerpt={false} />
      </div>
      <div className="col-span-5 row-span-2 sm:col-span-12">
        <CardArticle4 small={true} showExcerpt={false} />
      </div>
    </div>
  );
};

export default FeaturedArticles;
