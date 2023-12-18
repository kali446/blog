import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardFooterV2 from "@/shared/CardFooterV2";
import { Article } from "@/lib/queries";
import { generateImageUrl } from "@/utils";

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

          <h1 className="ArticleTitle py-2 text-4xl font-semibold text-light-primary transition-colors duration-200 hover:text-accent dark:text-white dark:hover:text-accent">
            <Link href={`/article/${data.slug}`}>{data?.title}</Link>
          </h1>

          <CardFooterV2
            article={{
              estimatedReadingTime: data.estimatedReadingTime,
              title: data.title,
              url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/article/${data.slug}`,
            }}
            color="black"
            darkInvert={true}
          />
        </div>
      </div>
    </Link>
  );
};

export default CardArticle2;
