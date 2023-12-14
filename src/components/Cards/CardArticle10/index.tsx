import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/queries";
import Date from "@/shared/Date";
import CardShareIcons from "@/shared/CardShareIcons";
import { generateImageUrl } from "@/utils";

interface Props {
  item: Article;
}

const CardArticle10 = ({ item }: Props) => {
  const thumbnailHeight = 200;
  const thumbnailWidth = 100;
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
      className="group grid grid-cols-12 border-x border-b border-black/30 p-3 pb-0 first:border-t dark:border-white/30"
    >
      <div className="col-span-2 h-[5rem] overflow-hidden">
        <Link href={`/article/${item.slug}`}>
          <Image
            className="h-full w-full bg-center object-cover transition-all duration-300 group-hover:scale-125"
            src={thumbnailUrl}
            width={thumbnailWidth}
            height={thumbnailHeight}
            alt={item.title}
          />
        </Link>
      </div>

      <div className="col-span-10 pl-3">
        <h2 className="ArticleTitle text-[1.15rem] font-semibold text-light-primary transition-colors hover:text-accent dark:text-dark-primary xs:text-[.95rem]">
          <Link href={`/article/`}>{item.title}</Link>
        </h2>

        <p className="pb-3 font-medium capitalize text-light-primary dark:text-white/50">
          <span className="border-r-[1.5px] border-light-primary pr-[.65rem] text-xs tracking-wide underline transition-colors duration-300 hover:text-accent dark:border-white/50">
            <Link href={`/author/${item.author.slug}`}>{item.author.name}</Link>
          </span>

          <span className="px-[.65rem] text-xs tracking-wide">
            <Date
              date={item.publishedAt ? item.publishedAt : item._createdAt}
            />
          </span>
        </p>

        <div className="h-[2.5rem] w-full overflow-hidden">
          <div className="relative h-full w-full text-[.7rem] font-medium uppercase tracking-wide text-light-secondary transition-all group-hover:text-light-primary dark:border-dark-contrast-200/60 dark:text-dark-secondary dark:group-hover:text-dark-primary">
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
    </div>
  );
};

export default CardArticle10;
