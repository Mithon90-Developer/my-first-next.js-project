import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import styles from "@/src/components/Blog/SingleBlog.module.css";
import { urlFor } from "@/src/sanity/lib/image";
import { getBlog, getRelatedBlogs } from "@/src/sanity/queries/blog";
import RelatedPosts from "@/src/components/Blog/RelatedPosts";



type SingleBlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function SingleBlogPage({
  params,
}: SingleBlogPageProps) {
  const { slug } = await params;

  const post = await getBlog(slug);


  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedBlogs(post._id);

  return (
  <main className={styles.page}>
    <article className={styles.container}>

      <header className={styles.header}>

        {post.publishedAt && (
          <span className={styles.date}>
            {new Date(
              post.publishedAt
            ).toLocaleDateString()}
          </span>
        )}

        <h1 className={styles.title}>
          {post.title}
        </h1>

        {post.author && (
          <p className={styles.author}>
            By {post.author}
          </p>
        )}

      </header>


      {post.image && (
        <div className={styles.imageWrapper}>
          <img
            src={urlFor(post.image)
              .width(1400)
              .height(800)
              .url()}
            alt={post.title || "Blog image"}
            className={styles.featuredImage}
          />
        </div>
      )}


      {post.excerpt && (
        <p className={styles.excerpt}>
          {post.excerpt}
        </p>
      )}


      {post.content && (
        <div className={styles.content}>
          <PortableText value={post.content} />
        </div>
      )}

    </article>

     <RelatedPosts data={relatedPosts} />
  </main>
);
}