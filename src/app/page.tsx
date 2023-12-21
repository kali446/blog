import Newsletter from "@/components/Newsletter";
import Articles from "@/components/Sections/Articles";
import CategoryArticles from "@/components/Sections/CategoryArticles";
import FeaturedArticles from "@/components/Sections/FeaturedArticles";
import LatestArticles from "@/components/Sections/LatestArticles";
import SliderArticles from "@/components/Sections/SliderArticles";
import SmallCategoryArticles from "@/components/Sections/SmallCategoryArticles";
import { HomeSEO } from "@/data/seo";
import {
  getClient,
  getHomeSectionArticles,
  getArticlesByCategory,
} from "@/lib/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: HomeSEO.title,
  description: HomeSEO.description,
  applicationName: HomeSEO.sitename,
  openGraph: {
    images: [`${HomeSEO.ogImage}`],
    locale: "en_US",
    type: "website",
    title: HomeSEO.title,
    description: HomeSEO.description,
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/`,
    siteName: HomeSEO.sitename,
  },
  twitter: {
    card: "summary_large_image",
    title: HomeSEO.title,
    description: HomeSEO.description,
    creator: "@manziljunior",
    images: [`${HomeSEO.ogImage}`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const revalidate = 5;

export default async function Home() {
  const client = getClient();
  const sectionArticles = await getHomeSectionArticles(client);
  const categoryArticles1 = await getArticlesByCategory(client, "technology");
  const categoryArticles2 = await getArticlesByCategory(client, "programming");
  const categoryArticles3 = await getArticlesByCategory(client, "ai", 1, 3);

  return (
    <div className="min-h-screen px-5 py-4 xs:px-3">
      {sectionArticles?.sectionOne ? (
        <LatestArticles data={sectionArticles.sectionOne} />
      ) : null}
      {sectionArticles?.sectionTwo ? (
        <FeaturedArticles data={sectionArticles.sectionTwo} />
      ) : null}
      {categoryArticles1?.articles?.length ? (
        <CategoryArticles data={categoryArticles1} />
      ) : null}
      {categoryArticles2?.articles?.length ? (
        <SliderArticles data={categoryArticles2} />
      ) : null}
      {categoryArticles3?.articles?.length ? (
        <SmallCategoryArticles data={categoryArticles3} />
      ) : null}
      <Newsletter />
      <Articles />
    </div>
  );
}
