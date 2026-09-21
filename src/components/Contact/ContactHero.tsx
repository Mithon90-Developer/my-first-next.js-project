import styles from "./ContactHero.module.css";

type ContactHeroProps = {
  title?: string;
  subtitle?: string;
};

export default function ContactHero({
  title,
  subtitle,
}: ContactHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <span className={styles.label}>
          Contact Us
        </span>

        <h1>{title}</h1>

        {subtitle && (
          <p>{subtitle}</p>
        )}

      </div>
    </section>
  );
}