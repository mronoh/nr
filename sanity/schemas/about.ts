import { defineField, defineType } from 'sanity'
import { FcAbout } from 'react-icons/fc'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  icon: FcAbout,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
      description: 'An overview of NgwoRocks',
      validation: Rule =>
        Rule.required()
          .min(140)
          .max(280)
          .warning('Should be under 280 characters')
    }),
    defineField({
      name: 'vision',
      title: 'Vision and Values',
      type: 'blockContent',
      description:
        'What impact do you want to make, and what core beliefs drive your decisions?',
      validation: Rule =>
        Rule.required()
          .min(140)
          .max(500)
          .warning('Should be under 500 characters')
    }),
    defineField({
      name: 'history',
      title: 'History of NgwoRocks',
      type: 'blockContent',
      description: 'Tell the story of NgwoRocks',
      validation: Rule =>
        Rule.min(500).warning('Should be above 500 characters')
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
})
