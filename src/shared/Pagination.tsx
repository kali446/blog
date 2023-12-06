"use client";
import React, { useMemo } from "react";
import { useRouter } from "next/navigation";

interface Props {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  path: string;
}

const Pagination = ({ page, totalPages, hasNextPage, path }: Props) => {
  const currentPage = Math.min(Math.max(Number(page), 1), totalPages);
  const router = useRouter();

  const pages = useMemo(() => {
    const start = Math.floor((currentPage - 1) / 5) * 5;
    const end = start + 5 > totalPages ? totalPages : start + 5;
    return Array.from({ length: end - start }, (_, i) => start + i + 1);
  }, [currentPage, totalPages]);

  return (
    <div className="mx-auto flex w-[70%] items-center justify-center gap-4 md:w-[100%] md:gap-2 xs:gap-1">
      <div
        onClick={() => {
          if (currentPage === 1) {
            return;
          }

          router.push(`${path}?page=${currentPage - 1}`);
        }}
        className={`flex h-[3rem] w-[9rem] cursor-pointer items-center justify-center rounded-full bg-black/[.08] dark:bg-white/[.08] sm:h-[2.75rem] sm:w-[6rem] xs:h-[2.5rem] xs:w-[2.5rem] ${
          currentPage === 1 && "cursor-not-allowed"
        }`}
      >
        <img
          className="h-auto w-[.5rem] rotate-180 dark:invert"
          src="/icons/chevron-right.svg"
          alt=""
        />
      </div>

      <div className="h-[3rem] rounded-full border border-black/[.05] px-4 dark:border-white/[.05] sm:h-[2.75rem] xs:h-[2.5rem]">
        <ul className="flex h-full items-center">
          {pages.map((p, i) => (
            <li
              onClick={() => {
                router.push(`${path}?page=${p}`);
              }}
              className={`relative flex h-full cursor-pointer items-center justify-center px-3 text-[.85rem] font-medium text-light-primary transition-all before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:bg-accent before:transition-all hover:text-accent hover:before:w-full dark:text-white ${
                p === currentPage && "!text-accent before:w-full"
              }`}
            >
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => {
          if (!hasNextPage) {
            return;
          }

          router.push(`${path}?page=${currentPage + 1}`);
        }}
        className={`PrimaryGradient flex h-[3rem] w-[9rem] cursor-pointer items-center justify-center rounded-full sm:h-[2.75rem] sm:w-[6rem] xs:h-[2.5rem] xs:w-[2.5rem] ${
          !hasNextPage && "cursor-not-allowed bg-black/[.05]"
        }`}
      >
        <img
          className="h-auto w-[.5rem] invert"
          src="/icons/chevron-right.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Pagination;
