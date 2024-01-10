import { defineField, defineType } from 'sanity'
import { BsMicrosoftTeams } from 'react-icons/bs'

export default defineType({
  name: 'team',
  title: 'Team Member',
  type: 'document',
  icon: BsMicrosoftTeams,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
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
