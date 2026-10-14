import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages serves the site from /<repo>/; other hosts (Vercel, Netlify) use the root.
  base: process.env.BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
});
