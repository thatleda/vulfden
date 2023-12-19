import { PropsWithChildren } from 'react'

export default {
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
    {
      title: 'Quote',
      value: 'blockquote',
      component: (props: PropsWithChildren) => (
        <q lang="en" style={{quotes: 'auto', fontStyle: 'italic'}}>
          {props.children}
        </q>
      ),
    },
    {
      title: 'Subscript',
      value: 'sub',
      component: (props: PropsWithChildren) => (
        <sub>— {props.children}</sub>
      ),
    },
  ],
}
