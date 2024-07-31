import { draftMode } from 'next/headers';

import { client } from './client';
import { token } from './token';

export async function sanityFetch({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}) {
  return client.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  });
}
