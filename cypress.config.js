const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/plugin');
module.exports = defineConfig({
  test: {
    baseUrl: "https://www.woolworths.com.au/",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return getCompareSnapshotsPlugin(on, config);
    },
    screenshotsFolder: "cypress/screenshots",
    //videosFolder: "cypress/videos",
    //video: true,
    trashAssetsBeforeRuns: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    env: {
      defaultUser: "test_user",
      defaultPassword: "test_password",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, config);
    },
  },
});
