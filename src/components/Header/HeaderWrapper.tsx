import Header from "./Header";

import { client } from "@/src/sanity/lib/client";
import { headerQuery } from "@/src/sanity/queries/header";

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

export default async function HeaderWrapper() {
  const data: HeaderData = await client.fetch(headerQuery);

  return <Header data={data} />;
}
