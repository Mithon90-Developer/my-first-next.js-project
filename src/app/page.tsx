import ChooseUs2 from "../components/ChooseUs2/ChooseUs2";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Counter from "../components/Counter/Counter";
import Features from "../components/Features/Features";
import Process from "../components/Process/Process";
import Gallery from "../components/Gallery/Gallery";
import Service from "../components/Service/Service";
import { getServices } from "@/src/sanity/queries/service";

import Blog from "../components/Blog/Blog";
import { getBlogs } from "@/src/sanity/queries/blog";



import { getHomeData } from "@/src/sanity/queries/home";

export default async function Home() {
  const data = await getHomeData();
  const blogs = await getBlogs();
  const services = await getServices();

  return (
    <main>
      <Hero data={data.hero} />
      <About data={data.about} />
      <ChooseUs2 data={data.chooseUs2} />
      <Counter data={data.counter} />
      <Features data={data.features} />
      <Process data={data.process} />
      <Gallery data={data.gallery} />
      <Service data={services} />
      <Blog data={blogs} />
    </main>
  );
}