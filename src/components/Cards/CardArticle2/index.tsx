import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/queries";
import { generateImageUrl } from "@/utils";
import CardShareIcons from "@/shared/CardShareIcons";

interface Props {
  data: Article;
}

const CardArticle2 = ({ data }: Props) => {
  const thumbnailHeight = 500;
  const thumbnailWidth = 500;
  const thumbnailUrl = generateImageUrl({
    thumbnail: data.thumbnail,
    size: {
      height: thumbnailHeight,
      width: thumbnailWidth,
    },
  });

  return (
    <Link title={data.title} href={`/article/${data.slug}`}>
      <div className="group w-[100%] cursor-pointer overflow-hidden rounded-xl bg-white dark:bg-dark-layoutElement">
        <div className="h-[18rem] w-[100%] overflow-hidden">
          <Image
            className="h-[100%] w-[100%] bg-center object-cover"
            src={thumbnailUrl}
            width={thumbnailWidth}
            height={thumbnailHeight}
            alt={data.title}
          />
        </div>

        <div className="p-4 pb-[0]">
          <span className="text-xs font-light uppercase text-light-primary transition-colors duration-200 hover:text-accent dark:text-white">
            <Link href={`/category/${data.category.slug}`}>
              {data?.category?.name}
            </Link>
          </span>

          <h1 className="ArticleTitle py-2 text-4xl font-semibold text-light-primary transition-colors duration-200 hover:text-accent dark:text-white">
            <Link href={`/article/${data.slug}`}>{data?.title}</Link>
          </h1>

          <div className="font-base relative mt-3 h-[3rem] overflow-hidden border-t border-light-contrast-200 text-[.725rem] uppercase text-light-secondary transition-all group-hover:text-light-primary dark:border-dark-contrast-300/40 dark:text-dark-contrast-900 dark:group-hover:text-white">
            <div className="flex h-[100%] items-center justify-between transition-all group-hover:translate-y-[-100%]">
              <div className="flex gap-3">
                {data.estimatedReadingTime > 0 && (
                  <span>{data.estimatedReadingTime} min read</span>
                )}
                <span>334 views</span>
              </div>

              <div>shares 934</div>
            </div>

            <div className="absolute left-[0] top-[0] flex h-[100%] w-[100%] translate-y-[100%] items-center justify-between transition-all group-hover:translate-y-[0%]">
              <span>Read more</span>

              <CardShareIcons color="white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardArticle2;
