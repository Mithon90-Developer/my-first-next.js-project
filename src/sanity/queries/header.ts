export const headerQuery = `
  *[_type == "headerMenu"][0] {
    _id,
    title,
    logo,
    items[] {
      _key,
      label,
      url
    }
  }
`;