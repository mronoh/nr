import { defineField, defineType } from 'sanity'
import { FaHandshake } from 'react-icons/fa'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: FaHandshake,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required()
          .min(2)
          .error('A title of min. 2 characters is required'),
        Rule.max(60).warning('Shorter titles are usually better')
      ]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 80
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Description of the service',
      validation: Rule =>
        Rule.required()
          .min(50)
          .max(140)
          .warning('Should be under 140 characters')
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        }
      ]
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'gallery'
    })
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
})
