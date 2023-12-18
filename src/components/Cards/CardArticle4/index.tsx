import React from "react";
import Image from "next/image";
import Link from "next/link";
import Date from "@/shared/Date";
import CardFooterV3 from "@/shared/CardFooterV3";
import { Article } from "@/lib/queries";
import { truncateString } from "@/utils";
import { generateImageUrl } from "@/utils";

interface Props {
  small?: boolean;
  showExcerpt?: boolean;
  heightFixed?: boolean;
  item: Article;
  titleSize?: number;
}

const CardArticle4 = ({
  small,
  showExcerpt = true,
  heightFixed = false,
  item,
  titleSize,
}: Props) => {
  const descriptionLength = small ? 100 : 200;
  const titleLength = small ? (titleSize ? titleSize : 45) : 65;

  // For Image URL
  const thumbnailHeight = 500;
  const thumbnailWidth = 500;
  const thumbnailUrl = generateImageUrl({
    thumbnail: item.thumbnail,
    size: {
      height: thumbnailHeight,
      width: thumbnailWidth,
    },
  });

  const authorImgHeight = 150;
  const authorImgWidth = 150;
  const authorImgUrl = generateImageUrl({
    thumbnail: item.author.avatar,
    size: {
      height: authorImgHeight,
      width: authorImgWidth,
    },
  });

  return (
    <div
      className={`group relative w-full cursor-pointer overflow-hidden rounded-xl ${
        heightFixed && "h-[45vh]"
      }`}
    >
      <Image
        className="absolute left-[0] top-[0] h-full w-full bg-center object-cover"
        src={thumbnailUrl}
        width={thumbnailWidth}
        height={thumbnailHeight}
        alt={item?.title}
      />

      <div className="absolute left-[0] top-[0] z-10 h-full w-full bg-light-overlay/50"></div>

      <div className="relative z-20 flex h-full w-full flex-col items-start justify-between p-4 !pb-[0] text-white">
        <Link href={`/author/${item.author.slug}`}>
          <div
            className={`h-[3rem] w-[3rem] shrink-0 overflow-hidden rounded-xl ${
              small ? "mb-[1.5rem]" : "mb-[2.5rem]"
            }`}
          >
            <Image
              className="h-full w-full bg-center object-cover"
              src={authorImgUrl}
              width={authorImgWidth}
              height={authorImgHeight}
              alt={item?.author?.name || ""}
            />
          </div>
        </Link>

        <div className={`w-full ${!heightFixed && "pt-[4rem]"}`}>
          <Link href={`/category/${item.category.slug}`}>
            <div className="text-xs font-medium uppercase tracking-normal drop-shadow-md transition-colors hover:text-accent">
              {item?.category?.name}
            </div>
          </Link>

          <h1
            className={`ArticleTitle font-extrabold leading-[1.2] transition-colors hover:text-accent sm:w-full sm:text-[1.5rem] ${
              small ? "w-full text-[1.5rem]" : "w-[90%] text-[2.65rem]"
            }`}
          >
            <Link href={`/article/${item.slug}`}>
              {item.title?.length > titleLength
                ? truncateString(item.title, titleLength) + "..."
                : item.title}
            </Link>
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

          {showExcerpt && (
            <Link href={`/article/${item.slug}`}>
              <p className="pb-[3.25rem] text-[.9rem] font-extralight leading-[1.65] text-white/90 drop-shadow-sm">
                {item.category?.description &&
                item.category.description?.length > descriptionLength ? (
                  <>
                    {truncateString(
                      item.category.description,
                      descriptionLength,
                    )}
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
          )}

          <CardFooterV3 estimatedReadingTime={item.estimatedReadingTime} />
        </div>
      </div>
    </div>
  );
};

export default CardArticle4;
