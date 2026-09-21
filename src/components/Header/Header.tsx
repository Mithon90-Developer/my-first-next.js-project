"use client";

import { useState } from "react";
import Link from "next/link";
import { urlFor } from "@/src/sanity/lib/image";
import styles from "./Header.module.css";

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

type HeaderData = {
  _id: string;
  title: string;
  logo?: Logo;
  items: MenuItem[];
};

type HeaderProps = {
  data: HeaderData;
};

export default function Header({ data }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <Link
            href="/"
            className={styles.logo}
            onClick={() => setMenuOpen(false)}
            >
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

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {data?.items?.map((item) => (
            <Link key={item._key} href={item.url}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <Link href="/contact" className={styles.button}>
          Get Started
        </Link>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonActive : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          {data?.items?.map((item) => (
            <Link
              key={item._key}
              href={item.url}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className={styles.mobileButton}
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}