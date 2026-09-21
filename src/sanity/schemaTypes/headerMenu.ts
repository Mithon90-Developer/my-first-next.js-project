import { defineType, defineField } from "sanity";

export const headerMenuType = defineType({
  name: "headerMenu",
  title: "Header Menu",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Menu Name",
      type: "string",
      initialValue: "Main Menu",
    }),
    
    defineField({
    name: "logo",
    title: "Logo",
    type: "image",
    options: {
        hotspot: true,
    },
    }),

    defineField({
      name: "items",
      title: "Menu Items",
      type: "array",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "label",
              title: "Menu Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "url",
              title: "URL",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});