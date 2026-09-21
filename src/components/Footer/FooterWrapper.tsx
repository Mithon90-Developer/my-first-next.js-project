import Footer from "./Footer";

import { client } from "@/src/sanity/lib/client";
import { footerQuery } from "@/src/sanity/queries/footer";

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

export default async function FooterWrapper() {
  const data: FooterData = await client.fetch(footerQuery);

  return <Footer data={data} />;
}