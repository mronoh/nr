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
          placeholder: 'Link to your LinkedIn profile'
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
          placeholder: 'Link to your Instagram profile'
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
          placeholder: 'Link to your Twitter account'
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
          placeholder: 'Link to your Facebook account'
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
