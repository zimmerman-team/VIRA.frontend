/**
 * Code generated with Fd Cypress Recorder.
 * https://github.com/FDMediagroep/fd-cypress-recorder
 */

/// <reference types="Cypress" />
describe('grantee overview', () => {
  it('test grantee overview', () => {
    cy.auth();

    cy.viewport(1440, 821);
    cy.visit('http://localhost:3000/list/1');
    cy.get('[aria-controls="simple-tabpanel-0"] > :nth-child(1)').should(
      'exist'
    );
    cy.get('[aria-selected="true"] > :nth-child(1)').should('exist');
    cy.get('[aria-controls="simple-tabpanel-2"] > :nth-child(1)').should(
      'exist'
    );
    cy.get('h6').should('exist');
    cy.get('[role="toolbar"] > :nth-child(2)').should('exist');
    cy.get('[aria-sort="ascending"]').should('exist');
    cy.get('thead > tr > :nth-child(2)').should('exist');
    cy.get('thead > tr > :nth-child(3)').should('exist');
    cy.get('thead > tr > :nth-child(4)').should('exist');
    cy.get('thead > tr > :nth-child(5)').should('exist');
    cy.get('thead > tr > :nth-child(6)').should('exist');
  });
});
