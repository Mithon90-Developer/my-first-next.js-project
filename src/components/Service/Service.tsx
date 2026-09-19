import Link from "next/link";
import { urlFor } from "@/src/sanity/lib/image";
import styles from "./Service.module.css";

type ServiceItem = {
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

type ServiceProps = {
  data: ServiceItem[];
};

export default function Service({ data }: ServiceProps) {
  if (data.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.tagline}>
            OUR SERVICES
          </span>

          <h1 className={styles.heading}>
            What We Do
          </h1>
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
                      .width(1000)
                      .height(700)
                      .url()}
                    alt={
                      service.title || "Service image"
                    }
                    className={styles.image}
                  />
                </div>
              )}

              <div className={styles.content}>

                <h2 className={styles.title}>
                  {service.title || "Untitled Service"}
                </h2>

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