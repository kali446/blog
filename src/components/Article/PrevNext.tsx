"use client";
import React from "react";
import { Article } from "@/lib/queries";
import Link from "next/link";

interface Props {
  data: {
    prev?: Article;
    next?: Article;
  };
}

const PrevNext = ({ data }: Props) => {
  return (
    <div className="mb-[5rem] flex items-center gap-3 border-b border-light-contrast-300 pb-[5rem] dark:border-dark-contrast-300/50 sm:flex-col sm:gap-6">
      {data?.prev && (
        <Link href={`/article/${data.prev.slug}`}>
          <div className="group flex cursor-pointer items-end gap-3 md:w-6/12 sm:w-full sm:items-center">
            <div className="flex h-[3rem] w-[3rem] shrink-0 rotate-180 items-center justify-center rounded-xl bg-light-contrast-300 text-black dark:bg-dark-contrast-300 dark:text-dark-primary">
              <svg
                className="transition-all duration-200 group-hover:translate-x-[5px]"
                width={16}
                height={"auto"}
                viewBox="0 0 512 426"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M503.816 193.107L318.915 8.20165C313.637 2.92351 306.602 0.0263672 299.101 0.0263672C291.592 0.0263672 284.561 2.92768 279.283 8.20165L262.496 24.9934C257.222 30.2633 254.316 37.3022 254.316 44.8073C254.316 52.3082 257.222 59.5844 262.496 64.8542L370.364 172.96H27.6603C12.2088 172.96 0 185.057 0 200.512V224.251C0 239.707 12.2088 253.023 27.6603 253.023H371.588L262.5 361.733C257.226 367.011 254.32 373.858 254.32 381.363C254.32 388.86 257.226 395.807 262.5 401.081L279.287 417.819C284.566 423.097 291.596 425.974 299.105 425.974C306.606 425.974 313.641 423.06 318.919 417.782L503.821 232.88C509.111 227.586 512.021 220.518 512 213.004C512.017 205.466 509.111 198.394 503.816 193.107Z"
                  fill="currentColor"
                />
              </svg>
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
          <div className="group flex cursor-pointer flex-row-reverse items-end gap-3 md:w-6/12 sm:w-full sm:items-center">
            <div className="flex h-[3rem] w-[3rem] shrink-0 items-center justify-center rounded-xl bg-light-contrast-200 text-black dark:bg-dark-contrast-300 dark:text-dark-primary">
              <svg
                className="transition-all duration-200 group-hover:translate-x-[5px]"
                width={16}
                height={"auto"}
                viewBox="0 0 512 426"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M503.816 193.107L318.915 8.20165C313.637 2.92351 306.602 0.0263672 299.101 0.0263672C291.592 0.0263672 284.561 2.92768 279.283 8.20165L262.496 24.9934C257.222 30.2633 254.316 37.3022 254.316 44.8073C254.316 52.3082 257.222 59.5844 262.496 64.8542L370.364 172.96H27.6603C12.2088 172.96 0 185.057 0 200.512V224.251C0 239.707 12.2088 253.023 27.6603 253.023H371.588L262.5 361.733C257.226 367.011 254.32 373.858 254.32 381.363C254.32 388.86 257.226 395.807 262.5 401.081L279.287 417.819C284.566 423.097 291.596 425.974 299.105 425.974C306.606 425.974 313.641 423.06 318.919 417.782L503.821 232.88C509.111 227.586 512.021 220.518 512 213.004C512.017 205.466 509.111 198.394 503.816 193.107Z"
                  fill="currentColor"
                />
              </svg>
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
