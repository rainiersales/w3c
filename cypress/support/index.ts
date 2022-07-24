import { checkConsoleErrors, checkResponseCode, checkBrokenLinks, navigateCheckUrl} from './commands/components'
import '@percy/cypress';

Cypress.Commands.add('checkConsoleErrors', checkConsoleErrors)
Cypress.Commands.add('checkResponseCode', checkResponseCode)
Cypress.Commands.add('checkBrokenLinks', checkBrokenLinks)
Cypress.Commands.add('navigateCheckUrl', navigateCheckUrl)

Cypress.on('uncaught:exception', (err) => {
  return false
})

Cypress.on('window:before:load', (win) => {
  cy.spy(win.console, 'error');
  cy.spy(win.console, 'warn');
})