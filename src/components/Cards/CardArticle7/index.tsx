import React from "react";
import Image from "next/image";
import Link from "next/link";
import Date from "@/shared/Date";
import CardFooterV3 from "@/shared/CardFooterV3";
import { Article } from "@/lib/queries";
import { generateImageUrl, truncateString } from "@/utils";

interface Props {
  item: Article;
}

const CardArticle7 = ({ item }: Props) => {
  const descriptionLength = 200;

  // For Image URL
  const thumbnailHeight = 1000;
  const thumbnailWidth = 1000;
  const thumbnailUrl = generateImageUrl({
    thumbnail: item.thumbnail,
    size: {
      height: thumbnailHeight,
      width: thumbnailWidth,
    },
  });

  const avatarImgHeight = 200;
  const avatarImgWidht = 200;
  const avatarImgUrl = generateImageUrl({
    thumbnail: item.author.avatar,
    size: {
      height: avatarImgHeight,
      width: avatarImgWidht,
    },
  });

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-xl bg-white p-4 !pb-[0]">
      <div className="absolute left-[0] top-[0] z-20 h-full w-full bg-light-overlay/60"></div>
      <div className="absolute left-[0] top-[0] h-full w-full">
        <Image
          className="h-full w-full bg-center object-cover"
          src={thumbnailUrl}
          width={thumbnailWidth}
          height={thumbnailHeight}
          alt={item?.author?.name || ""}
        />
      </div>

      <div className="relative z-30 flex h-full flex-col items-start justify-between text-white">
        <div
          className={`mb-[2.5rem] h-[3rem] w-[3rem] overflow-hidden rounded-xl`}
        >
          <Image
            className="h-full w-full bg-center object-cover"
            src={avatarImgUrl}
            width={avatarImgWidht}
            height={avatarImgHeight}
            alt={item?.author?.name || ""}
          />
        </div>

        <div className="w-full">
          <Link href={`/category/${item.category.slug}`}>
            <div className="text-xs font-medium uppercase tracking-normal drop-shadow-md transition-colors hover:text-accent">
              {item?.category?.name}
            </div>
          </Link>

          <h1 className="ArticleTitle text-5xl font-extrabold leading-[1.15] transition-colors hover:text-accent sm:text-[1.75rem] sm:leading-[1.2]">
            <Link href={`/article/${item.slug}`}>{item?.title}</Link>
          </h1>

          <p className="pb-5 font-medium text-white/90 shadow-sm">
            <Link href={`/author/${item.author.slug}`}>
              <span className="border-r-[1.5px] border-white pr-[.65rem] text-xs tracking-wide underline transition-colors duration-300 hover:text-accent">
                {item?.author?.name}
              </span>
            </Link>

            <span className="px-[.65rem] text-xs tracking-wide">
              <Date
                date={item.publishedAt ? item.publishedAt : item._createdAt}
              />
            </span>
          </p>

          <Link href={`/article/${item.slug}`}>
            <p className="pb-[3.25rem] text-[.9rem] font-extralight leading-[1.65] text-white/90 drop-shadow-sm">
              {item.category?.description &&
              item.category.description?.length > descriptionLength ? (
                <>
                  {truncateString(item.category.description, descriptionLength)}
                  <span className="inline-flex cursor-pointer items-center gap-1 rounded-full px-[.5rem] py-[.35rem] text-[.6rem] font-semibold uppercase leading-none text-white underline drop-shadow-sm transition-all duration-300">
                    read more
                    <svg
                      width={10}
                      height={"auto"}
                      viewBox="0 0 352 320"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M176 320C173.899 320.002 171.818 319.589 169.876 318.785C167.935 317.98 166.172 316.8 164.688 315.312L4.68802 155.312C-1.56398 149.06 -1.56398 138.936 4.68802 132.688C10.94 126.44 21.064 126.436 27.312 132.688L176 281.376L324.688 132.688C330.94 126.436 341.064 126.436 347.312 132.688C353.56 138.94 353.564 149.064 347.312 155.312L187.312 315.312C185.828 316.8 184.065 317.98 182.124 318.785C180.182 319.589 178.101 320.002 176 320ZM187.312 187.312L347.312 27.312C353.564 21.06 353.564 10.936 347.312 4.68802C341.06 -1.55998 330.936 -1.56398 324.688 4.68802L176 153.376L27.312 4.68802C21.06 -1.56398 10.936 -1.56398 4.68802 4.68802C-1.55998 10.94 -1.56398 21.064 4.68802 27.312L164.688 187.312C167.812 190.436 171.908 192 176 192C180.092 192 184.188 190.436 187.312 187.312Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </>
              ) : (
                <>{item.category.description}</>
              )}
            </p>
          </Link>

          <CardFooterV3
            article={{
              estimatedReadingTime: item.estimatedReadingTime,
              title: item.title,
              url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/article/${item.slug}`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardArticle7;
