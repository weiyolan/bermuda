import { defineField, defineType } from 'sanity'
import {BlockElementIcon} from '@sanity/icons'

export default defineType({
  name: 'cpDetails',
  title: 'Contact Details Section',
  type: 'document',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'title', title: 'Section Title', type: 'localeString',
      validation: Rule => Rule.required()
    }),
    // defineField({
    //   name: 'subTitle', title: 'Intro Title', type: 'localeString',
    //   validation: Rule => Rule.required()
    // }),
    defineField({
      name: 'text', title: 'Intro Text', type: 'localeText',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image', title: 'Image', type: 'altImage',
      validation: Rule => Rule.required()
    }),
  ],
  preview: {
  prepare() {
    return {title: 'Contact Details Section'}
  },
},
})