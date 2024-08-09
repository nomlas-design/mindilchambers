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
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                  {
                    name: 'openInNewTab',
                    type: 'boolean',
                    title: 'Open in new tab',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: 'upload',
      title: 'Upload/Link',
      type: 'object',
      fields: [
        {
          name: 'uploadType',
          title: 'Upload Type',
          type: 'string',
          options: {
            list: [
              { title: 'None', value: '' },
              { title: 'File Upload', value: 'file' },
              { title: 'URL', value: 'url' },
            ],
          },
        },
        {
          name: 'file',
          title: 'File',
          type: 'file',
          options: {
            storeOriginalFilename: true,
          },
          hidden: ({ parent }) => parent?.uploadType !== 'file',
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              allowRelative: false,
              scheme: ['http', 'https'],
            }).custom((url, context) => {
              if (context.parent?.uploadType === 'url' && !url) {
                return 'URL is required when Upload Type is set to URL';
              }
              return true;
            }),
          hidden: ({ parent }) => parent?.uploadType !== 'url',
        },
      ],
      validation: (Rule) =>
        Rule.custom((fields) => {
          if (fields.uploadType === 'file' && !fields.file) {
            return 'File is required when Upload Type is set to File Upload';
          }
          return true;
        }),
    },
  ],
};
