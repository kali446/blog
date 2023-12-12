import React from "react";
import CardArticle2 from "@/components/Cards/CardArticle2";
import Newsletter from "@/components/Sidebar/Newsletter";
import Categories from "@/components/Sidebar/Categories";
import FeaturedPosts from "@/components/Sidebar/Posts1";
import WeeklyTop from "@/components/Sidebar/Posts2";
import Description from "./Description";
import Pagination from "@/shared/Pagination";
import {
  getClient,
  getArticlesByCategory,
  getSidebarSectionArticles,
} from "@/sanity/client";
import { CATEGORY_RESULTS_LIMIT } from "@/utils";

export type PageProps = {
  params: { slug: string; [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export const revalidate = 60;

export default async function CategoryPage({
  params: { slug },
  searchParams,
}: PageProps) {
  const client = getClient();
  const pageNumber = Number(searchParams?.page || 1);
  const pageSize = CATEGORY_RESULTS_LIMIT;
  const skip = (pageNumber - 1) * pageSize;

  const data = await getArticlesByCategory(client, slug, pageNumber, pageSize);
  const sidebarArticles = await getSidebarSectionArticles(client);

  const totalPages = Math.ceil(data.total / pageSize);
  const hasNextPage = skip + pageSize < data.total;

  return (
    <div className="mx-auto grid w-[95%] grid-cols-12 py-6">
      <div className="col-span-9 w-full pr-5 lg:col-span-12 md:pr-0">
        <span className="text-[.7rem] font-light uppercase tracking-wide text-light-primary dark:text-white">
          Browsing category
        </span>
        <h1 className="pb-1 pt-4 text-[2.65rem] font-semibold capitalize leading-none text-light-primary dark:text-white">
          {data?.category?.name}
        </h1>
        <span className="text-xs lowercase text-light-secondary dark:text-dark-contrast-800">
          {data?.articles?.length} posts
        </span>

        <Description description={data.category?.description} />

        <div className="mt-8 grid grid-cols-12 gap-5 md:gap-4 sm:gap-0 sm:gap-y-5">
          {data?.articles?.map((item, i) => (
            <div key={i} className="col-span-6 sm:col-span-12">
              <CardArticle2 data={item} />
            </div>
          ))}
        </div>

        <div className="text-center">
          {!data?.articles?.length && (
            <div className="inline-flex h-[3.5rem] items-center justify-center bg-black/[.09] px-5 text-sm font-bold uppercase text-light-secondary">
              no articles found
            </div>
          )}
        </div>

        {data?.articles?.length ? (
          <div className="mt-[4rem] text-center sm:mt-[2rem]">
            <Pagination
              path={`/category/${data.category.slug}`}
              page={pageNumber}
              totalPages={totalPages}
              hasNextPage={hasNextPage}
            />
          </div>
        ) : null}
      </div>

      <div className="col-span-3 lg:hidden">
        <div className="flex flex-col gap-5">
          {sidebarArticles?.sectionOne && (
            <FeaturedPosts data={sidebarArticles.sectionOne} />
          )}
          {sidebarArticles?.sectionTwo && (
            <WeeklyTop data={sidebarArticles.sectionTwo} />
          )}
          {sidebarArticles?.sectionThree && (
            <Categories data={sidebarArticles.sectionThree} />
          )}
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
