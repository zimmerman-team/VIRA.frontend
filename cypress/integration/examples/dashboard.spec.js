/// <reference types="Cypress" />
describe('dashboard page', () => {
  it('test dashboard page', () => {
    // perform
    cy.auth();

    // goto page
    cy.visit('/dashboard');

    cy.findByTestId('Projects').should('exist');
    cy.findByTestId('Grantees').should('exist');

    cy.findByTestId('viz-tabs-title').should('exist');
    // check tabs
    cy.findByTestId('prio-tab').should('exist');
    cy.findByTestId('sdg-tab').should('exist');
    cy.findByTestId('map-tab').should('exist');
    // check panels
    cy.findByTestId('prio-panel').should('exist');
    cy.findByTestId('sdg-panel').should('exist');
    cy.findByTestId('map-panel').should('exist');
    // check lists
    cy.findByTestId('TableModule').should('exist');
  });
});
