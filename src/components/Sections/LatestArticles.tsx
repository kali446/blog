import React from "react";
import CardArticle1 from "../Cards/CardArticle1";

const LatestArticles = () => {
  return (
    <div className="grid grid-cols-4 gap-4 pb-section lg:grid-cols-2 lg:gap-5 sm:grid-cols-1 sm:gap-4">
      {Array.from({ length: 4 }).map((item, i) => (
        <CardArticle1 />
      ))}
    </div>
  );
};

export default LatestArticles;
