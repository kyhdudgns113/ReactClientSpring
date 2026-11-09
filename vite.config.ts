import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

import {CLIENT_PORT} from './src/base/secret'
import {STYLE_VAL_FROM_TS} from './src/base/styles/styleValFromTS'

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: STYLE_VAL_FROM_TS,
      },
    },
  },
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: CLIENT_PORT,
  },
})
