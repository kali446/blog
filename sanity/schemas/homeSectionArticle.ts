export default {
  name: 'homeSectionArticle',
  type: 'document',
  title: 'Home Section Article',
  fields: [
    {
      name: 'SectionOne',
      type: 'object',
      description: 'Add latest Articles. Only 4 Articles',
      fields: [
        {
          title: 'Article',
          name: 'article',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'article'}]}],
          validation: (Rule: any) =>
            Rule.required().min(4).max(4).error('Must be 4 articles added in this section!'),
        },
      ],
    },

    {
      name: 'SectionTwo',
      type: 'object',
      description: 'Add Featured Articles. Only 3 Articles',
      fields: [
        {
          title: 'Article',
          name: 'article',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'article'}]}],
          validation: (Rule: any) =>
            Rule.required().min(3).max(3).error('Must be 4 articles added in this section!'),
        },
      ],
    },
  ],
}
