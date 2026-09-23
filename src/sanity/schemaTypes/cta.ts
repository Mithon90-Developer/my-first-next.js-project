import { defineType, defineField } from "sanity";

export const ctaType = defineType({
  name: "cta",
  title: "CTA Section",
  type: "document",

  fields: [
    defineField({
    name: "backgroundImage",
    title: "Background Image",
    type: "image",
        options: {
            hotspot: true,
        },
    }),
    defineField({
      name: "title",
      title: "CTA Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "CTA Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),

    defineField({
      name: "buttonUrl",
      title: "Button URL",
      type: "string",
    }),
  ],
});