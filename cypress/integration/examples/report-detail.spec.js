/// <reference types="Cypress" />
describe('report detail page', () => {
  it('test report detail page', () => {
    // authenticate
    cy.auth();
    // goto page
    cy.visit('reports/5e4156aaf7c27f21f4a46986');

    cy.viztabs();

    cy.findByTestId('outcomes-card').should('exist');
    cy.findByTestId('monitor-card').should('exist');
    cy.findByTestId('media-card').should('exist');
    cy.findByTestId('challenges-card').should('exist');
    cy.findByTestId('observations-card').should('exist');
    cy.findByTestId('future-plans-card').should('exist');
    cy.findByTestId('other-comments-card').should('exist');
  });
});
