// schemas/featuredPost.js

import { defineType } from "sanity";

export default defineType({
  name: 'featuredPost',
  title: 'Featured Post',
  type: 'object',
  fields: [
    {
      name: 'post',
      title: 'Featured Post',
      type: 'reference',
      to: [{ type: 'post' }], // Assuming you have a 'post' type defined
    },
  ],
  preview: {
    select: {
      title: 'post.title',
      media: 'post.mainImage',
    },
  },
});
