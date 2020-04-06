/// <reference types="Cypress" />
describe('privacy page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/privacy');
    cy.clearCookies();
    cy.reload(true);
  });

  afterEach(() => {
    cy.clearCookies();
  });

  it.only('test privacy page', () => {
    cy.viewport(1440, 821);
    cy.visit('http://localhost:3000/privacy');
    cy.get('[data-cy="privacy-page-title"]').should('exist');
    cy.get('[data-cy="privacy-page-description"]').should('exist');
    cy.get('[data-cy="privacy-item-0-title"]').should('exist');
    cy.get('[data-cy="privacy-item-0-description"]').should('exist');
  });
});
