import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  base: '/',

  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client')
    }
  },

  root: '.',

  publicDir: 'public',

  server: {
    port: 3000
  }
})