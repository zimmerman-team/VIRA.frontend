/// <reference types="Cypress" />
describe('dashboard page', () => {
  it('test dashboard page', () => {
    // perform
    cy.auth();

    // goto page
    cy.visit('/dashboard');

    cy.findByTestId('stat-item-0').should('exist');
    cy.findByTestId('stat-item-1').should('exist');
    cy.findByTestId('stat-item-2').should('exist');

    cy.viztabs();

    cy.listTabs();
  });
});
