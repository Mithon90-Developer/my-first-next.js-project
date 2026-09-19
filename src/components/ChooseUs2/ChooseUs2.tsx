import Image from "next/image";
import { urlFor } from "@/src/sanity/lib/image";

import styles from "./ChooseUs2.module.css";

type ChooseUs2Data = {
  tagline?: string;
  heading?: string;
  description?: string;

  image?: any;

  feature1Title?: string;
  feature1Description?: string;

  feature2Title?: string;
  feature2Description?: string;

  feature3Title?: string;
  feature3Description?: string;

  buttonText?: string;
  buttonUrl?: string;

  statValue?: string;
  statLabel?: string;
};

type ChooseUs2Props = {
  data: ChooseUs2Data;
};

export default function ChooseUs2({ data }: ChooseUs2Props) {
  if (!data) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.content}>

          {data.tagline && (
            <span className={styles.tagline}>
              {data.tagline}
            </span>
          )}

          {data.heading && (
            <h2 className={styles.heading}>
              {data.heading}
            </h2>
          )}

          {data.description && (
            <p className={styles.description}>
              {data.description}
            </p>
          )}

          <div className={styles.features}>

            {data.feature1Title && (
              <div className={styles.feature}>
                <div className={styles.icon}>✓</div>

                <div>
                  <h3>{data.feature1Title}</h3>
                  <p>{data.feature1Description}</p>
                </div>
              </div>
            )}

            {data.feature2Title && (
              <div className={styles.feature}>
                <div className={styles.icon}>✓</div>

                <div>
                  <h3>{data.feature2Title}</h3>
                  <p>{data.feature2Description}</p>
                </div>
              </div>
            )}

            {data.feature3Title && (
              <div className={styles.feature}>
                <div className={styles.icon}>✓</div>

                <div>
                  <h3>{data.feature3Title}</h3>
                  <p>{data.feature3Description}</p>
                </div>
              </div>
            )}

          </div>

          {data.buttonText && data.buttonUrl && (
            <a
              href={data.buttonUrl}
              className={styles.button}
            >
              {data.buttonText}
            </a>
          )}

        </div>

        <div className={styles.visual}>

          <div className={styles.imageBox}>
            {data.image ? (
              <img
                src={urlFor(data.image).width(800).height(900).url()}
                alt={data.heading || "Choose us"}
                width={800}
                height={900}
                className={styles.image}
              />
            ) : (
              <div className={styles.imagePlaceholder}>
                <span>IMAGE</span>
              </div>
            )}
          </div>

          {(data.statValue || data.statLabel) && (
            <div className={styles.statCard}>
              <strong>{data.statValue}</strong>
              <span>{data.statLabel}</span>
            </div>
          )}

          <div className={styles.circle}>
            <span>✓</span>
          </div>

        </div>

      </div>
    </section>
  );
}