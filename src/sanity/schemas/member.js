import { defineType, defineField } from "sanity";
// import { supportedLanguages } from "./supportedLanguages";


export default defineType({
  title: "Bermuda Member",
  name: "member",
  type: "document",
  options: { collapsible: true, collapsed: true },
  preview: {
    select: {
      name: 'name',
      func: 'func',
      media: 'image',
    },

    prepare(selection) {
      const { name, func, media } = selection
      return { title: name, subtitle: func?.en || 'loading..', media: media?.image }
    },
  },
  groups: [{name:'image',title:'Image'}],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "func",
      title: "Function",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Quote",
      type: "localeText",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      group:'image',
      type: "altImage",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
