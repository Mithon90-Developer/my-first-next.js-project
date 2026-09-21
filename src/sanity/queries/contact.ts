export const contactPageQuery = `
  *[_type == "contactPage"][0] {
    _id,

    heroTitle,
    heroSubtitle,

    infoTitle,
    infoDescription,

    email,
    phone,
    address,

    facebook,
    instagram,
    linkedin,

    formTitle,
    formDescription
  }
`;