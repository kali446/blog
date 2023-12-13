"use client";
import React from "react";
import { Article } from "@/lib/queries";
import Link from "next/link";
import Image from "next/image";

interface Props {
  data: {
    prev?: Article;
    next?: Article;
  };
}

const PrevNext = ({ data }: Props) => {
  const cardClass = `group flex cursor-pointer items-end gap-3 sm:w-full sm:items-center md:w-6/12`;

  return (
    <div className="mb-[5rem] flex items-center justify-center gap-3 border-b border-light-contrast-300 pb-[5rem] dark:border-dark-contrast-300/50 sm:flex-col sm:gap-6">
      {data?.prev && (
        <Link href={`/article/${data.prev.slug}`}>
          <div className={cardClass}>
            <div className="flex h-[3rem] w-[3rem] shrink-0 rotate-180 items-center justify-center rounded-xl bg-light-contrast-300 dark:bg-dark-contrast-300">
              <Image
                className="h-auto w-[1rem] dark:invert"
                width={30}
                height={30}
                src={"/icons/arrow.svg"}
                alt="Previous Article"
              />
            </div>

            <div className="sm:relative">
              <span className="text-xs font-medium uppercase  text-light-primary drop-shadow-sm dark:text-dark-primary sm:absolute sm:left-0 sm:top-[-150%]">
                prev post
              </span>

              <h2 className="text-md mt-4 font-semibold leading-5 transition-colors duration-200 hover:text-accent sm:mt-0">
                {data?.prev?.title}
              </h2>
            </div>
          </div>
        </Link>
      )}

      {data?.next && (
        <Link href={`/article/${data.next.slug}`}>
          <div className={`${cardClass} flex-row-reverse`}>
            <div className="flex h-[3rem] w-[3rem] shrink-0 items-center justify-center rounded-xl bg-light-contrast-300 dark:bg-dark-contrast-300">
              <Image
                className="h-auto w-[1rem] dark:invert"
                width={30}
                height={30}
                src={"/icons/arrow.svg"}
                alt="Previous Article"
              />
            </div>

            <div className="flex flex-col items-end sm:relative">
              <span className="text-xs font-medium uppercase text-light-primary drop-shadow-sm dark:text-dark-primary sm:absolute sm:right-0 sm:top-[-150%]">
                next post
              </span>

              <h2 className="text-md mt-4 text-right font-semibold leading-5 transition-colors duration-200 hover:text-accent sm:mt-0">
                {data.next?.title}
              </h2>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PrevNext;
