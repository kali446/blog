export default {
  name: 'sidebarSectionArticle',
  type: 'document',
  title: 'Sidebar Section Article',
  fields: [
    {
      name: 'SectionOne',
      type: 'object',
      fields: [
        {
          title: 'Article',
          name: 'article',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'article'}]}],
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },

    {
      name: 'SectionTwo',
      type: 'object',
      fields: [
        {
          title: 'Article',
          name: 'article',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'article'}]}],
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },

    {
      name: 'SectionThree',
      type: 'object',
      fields: [
        {
          title: 'Category',
          name: 'category',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'category'}]}],
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
  ],
}
