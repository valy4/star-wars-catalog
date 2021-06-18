/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.wait(3000)
    cy.get('[data-cy=btn-load-more]')
      .click()
    cy.wait(3000)
    cy.get('[data-cy=btn-load-more]')
      .click()


  })
  it(' search for new character', () => {
    // 1. type the name of character
    //2.click on search
    cy.wait(3000)
    cy.get('[data-cy=search-bar]')
      .type(`r2-d2`)
    cy.wait(3000)
    cy.get('[data-cy=search-button]')
      .click()


  })




})
