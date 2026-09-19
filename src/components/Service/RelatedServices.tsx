import Link from "next/link";
import { urlFor } from "@/src/sanity/lib/image";
import styles from "./RelatedServices.module.css";

type RelatedService = {
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
};

type RelatedServicesProps = {
  data: RelatedService[];
};

export default function RelatedServices({
  data,
}: RelatedServicesProps) {
  if (data.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.tagline}>
            EXPLORE MORE
          </span>

          <h2 className={styles.heading}>
            Related Services
          </h2>
        </div>

        <div className={styles.grid}>
          {data.map((service) => (
            <article
              key={service._id}
              className={styles.card}
            >
              {service.image && (
                <div className={styles.imageWrapper}>
                  <img
                    src={urlFor(service.image)
                      .width(800)
                      .height(550)
                      .url()}
                    alt={
                      service.title || "Service image"
                    }
                    className={styles.image}
                  />
                </div>
              )}

              <div className={styles.content}>

                <h3 className={styles.title}>
                  {service.title || "Untitled Service"}
                </h3>

                {service.excerpt && (
                  <p className={styles.excerpt}>
                    {service.excerpt}
                  </p>
                )}

                {service.slug?.current && (
                  <Link
                    href={`/services/${service.slug.current}`}
                    className={styles.link}
                  >
                    View Service →
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