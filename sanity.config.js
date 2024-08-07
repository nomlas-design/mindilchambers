'use client';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

const singletonActions = new Set(['update', 'publish']);

const singletonTypes = new Set(['homePage', 'globalContent']);

const customStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Content Pages')
        .child(
          S.list()
            .title('Content Pages')
            .items([
              S.documentListItem()
                .id('homePage')
                .schemaType('homePage')
                .title('Home Page'),
              S.documentListItem()
                .id('globalContent')
                .schemaType('globalContent')
                .title('Global Content'),
              // Add other content pages here
            ])
        ),
      S.divider(),
      S.documentTypeListItem('member').title('Members'),
      S.documentTypeListItem('article').title('Articles'),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['homePage', 'globalContent', 'member', 'article'].includes(
            listItem.getId()
          )
      ),
    ]);

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    ...schema,
    types: schema.types.map((type) => {
      if (singletonTypes.has(type.name)) {
        return {
          ...type,
          __experimental_actions: [...singletonActions],
        };
      }
      return type;
    }),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    structureTool({
      structure: customStructure,
    }),
  ],
});
