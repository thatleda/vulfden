export default {
  name: 'article',
  type: 'document',
  title: 'Articles',
  fields: [
    {name: 'banner', type: 'image', title: 'Banner'},
    {name: 'title', type: 'text', title: 'Title'},
    {title: 'Content', name: 'content', type: 'array', of: [{type: 'block'}]},
  ],
}
