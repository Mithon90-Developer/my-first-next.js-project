import { urlFor } from "@/src/sanity/lib/image";

import styles from "./About.module.css";

type AboutData = {
  tagline?: string;
  heading?: string;
  highlight?: string;
  description?: string;

  image?: any;

  experienceValue?: string;
  experienceLabel?: string;

  feature1Title?: string;
  feature1Description?: string;

  feature2Title?: string;
  feature2Description?: string;

  buttonText?: string;
  buttonUrl?: string;
};

type AboutProps = {
  data?: AboutData;
};

export default function About({ data }: AboutProps) {
  if (!data) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* IMAGE SIDE */}
        <div className={styles.visual}>

          <div className={styles.imageWrapper}>
            {data.image ? (
              <img
                src={urlFor(data.image)
                  .width(1000)
                  .height(1100)
                  .url()}
                alt={data.heading || "About us"}
                className={styles.image}
              />
            ) : (
              <div className={styles.placeholder}>
                <span>ABOUT IMAGE</span>
              </div>
            )}
          </div>

          {/* EXPERIENCE CARD */}
          {(data.experienceValue || data.experienceLabel) && (
            <div className={styles.experienceCard}>
              {data.experienceValue && (
                <strong>{data.experienceValue}</strong>
              )}

              {data.experienceLabel && (
                <span>{data.experienceLabel}</span>
              )}
            </div>
          )}

          <div className={styles.decorativeShape}></div>
        </div>


        {/* CONTENT SIDE */}
        <div className={styles.content}>

          {data.tagline && (
            <span className={styles.tagline}>
              <span></span>
              {data.tagline}
            </span>
          )}

          {data.heading && (
            <h2 className={styles.heading}>
              {data.heading}

              {data.highlight && (
                <>
                  <br />
                  <span>{data.highlight}</span>
                </>
              )}
            </h2>
          )}

          {data.description && (
            <p className={styles.description}>
              {data.description}
            </p>
          )}


          {/* FEATURES */}
          <div className={styles.features}>

            {data.feature1Title && (
              <div className={styles.feature}>
                <div className={styles.icon}>
                  ✓
                </div>

                <div>
                  <h3>{data.feature1Title}</h3>

                  {data.feature1Description && (
                    <p>{data.feature1Description}</p>
                  )}
                </div>
              </div>
            )}

            {data.feature2Title && (
              <div className={styles.feature}>
                <div className={styles.icon}>
                  ✓
                </div>

                <div>
                  <h3>{data.feature2Title}</h3>

                  {data.feature2Description && (
                    <p>{data.feature2Description}</p>
                  )}
                </div>
              </div>
            )}

          </div>


          {/* BUTTON */}
          {data.buttonText && data.buttonUrl && (
            <a
              href={data.buttonUrl}
              className={styles.button}
            >
              {data.buttonText}
              <span>→</span>
            </a>
          )}

        </div>

      </div>
    </section>
  );
}