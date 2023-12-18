import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/queries";
import Date from "@/shared/Date";
import CardShareIcons from "@/shared/CardShareIcons";
import { generateImageUrl } from "@/utils";
import CardFooterV1 from "@/shared/CardFooterV1";

interface Props {
  item: Article;
}

const CardArticle10 = ({ item }: Props) => {
  const thumbnailHeight = 150;
  const thumbnailWidth = 200;
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
          <Link href={`/article/${item.slug}`}>{item.title}</Link>
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

        <CardFooterV1
          article={{
            estimatedReadingTime: item.estimatedReadingTime,
            title: item.title,
            url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/article/${item.slug}`,
          }}
          darkInvert={true}
          color="black"
          className="md:text-light-primary"
        />
      </div>
    </div>
  );
};

export default CardArticle10;
