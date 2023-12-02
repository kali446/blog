import React from "react";
import { DEMO_ARTICLES } from "@/data/articles";
import CardTitle from "@/shared/CardTitle";

const Posts1 = () => {
  return (
    <div className="sidebarCard dark:bg-dark-layoutElement">
      <CardTitle>Featured Articles</CardTitle>

      <div>
        {DEMO_ARTICLES.slice(0, 5).map((item, i) => (
          <div
            className="cursor-pointer border-b border-light-contrast-200 py-3 last:border-0 dark:border-dark-contrast-300/40"
            key={i}
          >
            <p>
              <span className="text-xs font-semibold tracking-wide text-light-primary transition-colors duration-300 hover:text-accent dark:text-dark-contrast-900">
                Elliet Alderson
              </span>

              <span className="px-2 text-xs tracking-wide text-light-secondary dark:text-dark-contrast-900">
                February 27, 2023
              </span>
            </p>

            <p className="pt-1 text-base font-semibold text-light-primary transition-colors duration-300 hover:text-accent dark:text-white">
              {item?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts1;
