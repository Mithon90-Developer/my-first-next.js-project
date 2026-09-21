import { client } from "@/src/sanity/lib/client";
import { contactPageQuery } from "@/src/sanity/queries/contact";

import ContactHero from "@/src/components/Contact/ContactHero";
import ContactInfo from "@/src/components/Contact/ContactInfo";
import ContactForm from "@/src/components/Contact/ContactForm";

type ContactData = {
  heroTitle?: string;
  heroSubtitle?: string;

  infoTitle?: string;
  infoDescription?: string;

  email?: string;
  phone?: string;
  address?: string;

  facebook?: string;
  instagram?: string;
  linkedin?: string;

  formTitle?: string;
  formDescription?: string;
};

export default async function ContactPage() {

  const data: ContactData = await client.fetch(
    contactPageQuery
  );

  return (
    <main>

      <ContactHero
        title={data?.heroTitle}
        subtitle={data?.heroSubtitle}
      />


      <section
        style={{
          padding: "100px 24px",
          background: "#ffffff",
        }}
      >

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",

            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >

          <ContactInfo
            title={data?.infoTitle}
            description={data?.infoDescription}
            email={data?.email}
            phone={data?.phone}
            address={data?.address}
            facebook={data?.facebook}
            instagram={data?.instagram}
            linkedin={data?.linkedin}
          />


          <ContactForm
            title={data?.formTitle}
            description={data?.formDescription}
          />

        </div>

      </section>

    </main>
  );
}