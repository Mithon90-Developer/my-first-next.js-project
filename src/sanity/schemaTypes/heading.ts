import { defineField, defineType } from "sanity";

export const headingType = defineType({
  name: "heading",
  title: "Heading",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Heading",
      type: "string",
    }),
  ],
});