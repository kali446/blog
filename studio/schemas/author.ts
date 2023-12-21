export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input: any) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, '-')
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
        validation: (Rule: any) => Rule.required(),
      },
    },

    {
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
      validation: (Rule: any) => [
        Rule.required().min(150).error('Bio of minimum 150 characters is required'),
        Rule.max(1000).error('Bio characters limit is 1000.'),
      ],
    },
    {
      title: 'SocialLinks',
      name: 'sociallinks',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'item',
          fields: [
            {type: 'string', title: 'Name', name: 'name'},
            {type: 'url', title: 'URL', name: 'url'},
          ],
        },
      ],
      validation: (Rule: any) => [
        Rule.max(8).error('You can only add upto 8 social profile of yours!'),
      ],
    },
  ],
}
