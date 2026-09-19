import { defineField, defineType } from "sanity";

export const featuresType = defineType({
  name: "features",
  title: "Features",
  type: "document",

  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: 'Short section label. Example: "WHY CHOOSE US"',
      initialValue: "WHY CHOOSE US",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main section heading. Around 5–10 words.",
      initialValue: "Everything You Need To Succeed",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Short section description. Around 1–2 sentences.",
      initialValue:
        "We provide reliable solutions designed to make your experience simple and effective.",
    }),

    defineField({
      name: "items",
      title: "Feature Boxes",
      type: "array",

      description:
        "Add as many feature boxes as you need. You can also reorder them.",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description:
                'Use a simple symbol or emoji. Example: "✓", "★", "⚡"',
              initialValue: "✓",
            }),

            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description:
                "Short feature title. Around 2–5 words.",
              initialValue: "Premium Quality",
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              description:
                "Short explanation. Around 1–2 sentences.",
              initialValue:
                "We always focus on delivering high-quality solutions for every project.",
            }),
          ],

          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        },
      ],

      initialValue: [
        {
          icon: "✓",
          title: "Premium Quality",
          description:
            "We always focus on delivering high-quality solutions for every project.",
        },
        {
          icon: "★",
          title: "Expert Team",
          description:
            "Our experienced team works carefully to achieve the best possible results.",
        },
        {
          icon: "⚡",
          title: "Fast & Reliable",
          description:
            "We value your time and make sure every project moves forward efficiently.",
        },
        {
          icon: "◆",
          title: "Customer Focused",
          description:
            "Your goals and satisfaction remain our priority throughout the entire process.",
        },
      ],
    }),
  ],
});