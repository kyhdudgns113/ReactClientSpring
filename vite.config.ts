import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

import {CLIENT_PORT} from './src/base/secret'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: CLIENT_PORT,
  },
})
