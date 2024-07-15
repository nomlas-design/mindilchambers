'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

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
              S.listItem()
                .title('Home Page')
                .child(
                  S.editor()
                    .id('homePage')
                    .schemaType('homePage')
                    .documentId('homePage')
                ),
              S.listItem()
                .title('Global Content')
                .child(
                  S.editor()
                    .id('globalContent')
                    .schemaType('globalContent')
                    .documentId('globalContent')
                ),
              // Add other content pages here
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Blog Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog Posts')),
      // Add other document types here
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['homePage', 'globalContent', 'post'].includes(listItem.getId())
      ),
    ]);

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: customStructure,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
