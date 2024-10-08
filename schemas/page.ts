import { DashboardIcon } from '@sanity/icons'
import type { Rule } from 'sanity'
import block from './block'
import image from './image'

export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  icon: DashboardIcon,
  fields: [
    {
      name: 'banner',
      type: 'image',
      title: 'Banner',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL slug',
      options: {
        source: 'title',
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
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
