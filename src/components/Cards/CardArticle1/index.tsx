import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardShareIcons from "@/shared/CardShareIcons";
import { generateImageUrl } from "@/utils";
import { Article } from "@/lib/queries";
import { truncateString } from "@/utils";
import CardFooterV1 from "@/shared/CardFooterV1";

interface Props {
  item: Article;
  index: number;
}

const CardArticle1 = ({ item, index }: Props) => {
  const thumbnailHeight = 300;
  const thumbnailWidth = 300;
  const thumbnailUrl = generateImageUrl({
    thumbnail: item?.thumbnail,
    size: {
      height: thumbnailHeight,
      width: thumbnailWidth,
    },
  });

  return (
    <div className="group relative h-[8.5rem] cursor-pointer overflow-hidden rounded-lg bg-white px-3 pt-3 dark:bg-dark-layoutElement">
      <div className="absolute left-[0] top-[0] h-[100%] w-[100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:opacity-100">
        <Image
          className="h-full w-full bg-center object-cover"
          src={thumbnailUrl}
          width={thumbnailWidth}
          height={thumbnailHeight}
          alt={item?.title || ""}
        />

        <div className="absolute left-0 top-0 h-full w-full bg-black/30"></div>
      </div>

      <div className="flex h-full flex-col justify-between">
        <div className="relative z-20 flex items-start gap-3 pb-3">
          <div className="flex h-[3rem] w-[3rem] shrink-0 items-center justify-center rounded-xl bg-light-contrast-400 group-hover:bg-light-contrast-400/[.35] dark:bg-dark-contrast-300 md:bg-light-contrast-400/[.35] md:dark:bg-light-contrast-400/[.35]">
            <span className="text-lg font-semibold text-light-primary group-hover:text-white dark:text-white md:text-white">
              {index + 1}
            </span>
          </div>

          <h1 className="ArticleTitle text-[1rem] font-bold leading-[1.35] text-light-primary group-hover:text-white dark:text-white md:text-white">
            <Link href={`/article/${item?.slug}`}>
              {item.title?.length > 50
                ? truncateString(item.title, 50) + "..."
                : item.title}{" "}
            </Link>
          </h1>
        </div>

        <CardFooterV1
          article={{
            estimatedReadingTime: item.estimatedReadingTime,
            title: item.title,
            url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/article/${item.slug}`,
          }}
        />
      </div>
    </div>
  );
};

export default CardArticle1;
