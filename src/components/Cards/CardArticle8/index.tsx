import React from "react";
import Image from "next/image";
import Link from "next/link";
import Date from "@/shared/Date";
import { Article } from "@/lib/queries";
import { generateImageUrl, truncateString } from "@/utils";
import CardShareIcons from "@/shared/CardShareIcons";

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
        <div className="h-[17rem]">
          <h2 className="ArticleTitle pb-1 text-[1.5rem] font-semibold leading-[0] text-light-primary transition-colors duration-300 hover:text-accent dark:text-dark-primary">
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
          <Image
            className="h-full w-full bg-center object-cover transition-all duration-300 group-hover:scale-110"
            src={thumbnailUrl}
            width={thumbnailWidth}
            height={thumbnailHeight}
            alt={item.title}
          />
        </div>

        <div className="h-[2.75rem] w-full overflow-hidden">
          <div className="relative h-full w-full border-t border-light-contrast-300 text-[.725rem] font-medium uppercase tracking-wide text-light-secondary transition-all group-hover:text-light-primary dark:border-dark-contrast-200/60 dark:text-dark-primary dark:group-hover:text-dark-primary">
            <div className="flex h-[100%] items-center justify-between transition-all group-hover:translate-y-[-100%]">
              <div className="flex gap-3">
                {item.estimatedReadingTime > 0 && (
                  <span>{item.estimatedReadingTime} min read</span>
                )}
                <span>334 views</span>
              </div>

              <div>shares 934</div>
            </div>

            <div className="absolute left-[0] top-[0] flex h-[100%] w-[100%] translate-y-[100%] items-center justify-between transition-all group-hover:translate-y-[0%]">
              <span>Read more</span>
              <CardShareIcons color="black" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardArticle8;
