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
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: any) => [
        Rule.required().min(150).error('Description of minimum 150 characters is required'),
        Rule.max(500).error('Description characters limit is 500.'),
      ],
    },
  ],
}
