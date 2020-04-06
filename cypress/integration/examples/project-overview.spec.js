/// <reference types="Cypress" />
describe('project overview', () => {
  it('test project overview', () => {
    cy.auth();

    cy.visit('http://localhost:3000/list/0');

    cy.get('h6').should('exist');

    cy.get(
      ':nth-child(2) > [tabindex="0"] > :nth-child(1) > [focusable="false"]'
    ).should('exist');

    // cy.get('MuiTableBody-root-474').length
    cy.get('[aria-sort="ascending"]').should('exist');
    cy.get('thead > tr > :nth-child(2)').should('exist');
    cy.get('thead > tr > :nth-child(3)').should('exist');
    cy.get('thead > tr > :nth-child(4)').should('exist');
    cy.get('thead > tr > :nth-child(5)').should('exist');
  });
});
