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
  // First: priority members (with boolean true) before non-priority
  !(priority == true),
  // Second: among priority members, sort by priorityOrder ascending
  select(priority == true => priorityOrder, 999999) asc,
  // Third: non-barristers before barristers
  lower(seniority) == "barrister",
  // Fourth: alphabetical by lastName
  lower(lastName) asc
) {
  _id,
  name,
  firstName,
  lastName,
  seniority,
  status,
  priority,
  priorityOrder,
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
