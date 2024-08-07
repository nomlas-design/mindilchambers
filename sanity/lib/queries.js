import { groq } from 'next-sanity';

// Home page queries

export const INTRO_QUERY = groq`*[_type == "homePage"][0]{
  intro
}`;

export const NAV_SQUARE_QUERY = groq`*[_type == "homePage"][0]{
  members,
  contact
}`;

// Global content queries

export const GLOBAL_QUERY = `*[_type == "globalContent"][0] {
  acknowledgmentOfCountry,
  address,
  phoneNumber,
  email
}`;

// Members page queries

export const MEMBERS_QUERY = groq`*[_type == "member"] {
  _id,
  name,
  seniority,
  "portraitUrl": portrait.asset->url
}`;
