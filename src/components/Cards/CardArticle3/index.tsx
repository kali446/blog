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

const CardArticle3 = ({ item }: Props) => {
  const thumbnailHeight = 400;
  const thumbnailWidth = 400;
  const thumbnailUrl = generateImageUrl({
    thumbnail: item.thumbnail,
    size: {
      height: thumbnailHeight,
      width: thumbnailWidth,
    },
  });

  return (
    <Link title={item.title} href={`/article/${item.slug}`}>
      <div className="group flex cursor-pointer flex-col items-start rounded-xl p-4 pb-[0] transition-colors duration-300 hover:bg-white hover:shadow-sm dark:hover:bg-dark-submenuLink">
        <div className="h-[7rem]">
          <h3 className="pr-3 text-[1rem] font-bold leading-[1.35] text-light-primary transition-colors hover:text-accent dark:text-dark-primary">
            {item.title.length > 80
              ? truncateString(item.title, 80) + "..."
              : item.title}
          </h3>

          <span className="text-xs text-light-secondary dark:text-dark-primary">
            <Date
              date={item.publishedAt ? item.publishedAt : item._createdAt}
            />
          </span>
        </div>

        <div className="h-[11rem] w-[100%] overflow-hidden">
          <Image
            className="h-[100%] w-[100%] bg-center object-cover"
            src={thumbnailUrl}
            width={thumbnailWidth}
            height={thumbnailHeight}
            alt={item.title}
          />
        </div>

        <div className="relative mt-5 h-[3rem] w-full overflow-hidden border-t border-light-contrast-200 text-[.725rem] font-medium uppercase tracking-wide text-light-secondary transition-all group-hover:text-light-primary dark:border-dark-contrast-600/40 dark:text-dark-primary dark:group-hover:text-dark-primary">
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
            <CardShareIcons darkInvert={true} color="black" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardArticle3;
