import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

import {fileURLToPath, URL} from 'node:url'

// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/docs/' : './',
  base: '/deploy_try/',
  // base: process.env.GITHUB_PAGES  // この行を追加
  //       ? "/deploy_try/"            // この行を追加
  //       : "./",
  // assetsDir:'./',
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  // define: { 'process.env': {} },
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src'),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    outDir: 'docs',
  }
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
})
