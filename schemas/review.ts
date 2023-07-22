export default {
    name: 'review',
    type: 'document',
    title: 'Testimonials',
    fields: [
        {name: 'picture', type: 'image', title: 'Picture'},
        {name: 'reviewer', type: 'string', title: 'Reviewer'},
        {name: 'comment', type: 'text', title: 'Comment'},
    ]
}