import coverageTask from "@cypress/code-coverage/task";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
    setupNodeEvents(on, config) {
      coverageTask(on, config);
      return config;
    },
  },
});
