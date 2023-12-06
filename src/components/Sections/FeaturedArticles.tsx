import React from "react";
import CardArticle4 from "../Cards/CardArticle4";
import CardArticle7 from "../Cards/CardArticle7";
import { Article } from "../../../sanity/lib/queries";

interface Props {
  data: Article[];
}

const FeaturedArticles = ({ data }: Props) => {
  return (
    <div className="grid min-h-[75vh] w-full cursor-pointer grid-cols-12 gap-5 pb-section sm:gap-0 sm:gap-y-4">
      {data?.map((item, i) => {
        if (i === 0) {
          return (
            <div key={i} className="col-span-7 row-span-4 sm:col-span-12">
              <CardArticle7 item={item} />
            </div>
          );
        }

        return (
          <div key={i} className="col-span-5 row-span-2 sm:col-span-12">
            <CardArticle4 titleSize={200} item={item} small={true} showExcerpt={false} />
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedArticles;
