import type { Rule } from 'sanity'
import { DashboardIcon } from '@sanity/icons/Dashboard'
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
        isUnique: () => true,
      },
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [block, image],
    },
    {
      title: 'Story Beats',
      name: 'beats',
      type: 'array',
      description:
        'Used on the "adventure" page only: each beat is one screen of the choose-your-own-adventure bio, revealed one at a time via "What happened next?"',
      of: [
        {
          type: 'object',
          name: 'beat',
          title: 'Beat',
          fields: [
            {
              title: 'Content',
              name: 'content',
              type: 'array',
              of: [block],
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { content: 'content' },
            prepare({ content }: { content?: { children?: { text?: string }[] }[] }) {
              const text = content?.[0]?.children?.map(c => c.text).join('') ?? ''
              return { title: text.slice(0, 70) || 'Beat' }
            },
          },
        },
      ],
      hidden: ({ document }: { document?: { slug?: { current?: string } } }) =>
        document?.slug?.current !== 'adventure',
    },
    {
      title: 'Language',
      name: 'language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'German', value: 'de' },
        ],
      },
    },
  ],
}
