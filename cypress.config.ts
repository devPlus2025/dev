import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'jkppbm',
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
