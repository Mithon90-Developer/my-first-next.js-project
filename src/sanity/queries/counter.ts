const counterQuery = `
{

  "counter": *[_type == "counter"][0] {
    tagline,
    heading,
    description,
    counter1Value,
    counter1Label,
    counter2Value,
    counter2Label,
    counter3Value,
    counter3Label,
    counter4Value,
    counter4Label
  }
}
`;