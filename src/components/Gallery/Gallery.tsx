import { urlFor } from "@/src/sanity/lib/image";
import styles from "./Gallery.module.css";

type GalleryImage = {
  asset?: {
    _ref: string;
    _type: string;
  };
};

type GalleryItem = {
  image?: GalleryImage;
  title?: string;
  description?: string;
};

type GalleryData = {
  tagline?: string;
  heading?: string;
  description?: string;
  items?: GalleryItem[];
};

type GalleryProps = {
  data?: GalleryData;
};

export default function Gallery({ data }: GalleryProps) {
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

                <div className={styles.imageWrapper}>
                  {item.image && (
                    <img
                      src={urlFor(item.image).width(1000).height(750).url()}
                      alt={item.title || "Gallery image"}
                      className={styles.image}
                    />
                  )}
                </div>

                {(item.title || item.description) && (
                  <div className={styles.content}>
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
                  </div>
                )}

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}