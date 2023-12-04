import Newsletter from "@/components/Newsletter";
import Articles from "@/components/Sections/Articles";
import CategoryArticles from "@/components/Sections/CategoryArticles";
import FeaturedArticles from "@/components/Sections/FeaturedArticles";
import LatestArticles from "@/components/Sections/LatestArticles";
import SliderArticles from "@/components/Sections/SliderArticles";
import SmallCategoryArticles from "@/components/Sections/SmallCategoryArticles";
import { getClient, getAllArticles } from "../../sanity/lib/client";

export const revalidate = 60;

export default async function Home() {
  const client = getClient();
  const data = await getAllArticles(client);

  return (
    <div className="min-h-screen px-5 py-4 xs:px-3">
      <LatestArticles />
      <FeaturedArticles />
      <CategoryArticles />
      <SliderArticles />
      <SmallCategoryArticles />
      <Newsletter />
      <Articles data={data} />
    </div>
  );
}
