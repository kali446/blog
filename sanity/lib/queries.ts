import {groq} from 'next-sanity'

export interface Tag {
  name: string
}

export interface Author {
  name: string
  slug: string
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
  slug: string
  name: string
  description?: string
  thumbnail?: any
  total?: number
}

export interface Article {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  publishedAt: Date
  category: Category
  tags: Tag[]
  excerpt: string
  thumbnail: any
  author: Author
  content?: any
}

const articleFields = groq`
  _id,
  _createdAt,
  title,
  publishedAt,
  excerpt,
  thumbnail,
  content,
  "slug": slug.current,
  "tags": tag->{name},
  "category": category->{
    name, 
    description,
    "slug": slug.current
  },
  "author": author->{ 
    name, 
    avatar, 
    bio, 
    sociallinks,
    "slug": slug.current,
  },
`

const categoryFields = groq`
  _id,
  name,
  description,
  thumbnail,
  "slug": slug.current,
`

const authorFields = groq`
  name, 
  avatar, 
  bio, 
  sociallinks,
  "slug": slug.current,
`

export const getAllArticlesQuery = groq`
*[_type == "article"] | order(date desc, _updatedAt desc) {
  ${articleFields}
}`

export const getArticleBySlugQuery = groq`
*[_type == "article" && slug.current == $slug][0] {
  ${articleFields}
}
`

export const getPrevNextArticleQuery = groq`
*[_type == "article" && slug.current == $slug][0] {
  "prev": *[_type == "article" && ^.publishedAt > publishedAt] | order(publishedAt asc)[0] {
    ${articleFields}
  },
  
  "next": *[_type == "article" && ^.publishedAt < publishedAt] | order(publishedAt asc)[0] {
    ${articleFields}
  }
}
`

export const getArticlesByCategoryQuery = (pageNumber: number, pageSize: number) => {
  const offset = (pageNumber - 1) * pageSize

  return groq`
    *[ _type == "category" && slug.current == $slug][0] { 
      "articles": *[_type=="article" && references(^._id )] {
        ${articleFields}
      }[${offset}...${offset + pageSize}],
      "category": {
        ${categoryFields}
      },
      "total": count(*[_type == "article" && category._ref == ^._id])
  }
`
}

export const getArticlesByAuthorQuery = (pageNumber: number, pageSize: number) => {
  const offset = (pageNumber - 1) * pageSize

  return groq`
    *[ _type == "author" && slug.current == $slug][0] { 
      "articles": *[_type=="article" && references(^._id )] {
        ${articleFields}
      }[${offset}...${offset + pageSize}],
      "author": {
        ${authorFields}
      },
      "total": count(*[_type == "article" && author._ref == ^._id])
  }
`
}

export const getHomeSectionArticlesQuery = groq`
*[ _type == "homeSectionArticle"][0] { 
  "sectionOne": SectionOne.article[]-> {
    ${articleFields}
  },
  "sectionTwo": SectionTwo.article[]-> {
    ${articleFields}
  }
}
`

export const getSearchedArticlesQuery = (pageNumber: number, pageSize: number) => {
  const offset = (pageNumber - 1) * pageSize

  return groq`
  *[ _type == "article"][0] { 
    "articles": *[ _type == "article" && [title, content, excerpt] match [$query]] { 
      ${articleFields}
    }[${offset}...${offset + pageSize}],
        
    "total": count(*[_type == "article" && [title, content, excerpt] match [$query]])
  }
`
}

export const getSidebarSectionArticlesQuery = groq`
*[ _type == "sidebarSectionArticle"][0] { 
  "sectionOne": SectionOne.article[]-> {
    ${articleFields}
  },
  "sectionTwo": SectionTwo.article[]-> {
    ${articleFields}
  },
  "sectionThree": SectionThree.category[]-> {
    ${categoryFields}

    "total": count(*[_type == "article" && category._ref == ^._id])
  }
}
`
