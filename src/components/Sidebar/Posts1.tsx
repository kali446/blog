import React from "react";
import CardTitle from "@/shared/CardTitle";
import Date from "@/shared/Date";
import Link from "next/link";
import { Article } from "@/sanity/queries";
import { truncateString } from "@/utils";

interface Props {
  data: Article[];
}

const Posts1 = ({ data }: Props) => {
  return (
    <div className="sidebarCard dark:bg-dark-layoutElement">
      <CardTitle>Featured Articles</CardTitle>

      {data?.map((item, i) => (
        <div
          title={item.title}
          className="cursor-pointer border-b border-light-contrast-200 py-3 last:border-0 dark:border-dark-contrast-300/40"
          key={i}
        >
          <p>
            <Link href={`/author/${item.author.slug}`}>
              <span className="text-xs font-semibold capitalize tracking-wide text-light-primary underline transition-colors duration-300 hover:text-accent dark:text-dark-contrast-900">
                {item.author.name}
              </span>
            </Link>

            <span className="px-2 text-xs tracking-wide text-light-secondary dark:text-dark-contrast-900">
              <Date
                date={item.publishedAt ? item.publishedAt : item._createdAt}
              />
            </span>
          </p>

          <Link href={`/article/${item.slug}`} title={item.title}>
            <h2 className="pt-1 text-base font-semibold text-light-primary transition-colors duration-300 hover:text-accent dark:text-white">
              {item.title.length > 70
                ? truncateString(item.title, 70) + "..."
                : item.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts1;
