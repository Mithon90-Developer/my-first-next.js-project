import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero",
  type: "document",

  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),

    defineField({
      name: "heading",
      title: "Main Heading",
      type: "string",
    }),

    defineField({
      name: "highlight",
      title: "Highlighted Text",
      description: "This text will have a different style.",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
    }),

    defineField({
      name: "primaryButtonUrl",
      title: "Primary Button URL",
      type: "url",
    }),

    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
    }),

    defineField({
      name: "secondaryButtonUrl",
      title: "Secondary Button URL",
      type: "url",
    }),

    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "imageBadge",
      title: "Image Badge",
      description: 'Example: "Trusted Service"',
      type: "string",
    }),

    defineField({
      name: "stat1Value",
      title: "Stat 1 Value",
      type: "string",
    }),

    defineField({
      name: "stat1Label",
      title: "Stat 1 Label",
      type: "string",
    }),

    defineField({
      name: "stat2Value",
      title: "Stat 2 Value",
      type: "string",
    }),

    defineField({
      name: "stat2Label",
      title: "Stat 2 Label",
      type: "string",
    }),

    defineField({
      name: "backgroundText",
      title: "Background Text",
      description: 'Example: "EXCELLENCE"',
      type: "string",
    }),
  ],
});