import styles from "./Features.module.css";

type FeatureItem = {
  icon?: string;
  title?: string;
  description?: string;
};

type FeaturesData = {
  tagline?: string;
  heading?: string;
  description?: string;
  items?: FeatureItem[];
};

type FeaturesProps = {
  data?: FeaturesData;
};

export default function Features({ data }: FeaturesProps) {
  if (!data) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          {data.tagline && (
            <span className={styles.tagline}>
              <span className={styles.line}></span>
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
        </div>

        {data.items && data.items.length > 0 && (
          <div className={styles.grid}>
            {data.items.map((item, index) => (
              <div className={styles.card} key={index}>

                {item.icon && (
                  <div className={styles.icon}>
                    {item.icon}
                  </div>
                )}

                {item.title && (
                  <h3 className={styles.title}>
                    {item.title}
                  </h3>
                )}

                {item.description && (
                  <p className={styles.cardDescription}>
                    {item.description}
                  </p>
                )}

                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}