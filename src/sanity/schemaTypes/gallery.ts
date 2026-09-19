import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Our Gallery",
  type: "document",

  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: 'Short section label. Example: "OUR GALLERY"',
      initialValue: "OUR GALLERY",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main section heading. Around 5–10 words.",
      initialValue: "Explore Our Latest Work",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Short section description. Around 1–2 sentences.",
      initialValue:
        "Take a look at some of our recent work, projects, and memorable moments.",
    }),

    defineField({
      name: "items",
      title: "Gallery Items",
      type: "array",

      description:
        "Add as many gallery items as you need. You can also reorder them.",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              description:
                "Upload the main image for this gallery item.",
            }),

            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description:
                "Short image title. Around 2–5 words.",
              initialValue: "Creative Project",
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
              description:
                "Short description. Keep it around 1 sentence.",
              initialValue:
                "A brief description of this project or gallery image.",
            }),
          ],

          preview: {
            select: {
              title: "title",
              media: "image",
              subtitle: "description",
            },
          },
        },
      ],

      initialValue: [
        {
          title: "Creative Project",
          description:
            "A brief description of this project or gallery image.",
        },
        {
          title: "Modern Design",
          description:
            "A clean and modern solution created for our client.",
        },
        {
          title: "Recent Work",
          description:
            "One of our latest projects completed with attention to detail.",
        },
        {
          title: "Featured Project",
          description:
            "A showcase of our work, creativity, and expertise.",
        },
      ],
    }),
  ],
});