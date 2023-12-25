// schemas/homeCoverPost.js

import { defineType } from "sanity"

export default defineType({
  name: 'homeCoverPost',
  title: 'Home Cover Post',
  type: 'object',
  fields: [
    {
      name: 'post',
      title: 'Cover Post',
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
