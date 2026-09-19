const aboutQuery = `
  *[_type == "chooseUs2"][0] {
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