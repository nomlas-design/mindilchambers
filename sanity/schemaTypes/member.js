export const member = {
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Display Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seniority',
      title: 'Seniority',
      type: 'string',
      options: {
        list: [
          { title: 'Barrister', value: 'Barrister' },
          { title: 'SC', value: 'SC' },
          { title: 'KC', value: 'KC' },
        ],
      },
      initialValue: 'barrister',
    },
    {
      name: 'status',
      title: 'Member Status',
      type: 'string',
      options: {
        list: [
          { title: 'Permanent Member', value: 'permanent' },
          { title: 'Visiting Member', value: 'visiting' },
        ],
      },
      initialValue: 'permanent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'profile',
      title: 'External Profile Link',
      type: 'url',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading', value: 'h2' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
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
      name: 'articles',
      title: 'Articles/Cases',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'portrait',
    },
  },
};
