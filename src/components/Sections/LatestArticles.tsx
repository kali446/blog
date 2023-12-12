"use client";
import React from "react";
import CardArticle1 from "../Cards/CardArticle1";
import { Article } from "@/lib/queries";

interface Props {
  data?: Article[];
}

const LatestArticles = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 pb-[2.5rem] lg:grid-cols-2 lg:gap-5 sm:grid-cols-1 sm:gap-4">
      {data?.map((item, i) => <CardArticle1 key={i} item={item} index={i} />)}
    </div>
  );
};

export default LatestArticles;
