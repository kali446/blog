import {groq} from 'next-sanity'

const articleFields = groq`
  _id,
  title,
  excerpt,
  thumbnail,
  content,
  "slug": slug.current,
  "tags": tag->{name},
  "category": category->{name},
  "author": author->{name, avatar, bio, sociallinks},
`

export const getAllArticlesQuery = groq`
*[_type == "article"] | order(date desc, _updatedAt desc) {
  ${articleFields}
}`

export const articleBySlugQuery = groq`
*[_type == "article" && slug.current == $slug][0] {
  ${articleFields}
}
`

export interface Tag {
  name: string
}

export interface Author {
  name: string
  avatar: any
  bio: string
  sociallinks: [
    {
      name: string
      url: string
    },
  ]
}

export interface Category {
  name: string
  description: string
}

export interface Article {
  _id: string
  slug: string
  title: string
  category: Category
  excerpt?: string
  thumbnail?: any
  content?: any
  tags: Tag[]
  author?: Author
}
