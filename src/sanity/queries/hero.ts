const heroQuery = `
{
  "hero": *[_type == "hero"][0] {
    tagline,
    heading,
    highlight,
    description,

    primaryButtonText,
    primaryButtonUrl,

    secondaryButtonText,
    secondaryButtonUrl,

    image,
    imageBadge,

    stat1Value,
    stat1Label,

    stat2Value,
    stat2Label,

    backgroundText
  },
  `;