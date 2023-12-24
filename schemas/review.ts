import { HeartIcon } from "@sanity/icons";

export default {
  name: "review",
  type: "document",
  title: "Testimonials",
  icon: HeartIcon,
  fields: [
    { name: "picture", type: "image", title: "Picture" },
    { name: "reviewer", type: "string", title: "Reviewer" },
    { name: "comment", type: "text", title: "Comment" },
  ],
};
