export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: any) => Rule.required().error('Name is required!'),
    },

    {
      name: 'isHighlighted',
      type: 'boolean',
      title: 'Highlighted Category ?',
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
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
      validation: (Rule: any) =>
        Rule.max(10).error('You can only add maximum of 5 tags in a category!'),
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
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: any) => [
        Rule.required().min(150).error('Description of minimum 150 characters is required'),
        Rule.max(1000).error('Description characters limit is 1000.'),
      ],
    },
  ],
  initialValue: {
    isHighlighted: false,
  },
}
