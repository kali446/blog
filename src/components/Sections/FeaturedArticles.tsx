import React from "react";
import CardArticle4 from "../Cards/CardArticle4";
import CardArticle7 from "../Cards/CardArticle7";

const FeaturedArticles = () => {
  return (
    <div className="grid min-h-[75vh] w-full cursor-pointer grid-cols-12 gap-5 pb-section sm:gap-y-4 sm:gap-0">
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
