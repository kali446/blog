import React from "react";
import Image from "next/image";
import CardTitle from "@/shared/CardTitle";
import Link from "next/link";
import { Article } from "@/sanity/queries";
import { generateImageUrl, truncateString } from "@/utils";

interface Props {
  data: Article[];
}

const Posts2 = ({ data }: Props) => {
  return (
    <div className="sidebarCard dark:bg-dark-layoutElement">
      <CardTitle>Top of the week</CardTitle>

      {data?.map((item, i) => {
        const thumbnailHeight = 100;
        const thumbnailWidth = 100;
        const thumbnailUrl = generateImageUrl({
          thumbnail: item.thumbnail,
          size: {
            height: thumbnailHeight,
            width: thumbnailWidth,
          },
        });

        return (
          <Link key={i} href={`/article/${item.slug}`} title={item.title}>
            <div
              className="group flex cursor-pointer items-center gap-2 border-b border-light-contrast-200 py-3 last:border-0 dark:border-dark-contrast-300/40"
              key={i}
              title={item.title}
            >
              <div className="relative flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-light-contrast-300 dark:bg-dark-contrast-300">
                <span className="relative z-20 text-lg font-semibold text-light-primary group-hover:text-white dark:text-white">
                  {i + 1}
                </span>

                <div className="absolute left-[0] top-[0] z-10 h-[100%] w-[100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Image
                    className="h-[100%] w-[100%] bg-center object-cover"
                    src={thumbnailUrl}
                    width={thumbnailWidth}
                    height={thumbnailHeight}
                    alt={item.title}
                  />
                </div>
              </div>

              <h2 className="text-[.925rem] font-semibold leading-[1.5] text-light-primary transition-colors duration-300 hover:text-accent dark:text-white">
                {item.title.length > 70
                  ? truncateString(item.title, 70) + "..."
                  : item.title}
              </h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Posts2;
