import { client } from "../lib/client";

// All Services
const servicesQuery = `
  *[_type == "service"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    image,
    excerpt,
    publishedAt
  }
`;

export async function getServices() {
  return client.fetch(servicesQuery);
}

// Single Service
const singleServiceQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    image,
    excerpt,
    description,
    features,
    publishedAt
  }
`;

export async function getService(slug: string) {
  return client.fetch(singleServiceQuery, {
    slug,
  });
}

// Related Services
const relatedServicesQuery = `
  *[
    _type == "service" &&
    _id != $currentId
  ] | order(publishedAt desc) {
    _id,
    title,
    slug,
    image,
    excerpt,
    publishedAt
  }
`;

export async function getRelatedServices(currentId: string) {
  return client.fetch(relatedServicesQuery, {
    currentId,
  });
}