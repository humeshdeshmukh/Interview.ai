import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '6d97zd',
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
    },
    // This section specifies the folder where integration tests are stored
    specPattern: "cypress/integration/**/*.cy.{js,ts,jsx,tsx}",
    // Optional: Specifying the folder for screenshots and videos
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    // Optional: Specify the support file
    supportFile: "cypress/support/index.js",
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
