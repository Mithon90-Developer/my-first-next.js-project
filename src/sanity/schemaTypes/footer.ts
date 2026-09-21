import { defineType, defineField } from "sanity";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Footer Name",
      type: "string",
      initialValue: "Main Footer",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "menuItems",
      title: "Footer Menu",
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

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),

    defineField({
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    }),

    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),

    defineField({
      name: "copyright",
      title: "Copyright Text",
      type: "string",
      initialValue: "© 2026 MyWebsite. All rights reserved.",
    }),
  ],
});