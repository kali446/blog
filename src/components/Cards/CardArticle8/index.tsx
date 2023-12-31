import React from "react";
import Image from "next/image";
import Link from "next/link";
import Date from "@/shared/Date";
import CardFooterV2 from "@/shared/CardFooterV2";
import SlideImagePlaceholder from "@/shared/ImagePlaceholder/Slide";
import { Article } from "@/lib/queries";
import { generateImageUrl, truncateString } from "@/utils";

interface Props {
  item: Article;
}

const CardArticle8 = ({ item }: Props) => {
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
    <Link href={`/article/${item.slug}`}>
      <div className="group cursor-pointer rounded-lg bg-white p-4 !pb-[0] shadow-sm transition-shadow hover:shadow-lg dark:bg-dark-layoutElement">
        <div className="h-[15rem]">
          <h2 className="ArticleTitle text-[1.35rem] font-bold !leading-[1.25] text-light-primary transition-colors duration-300 hover:text-accent dark:text-dark-primary">
            <Link href={`/article/${item.slug}`}>
              {item.title.length > 75
                ? truncateString(item.title, 75)
                : item.title}
            </Link>
          </h2>

          <span className="text-xs capitalize text-light-contrast-600 dark:text-dark-primary">
            <Date
              date={item.publishedAt ? item.publishedAt : item._createdAt}
            />
          </span>

          <p className="mb-6 pt-2 text-sm font-extralight text-light-primary dark:text-dark-contrast-900">
            {truncateString(item.excerpt ? item.excerpt : "", 120)}
          </p>
        </div>

        <div className="mb-5 h-[9.5rem] w-full overflow-hidden">
          <SlideImagePlaceholder
            src={thumbnailUrl}
            alt={item.title}
            size={{
              height: thumbnailHeight,
              width: thumbnailWidth,
            }}
          />
        </div>

        <CardFooterV2
          article={{
            estimatedReadingTime: item.estimatedReadingTime,
            title: item.title,
            url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/article/${item.slug}`,
          }}
          color="black"
          darkInvert={true}
        />
      </div>
    </Link>
  );
};

export default CardArticle8;
