import { defineField, defineType } from "sanity";

export const chooseUs2Type = defineType({
  name: "chooseUs2",
  title: "Choose Us 2",
  type: "document",

  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      description: 'Example: "WHY CHOOSE US"',
      type: "string",
    }),

    defineField({
      name: "heading",
      title: "Main Heading",
      description: 'Example: "We Put Your Needs First"',
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
      name: "feature1Title",
      title: "Feature 1 Title",
      description: 'Example: "Experienced Professionals"',
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
      description: 'Example: "Quality Service"',
      type: "string",
    }),

    defineField({
      name: "feature2Description",
      title: "Feature 2 Description",
      type: "text",
    }),

    defineField({
      name: "feature3Title",
      title: "Feature 3 Title",
      description: 'Example: "Personalized Approach"',
      type: "string",
    }),

    defineField({
      name: "feature3Description",
      title: "Feature 3 Description",
      type: "text",
    }),

    defineField({
      name: "buttonText",
      title: "Button Text",
      description: 'Example: "Learn More"',
      type: "string",
    }),

    defineField({
      name: "buttonUrl",
      title: "Button URL",
      type: "url",
    }),

    defineField({
      name: "statValue",
      title: "Stat Value",
      description: 'Example: "10+"',
      type: "string",
    }),

    defineField({
      name: "statLabel",
      title: "Stat Label",
      description: 'Example: "Years of Experience"',
      type: "string",
    }),
  ],
});