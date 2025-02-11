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
export const MEMBERS_QUERY = groq`*[_type == "member"] | order(
  // First priority: specific _id or Beth Wild
  select(
    _id == "5d304259-dd7b-45aa-b92f-dcdbc2f12cee" => 0, // Beth
    _id == "2096eb98-9757-4b96-80d3-2af6aaa203a8" => 1, // Emrys
    _id == "b2f337eb-8971-452e-ab18-80313643751a" => 2, // Tom
    3
  ),
  // Second priority: non-barristers before barristers
  lower(seniority) == "barrister",
  // Third priority: alphabetical by lastName
  lower(lastName) asc
) {
  _id,
  name,
  firstName,
  lastName,
  seniority,
  status,
  "portraitUrl": portrait.asset->url,
  phone,
  email,
  bio,
  profile,
  "slug": slug.current,
  "articles": articles[]->{
    _id,
    title,
    type,
    description,
    upload {
      uploadType,
      "fileUrl": file.asset->url,
      url
    }
  }
}`;
