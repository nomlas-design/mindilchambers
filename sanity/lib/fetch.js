import { client } from './client';

export async function sanityFetch({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}) {
  return client.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  });
}
