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
  getAllArticles,
} from "@/lib/client";
import { generateImageUrl, shareURL } from "@/utils";
import { HomeSEO } from "@/data/seo";

interface Props {
  slug: string;
}

const client = getClient();

export const revalidate = 60;

export async function generateMetadata({
  params: { slug },
}: {
  params: Props;
}) {
  const data = await getArticleBySlug(client, slug);
  const thumbnailHeight = 540;
  const thumbnailWidth = 1440;
  const getThumbnailUrl = generateImageUrl({
    thumbnail: data.thumbnail,
    size: {
      height: thumbnailHeight,
      width: thumbnailWidth,
    },
  });

  try {
    if (!data)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };

    return {
      title: data.title,
      description: data.excerpt,
      keywords: "tag, goes, here",
      alternates: {
        canonical: `/article/${data.slug}`,
      },
      twitter: {
        card: "summary_large_image",
        site: "@clonedverse",
        title: "Cloned Verse",
        description: data.excerpt,
        images: [`${getThumbnailUrl}`],
      },
      openGraph: {
        type: "article",
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/article/${data.slug}`,
        description: data.excerpt,
        siteName: HomeSEO.title,
        images: [`${getThumbnailUrl}`],
      },
    };
  } catch (error) {
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
  const prevNextArticles: any = await getPrevNextArticle(client, slug);
  const shareUrl = shareURL({ slug: data.slug });

  return (
    <div className="w-full pb-section sm:pb-0">
      <ProgressBar />
      <ThumbnailHeader data={data} />

      <div className="relative mx-auto mt-[2.5rem] w-[55%] lg:w-[70%] md:w-[80%] sm:w-[90%]">
        <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 dark:bg-dark-layoutElement xs:flex-col xs:items-start xs:gap-y-3">
          <Share2 layout="horizontal" url={shareUrl} title={data.title} />

          <div className="PrimaryGradient relative bg-clip-text text-xs font-black uppercase text-light-primary text-transparent before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-[100%] before:bg-accent dark:text-dark-secondary xs:w-full xs:text-center xs:before:hidden">
            1 min read
          </div>
        </div>

        <div className="mb-[2.5rem] mt-[1rem]">
          <Tableofcontents />
        </div>

        <Content data={data?.content} />
        <Share url={shareUrl} title={data.title} />
        <Author data={data?.author} />
        <PrevNext data={prevNextArticles} />
      </div>
    </div>
  );
}
