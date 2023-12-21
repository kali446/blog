import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'date',
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },

    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      validation: (Rule: any) => [
        Rule.required().min(150).error('Excerpt of minimum 150 characters is required'),
        Rule.max(500).error('Excerpt characters limit is 500.'),
      ],
    },

    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },

    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
    },

    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
      validation: (Rule: any) =>
        Rule.max(5).error('You can only add maximum of 5 tags in a article!'),
    },

    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule: any) => Rule.required().error('Article must be linked to a author'),
    },

    defineField({
      title: 'Content',
      name: 'content',
      type: 'markdown',
      description: 'MDX content for your Article.',
    }),
  ],
})
