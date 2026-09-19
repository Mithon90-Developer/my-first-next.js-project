import Service from "@/src/components/Service/Service";
import { getServices } from "@/src/sanity/queries/service";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main>
      <Service data={services} />
    </main>
  );
}