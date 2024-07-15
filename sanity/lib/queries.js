import { groq } from 'next-sanity';

// Home page queries

export const INTRO_QUERY = groq`*[_type == "homePage"][0]{
  intro
}`;

export const NAV_SQUARE_QUERY = groq`*[_type == "homePage"][0]{
  members,
  practices
}`;

// Global content queries

export const ACKNOWLEDGEMENT_QUERY = groq`*[_type == "globalContent"][0]{
  acknowledgmentOfCountry
}`;
