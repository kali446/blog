import React from "react";
import Image from "next/image";
import Link from "next/link";
import Date from "@/shared/Date";
import SlideImagePlaceholder from "@/shared/ImagePlaceholder/Slide";
import { Article } from "@/lib/queries";
import { generateImageUrl, truncateString } from "@/utils";

interface Props {
  data: Article;
}

const ThumbnailHeader = ({
  data: {
    title,
    excerpt,
    category,
    author,
    thumbnail,
    _createdAt,
    publishedAt,
  },
}: Props) => {
  const authorImageHeight = 100;
  const authorImageWidth = 100;
  const authorImageUrl = generateImageUrl({
    thumbnail: author?.avatar,
    size: {
      height: authorImageHeight,
      width: authorImageWidth,
    },
  });

  const thumbnailHeight = 540;
  const thumbnailWidth = 1440;
  const thumbnailUrl = generateImageUrl({
    thumbnail: thumbnail,
    size: {
      height: thumbnailHeight,
      width: thumbnailWidth,
    },
  });

  return (
    <div className="pt-3">
      <div className="mx-auto w-[60%] lg:w-[80%] md:w-[90%]">
        <div className="mb-4 flex cursor-pointer items-center gap-3 border-b border-light-contrast-300 pb-3 pt-2 text-[.9rem] font-light capitalize text-black dark:border-dark-contrast-400/50 dark:text-dark-primary lg:text-[.85rem] sm:hidden sm:flex-col sm:gap-1 sm:py-3 sm:pt-0 sm:text-[.8rem]">
          <div className="transition-colors duration-300 hover:text-accent hover:underline">
            Home
          </div>
          <div>
            <svg
              className="sm:rotate-90"
              width={6}
              height="auto"
              viewBox="0 0 302 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M293.231 236.022L65.3843 8.17945C60.1145 2.90547 53.0798 0 45.5788 0C38.0779 0 31.0432 2.90547 25.7733 8.17945L8.99403 24.9546C-1.92438 35.8855 -1.92438 53.6513 8.99403 64.5656L200.322 255.894L8.78174 447.434C3.51193 452.708 0.602295 459.739 0.602295 467.236C0.602295 474.741 3.51193 481.771 8.78174 487.05L25.5611 503.821C30.835 509.095 37.8656 512 45.3666 512C52.8675 512 59.9022 509.095 65.172 503.821L293.231 275.77C298.513 270.479 301.414 263.416 301.398 255.906C301.414 248.368 298.513 241.308 293.231 236.022Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="transition-colors duration-300 hover:text-accent hover:underline">
            <Link href={`/category/${category?.slug}`}>{category?.name}</Link>
          </div>

          <div>
            <svg
              className="sm:rotate-90"
              width={6}
              height="auto"
              viewBox="0 0 302 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M293.231 236.022L65.3843 8.17945C60.1145 2.90547 53.0798 0 45.5788 0C38.0779 0 31.0432 2.90547 25.7733 8.17945L8.99403 24.9546C-1.92438 35.8855 -1.92438 53.6513 8.99403 64.5656L200.322 255.894L8.78174 447.434C3.51193 452.708 0.602295 459.739 0.602295 467.236C0.602295 474.741 3.51193 481.771 8.78174 487.05L25.5611 503.821C30.835 509.095 37.8656 512 45.3666 512C52.8675 512 59.9022 509.095 65.172 503.821L293.231 275.77C298.513 270.479 301.414 263.416 301.398 255.906C301.414 248.368 298.513 241.308 293.231 236.022Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <span className="text-light-secondary transition-colors duration-300 dark:text-dark-contrast-700">
            {title.length > 45 ? truncateString(title, 45) + "..." : title}
          </span>
        </div>

        <h1 className="mb-3 text-4xl font-bold leading-[1.25] text-light-primary dark:text-dark-primary xs:text-3xl">
          {title}
        </h1>

        <p className="mb-6 text-[1.05rem] font-light leading-[2] text-light-primary/80 dark:text-dark-primary/80 xs:mb-4">
          {excerpt}
        </p>

        <div className="mb-5 flex items-center justify-between sm:flex-col-reverse sm:gap-y-3">
          <Link href={`/category/${category.slug}`}>
            <div className="cursor-pointer rounded-full border border-accent bg-accent/20 px-3 py-2 font-semibold capitalize leading-none text-accent hover:underline xs:py-1 xs:text-xs">
              {category?.name}
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link href={`/author/${author.slug}`}>
              <div className="group flex items-center gap-3">
                <div className="h-[2.5rem] w-[2.5rem] overflow-hidden rounded-full">
                  <Image
                    className="h-[100%] w-[100%] bg-cover bg-center"
                    src={authorImageUrl}
                    width={authorImageWidth}
                    height={authorImageHeight}
                    alt={author.name || ""}
                  />
                </div>

                <span className="text-[1rem] font-medium capitalize text-light-primary group-hover:underline dark:text-dark-primary">
                  {author?.name}
                </span>
              </div>
            </Link>
            <div className="h-[4px] w-[4px] rounded-full bg-light-contrast-500"></div>
            <div className="text-sm font-light text-light-secondary dark:text-dark-contrast-700">
              <Date date={publishedAt ? publishedAt : _createdAt} />
            </div>
          </div>
        </div>
      </div>

      <div className="aspect-[8/3] h-auto w-[100%] overflow-hidden">
        <SlideImagePlaceholder
          size={{
            height: thumbnailHeight,
            width: thumbnailWidth,
          }}
          src={thumbnailUrl}
          alt={title}
        />
      </div>
    </div>
  );
};

export default ThumbnailHeader;
