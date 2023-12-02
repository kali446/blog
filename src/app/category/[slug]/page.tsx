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
    <div className="mx-auto flex w-[95%] py-6">
      <div className="w-full pr-5 lg:w-9/12">
        <span className="dark:text-white text-[.7rem] font-light uppercase tracking-wide text-light-primary">
          Browsing category
        </span>
        <h1 className="dark:text-white pt-4 pb-1 text-[2.65rem] font-semibold capitalize leading-none text-light-primary">
          Computers
        </h1>
        <span className="dark:text-dark-contrast-800 text-xs lowercase text-light-secondary">
          11 posts
        </span>

        <p className="dark:text-dark-contrast-900 w-[65%] pb-6 pt-4 text-[1.1rem] font-light leading-relaxed text-light-primary">
          Stay ahead of the game with the latest computer news and reviews. From
          laptops to desktops, learn about the latest specs, features, and
          innovations in the world of computing.
        </p>

        <div className="mt-8 lg:mt-10 grid sm:grid-cols-1 gap-5 lg:grid-cols-2">
          {Array.from({ length: 4 }).map((item, i) => (
            <div key={i}>
              <CardArticle2 />
            </div>
          ))}
        </div>

        <div className="mt-[4rem] text-center">
          <LoadMore />
        </div>
      </div>

      <div className="w-full lg:w-3/12">
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
