"use client";
import React from "react";
import CardArticle8 from "../Cards/CardArticle8";
import LoadMore from "@/shared/Button/LoadMore";
import SectionHeader from "./SectionHeader";
import { Article } from "../../../sanity/lib/queries";

interface Props {
  data: Article[];
}

const Articles = ({ data }: Props) => {
  return (
    <div className="pb-section">
      <SectionHeader titleOnly={true} />

      <div className="grid grid-cols-12 gap-5 pb-6 md:gap-4">
        {data.map((item, i) => (
          <div key={i} className="col-span-3 lg:col-span-6 sm:col-span-12">
            <CardArticle8
              _id={item._id}
              slug={item.slug}
              title={item.title}
              category={item.category}
              excerpt={item?.excerpt}
              tags={item?.tags}
              thumbnail={item?.thumbnail}
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <LoadMore />
      </div>
    </div>
  );
};

export default Articles;
