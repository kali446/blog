import React from "react";
import Image from "next/image";
import Newsletter from "@/components/Sidebar/Newsletter";
import Categories from "@/components/Sidebar/Categories";
import FeaturedPosts from "@/components/Sidebar/Posts1";
import WeeklyTop from "@/components/Sidebar/Posts2";
import LoadMore from "@/shared/Button/LoadMore";
import Description from "../[slug]/Description";
import Link from "next/link";
import CardArticle9 from "@/components/Cards/CardArticle9";
import {
  getClient,
  getArticlesByAuthor,
  getSidebarSectionArticles,
} from "@/lib/client";
import { AUTHOR_RESULTS_LIMIT, generateImageUrl } from "@/utils";
import Pagination from "@/shared/Pagination";

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
  const pageSize = AUTHOR_RESULTS_LIMIT;
  const skip = (pageNumber - 1) * pageSize;

  const data = await getArticlesByAuthor(client, slug, pageNumber, pageSize);
  const sidebarArticles = await getSidebarSectionArticles(client);

  const totalPages = Math.ceil(data.total / pageSize);
  const hasNextPage = skip + pageSize < data.total;

  // For Image URL
  const avatarImgHeight = 450;
  const avatarImgWidth = 450;
  const avatarImgUrl = generateImageUrl({
    thumbnail: data.author.avatar,
    size: {
      height: avatarImgHeight,
      width: avatarImgWidth,
    },
  });

  return (
    <div className="mx-auto grid w-[95%] grid-cols-12 py-6 xs:py-4">
      <div className="col-span-9 lg:col-span-12">
        <div className="grid grid-cols-12 gap-4 pb-[5rem] xs:pb-[2.5rem]">
          <div className="col-span-6 sm:order-last sm:col-span-12 sm:px-4 xs:px-2">
            <span className="text-[.725rem] uppercase tracking-wide text-light-primary dark:text-white">
              Browsing {data.author.name}'s articles
            </span>
            <h1 className="pb-1 pt-4 text-[2.65rem] font-semibold capitalize leading-none text-light-primary dark:text-white">
              {data.author.name}
            </h1>
            <span className="text-xs lowercase text-light-secondary dark:text-dark-contrast-800">
              {data?.articles?.length} posts
            </span>

            <div className="my-3 flex items-center gap-3 border-y border-black/30 py-3 dark:border-white/30">
              <span className="PrimaryGradient bg-clip-text text-xs font-bold uppercase text-transparent drop-shadow-sm">
                Senior Developer
              </span>

              <ul className="flex items-center gap-3 border-l border-black/30 pl-3 dark:border-white/30">
                {data?.author?.sociallinks.map((item, i) => {
                  return (
                    <Link key={i} href={item.url} target="_blank">
                      <li title={item.name} className="cursor-pointer">
                        <img
                          className={`h-auto w-[.9rem] opacity-60 transition-opacity hover:opacity-100 dark:invert  ${
                            item.name.toLowerCase() === "x" ? "w-[.6rem]" : ""
                          }`}
                          src={`${
                            item.name.toLowerCase() === "x"
                              ? "/icons/x-b.svg"
                              : item.name.toLowerCase() === "facebook"
                                ? "/icons/facebook-b.svg"
                                : item.name.toLowerCase() === "instagram"
                                  ? "/icons/instagram-b.svg"
                                  : ""
                          }`}
                          alt="x.com"
                        />
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>

            <Description description={data.author.bio} />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <div className="flex flex-col items-center gap-4">
              <div className="flex aspect-square w-[20rem] items-center justify-center overflow-hidden rounded-[2rem] bg-[#ff006e] xs:w-[95%]">
                <Image
                  className="h-[100%] w-[100%] bg-center object-contain"
                  src={avatarImgUrl}
                  width={avatarImgWidth}
                  height={avatarImgHeight}
                  alt={data.author.name}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 w-full">
          {data?.articles?.map((item, i) => (
            <div key={i} className="col-span-12">
              <CardArticle9 item={item} index={i} />
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
          <div className="sm:mt-[2rem] mt-[4rem] text-center">
            <Pagination
              path={`/author/${data.author.slug}`}
              page={pageNumber}
              totalPages={totalPages}
              hasNextPage={hasNextPage}
            />
          </div>
        ) : null}
      </div>

      <div className="col-span-3 lg:hidden">
        <div className="flex flex-col gap-5">
          <Newsletter />
          {sidebarArticles?.sectionOne && (
            <FeaturedPosts data={sidebarArticles.sectionOne} />
          )}
          {sidebarArticles?.sectionTwo && (
            <WeeklyTop data={sidebarArticles.sectionTwo} />
          )}
          {sidebarArticles?.sectionThree && (
            <Categories data={sidebarArticles.sectionThree} />
          )}
        </div>
      </div>
    </div>
  );
}
