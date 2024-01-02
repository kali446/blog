import Newsletter from "@/components/Newsletter";
import Articles from "@/components/Sections/Articles";
import { HomeSEO } from "@/data/seo";
import { getAllArticles, getClient } from "@/lib/client";
import { HOME_ARTICLES_RESULTS_LIMIT } from "@/utils";
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

export const revalidate = 60;

export default async function Home() {
  const client = getClient();
  const recentArticles = await getAllArticles(
    client,
    1,
    HOME_ARTICLES_RESULTS_LIMIT,
  );

  return (
    <div className="min-h-screen px-5 py-4 xs:px-3">
      <Articles
        data={{
          articles: recentArticles.articles,
          total: recentArticles.total,
        }}
      />
      <Newsletter />
    </div>
  );
}
