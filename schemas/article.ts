import {Rule} from 'sanity'

export default {
  name: 'article',
  type: 'document',
  title: 'Articles',
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
      of: [
        {
          type: 'block',
          // Only allow these block styles
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Heading 4', value: 'h4'},
            {title: 'Heading 5', value: 'h5'},
            {title: 'Heading 6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'},
            {title: 'Cite', value: 'cite'},
            {title: 'Subscript', value: 'sub'},
          ],
        },
        {
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'alt',
              title: 'Alternative text',
            },
          ],
        },
      ],
    },
  ],
}
