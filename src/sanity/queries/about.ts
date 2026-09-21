import { client } from "../lib/client";

const aboutQuery = `
  *[_type == "about"][0] {
    tagline,
    heading,
    highlight,
    description,
    image,

    experienceValue,
    experienceLabel,

    feature1Title,
    feature1Description,

    feature2Title,
    feature2Description,

    buttonText,
    buttonUrl
  }
`;

export async function getAbout() {
  return client.fetch(aboutQuery);
}
