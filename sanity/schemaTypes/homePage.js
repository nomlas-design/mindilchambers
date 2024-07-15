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
      type: 'text',
    },
    {
      name: 'members',
      title: 'Members Description',
      type: 'text',
    },
    {
      name: 'practices',
      title: 'Areas of Practice Description',
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
