"use client";

import { FormEvent, useState } from "react";

import styles from "./ContactForm.module.css";

type ContactFormProps = {
  title?: string;
  description?: string;
};

export default function ContactForm({
  title,
  description,
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    const form = event.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus(result.message);

        form.reset();
      } else {
        setStatus(result.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.formWrapper}>

      <div className={styles.heading}>

        <h2>
          {title || "Send Us a Message"}
        </h2>

        {description && (
          <p>{description}</p>
        )}

      </div>


      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >

        <div className={styles.row}>

          <div className={styles.field}>
            <label htmlFor="name">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>


          <div className={styles.field}>
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

        </div>


        <div className={styles.field}>

          <label htmlFor="subject">
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="How can we help?"
            required
          />

        </div>


        <div className={styles.field}>

          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Write your message..."
            required
          />

        </div>


        <button
          type="submit"
          className={styles.button}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>


        {status && (
          <p className={styles.status}>
            {status}
          </p>
        )}

      </form>

    </div>
  );
}