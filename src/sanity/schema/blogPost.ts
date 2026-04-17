import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title_en", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Cheqify Team",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),

    // English
    defineField({
      name: "title_en",
      title: "Title (English)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description_en",
      title: "Description (English)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body_en",
      title: "Body (English)",
      type: "array",
      of: [{ type: "block" }],
    }),

    // Hindi
    defineField({
      name: "title_hi",
      title: "Title (Hindi)",
      type: "string",
    }),
    defineField({
      name: "description_hi",
      title: "Description (Hindi)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body_hi",
      title: "Body (Hindi)",
      type: "array",
      of: [{ type: "block" }],
    }),

    // Gujarati
    defineField({
      name: "title_gu",
      title: "Title (Gujarati)",
      type: "string",
    }),
    defineField({
      name: "description_gu",
      title: "Description (Gujarati)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body_gu",
      title: "Body (Gujarati)",
      type: "array",
      of: [{ type: "block" }],
    }),

    // HowTo Schema (optional — fill for step-by-step guide posts)
    defineField({
      name: "isHowTo",
      title: "Is this a How-To guide?",
      type: "boolean",
      initialValue: false,
      description: "Enable to add step-by-step instructions for Google HowTo rich snippets.",
    }),
    defineField({
      name: "howToSteps",
      title: "How-To Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Step Name", type: "string" }),
            defineField({ name: "text", title: "Step Description", type: "text", rows: 2 }),
          ],
          preview: {
            select: { title: "name", subtitle: "text" },
          },
        },
      ],
      hidden: ({ parent }) => !parent?.isHowTo,
    }),

    // FAQ Schema (optional — fill for posts targeting "People Also Ask")
    defineField({
      name: "hasFaq",
      title: "Has FAQ section?",
      type: "boolean",
      initialValue: false,
      description: "Enable to add FAQ questions for Google 'People Also Ask' rich snippets.",
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Questions & Answers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 3 }),
          ],
          preview: {
            select: { title: "question", subtitle: "answer" },
          },
        },
      ],
      hidden: ({ parent }) => !parent?.hasFaq,
    }),
  ],
  preview: {
    select: {
      title: "title_en",
      subtitle: "author",
    },
  },
});
