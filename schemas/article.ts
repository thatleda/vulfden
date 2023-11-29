export default {
  name: 'article',
  type: 'document',
  title: 'Articles',
  fields: [
    {name: 'banner', type: 'image', title: 'Banner'},
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'slug', type: 'slug', title: 'URL slug'},
    {title: 'Content', name: 'content', type: 'array', of: [{type: 'block'}]},
  ],
}
