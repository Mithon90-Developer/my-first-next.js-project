import { client } from "../lib/client";


// ==============================
// All Blogs
// ==============================

const blogQuery = `
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    image,
    excerpt,
    author,
    publishedAt
  }
`;

export async function getBlogs() {
  return client.fetch(blogQuery);
}


// ==============================
// Single Blog
// ==============================

const singleBlogQuery = `
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    image,
    excerpt,
    content,
    author,
    publishedAt
  }
`;

export async function getBlog(slug: string) {
  return client.fetch(singleBlogQuery, {
    slug,
  });
}


// ==============================
// Related Blogs
// ==============================

const relatedBlogQuery = `
  *[
    _type == "blog" &&
    _id != $currentId
  ] | order(publishedAt desc) {
    _id,
    title,
    slug,
    image,
    excerpt,
    author,
    publishedAt
  }
`;

export async function getRelatedBlogs(currentId: string) {
  return client.fetch(relatedBlogQuery, {
    currentId,
  });
}