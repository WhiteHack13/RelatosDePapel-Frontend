import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    defaultCommandTimeout: 10000,
    video: true,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
