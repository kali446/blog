import React from "react";
import CardArticle2 from "@/components/Cards/CardArticle2";
import Newsletter from "@/components/Sidebar/Newsletter";
import Categories from "@/components/Sidebar/Categories";
import FeaturedPosts from "@/components/Sidebar/Posts1";
import WeeklyTop from "@/components/Sidebar/Posts2";
import SocialHandles from "@/components/Sidebar/SocialHandles";
import LoadMore from "@/shared/Button/LoadMore";

const CategoryPage = () => {
  return (
    <div className="mx-auto grid w-[95%] grid-cols-12 py-6">
      <div className="col-span-9 w-full pr-5 lg:col-span-12 md:pr-0">
        <span className="text-[.7rem] font-light uppercase tracking-wide text-light-primary dark:text-white">
          Browsing category
        </span>
        <h1 className="pb-1 pt-4 text-[2.65rem] font-semibold capitalize leading-none text-light-primary dark:text-white">
          Computers
        </h1>
        <span className="text-xs lowercase text-light-secondary dark:text-dark-contrast-800">
          11 posts
        </span>

        <p className="w-[65%] pb-6 pt-4 text-[1.1rem] font-light leading-relaxed text-light-primary dark:text-dark-contrast-900 md:w-full">
          Stay ahead of the game with the latest computer news and reviews. From
          laptops to desktops, learn about the latest specs, features, and
          innovations in the world of computing.
        </p>

        <div className="mt-8 grid grid-cols-12 gap-5 md:gap-4 sm:gap-0 sm:gap-y-5">
          {Array.from({ length: 4 }).map((item, i) => (
            <div className="col-span-6 sm:col-span-12" key={i}>
              <CardArticle2 />
            </div>
          ))}
        </div>

        <div className="mt-[4rem] text-center">
          <LoadMore />
        </div>
      </div>

      <div className="col-span-3 lg:hidden">
        <div className="flex flex-col gap-5">
          <FeaturedPosts />
          <WeeklyTop />
          <Categories />
          <SocialHandles />
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
