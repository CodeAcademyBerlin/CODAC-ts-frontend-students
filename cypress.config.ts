import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    pageLoadTimeout: 100000,
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
