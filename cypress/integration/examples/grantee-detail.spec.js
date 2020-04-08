/// <reference types="Cypress" />
describe('grantee detail page', () => {
  it('test grantee detail page', () => {
    // authenticate
    cy.auth();
    // goto page
    cy.visit('/grantee/5e42a4cf5f9826c33d3e8801/detail');

    cy.findByTestId('grantee-detail-title').should('exist');
    cy.findByTestId('grantee-detail-description').should('exist');
    cy.findByTestId('grantee-detail-contact').should('exist');
    // cy.findByTestId('').should('exist');
    // cy.findByTestId('').should('exist');

    cy.viztabs();
    cy.listTabs();
  });
});
