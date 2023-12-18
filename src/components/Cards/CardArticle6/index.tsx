import React from "react";
import Image from "next/image";
import { Article } from "@/lib/queries";
import { generateImageUrl, truncateString } from "@/utils";
import Link from "next/link";

interface Props {
  item: Article;
}

const CardArticle6 = ({ item }: Props) => {
  const thumbnailHeight = 300;
  const thumbnailWidth = 300;
  const thumbnailUrl = generateImageUrl({
    thumbnail: item.thumbnail,
    size: {
      height: thumbnailHeight,
      width: thumbnailWidth,
    },
  });

  return (
    <div
      title={item.title}
      className="group flex h-[8.5rem] cursor-pointer items-start gap-3 overflow-hidden rounded-lg bg-white p-3 shadow-md transition-shadow hover:shadow-lg dark:bg-dark-layoutElement"
    >
      <div className="aspect-square h-full shrink-0 overflow-hidden lg:w-[8rem]">
        <Image
          className="h-full w-full bg-center object-cover transition-all duration-300 group-hover:scale-125"
          src={thumbnailUrl}
          width={thumbnailWidth}
          height={thumbnailHeight}
          alt={item.title}
        />
      </div>

      <div className="flex h-full flex-col justify-between">
        <h2 className="ArticleTitle pb-3 text-[1.025rem] font-bold leading-[1.15] text-light-primary transition-colors duration-300 hover:text-accent dark:text-white dark:hover:text-accent">
          <Link href={`/article/${item.slug}`}>
            {truncateString(item.title, 40) + "..."}
          </Link>
        </h2>

        <p className="relative h-[1rem] overflow-hidden text-xs  font-medium uppercase text-light-secondary dark:text-dark-contrast-600">
          <p className="flex gap-3 transition-all group-hover:translate-y-[-100%]">
            <span>{item.estimatedReadingTime || 1} min read</span>
          </p>

          <span className="absolute left-[0] top-full transition-all group-hover:top-[0]">
            read more
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardArticle6;
