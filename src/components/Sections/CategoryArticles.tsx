import React from "react";
import CardArticle4 from "../Cards/CardArticle4";
import SectionHeader from "./SectionHeader";
import { Article, Category } from "@/sanity/queries";

interface Props {
  data: {
    category: Category;
    articles?: Article[];
  };
}

const CategoryArticles = ({ data: { category, articles } }: Props) => {
  return (
    <div className="pb-section">
      <SectionHeader data={category} />

      <div className="grid grid-cols-12 items-start gap-[2rem] lg:gap-3">
        {articles?.map((item, i) => {
          if (i === 0) {
            return (
              <div key={i} className="col-span-6 lg:col-span-12">
                <CardArticle4 item={item} heightFixed={false} />
              </div>
            );
          }

          return (
            <div key={i} className="col-span-3 lg:col-span-6 md:col-span-12">
              <CardArticle4 item={item} small={true} heightFixed={false} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryArticles;
