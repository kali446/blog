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
    url: `${process.env.FRONTEND_URL}/`,
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

export const revalidate = 1800;

export default async function Home() {
  const client = getClient();
  const sectionArticles = await getHomeSectionArticles(client);
  const categoryArticles1 = await getArticlesByCategory(
    client,
    "natural-landforms",
  );
  const categoryArticles2 = await getArticlesByCategory(
    client,
    "natural-landforms",
  );
  const categoryArticles3 = await getArticlesByCategory(
    client,
    "natural-landforms",
    1,
    3,
  );

  return (
    <div className="min-h-screen px-5 py-4 xs:px-3">
      {sectionArticles?.sectionOne && (
        <LatestArticles data={sectionArticles.sectionOne} />
      )}
      {sectionArticles?.sectionTwo && (
        <FeaturedArticles data={sectionArticles.sectionTwo} />
      )}
      <CategoryArticles data={categoryArticles3} />
      <SliderArticles data={categoryArticles2} />
      <SmallCategoryArticles data={categoryArticles1} />
      <Newsletter />
      <Articles />
    </div>
  );
}
