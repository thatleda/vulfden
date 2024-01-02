import { Rule } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
import block from "./block";
import image from "./image";

export default {
  name: "article",
  type: "document",
  title: "Articles",
  icon: DocumentTextIcon,
  fields: [
    {
      name: "banner",
      type: "image",
      title: "Banner",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "URL slug",
      options: {
        source: "title",
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [block, image],
    },
    {
      title: "Excerpt",
      name: "excerpt",
      type: "text",
      validation: (Rule: Rule) => Rule.max(300),
    },
  ],
};
