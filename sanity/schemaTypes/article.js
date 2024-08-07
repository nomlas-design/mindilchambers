export const article = {
  name: 'article',
  title: 'Article/Case',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Article', value: 'article' },
          { title: 'Case', value: 'case' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'upload',
      title: 'Upload/Link',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Upload',
          name: 'fileObject',
          fields: [
            {
              name: 'file',
              title: 'File',
              type: 'file',
              options: {
                storeOriginalFilename: true,
              },
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
          ],
        },
        {
          type: 'object',
          title: 'URL',
          name: 'urlObject',
          fields: [
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: false,
                  scheme: ['http', 'https'],
                }),
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
