/// <reference types="Cypress" />
describe('privacy page', () => {
  it.only('test privacy page', () => {
    // authenticate
    cy.auth();
    // goto page
    // cy.visit('/privacy');
    // check elements
    cy.findByTestId('usercard-button').click();
    cy.findByTestId('usercard-privacy-button').click();
    cy.findByTestId('privacy-page-title').should('exist');
    cy.findByTestId('privacy-page-description').should('exist');
    cy.findByTestId('privacy-item-0-title').should('exist');
    cy.findByTestId('privacy-item-0-description').should('exist');

    cy.get('body').happoScreenshot();
  });
});
