import { defineField, defineType } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "About Us",
  type: "document",

  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),

    defineField({
      name: "highlight",
      title: "Highlighted Text",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "experienceValue",
      title: "Experience Value",
      type: "string",
    }),

    defineField({
      name: "experienceLabel",
      title: "Experience Label",
      type: "string",
    }),

    defineField({
      name: "feature1Title",
      title: "Feature 1 Title",
      type: "string",
    }),

    defineField({
      name: "feature1Description",
      title: "Feature 1 Description",
      type: "text",
    }),

    defineField({
      name: "feature2Title",
      title: "Feature 2 Title",
      type: "string",
    }),

    defineField({
      name: "feature2Description",
      title: "Feature 2 Description",
      type: "text",
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),

    defineField({
      name: "buttonUrl",
      title: "Button URL",
      type: "url",
    }),
  ],
});