import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'react-refresh/only-export-components': 'off',
    'node/prefer-global/process': 'off',
    'react-refresh/only-export-compo': 'off',
    'yaml/sort-keys': 'off',
  },
})
