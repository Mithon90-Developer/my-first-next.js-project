import { defineType, defineField } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
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
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "aboutTitle",
      title: "About Title",
      type: "string",
    }),

    defineField({
      name: "aboutDescription",
      title: "About Description",
      type: "text",
      rows: 6,
    }),

    defineField({
      name: "missionTitle",
      title: "Mission Title",
      type: "string",
    }),

    defineField({
      name: "missionDescription",
      title: "Mission Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "visionTitle",
      title: "Vision Title",
      type: "string",
    }),

    defineField({
      name: "visionDescription",
      title: "Vision Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "whyTitle",
      title: "Why Choose Us Title",
      type: "string",
    }),

    defineField({
      name: "whyDescription",
      title: "Why Choose Us Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "ctaTitle",
      title: "CTA Title",
      type: "string",
    }),

    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Get Started",
    }),

    defineField({
      name: "ctaButtonUrl",
      title: "CTA Button URL",
      type: "string",
      initialValue: "/contact",
    }),
  ],
});