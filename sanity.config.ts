import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {netlifyTool} from 'sanity-plugin-netlify'

export default defineConfig({
  name: 'vulfden',
  title: 'Vulfden Studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: process.env.SANITY_STUDIO_DATASET ?? '',

  plugins: [
    deskTool(),
    media(),
    netlifyTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
