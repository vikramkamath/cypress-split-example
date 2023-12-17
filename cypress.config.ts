import { defineConfig } from 'cypress'
import cypressSplit from 'cypress-split'

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    // baseUrl, etc
    // supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/spec-*.cy.js',
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
    },
  },
})
