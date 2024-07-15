import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const INTRO_QUERY = groq`*[_type == "homePage"][0]{
  intro
}`;
