import paths from '../../fixtures/paths.json'

export const checkConsoleErrors = () => {
  cy.window().then((win) => {
    expect(win.console.error).to.have.callCount(0)
    expect(win.console.warn).to.have.callCount(0)
  })
}

export const checkResponseCode = (responseCode: number, page: string) => {
  if (paths.badpage.pageName === page) {
    cy.wait('@' + paths.badpage.pageName).then(({ response }) => {
      expect(response.statusCode).to.eq(responseCode)
    })
  } else if (paths.multimodal.pageName === page) {
    cy.wait('@' + paths.multimodal.pageName).then(({ response }) => {
      expect(response.statusCode).to.eq(responseCode)
    })
  } else if (paths.htmlcss.pageName === page) {
    cy.wait('@' + paths.htmlcss.pageName).then(({ response }) => {
      expect(response.statusCode).to.eq(responseCode)
    })
  } else {
    throw new Error("page not found")
  }
}

export const checkBrokenLinks = () => {
  cy.get("a[href]").each($a => {
    const message = $a.text()
    expect($a, message).to.have.attr("href").not.contain("undefined")
  })
}

export const navigateCheckUrl = (path: string, page: string) => {
  if (paths.badpage.pageName === page) {
    cy.intercept('GET', paths.badpage.pageUrl).as(paths.badpage.pageName)
    cy.visit(paths.badpage.pageUrl, { failOnStatusCode: false })
    cy.url().should('contain', path)
  } else if (paths.multimodal.pageName === page) {
    cy.intercept('GET', paths.multimodal.pageUrl).as(paths.multimodal.pageName)
    cy.visit(paths.multimodal.pageUrl)
    cy.url().should('contain', path)
  } else if (paths.htmlcss.pageName === page) {
    cy.intercept('GET', paths.htmlcss.pageUrl).as(paths.htmlcss.pageName)
    cy.visit(paths.htmlcss.pageUrl)
    cy.url().should('contain', path)
  } else {
    throw new Error("page not found")
  }
}