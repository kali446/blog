import React from "react";
import ProgressBar from "@/components/ProgressBar";
import Tableofcontents from "@/components/Article/Tableofcontents";
import PrevNext from "@/components/Article/PrevNext";
import Newsletter from "@/components/Sidebar/Newsletter";
import Categories from "@/components/Sidebar/Categories";
import FeaturedPosts from "@/components/Sidebar/Posts1";
import WeeklyTop from "@/components/Sidebar/Posts2";
import Share from "@/components/Article/Share";
import Author from "@/components/Article/Author";
import Content from "@/components/Article/Content";
import Share2 from "@/components/Article/Share2";
import ThumbnailHeader from "@/components/Article/ThumbnailHeader";
import {
  getClient,
  getArticleBySlug,
  getPrevNextArticle,
  getSidebarSectionArticles,
  getAllArticles,
} from "@/lib/client";
import { shareURL } from "@/utils";

interface Props {
  slug: string;
}

const client = getClient();

export async function generateMetadata({
  params: { slug },
}: {
  params: Props;
}) {
  const data = await getArticleBySlug(client, slug);

  try {
    if (!data)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };

    return {
      title: data.title,
      description: data.excerpt,
      alternates: {
        canonical: `/article/${data.slug}`,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

export async function generateStaticParams() {
  const data = await getAllArticles(client);

  if (!data?.articles?.length) return [];

  return data.articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params: { slug },
}: {
  params: Props;
}) {
  const data = await getArticleBySlug(client, slug);
  const sidebarArticles = await getSidebarSectionArticles(client);
  const prevNextArticles: any = await getPrevNextArticle(client, slug);

  const shareUrl = shareURL({ slug: data.slug });

  return (
    <div className="w-full pb-section">
      <ProgressBar />
      <ThumbnailHeader data={data} />

      <div className="relative mx-auto grid w-[95%] grid-cols-12 items-start gap-5 pt-6 sm:gap-3">
        <div className="sticky top-[7rem] col-span-2 flex flex-col items-end gap-4 lg:order-last lg:col-span-4 lg:items-start md:static md:col-span-6 sm:col-span-12 ">
          <Tableofcontents />

          <div className="inline-block md:hidden">
            <Share2 url={shareUrl} />
          </div>
        </div>

        <div className="col-span-7 lg:col-span-8 md:order-last md:col-span-12">
          <Content data={data?.content} />
          <Share slug={data?.slug} />
          <Author data={data?.author} />
          <PrevNext data={prevNextArticles} />
        </div>

        <div className="sticky top-[7rem] col-span-3 lg:hidden">
          <div className="flex flex-col gap-5">
            <Newsletter />

            {sidebarArticles?.sectionOne?.length && (
              <FeaturedPosts data={sidebarArticles.sectionOne} />
            )}
            {sidebarArticles?.sectionTwo?.length && (
              <WeeklyTop data={sidebarArticles.sectionTwo} />
            )}
            {sidebarArticles?.sectionThree?.length && (
              <Categories data={sidebarArticles.sectionThree} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
