import { urlFor } from "@/src/sanity/lib/image";

import styles from "./Hero.module.css";

type HeroData = {
  tagline?: string;
  heading?: string;
  highlight?: string;
  description?: string;

  primaryButtonText?: string;
  primaryButtonUrl?: string;

  secondaryButtonText?: string;
  secondaryButtonUrl?: string;

  image?: any;
  imageBadge?: string;

  stat1Value?: string;
  stat1Label?: string;

  stat2Value?: string;
  stat2Label?: string;

  backgroundText?: string;
};

type HeroProps = {
  data?: HeroData;
};

export default function Hero({ data }: HeroProps) {
  if (!data) {
    return null;
  }

  return (
    <section className={styles.hero}>
      {/* Background Text */}
      {data.backgroundText && (
        <div className={styles.backgroundText}>
          {data.backgroundText}
        </div>
      )}

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>

          {data.tagline && (
            <span className={styles.tagline}>
              <span className={styles.taglineLine}></span>
              {data.tagline}
            </span>
          )}

          {data.heading && (
            <h1 className={styles.heading}>
              {data.heading}

              {data.highlight && (
                <>
                  <br />
                  <span className={styles.highlight}>
                    {data.highlight}
                  </span>
                </>
              )}
            </h1>
          )}

          {data.description && (
            <p className={styles.description}>
              {data.description}
            </p>
          )}

          {/* BUTTONS */}
          <div className={styles.buttons}>

            {data.primaryButtonText &&
              data.primaryButtonUrl && (
                <a
                  href={data.primaryButtonUrl}
                  className={styles.primaryButton}
                >
                  {data.primaryButtonText}
                  <span>→</span>
                </a>
              )}

            {data.secondaryButtonText &&
              data.secondaryButtonUrl && (
                <a
                  href={data.secondaryButtonUrl}
                  className={styles.secondaryButton}
                >
                  {data.secondaryButtonText}
                </a>
              )}

          </div>

          {/* STATS */}
          {(data.stat1Value || data.stat2Value) && (
            <div className={styles.stats}>

              {data.stat1Value && (
                <div className={styles.stat}>
                  <strong>{data.stat1Value}</strong>

                  {data.stat1Label && (
                    <span>{data.stat1Label}</span>
                  )}
                </div>
              )}

              {data.stat2Value && (
                <div className={styles.stat}>
                  <strong>{data.stat2Value}</strong>

                  {data.stat2Label && (
                    <span>{data.stat2Label}</span>
                  )}
                </div>
              )}

            </div>
          )}

        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.visual}>

          <div className={styles.imageWrapper}>

            {data.image ? (
              <img
                src={urlFor(data.image)
                  .width(1000)
                  .height(1100)
                  .url()}
                alt={data.heading || "Hero image"}
                className={styles.image}
              />
            ) : (
              <div className={styles.imagePlaceholder}>
                <span>HERO IMAGE</span>
              </div>
            )}

          </div>

          {/* IMAGE BADGE */}
          {data.imageBadge && (
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>
                ✓
              </div>

              <div>
                <strong>{data.imageBadge}</strong>
                <span>Professional Service</span>
              </div>
            </div>
          )}

          {/* Decorative Circle */}
          <div className={styles.decorativeCircle}></div>

        </div>
      </div>
    </section>
  );
}