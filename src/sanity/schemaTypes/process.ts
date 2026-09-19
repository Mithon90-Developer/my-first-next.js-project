import { defineField, defineType } from "sanity";

export const processType = defineType({
  name: "process",
  title: "Process",
  type: "document",

  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: 'Short section label. Example: "OUR PROCESS"',
      initialValue: "OUR PROCESS",
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main section heading. Around 5–10 words.",
      initialValue: "A Simple Process That Gets Results",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Short section description. Around 1–2 sentences.",
      initialValue:
        "We follow a clear and simple process to turn your ideas into successful results.",
    }),

    defineField({
      name: "processes",
      title: "Process Steps",
      type: "array",

      description:
        "Add as many process steps as you need. You can also reorder them.",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "step",
              title: "Step Number",
              type: "string",
              description: 'Example: "01", "02", "03"',
              initialValue: "01",
            }),

            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description:
                "Short process title. Around 2–5 words.",
              initialValue: "Discovery & Planning",
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              description:
                "Explain this process step in 1–2 short sentences.",
              initialValue:
                "We understand your goals, requirements, and project needs before getting started.",
            }),
          ],

          preview: {
            select: {
              title: "title",
              subtitle: "step",
            },
          },
        },
      ],

      initialValue: [
        {
          step: "01",
          title: "Discovery & Planning",
          description:
            "We understand your goals, requirements, and project needs before getting started.",
        },
        {
          step: "02",
          title: "Strategy & Design",
          description:
            "We create a clear strategy and design a solution that fits your goals.",
        },
        {
          step: "03",
          title: "Development",
          description:
            "Our team turns the approved design into a functional and reliable solution.",
        },
        {
          step: "04",
          title: "Launch & Support",
          description:
            "After testing everything carefully, we launch the project and provide ongoing support.",
        },
      ],
    }),
  ],
});