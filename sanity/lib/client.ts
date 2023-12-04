import {createClient, type SanityClient} from 'next-sanity'
import {
  type Article,
  type Category,
  type Author,
  type Tag,
  getAllArticlesQuery,
  articleBySlugQuery,
} from './queries'

export function getClient(preview?: {token: string}): SanityClient {
  const projectId = 'jg0vxk9b'
  const dataset = 'development'
  const apiVersion = '2021-10-21'
  const useCdn = false

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
    encodeSourceMap: preview?.token ? true : false,
    // studioUrl,
  })

  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }

    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export async function getAllArticles(client: SanityClient): Promise<Article[]> {
  return (await client.fetch(getAllArticlesQuery)) || []
}

export async function getArticleBySlug(client: SanityClient, slug: string): Promise<Article> {
  return (await client.fetch(articleBySlugQuery, {slug})) || ({} as any)
}
