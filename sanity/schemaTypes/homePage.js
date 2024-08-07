export const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      hidden: true,
      initialValue: 'Home Content Fields',
    },
    {
      name: 'intro',
      title: 'Introduction',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [],
            annotations: [],
          },
        },
      ],
    },
    {
      name: 'members',
      title: 'Members Description',
      type: 'text',
    },
    {
      name: 'contact',
      title: 'Get In Touch Description',
      type: 'text',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Content Fields',
      };
    },
  },
};
