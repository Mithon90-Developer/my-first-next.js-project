import { client } from "@/src/sanity/lib/client";

import Service from "@/src/components/Service/Service";
import { getServices } from "@/src/sanity/queries/service";

import { getCTAQuery } from "@/src/sanity/queries/cta";
import CTA from "@/src/components/CTA/CTA";

export default async function ServicesPage() {
  const services = await getServices();
  const ctaData = await client.fetch(getCTAQuery);


  return (
    <main>
      <Service data={services} />
      <CTA data={ctaData} />
    </main>
  );
}