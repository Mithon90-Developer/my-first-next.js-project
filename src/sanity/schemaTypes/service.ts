import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Service Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "description",
      title: "Service Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),

    defineField({
      name: "features",
      title: "Service Features",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
    }),
  ],
});