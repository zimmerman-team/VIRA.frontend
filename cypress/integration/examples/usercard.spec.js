/// <reference types="Cypress" />
describe('user card', () => {
  it('test user card', () => {
    cy.auth();

    // cy.visit('http://localhost:3000/dashboard');
    // cy.get('[data-cy="usercard-button]').should('exist');
    // cy.get('[data-cy="usercard-button]').click();

    cy.get(
      '[_css="16px"] > :nth-child(3) > [aria-label="account of current user"]'
    ).click();
    cy.get('[data-cy="usercard-container"]').should('exist');
    cy.get('[data-cy="usercard-avatar"]').should('exist');
    cy.get('[data-cy="usercard-username"]').should('exist');
    cy.get('[data-cy="usercard-container"]').should('exist');
    cy.get('[data-cy="usercard-container"]').should('exist');
    cy.get('[data-cy="usercard-signout-button"]').should('exist');
    cy.get('[data-cy="usercard-privacy-button"]').should('exist');
  });
});
