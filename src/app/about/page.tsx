import About from "@/src/components/About/About";
import { getAbout } from "@/src/sanity/queries/about";


export default async function AboutPage() {
  const about = await getAbout();

  return (
    <main>
      <About data={about} />
    </main>
  );
}