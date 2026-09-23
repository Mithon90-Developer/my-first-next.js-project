import { client } from "@/src/sanity/lib/client";
import Blog from "@/src/components/Blog/Blog";
import { getBlogs } from "@/src/sanity/queries/blog";


import CTA from "@/src/components/CTA/CTA";
import { getCTAQuery } from "@/src/sanity/queries/cta";


export default async function BlogPage() {
  const blogs = await getBlogs();
  const ctaData = await client.fetch(getCTAQuery);

  return (
    <main>
      <Blog data={blogs} />
      <CTA data={ctaData} />
    </main>
  );
}