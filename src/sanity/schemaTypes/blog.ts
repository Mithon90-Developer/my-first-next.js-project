import { defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Blog Title",
      type: "string",
      initialValue: "Your Blog Title",
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
      title: "Featured Image",
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
      initialValue:
        "Write a short description for your blog post.",
    }),

    defineField({
      name: "content",
      title: "Blog Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Admin",
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
    }),
  ],
});