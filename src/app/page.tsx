import Newsletter from "@/components/Newsletter";
import Articles from "@/components/Sections/Articles";
import CategoryArticles from "@/components/Sections/CategoryArticles";
import FeaturedArticles from "@/components/Sections/FeaturedArticles";
import LatestArticles from "@/components/Sections/LatestArticles";
import SliderArticles from "@/components/Sections/SliderArticles";
import SmallCategoryArticles from "@/components/Sections/SmallCategoryArticles";

export default function Home() {
  return (
    <div className="xs:px-3 min-h-screen px-5 py-4">
      <LatestArticles />
      <FeaturedArticles />
      <CategoryArticles />
      <SliderArticles />
      <SmallCategoryArticles />
      <Newsletter />
      <Articles />
    </div>
  );
}
