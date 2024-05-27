const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    defaultCommandTimeout: 20000,
    retries: {
      openMode: 1,
      runMode: 2
    },
    video: false,
    viewportHeight: 990,
    viewportWidth: 1440
  }
});
