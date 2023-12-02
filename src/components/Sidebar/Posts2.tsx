import React from "react";
import Image from "next/image";
import { DEMO_ARTICLES } from "@/data/articles";
import CardTitle from "@/shared/CardTitle";

const Posts2 = () => {
  return (
    <div className="sidebarCard dark:bg-dark-layoutElement">
      <CardTitle>Top of the week</CardTitle>

      <div>
        {DEMO_ARTICLES.slice(0, 5).map((item, i) => (
          <div
            className="group flex cursor-pointer items-center gap-2 border-b border-light-contrast-200 py-3 last:border-0 dark:border-dark-contrast-300/40"
            key={i}
          >
            <div className="relative flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-light-contrast-300 dark:bg-dark-contrast-300">
              <span className="relative z-20 text-lg font-semibold text-light-primary group-hover:text-white dark:text-white">
                2
              </span>

              <div className="absolute left-[0] top-[0] z-10 h-[100%] w-[100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Image
                  className="h-[100%] w-[100%] bg-cover bg-center"
                  src="/images/card.jpeg"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              </div>
            </div>

            <p className="text-base font-semibold leading-5 text-light-primary transition-colors duration-300 hover:text-accent dark:text-white">
              {item?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts2;
