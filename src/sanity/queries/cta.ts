export const getCTAQuery = `
  *[_type == "cta"][0] {
    _id,
    title,
    description,
    buttonText,
    buttonUrl,
    backgroundImage
  }
`;