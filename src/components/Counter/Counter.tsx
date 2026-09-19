import styles from "./Counter.module.css";

type CounterData = {
  tagline?: string;
  heading?: string;
  description?: string;

  counter1Value?: string;
  counter1Label?: string;

  counter2Value?: string;
  counter2Label?: string;

  counter3Value?: string;
  counter3Label?: string;

  counter4Value?: string;
  counter4Label?: string;
};

type CounterProps = {
  data?: CounterData;
};

export default function Counter({ data }: CounterProps) {
  if (!data) return null;

  const counters = [
    {
      value: data.counter1Value,
      label: data.counter1Label,
    },
    {
      value: data.counter2Value,
      label: data.counter2Label,
    },
    {
      value: data.counter3Value,
      label: data.counter3Label,
    },
    {
      value: data.counter4Value,
      label: data.counter4Label,
    },
  ];

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
            <h2 className={styles.heading}>{data.heading}</h2>
          )}

          {data.description && (
            <p className={styles.description}>{data.description}</p>
          )}
        </div>

        <div className={styles.counters}>
          {counters.map(
            (counter, index) =>
              (counter.value || counter.label) && (
                <div className={styles.counter} key={index}>
                  {counter.value && (
                    <strong className={styles.value}>
                      {counter.value}
                    </strong>
                  )}

                  {counter.label && (
                    <span className={styles.label}>
                      {counter.label}
                    </span>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}