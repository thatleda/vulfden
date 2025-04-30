import { visionTool } from '@sanity/vision'
import { theme } from 'https://themer.sanity.build/api/hues?preset=verdant'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { media } from 'sanity-plugin-media'
import { nyanBannerPlugin } from 'sanity-plugin-nyan-banner'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'vulfden',
  title: 'Vulfden Studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: process.env.SANITY_STUDIO_DATASET ?? '',

  plugins: [
    structureTool(),
    media(),
    visionTool(),
    nyanBannerPlugin(),
  ],

  schema: {
    types: schemaTypes,
  },

  theme,
})
