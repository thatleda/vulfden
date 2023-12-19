import { Rule } from 'sanity'
import block from './block'
import image from './image'

export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'banner',
      type: 'image',
      title: 'Banner',
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alternative text',
        },
      ],
    },
    {name: 'title', type: 'string', title: 'Title', validation: (Rule: Rule) => Rule.required()},
    {
      name: 'slug',
      type: 'slug',
      title: 'URL slug',
      options: {
        source: 'title',
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [block, image],
    },
  ],
}
