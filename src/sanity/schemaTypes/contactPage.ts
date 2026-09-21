import { defineType, defineField } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",

  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "infoTitle",
      title: "Information Title",
      type: "string",
    }),

    defineField({
      name: "infoDescription",
      title: "Information Description",
      type: "text",
      rows: 4,
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
      name: "formTitle",
      title: "Form Title",
      type: "string",
      initialValue: "Send Us a Message",
    }),

    defineField({
      name: "formDescription",
      title: "Form Description",
      type: "text",
      rows: 3,
    }),
  ],
});