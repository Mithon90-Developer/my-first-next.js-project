import { client } from "../lib/client";

const homeQuery = `
{
  "hero": *[_type == "hero"][0],
  "about": *[_type == "about"][0],
  "chooseUs2": *[_type == "chooseUs2"][0],
  "counter": *[_type == "counter"][0],
  "features": *[_type == "features"][0],
  "process": *[_type == "process"][0],
  "gallery": *[_type == "gallery"][0],
  "blog": *[_type == "blog"][0],
  "service": *[_type == "service"][0],

}
`;

export async function getHomeData() {
  return client.fetch(homeQuery);
}