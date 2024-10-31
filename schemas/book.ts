import type { Rule } from 'sanity'
import { BookIcon } from '@sanity/icons'
import block from './block'
import image from './image'

export default {
  name: 'book',
  type: 'document',
  title: 'Book',
  icon: BookIcon,
  fields: [
    {
      name: 'cover',
      type: 'image',
      title: 'Cover',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Available here',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'number',
      type: 'number',
      title: 'How many have I read this year?',
    },
    {
      title: 'Notes',
      name: 'notes',
      type: 'array',
      of: [block, image],
    },
  ],
}
