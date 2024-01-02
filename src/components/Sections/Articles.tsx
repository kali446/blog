"use client";
import React, { useEffect, useState } from "react";
import CardArticle8 from "../Cards/CardArticle8";
import LoadMore from "@/shared/Button/LoadMore";
import SectionHeader from "./SectionHeader";
import { Article } from "@/lib/queries";
import { getAllArticles, getClient } from "@/lib/client";
import { HOME_ARTICLES_RESULTS_LIMIT } from "@/utils";

interface Props {
  data: {
    articles?: Article[];
    total: number;
  };
}

const Articles = ({ data }: Props) => {
  const client = getClient();
  const [articles, setArticles] = useState<Article[]>(data?.articles || []);
  const [total, setTotal] = useState<number>(data.total);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const pageSize = HOME_ARTICLES_RESULTS_LIMIT;
  const skip = (pageNumber - 1) * pageSize;
  const totalPages = Math.ceil(total / pageSize);
  const hasNextPage = skip + pageSize < total;

  useEffect(() => {
    if (!articles?.length) {
      fetchArticles();
    }
  }, []);

  const fetchArticles = async () => {
    const data = await getAllArticles(client, pageNumber, pageSize);
    setArticles(data?.articles || []);
    setTotal(data.total);
  };

  const loadMoreHandler = async () => {
    setLoading(true);
    setPageNumber(pageNumber + 1);

    if (pageNumber < totalPages) {
      const data = await getAllArticles(client, pageNumber + 1, pageSize);
      if (data?.articles) {
        setArticles(
          articles?.length ? [...articles, ...data.articles] : data.articles,
        );
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  if (!articles?.length) {
    return null;
  }

  return (
    <div className="pb-section">
      <SectionHeader
        data={{
          name: "Latest Articles",
        }}
        titleOnly={true}
      />

      <div className="grid grid-cols-12 gap-5 pb-6 md:gap-4">
        {articles?.map((item, i) => (
          <div key={i} className="col-span-3 lg:col-span-6 sm:col-span-12">
            <CardArticle8 item={item} />
          </div>
        ))}
      </div>

      {hasNextPage && (
        <div className="text-center">
          <LoadMore loading={loading} onClick={loadMoreHandler} />
        </div>
      )}
    </div>
  );
};

export default Articles;
