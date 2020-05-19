/// <reference types="Cypress" />
describe('user card', () => {
  it('test user card', () => {
    // authenticate
    cy.auth();

    // goto page
    cy.visit('/dashboard');

    // check elements & interactions
    cy.findByTestId('usercard-button').click();
    cy.findByTestId('usercard-container').should('exist');
    cy.findByTestId('usercard-avatar').should('exist');
    cy.findByTestId('usercard-username').should('exist');
    cy.findByTestId('usercard-container').should('exist');
    cy.findByTestId('usercard-container').should('exist');
    cy.findByTestId('usercard-signout-button').should('exist');
    cy.findByTestId('usercard-privacy-button').should('exist');

    // cy.get('body').happoScreenshot();
  });
});
