export default {
    name: 'article',
    type: 'document',
    title: 'Articles',
    fields: [
        {name: 'banner', type: 'image', title: 'Banner'},
        {name: 'title', type: 'text', title: 'Title'},
        {name: 'content', type: 'block', title: 'Content'},
    ]
}