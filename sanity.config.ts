import { visionTool } from "@sanity/vision"
import { defineConfig } from 'sanity'
import { media } from 'sanity-plugin-media'
import { netlifyTool } from 'sanity-plugin-netlify'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'vulfden',
  title: 'Vulfden Studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: process.env.SANITY_STUDIO_DATASET ?? '',

  plugins: [
    visionTool(),
    structureTool(),
    media(),
    netlifyTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
