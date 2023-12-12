import React from "react";
import { Article } from "@/lib/queries";
import { generateImageUrl, truncateString } from "@/utils";
import Image from "next/image";
import Date from "@/shared/Date";
import Link from "next/link";

interface Props {
  item: Article;
  index: number;
}

const CardArticle9 = ({ item, index }: Props) => {
  const thumbnailHeight = 500;
  const thumbnailWidth = 500;
  const thumbnailUrl = generateImageUrl({
    thumbnail: item.thumbnail,
    size: {
      height: thumbnailHeight,
      width: thumbnailWidth,
    },
  });

  return (
    <div
      className={`grid grid-cols-12 gap-4 border-b border-black/20 py-4 dark:border-white/10 sm:mx-auto sm:w-[90%] xs:w-full xs:px-2 ${
        index === 0 && "border-t"
      }`}
    >
      <div className="col-span-8 sm:order-last sm:col-span-12">
        <Link href={`/category/${item.category.slug}`}>
          <span className="text-xs font-medium uppercase tracking-[.5px] text-light-secondary transition-colors hover:text-accent dark:text-dark-secondary">
            {item.category.name}
          </span>
        </Link>

        <Link title={item.title} href={`/article/${item.slug}`}>
          <h1 className="w-[90%] pt-1 text-[1.5rem] font-light leading-[1.25] text-light-primary transition-colors hover:text-accent dark:text-dark-primary">
            {item.title}
          </h1>
        </Link>

        <span className="text-xs font-medium text-light-secondary dark:text-dark-contrast-600">
          <Date date={item.publishedAt ? item.publishedAt : item._createdAt} />
        </span>

        <p className="mt-4 text-[.925rem] font-light leading-[1.7] text-light-primary dark:text-dark-contrast-700">
          {item.excerpt.length > 180
            ? truncateString(item.excerpt, 180) + "..."
            : item.excerpt}
        </p>
      </div>

      <div className="col-span-4 sm:col-span-12">
        <div
          title={item.title}
          className="aspect-video h-auto w-full overflow-hidden"
        >
          <Image
            className="h-full w-full bg-center object-cover transition-all duration-300 group-hover:scale-110"
            src={thumbnailUrl}
            width={thumbnailWidth}
            height={thumbnailHeight}
            alt={item.title}
          />
        </div>
      </div>
    </div>
  );
};

export default CardArticle9;
