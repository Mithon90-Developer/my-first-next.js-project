"use client";

import Link from "next/link";

import { urlFor } from "@/src/sanity/lib/image";
import styles from "./Footer.module.css";

type MenuItem = {
  _key: string;
  label: string;
  url: string;
};

type Logo = {
  asset?: {
    _ref: string;
    _type: string;
  };
};

type FooterData = {
  _id: string;
  title: string;
  logo?: Logo;
  description?: string;
  menuItems?: MenuItem[];
  email?: string;
  phone?: string;
  address?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  copyright?: string;
};

type FooterProps = {
  data: FooterData;
};

export default function Footer({ data }: FooterProps) {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* About */}
        <div className={styles.about}>

          <Link href="/" className={styles.logo}>
            {data?.logo ? (
              <img
                src={urlFor(data.logo).width(200).url()}
                alt={data.title || "Logo"}
                width={160}
                height={50}
              />
            ) : (
              "MyWebsite"
            )}
          </Link>

          {data?.description && (
            <p className={styles.description}>
              {data.description}
            </p>
          )}

        </div>


        {/* Menu */}
        <div className={styles.column}>

          <h3>Quick Links</h3>

          <nav className={styles.links}>
            {data?.menuItems?.map((item) => (
              <Link
                key={item._key}
                href={item.url}
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>


        {/* Contact */}
        <div className={styles.column}>

          <h3>Contact</h3>

          <div className={styles.contact}>

            {data?.email && (
              <a href={`mailto:${data.email}`}>
                {data.email}
              </a>
            )}

            {data?.phone && (
              <a href={`tel:${data.phone}`}>
                {data.phone}
              </a>
            )}

            {data?.address && (
              <p>{data.address}</p>
            )}

          </div>

        </div>


        {/* Social */}
        <div className={styles.column}>

          <h3>Follow Us</h3>

          <div className={styles.social}>

            {data?.facebook && (
              <a
                href={data.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            )}

            {data?.instagram && (
              <a
                href={data.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            )}

            {data?.linkedin && (
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className={styles.bottom}>

        <div className={styles.bottomContainer}>

          <p>
            {data?.copyright ||
              "© 2026 MyWebsite. All rights reserved."}
          </p>

        </div>

      </div>

    </footer>
  );
}