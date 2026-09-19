import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

import { urlFor } from "@/src/sanity/lib/image";
import {
  getService,
  getRelatedServices,
} from "@/src/sanity/queries/service";

import RelatedServices from "@/src/components/Service/RelatedServices";
import styles from "@/src/components/Service/SingleService.module.css";

type SingleServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SingleServicePage({
  params,
}: SingleServicePageProps) {
  const { slug } = await params;

  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = await getRelatedServices(
    service._id
  );

  return (
    <main className={styles.page}>

      <article className={styles.container}>

        <header className={styles.header}>

          <span className={styles.tagline}>
            OUR SERVICE
          </span>

          <h1 className={styles.title}>
            {service.title}
          </h1>

          {service.excerpt && (
            <p className={styles.excerpt}>
              {service.excerpt}
            </p>
          )}

        </header>

        {service.image && (
          <div className={styles.imageWrapper}>
            <img
              src={urlFor(service.image)
                .width(1400)
                .height(800)
                .url()}
              alt={service.title || "Service image"}
              className={styles.featuredImage}
            />
          </div>
        )}

        {service.description && (
          <div className={styles.content}>
            <PortableText value={service.description} />
          </div>
        )}

        {service.features &&
          service.features.length > 0 && (
            <section className={styles.featuresSection}>

              <h2 className={styles.featuresTitle}>
                What We Offer
              </h2>

              <ul className={styles.features}>
                {service.features.map(
                  (feature: string, index: number) => (
                    <li key={index}>
                      {feature}
                    </li>
                  )
                )}
              </ul>

            </section>
          )}

      </article>

      <RelatedServices data={relatedServices} />

    </main>
  );
}