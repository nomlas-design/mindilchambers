export const globalContent = {
  name: 'globalContent',
  title: 'Global Content',
  type: 'document',
  fields: [
    {
      name: 'acknowledgmentOfCountry',
      title: 'Acknowledgment of Country',
      type: 'text',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Content',
      };
    },
  },
};
