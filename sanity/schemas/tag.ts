import { defineField, defineType } from 'sanity'
import { MdLabel } from 'react-icons/md'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: MdLabel,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: rule => rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Description of the tag',
      validation: Rule =>
        Rule.required()
          .min(50)
          .max(140)
          .warning('Should be under 140 characters')
    })
  ]
})
