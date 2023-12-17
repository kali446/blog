import {
  getAllArticlesForSitemap,
  getAllAuthorsForSitemap,
  getAllCategoriesForSitemap,
  getClient,
} from "@/lib/client";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const client = getClient();

  // get all articles
  const articles = await getAllArticlesForSitemap(client);

  const articleUrls =
    articles?.map((item, i) => {
      return {
        url: `${baseUrl}/article/${item.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  // get all categories
  const categories = await getAllCategoriesForSitemap(client);

  const categoryUrls =
    categories?.map((item, i) => {
      return {
        url: `${baseUrl}/category/${item.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  // get all authors
  const authors = await getAllAuthorsForSitemap(client);

  const authorUrls =
    authors?.map((item, i) => {
      return {
        url: `${baseUrl}/author/${item.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
    ...articleUrls,
    ...categoryUrls,
    ...authorUrls,
  ];
}
