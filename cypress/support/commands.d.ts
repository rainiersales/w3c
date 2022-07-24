declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to check if there is no console errors
     * @example cy.checkConsoleErrors()
     */
    checkConsoleErrors(): void

    /**
     * Custom command to check response code
     * @example cy.checkResponseCode()
     */
    checkResponseCode(responseCode: number, page: string): void

    /**
    * Custom command to check broken links
    * @example cy.checkBrokenLinks()
    */
    checkBrokenLinks(): void

    /**
    * Custom command to navigate to a page and check the url result
    * @example cy.navigateCheckUrl()
    */
    navigateCheckUrl(path: string, page: string): void

  }
}
