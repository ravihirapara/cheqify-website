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
  ],
  preview: {
    select: {
      title: "title_en",
      subtitle: "author",
    },
  },
});
