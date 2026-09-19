import styles from "./Process.module.css";

type ProcessItem = {
  step?: string;
  title?: string;
  description?: string;
};

type ProcessData = {
  tagline?: string;
  heading?: string;
  description?: string;
  processes?: ProcessItem[];
};

type ProcessProps = {
  data?: ProcessData;
};

export default function Process({ data }: ProcessProps) {
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

        {data.processes && data.processes.length > 0 && (
          <div className={styles.grid}>
            {data.processes.map((item, index) => (
              <div className={styles.card} key={index}>

                {item.step && (
                  <span className={styles.step}>
                    {item.step}
                  </span>
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

                <span className={styles.arrow}>↗</span>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}