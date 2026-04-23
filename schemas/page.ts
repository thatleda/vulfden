import type { Rule } from 'sanity'
import { DashboardIcon } from '@sanity/icons'
import block from './block'
import image from './image'

const whitespaceRegex = /\s+/g
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
          input.toLowerCase().replaceAll(whitespaceRegex, '-').slice(0, 200),
        isUnique: async (slug: string, context: any) => {
          const { document, getClient } = context
          const client = getClient({ apiVersion: '2023-01-01' })
          const id = document._id.replace(/^drafts\./, '')
          const query = `!defined(*[
            !(_id in [$draft, $published]) &&
            slug.current == $slug &&
            language == $language
          ][0]._id)`
          return client.fetch<boolean>(query, {
            draft: `drafts.${id}`,
            published: id,
            slug,
            language: document.language ?? 'en',
          })
        },
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
