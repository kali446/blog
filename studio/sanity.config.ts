import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {markdownSchema} from 'sanity-plugin-markdown'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'manzil-blog',
  projectId: 'jg0vxk9b',
  dataset: 'development',
  plugins: [deskTool(), visionTool(), markdownSchema()],
  schema: {
    types: schemaTypes,
  },
})
