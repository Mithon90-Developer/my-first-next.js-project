import Link from "next/link";
import { urlFor } from "@/src/sanity/lib/image";
import styles from "./RelatedPosts.module.css";

type RelatedPost = {
  _id: string;

  title?: string;

  slug?: {
    current?: string;
  };

  image?: {
    asset?: {
      _ref: string;
      _type: string;
    };
  };

  excerpt?: string;

  publishedAt?: string;
};

type RelatedPostsProps = {
  data: RelatedPost[];
};

export default function RelatedPosts({
  data,
}: RelatedPostsProps) {
  if (data.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.tagline}>
            KEEP READING
          </span>

          <h2 className={styles.heading}>
            Related Posts
          </h2>
        </div>


        <div className={styles.grid}>

          {data.map((post) => (
            <article
              key={post._id}
              className={styles.card}
            >
              {post.slug?.current && (
                <a href={`/blog/${post.slug.current}`}>
                  {post.image && (
                    <div className={styles.imageWrapper}>
                      <img
                        src={urlFor(post.image)
                          .width(1000)
                          .height(700)
                          .url()}
                        alt={post.title || "Blog image"}
                        className={styles.image}
                      />
                    </div>
                  )}
                </a>
              )}

              
              <div className={styles.content}>

                {post.publishedAt && (
                  <span className={styles.date}>
                    {new Date(
                      post.publishedAt
                    ).toLocaleDateString()}
                  </span>
                )}

                {post.slug?.current && (
                  <h2 className={styles.title}> 
                    <a href={`/blog/${post.slug.current}`}> 
                      {post.title || "Untitled Blog"}
                    </a>
                  </h2>
                )}

                {post.excerpt && (
                  <p className={styles.excerpt}>
                    {post.excerpt}
                  </p>
                )}


                {post.slug?.current && (
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className={styles.link}
                  >
                    Read More →
                  </Link>
                )}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}