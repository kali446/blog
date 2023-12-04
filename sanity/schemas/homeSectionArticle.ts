export default {
  name: 'homeSectionArticle',
  type: 'document',
  title: 'Home Section Article',
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
          validation: (Rule: any) =>
            Rule.required().min(4).max(4).error('Must be 4 articles added in this section!'),
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
          validation: (Rule: any) => [
            Rule.required().min(3).error('Must be 3 articles added in this section!'),
            Rule.max(3).error('Must be 3 articles added in this section!'),
          ],
        },
      ],
    },

    {
      name: 'SectionThree',
      type: 'object',
      fields: [
        {
          title: 'Article',
          name: 'article',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'article'}]}],
          validation: (Rule: any) => [
            Rule.required().min(3).error('Must be 3 articles added in this section!'),
            Rule.max(3).error('Must be 3 articles added in this section!'),
          ],
        },
      ],
    },

    {
      name: 'SectionFour',
      type: 'object',
      fields: [
        {
          title: 'Article',
          name: 'article',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'article'}]}],
          validation: (Rule: any) => [
            Rule.required().min(3).error('At least 3 articles required in this section!'),
            Rule.max(3).error('You reached the maximum limit!'),
          ],
        },
      ],
    },
  ],
}
