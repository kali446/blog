import React from "react";
import SectionHeader from "./SectionHeader";
import CardArticle6 from "../Cards/CardArticle6";
import { Article, Category } from "@/lib/queries";

interface Props {
  data: {
    category: Category;
    articles?: Article[];
  };
}

const SmallCategoryArticles = ({ data: { category, articles } }: Props) => {
  return (
    <div className="pb-section">
      <SectionHeader data={category} />

      <div className="grid grid-cols-12 gap-x-5 gap-y-5 md:gap-4">
        {articles?.map((item, i) => (
          <div key={i} className="col-span-3 lg:col-span-6 sm:col-span-12">
            <CardArticle6 item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallCategoryArticles;
