const processQuery = `
{
  "process": *[_type == "process"][0] {
    tagline,
    heading,
    description,
    processes[] {
      step,
      title,
      description
    }
  }
}
`;