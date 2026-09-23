import Link from "next/link";
import { urlFor } from "@/src/sanity/lib/image";
import styles from "./CTA.module.css";

type CTAData = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;

  backgroundImage?: {
    asset?: {
      _ref: string;
      _type: string;
    };
  };
};

type CTAProps = {
  data: CTAData;
};

export default function CTA({ data }: CTAProps) {
  if (!data) {
    return null;
  }

  const backgroundImage = data.backgroundImage
    ? urlFor(data.backgroundImage).width(2000).url()
    : "";

  return (
    <section
      className={styles.cta}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      <div className={styles.container}>

        {data.title && (
          <h2>{data.title}</h2>
        )}

        {data.description && (
          <p>{data.description}</p>
        )}

        {data.buttonText && data.buttonUrl && (
          <Link
            href={data.buttonUrl}
            className={styles.button}
          >
            {data.buttonText}
          </Link>
        )}

      </div>
    </section>
  );
}