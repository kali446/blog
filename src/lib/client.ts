import { createClient, type SanityClient } from "next-sanity";
import {
  type Article,
  type Category,
  type Author,
  getAllArticlesQuery,
  getArticleBySlugQuery,
  getPrevNextArticleQuery,
  getArticlesByCategoryQuery,
  getHomeSectionArticlesQuery,
  getArticlesByAuthorQuery,
  getSearchedArticlesQuery,
  getSidebarSectionArticlesQuery,
  getCategoryQuery,
  getAllCategoriesQuery,
  getAuthorQuery,
  getAllAuthorsQuery,
  getAllArticlesForSitemapQuery,
  getAllCategoriesForSitemapQuery,
  getAllAuthorsForSitemapQuery,
} from "./queries";

export function getClient(preview?: { token: string }): SanityClient {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
  const useCdn = false;

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
    encodeSourceMap: preview?.token ? true : false,
    // studioUrl,
  });

  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }

    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}

interface HomeSectionArticlesResponse {
  sectionOne?: Article[];
  sectionTwo?: Article[];
}

interface SidebarSectionArticlesResponse {
  sectionOne?: Article[];
  sectionTwo?: Article[];
  sectionThree?: Category[];
}

interface ArticlesByCategoryResponse {
  category: Category;
  articles?: Article[];
  total: number;
}

interface ArticlesByAuthorResponse {
  author: Author;
  articles?: Article[];
  total: number;
}

interface SearchedArticlesResponse {
  articles?: Article[];
  total: number;
}

interface AllArticlesResponse {
  articles?: Article[];
  total: number;
}

export async function getAllArticles(
  client: SanityClient,
  pageNumber?: number,
  pageSize?: number,
  fields?: "LONG" | "SHORT",
): Promise<AllArticlesResponse> {
  const defaultPageNumber = pageNumber ?? 1;
  const defaultPageSize = pageSize ?? 100;
  const defaultFields = fields ?? "SHORT";

  return (
    (await client.fetch(
      getAllArticlesQuery(defaultPageNumber, defaultPageSize, defaultFields),
    )) || ({} as AllArticlesResponse)
  );
}

export async function getAllCategories(
  client: SanityClient,
): Promise<Category[]> {
  return (await client.fetch(getAllCategoriesQuery)) || [];
}

export async function getAuthor(
  client: SanityClient,
  slug: string,
): Promise<Author> {
  return (await client.fetch(getAuthorQuery, { slug })) || ({} as any);
}

export async function getAllAuthors(client: SanityClient): Promise<Author[]> {
  return (await client.fetch(getAllAuthorsQuery)) || [];
}

export async function getCategory(
  client: SanityClient,
  slug: string,
): Promise<Category> {
  return (await client.fetch(getCategoryQuery, { slug })) || ({} as any);
}

export async function getArticleBySlug(
  client: SanityClient,
  slug: string,
): Promise<Article> {
  return (await client.fetch(getArticleBySlugQuery, { slug })) || ({} as any);
}

export async function getPrevNextArticle(
  client: SanityClient,
  slug: string,
): Promise<Article> {
  return (await client.fetch(getPrevNextArticleQuery, { slug })) || ({} as any);
}

export async function getArticlesByCategory(
  client: SanityClient,
  slug: string,
  pageNumber?: number,
  pageSize?: number,
): Promise<ArticlesByCategoryResponse> {
  const defaultPageNumber = pageNumber ?? 1;
  const defaultPageSize = pageSize ?? 100;

  return (
    (await client.fetch(
      getArticlesByCategoryQuery(defaultPageNumber, defaultPageSize),
      {
        slug,
      },
    )) || ({} as ArticlesByCategoryResponse)
  );
}

export async function getHomeSectionArticles(
  client: SanityClient,
): Promise<HomeSectionArticlesResponse> {
  return (
    (await client.fetch(getHomeSectionArticlesQuery)) ||
    ({} as HomeSectionArticlesResponse)
  );
}

export async function getArticlesByAuthor(
  client: SanityClient,
  slug: string,
  pageNumber?: number,
  pageSize?: number,
): Promise<ArticlesByAuthorResponse> {
  const defaultPageNumber = pageNumber ?? 1;
  const defaultPageSize = pageSize ?? 100;

  return (
    (await client.fetch(
      getArticlesByAuthorQuery(defaultPageNumber, defaultPageSize),
      {
        slug,
      },
    )) || ({} as ArticlesByAuthorResponse)
  );
}

export async function getSearchedArticles(
  client: SanityClient,
  query: string,
  pageNumber?: number,
  pageSize?: number,
): Promise<SearchedArticlesResponse> {
  const defaultPageNumber = pageNumber ?? 1;
  const defaultPageSize = pageSize ?? 1;

  return (
    (await client.fetch(
      getSearchedArticlesQuery(defaultPageNumber, defaultPageSize),
      {
        query,
      },
    )) || ({} as SearchedArticlesResponse)
  );
}

export async function getSidebarSectionArticles(
  client: SanityClient,
): Promise<SidebarSectionArticlesResponse> {
  return (
    (await client.fetch(getSidebarSectionArticlesQuery)) ||
    ({} as SidebarSectionArticlesResponse)
  );
}

// SITEMAP
export async function getAllArticlesForSitemap(
  client: SanityClient,
): Promise<Article[]> {
  return (await client.fetch(getAllArticlesForSitemapQuery)) || [];
}

export async function getAllCategoriesForSitemap(
  client: SanityClient,
): Promise<Article[]> {
  return (await client.fetch(getAllCategoriesForSitemapQuery)) || [];
}

export async function getAllAuthorsForSitemap(
  client: SanityClient,
): Promise<Article[]> {
  return (await client.fetch(getAllAuthorsForSitemapQuery)) || [];
}
