import React from "react";
import fs from "fs";
import path from "path";
import ProgressBar from "@/components/ProgressBar";
import NoThumbnailHeader from "@/components/Article/NoThumbnailHeader";
import Tableofcontents from "@/components/Article/Tableofcontents";
import PrevNext from "@/components/Article/PrevNext";
import Newsletter from "@/components/Sidebar/Newsletter";
import Categories from "@/components/Sidebar/Categories";
import FeaturedPosts from "@/components/Sidebar/Posts1";
import WeeklyTop from "@/components/Sidebar/Posts2";
import SocialHandles from "@/components/Sidebar/SocialHandles";
import Share from "@/components/Article/Share";
import Author from "@/components/Article/Author";
import matter from "gray-matter";
import Content from "@/components/Article/Content";
import Share2 from "@/components/Article/Share2";
import ThumbnailHeader from "@/components/Article/ThumbnailHeader";

interface Props {
  slug: string;
}

export default async function ArticlePage({
  params: { slug },
}: {
  params: Props;
}) {
  const source = fs.readFileSync(
    path.join("src", "data", (slug + ".mdx") as string),
    "utf8",
  );
  const { data, content } = matter(source);

  return (
    <div className="w-full">
      <ProgressBar />
      {/* <NoThumbnailHeader /> */}
      <ThumbnailHeader />

      <div className="sm:gap-3 relative mx-auto grid w-[90%] grid-cols-12 items-start gap-5 pt-6">
        <div className="sm:col-span-12 md:static md:col-span-6 sticky top-[7rem] col-span-2 flex flex-col items-end gap-5 lg:order-last lg:col-span-4 lg:items-start ">
          <Tableofcontents />

          <div className="md:hidden inline-block">
            <Share2 />
          </div>
        </div>

        <div className="md:order-last md:col-span-12 col-span-6 lg:col-span-8">
          <Content data={content} />
          <Share />
          <Author />
          <PrevNext />
        </div>

        <div className="col-span-4 lg:hidden">
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
