import { groq } from "next-sanity";

export interface Tag {
  name: string;
}

export interface Author {
  name: string;
  slug: string;
  avatar: any;
  bio: string;
  sociallinks: [
    {
      name: string;
      url: string;
    },
  ];
}

export interface Category {
  slug: string;
  name: string;
  description?: string;
  thumbnail?: any;
  total?: number;
  isHighlighted?: boolean;
}

export interface Article {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  publishedAt: Date;
  category: Category;
  tags: Tag[];
  excerpt: string;
  thumbnail: any;
  author: Author;
  numberOfCharacters: number;
  estimatedWordCount: number;
  estimatedReadingTime: number;
  content?: any;
}

const articleFields = groq`
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
  "numberOfCharacters": length(content),
  "estimatedWordCount": round(length(content) / 5),
  "estimatedReadingTime": round(length(content) / 5 / 180 )
`;

const articleFieldsShort = groq`
  _createdAt,
  title,
  publishedAt,
  excerpt,
  thumbnail,
  "slug": slug.current,
  "tags": tag->{name},
  "category": category->{
    name, 
    "slug": slug.current
  },
  "author": author->{ 
    name, 
    avatar, 
    sociallinks,
    "slug": slug.current,
  },
  "numberOfCharacters": length(content),
  "estimatedWordCount": round(length(content) / 5),
  "estimatedReadingTime": round(length(content) / 5 / 180 )
`;

const categoryFields = groq`
  _id,
  name,
  description,
  thumbnail,
  isHighlighted,
  "slug": slug.current,
`;

const authorFields = groq`
  name, 
  avatar, 
  bio, 
  sociallinks,
  "slug": slug.current,
`;

export const getAllArticlesQuery = (
  pageNumber: number,
  pageSize: number,
  fields: "SHORT" | "LONG",
) => {
  const offset = (pageNumber - 1) * pageSize;

  return groq`
  *[ _type == "article"][0] { 
    "articles": *[_type=="article"] {
      ${fields === "LONG" ? articleFields : articleFieldsShort}
    }[${offset}...${offset + pageSize}],
    "total": count(*[_type == "article"])
}
`;
};

export const getAllCategoriesQuery = groq`
*[_type == "category"] | order(date desc, _updatedAt desc) {
  ${categoryFields}
}`;

export const getCategoryQuery = groq`
*[_type == "category" && slug.current == $slug][0] {
  ${categoryFields}
}`;

export const getAllAuthorsQuery = groq`
*[_type == "author"] | order(date desc, _updatedAt desc) {
  ${authorFields}
}`;

export const getAuthorQuery = groq`
*[_type == "author" && slug.current == $slug][0] {
  ${authorFields}
}`;

export const getArticleBySlugQuery = groq`
*[_type == "article" && slug.current == $slug][0] {
  ${articleFields}
}
`;

export const getPrevNextArticleQuery = groq`
*[_type == "article" && slug.current == $slug][0] {
  "prev": *[_type == "article" && ^._createdAt > _createdAt] | order(publishedAt asc)[0] {
    ${articleFields}
  },
  
  "next": *[_type == "article" && ^._createdAt < _createdAt] | order(publishedAt asc)[0] {
    ${articleFields}
  }
}
`;

export const getArticlesByCategoryQuery = (
  pageNumber: number,
  pageSize: number,
) => {
  const offset = (pageNumber - 1) * pageSize;

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
`;
};

export const getArticlesByAuthorQuery = (
  pageNumber: number,
  pageSize: number,
) => {
  const offset = (pageNumber - 1) * pageSize;

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
`;
};

export const getHomeSectionArticlesQuery = groq`
*[ _type == "homeSectionArticle"][0] { 
  "sectionOne": SectionOne.article[]-> {
    ${articleFields}
  },
  "sectionTwo": SectionTwo.article[]-> {
    ${articleFields}
  }
}
`;

export const getSearchedArticlesQuery = (
  pageNumber: number,
  pageSize: number,
) => {
  const offset = (pageNumber - 1) * pageSize;

  return groq`
  *[ _type == "article"][0] { 
    "articles": *[ _type == "article" && [title, content, excerpt] match [$query]] { 
      ${articleFields}
    }[${offset}...${offset + pageSize}],
        
    "total": count(*[_type == "article" && [title, content, excerpt] match [$query]])
  }
`;
};

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
`;

// SITEMAP

const articleFieldsForSitemap = groq`
  _updatedAt,
  "slug": slug.current
`;

const categoryFieldsForSitemap = groq`
  _updatedAt,
  "slug": slug.current
`;

const authorFieldsForSitemap = groq`
  _updatedAt,
  "slug": slug.current
`;

export const getAllArticlesForSitemapQuery = groq`
*[_type == "article"] | order(date desc, _updatedAt desc) {
  ${articleFieldsForSitemap}
}`;

export const getAllCategoriesForSitemapQuery = groq`
*[_type == "category"] | order(date desc, _updatedAt desc) {
  ${categoryFieldsForSitemap}
}`;

export const getAllAuthorsForSitemapQuery = groq`
*[_type == "author"] | order(date desc, _updatedAt desc) {
  ${authorFieldsForSitemap}
}`;
