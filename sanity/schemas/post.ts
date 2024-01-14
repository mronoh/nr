import { defineField, defineType } from 'sanity'
import { TfiWrite } from 'react-icons/tfi'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: TfiWrite,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required()
          .min(10)
          .error('A title of min. 10 characters is required'),
        Rule.max(80).warning('Shorter titles are usually better')
      ]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
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
      description: 'Description of the post',
      validation: Rule =>
        Rule.required()
          .min(50)
          .max(140)
          .warning('Should be under 140 characters')
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      initialValue: {
        _ref: '7d51a1a8-6b30-4ff7-9cf1-06c7be45f68f'
      }
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'tag' },
          options: {
            filter: ({ document }: { document: { tags: any } }) => {
              const existingTags = (document.tags as any)
                .map((tag: { _ref: any }) => tag._ref)
                .filter(Boolean)
              return {
                filter: '!(_id in $existingTags)',
                params: {
                  existingTags
                }
              }
            }
          }
        }
      ],
      validation: Rule => Rule.unique()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'text',
      rows: 3,
      description:
        "Boost your post's visibility on Google! Enter comma separated keywords that best represent your content. EG: Culture, Odo, Igbo",
      validation: Rule =>
        Rule.required()
          .min(10)
          .max(140)
          .warning('Should be under 140 characters')
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    }
  }
})
