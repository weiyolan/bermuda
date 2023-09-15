import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { myStructure } from './sanity.structure';
// import {Love} from './actions'

export default defineConfig({
  name: 'default',
  title: "🏝️ Bermuda Events Studio",
  projectId: 'nj2v8ioh',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure
    }),
    visionTool(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Netlify deploy',
          sites: [
            {
              title: 'bermuda-events.be',
              apiId: '8f42a3e4-8645-4b7b-90f6-90b18e3c4a1e',
              buildHookId: '6502f1fde3184c55a08f76f1',
              name: 'bermuda-events',
            },]
        })],
    }),
  ],
  document:{
    // actions: [Love],
  },
  schema: {
    types: schemaTypes,
  },
})
