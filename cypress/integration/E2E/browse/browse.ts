import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I navigate to the {string} with {string}', (page, path) => {
  cy.navigateCheckUrl(path, page)
})

Then('shoud have no console errors', () => {
  cy.checkConsoleErrors()
})

Then('should check response code {string} from the page {string}', (responseCode, page) => {
  cy.checkResponseCode(parseInt(responseCode), page)
})

Then('shoud have no broken links', () => {
  cy.checkBrokenLinks()
  cy.percySnapshot()
})
