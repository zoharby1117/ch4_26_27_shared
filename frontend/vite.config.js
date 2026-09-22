import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //we want it to get from 3001 during dev, not 5173. 5173 is frontend
  server:{
    proxy:{
      "/api":{
        target:"http://localhost:3001",
      }
    }
  }
})
