import { Rule } from "sanity";
import { BookIcon } from "@sanity/icons";

export default {
  name: "book",
  title: "Books",
  icon: BookIcon,
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "author",
      type: "string",
      title: "Author",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "isbn",
      type: "string",
      title: "ISBN",
    },
    {
      name: "file",
      type: "file",
    },
    {
      name: "cover",
      type: "image",
    },
    {
      name: "clippings",
      title: "Clippings",
      type: "array",
      of: [{ type: "reference", to: [{ type: "clipping" }] }],
    },
  ],
};
