/// <reference types="Cypress" />
describe('search', () => {
  it('test search', () => {
    // authenticate
    cy.auth();

    cy.findByTestId('search-button').click();
    cy.findByTestId('search-field').type('amsterdam');
    cy.findByTestId('search-result').should('exist');
    cy.wait(5000);
    cy.findByTestId('search-result-item-0').should('exist');
    cy.findByTestId('search-nav-item-1').click();
    cy.findByTestId('search-nav-item-2').click();
    cy.findByTestId('search-nav-item-3').click();
  });
});
