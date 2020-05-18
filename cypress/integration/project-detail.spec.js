/// <reference types="Cypress" />
describe('project detail page', () => {
  it('test project detail page', () => {
    // authenticate
    cy.auth();

    // goto page
    // cy.visit('/projects/2017161');

    cy.findByTestId('sidebar-item-1').click();

    cy.wait(5000);
    cy.get('[data-testid=MuiDataTableBodyCell-3-0]')
      .children()
      .click();

    cy.findByTestId('project-title').should('exist');

    // report button
    cy.findByTestId('contained-button').should('exist');

    // viz tabs
    cy.viztabs();

    // outcomes
    // cy.findByTestId('key-outcomes').should('exist');
    // cy.findByTestId('indicator-verification').should('exist');

    // reports table
    cy.findByTestId('reports-table').should('exist');

    cy.get('body').happoScreenshot();
  });
});
