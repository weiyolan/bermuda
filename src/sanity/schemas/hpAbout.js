import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";
import { supportedLanguages } from "./supportedLanguages";

export default defineType({
  name: "hpAbout",
  title: "About Section",
  type: "document",
  icon: BlockElementIcon,

  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "localeString",
      // initialValue: () => {
      //   let obj = {};
      //   supportedLanguages.forEach((lang) => {
      //     obj = { ...obj, [lang]: "About Us" };
      //   });
      //   return obj;
      // },
      // options: {collapsible: true, collapsed: true},
      validation: (Rule) => Rule.required(),
    }),
    // We envision a world where photography is not just a means of capturing a moment, but a way of experiencing life's beauty. Through our lens, we want to inspire people to see the world in a new light, appreciate the little things in life, and cherish the
    defineField({
      name: "text",
      title: "Text",
      type: "localeText",
      // initialValue: () => {
      //   let obj = {};
      //   supportedLanguages.forEach(
      //     (lang) =>
      //       (obj = {
      //         ...obj,
      //         [lang]:
      //           "We envision a world where photography is not just a means of capturing a moment, but a way of experiencing life's beauty. Through our lens, we want to inspire people to see the world in a new light, appreciate the little things in life, and cherish the.",
      //       }),
      //   );
      //   return obj;
      // },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "link",
      // initialValue: () => {
      //   let objText = {};
      //   // let objURL = {};
      //   supportedLanguages.forEach(
      //     (lang) => (objText = { ...objText, [lang]: "Learn more" }),
      //   );
      //   return { text: objText, url: "/contact#facts" };
      // },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      // const {date, completion} = selection
      return { title: "About Us" };
    },
  },
});
