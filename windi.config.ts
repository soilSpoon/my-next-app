import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,js,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
})
