// schemas/homePage.js

import { defineField, defineType } from "sanity";

export default defineType({
  name: 'showCasePost',
  title: 'Show Case Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    defineField({
      name: 'featuredPosts',
      title: 'Featured Posts',
      type: 'array',
      of: [{ type: 'featuredPost' }],
      validation: (Rule) => Rule.max(3), // Limit the number of featured posts, adjust as needed
    }),
    defineField({
      name: 'homeCoverPost',
      title: 'Home Cover Post',
      type: 'homeCoverPost',
    }),
  ],
});
