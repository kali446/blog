import React from "react";
import ProgressBar from "@/components/ProgressBar";
import Tableofcontents from "@/components/Article/Tableofcontents";
import PrevNext from "@/components/Article/PrevNext";
import Newsletter from "@/components/Sidebar/Newsletter";
import Categories from "@/components/Sidebar/Categories";
import FeaturedPosts from "@/components/Sidebar/Posts1";
import WeeklyTop from "@/components/Sidebar/Posts2";
import SocialHandles from "@/components/Sidebar/SocialHandles";
import Share from "@/components/Article/Share";
import Author from "@/components/Article/Author";
import Content from "@/components/Article/Content";
import Share2 from "@/components/Article/Share2";
import ThumbnailHeader from "@/components/Article/ThumbnailHeader";
import { getClient, getArticleBySlug } from "../../../../sanity/lib/client";

interface Props {
  slug: string;
}

export const revalidate = 60;

export default async function ArticlePage({
  params: { slug },
}: {
  params: Props;
}) {
  const client = getClient();
  const data = await getArticleBySlug(client, slug);

  return (
    <div className="w-full">
      <ProgressBar />
      <ThumbnailHeader data={data} />

      <div className="relative mx-auto grid w-[95%] grid-cols-12 items-start gap-5 pt-6 sm:gap-3">
        <div className="sticky top-[7rem] col-span-2 flex flex-col items-end gap-5 lg:order-last lg:col-span-4 lg:items-start md:static md:col-span-6 sm:col-span-12 ">
          <Tableofcontents />

          <div className="inline-block md:hidden">
            <Share2 />
          </div>
        </div>

        <div className="col-span-7 lg:col-span-8 md:order-last md:col-span-12">
          <Content data={data?.content} />
          <Share slug={data?.slug} />
          <Author data={data?.author} />
          <PrevNext />
        </div>

        <div className="col-span-3 lg:hidden">
          <div className="flex flex-col gap-5">
            <Newsletter />
            <FeaturedPosts />
            <WeeklyTop />
            <Categories />
            <SocialHandles />
          </div>
        </div>
      </div>
    </div>
  );
}
