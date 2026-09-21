import styles from "./ContactInfo.module.css";

type ContactInfoProps = {
  title?: string;
  description?: string;

  email?: string;
  phone?: string;
  address?: string;

  facebook?: string;
  instagram?: string;
  linkedin?: string;
};

export default function ContactInfo({
  title,
  description,
  email,
  phone,
  address,
  facebook,
  instagram,
  linkedin,
}: ContactInfoProps) {
  return (
    <div className={styles.info}>

      <div className={styles.heading}>

        <span>Get In Touch</span>

        <h2>{title}</h2>

        {description && (
          <p>{description}</p>
        )}

      </div>


      <div className={styles.details}>

        {email && (
          <div className={styles.item}>
            <span>Email</span>

            <a href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        )}


        {phone && (
          <div className={styles.item}>
            <span>Phone</span>

            <a href={`tel:${phone}`}>
              {phone}
            </a>
          </div>
        )}


        {address && (
          <div className={styles.item}>
            <span>Address</span>

            <p>{address}</p>
          </div>
        )}

      </div>


      <div className={styles.social}>

        {facebook && (
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        )}

        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        )}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        )}

      </div>

    </div>
  );
}