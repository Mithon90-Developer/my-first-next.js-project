import { client } from "@/src/sanity/lib/client";
import About from "@/src/components/About/About";
import { getAbout } from "@/src/sanity/queries/about";

import CTA from "@/src/components/CTA/CTA";
import { getCTAQuery } from "@/src/sanity/queries/cta";


export default async function AboutPage() {
  const about = await getAbout();
  const ctaData = await client.fetch(getCTAQuery);

  return (
    <main>
      <About data={about} />
      <CTA data={ctaData} />
    </main>
  );
}