const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: 'qeeygyho',
  dataset: 'production',
  apiVersion: '2024-07-14',
  token:
    'skVEXfr7yD0YnWR3LY9H4o8CfryWkKacDpsMjuCwlRBHYokBUorvV9DqovXOpvJ3b4R72JeELDcW0Lr2EMUuMhmQlHh6ASKPDhtgI9RYm6ZjqDv1fFeFFWJm99bVxtxwydxdprX4NmgKlSEor7nm7TBtj0OGLwl1UdeEVRXgyPjB4k8wXRBg',
  useCdn: false,
});

const documents = [
  {
    _id: 'homePage',
    _type: 'homePage',
    title: 'Welcome to Our Home Page',
  },
  {
    _id: 'globalContent',
    _type: 'globalContent',
    siteTitle: 'Our Amazing Site',
  },
];

async function deleteExistingDocuments() {
  for (const doc of documents) {
    try {
      // Delete the document with the specific _id
      await client.delete(doc._id);
      console.log(`Successfully deleted document: ${doc._id}`);

      // Delete any other documents of the same type
      const result = await client.delete({
        query: `*[_type == "${doc._type}" && _id != "${doc._id}"]`,
      });
      console.log(
        `Deleted ${result.results.length} additional ${doc._type} documents`
      );
    } catch (error) {
      if (error.statusCode === 404) {
        console.log(`Document ${doc._id} not found, skipping deletion.`);
      } else {
        console.error(`Error deleting document ${doc._id}:`, error);
      }
    }
  }
}

async function createSingletons() {
  for (const doc of documents) {
    try {
      await client.createOrReplace(doc);
      console.log(`Successfully created/updated document: ${doc._id}`);
    } catch (error) {
      console.error(`Error creating/updating document ${doc._id}:`, error);
    }
  }
}

async function main() {
  await deleteExistingDocuments();
  await createSingletons();
}

main().catch(console.error);
