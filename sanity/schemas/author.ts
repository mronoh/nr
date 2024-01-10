import { defineField, defineType } from 'sanity'
import { ImProfile } from 'react-icons/im'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: ImProfile,
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
      name: 'image',
      title: 'Image',
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
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    }),
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
          initialValue: 'https://www.linkedin.com/in/'
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
          initialValue: 'https://twitter.com/'
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
          initialValue: 'https://facebook.com/'
        }
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
})
