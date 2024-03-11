import { AddCommentIcon } from "@sanity/icons";
import block from "./block";
import book from "./book";

export default {
  name: "clipping",
  type: "document",
  title: "Clippings",
  icon: AddCommentIcon,
  fields: [
    {
      title: "Quote",
      name: "quote",
      type: "array",
      of: [block],
    },
    { title: "Book", name: "book", type: "reference", to: [book] },
    { tile: "Page", name: "page", type: "number" },
  ],
};
