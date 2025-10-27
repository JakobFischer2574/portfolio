import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {nitro} from "nitro/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), nitro()],
})
