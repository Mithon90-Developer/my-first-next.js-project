export const footerQuery = `
  *[_type == "footer"][0] {
    _id,
    title,
    logo,
    description,
    menuItems[] {
      _key,
      label,
      url
    },
    email,
    phone,
    address,
    facebook,
    instagram,
    linkedin,
    copyright
  }
`;