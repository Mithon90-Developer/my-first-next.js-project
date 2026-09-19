import { defineField, defineType } from "sanity";

export const counterType = defineType({
  name: "counter",
  title: "Counter",
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
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "counter1Value",
      title: "Counter 1 Value",
      description: 'Example: "250+"',
      type: "string",
    }),

    defineField({
      name: "counter1Label",
      title: "Counter 1 Label",
      description: 'Example: "Projects Completed"',
      type: "string",
    }),

    defineField({
      name: "counter2Value",
      title: "Counter 2 Value",
      description: 'Example: "120+"',
      type: "string",
    }),

    defineField({
      name: "counter2Label",
      title: "Counter 2 Label",
      description: 'Example: "Happy Clients"',
      type: "string",
    }),

    defineField({
      name: "counter3Value",
      title: "Counter 3 Value",
      description: 'Example: "10+"',
      type: "string",
    }),

    defineField({
      name: "counter3Label",
      title: "Counter 3 Label",
      description: 'Example: "Years Experience"',
      type: "string",
    }),

    defineField({
      name: "counter4Value",
      title: "Counter 4 Value",
      description: 'Example: "98%"',
      type: "string",
    }),

    defineField({
      name: "counter4Label",
      title: "Counter 4 Label",
      description: 'Example: "Client Satisfaction"',
      type: "string",
    }),
  ],
});