
const chooseUs2Query = `
  *[_type == "chooseUs2"][0] {
    tagline,
    heading,
    description,
    image,

    feature1Title,
    feature1Description,

    feature2Title,
    feature2Description,

    feature3Title,
    feature3Description,

    buttonText,
    buttonUrl,

    statValue,
    statLabel
  }
`;