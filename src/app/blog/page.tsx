import Blog from "@/src/components/Blog/Blog";
import { getBlogs } from "@/src/sanity/queries/blog";


export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main>
      <Blog data={blogs} />
    </main>
  );
}